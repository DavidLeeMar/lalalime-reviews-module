import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReviewContent extends Component {
  constructor(props) {
    super(props);

    const { review } = this.props;

    this.state = {
      helpfulYes: review.wasThisReviewHelpfulYes,
      helpfulNo: review.wasThisReviewHelpfulNo,
      clickableLinkForYes: true,
      clickableLinkForNo: true,
      isUserPopupShown: false,
      isReportPopupShown: false,
      isThankYouPopupShown: false
    };

  }

  handleUsernameEnter = (event) => {
    event.preventDefault();
    this.setState(state => ({
      isUserPopupShown: !state.isUserPopupShown
    }));
  }

  handleUsernameLeave = (event) => {
    event.preventDefault();
    this.setState({
      isUserPopupShown: false
    });
  }

  handleReportLinkClick = (event) => {
    event.preventDefault();
    this.setState(state => ({
      isReportPopupShown: !state.isReportPopupShown
    }));
  }

  handleReportButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      isReportPopupShown: false
    });
  }

  handleHelpfulYesClick = (event) => {
    const { review } = this.props;
    const { helpfulYes } = this.state
    event.preventDefault();
    if (helpfulYes === review.wasThisReviewHelpfulYes) {
      this.setState((state, props) => ({
        helpfulYes: props.review.wasThisReviewHelpfulYes + 1,
        clickableLinkForNo: false,
        isThankYouPopupShown: !state.isThankYouPopupShown
      }));
    } if (helpfulYes === review.wasThisReviewHelpfulYes + 1) {
      this.setState({
        helpfulYes: review.wasThisReviewHelpfulYes,
        clickableLinkForNo: true,
        isThankYouPopupShown: false
      });
    }
  }

  handleHelpfulNoClick = (event) => {
    const { review } = this.props;
    const { helpfulNo } = this.state
    event.preventDefault();
    if (helpfulNo === review.wasThisReviewHelpfulNo) {
      this.setState((state, props) => ({
        helpfulNo: props.review.wasThisReviewHelpfulNo + 1,
        clickableLinkForYes: false,
        isThankYouPopupShown: !state.isThankYouPopupShown
      }));
    } if (this.state.helpfulNo === review.wasThisReviewHelpfulNo + 1) {
      this.setState({
        helpfulNo: review.wasThisReviewHelpfulNo,
        clickableLinkForYes: true,
        isThankYouPopupShown: false
      });
    }
  }

  handleHelpfulCloseClick = (event) => {
    event.preventDefault();
    this.setState({
      isThankYouPopupShown: false
    });
  }

  render() {
    const { review } = this.props;
    const { helpfulYes, helpfulNo, clickableLinkForYes, clickableLinkForNo, isUserPopupShown, isReportPopupShown, isThankYouPopupShown } = this.state;

    if (review.ageRange === 'i-keep-my-age-on-the-dl') {
      review.ageRange = 'i keep my age on the d.l.'
    }

    let yesLink;
    let noLink;
    clickableLinkForYes ?
    yesLink =
    <span className="footer-answer">
      <a href="" className="yes-link" title="Yes" onClick={this.handleHelpfulYesClick} >yes &#40; {helpfulYes} &#41;</a>
    </span>
    :
    yesLink =
    <span className="footer-answer">
      <a href="" title="Yes" style={{ pointerEvents: 'none' }} onClick={this.handleHelpfulYesClick}>yes &#40; {helpfulYes} &#41;</a>
    </span>;

    clickableLinkForNo ?
    noLink =
    <span className="footer-answer">
      <a href="" className="no-link" title="No" onClick={this.handleHelpfulNoClick}>no &#40; {helpfulNo} &#41;</a>
    </span>
    :
    noLink =
    <span className="footer-answer">
      <a href="" title="No" style={{ pointerEvents: 'none' }} onClick={this.handleHelpfulNoClick}>no &#40; {helpfulNo} &#41;</a>
    </span>;

    let reportPopup;
    isReportPopupShown ?
    reportPopup =
    <div className="report-popup">
      <span>describe the issue</span>
      <form>
        <div className="report-form">
          <textarea type="text"></textarea>
        </div>
        <div className="report-form-btns">
          <input className="submit-btn" type="submit" value="Submit"
          onClick={this.handleReportButtonClick} />
          <input className="cancel-btn" type="submit" value="Cancel"
          onClick={this.handleReportButtonClick} />
        </div>
      </form>
    </div>
    : reportPopup = '';

    let thankYouPopup;
    isThankYouPopupShown ?
    thankYouPopup =
    <div className="thank-you-popup">
      <span className="popup-text">Thank you! You have successfully submitted feedback for this review.</span>
      <a href="" title="Close" className="popup-close-button" onClick={this.handleHelpfulCloseClick}>&#x2715;</a>
    </div>
    : thankYouPopup = '';

    let userPopup;
    isUserPopupShown ?
      userPopup =
      <div className="user-popup" onMouseLeave={this.handleUsernameLeave}>
        <div className="popup-username">
          <a href="#/" className="username" title={`See ${review.username}'s full profile`}>{review.username}</a>
        </div>
        <div className="popup-active-date">
          Active since: {review.activeSinceDate}
        </div>
        <div className="also-reviewed-text">
          I also reviewed
        </div>
        <div className="first-rating">
          <span><a href="#/" title="Scuba Pullover">Scuba Pullover</a></span>
          <span><img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${review.rating}_0/5/rating.gif`} alt={`${review.rating} out of 5`} title={`${review.rating} out of 5`}/></span>
        </div>
        <div className="rating-container">
          <div className="second-rating">
            <span className="text">&#40;Unknown&#41;</span>
            <span><img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/3_0/5/rating.gif`} alt={`3 out of 5`} title={`3 out of 5`}/></span>
          </div>
        </div>
        <div className="helpfulness-votes">
          <span className="helpfulness-text">Helpfulness Votes</span>
          <span><img src={'https://i.imgur.com/GsRixgl.png'}/></span>
          <span className="helpfulness-number">{review.helpfulnessVotesThumbsUp}</span>
          <span><img src={'https://i.imgur.com/fWCf4UL.png'}/></span>
          <span className="helpfulness-number">{review.helpfulnessVotesThumbsDown}</span>
        </div>
        <div className="full-profile-link">
          <span><a href="#/" title={`See ${review.username}'s full profile`}>See full profile</a></span>
        </div>
      </div>
    : userPopup = '';

    return (
      <div className="reviews-container">
        <div className="review-profile">
          <div className="rating"><img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${review.rating}_0/5/rating.gif`} alt={`${review.rating} out of 5`} title={`${review.rating} out of 5`}/></div>
          <a href="#/" className="username" onMouseEnter={this.handleUsernameEnter}>{review.username}</a>
          <ReactCSSTransitionGroup
            transitionName="popup"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {userPopup}
          </ReactCSSTransitionGroup>
          <div className="user-properties">
            <div className="user-property">
              <span className="lighter">location: </span>
              <span className="bolder">{review.location.toUpperCase()}</span>
            </div>
            <div className="user-property">
              <span className="lighter">athletic type: </span>
              <span className="bolder">{review.athletictype.toUpperCase()}</span>
            </div>
            <div className="user-property">
              <span className="lighter">age: </span>
              <span className="bolder">{review.agerange.toUpperCase()}</span>
            </div>
            <div className="user-property">
              <span className="lighter">body type: </span>
              <span className="bolder">{review.bodytype.toUpperCase()}</span>
            </div>
          </div>
          <div className="profile-property">
            <div className="bolder">what you like</div>
            <div className="lighter">{review.whatyoulike}</div>
          </div>
          <div className="profile-property">
            <div className="bolder">what you don't like</div>
            <div className="lighter">{review.whatyoudidntlike}</div>
          </div>
        </div>
        <div className="review-content">
          <div className="review-date">{review.reviewdate.toUpperCase()}</div>
          <div className="review-title">{review.reviewtitle}</div>
          <div className="review-body">{review.reviewbody}</div>
          <div className="review-footer">
            <span className="footer-question">Was this review helpful to you?</span>
            {yesLink}
            {noLink}
            <span className="footer-report"><a href="" title="Report" onClick={this.handleReportLinkClick}>report as inappropriate</a></span>
            <ReactCSSTransitionGroup
              transitionName="popup"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {reportPopup}
            </ReactCSSTransitionGroup>
          </div>
            <ReactCSSTransitionGroup
              transitionName="popup"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {thankYouPopup}
            </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}