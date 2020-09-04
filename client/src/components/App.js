import React, { Component } from 'react';
import FiltersAndSorts from './FiltersAndSorts';
import Reviews from './Reviews'
import ReviewPageLinks from './ReviewPageLinks';
import axios from 'axios';
import '../../dist/main.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortButtonName: 'choose a sort order',
      reviews: [],
      savedReviews: [],
      filter: '',
      rating: '',
      athletictype: '',
      age: '',
      bodytype: ''
    };

  }

  componentDidMount() {
    this.getReviews(2);
  }

  getReviews = (id) => {
    axios
      .get(`/reviews/sort-by-date/${id}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data.rows
        });
      })
      .catch(err => console.error(err));
  }

  filterReviewsByRating = (rating) => {
    $('.filter-popin').show();
    $('.filtered-rating-disclaimer').show();

    let savedReviews = this.state.reviews;
    let filteredResults = this.state.reviews.filter(review => review.rating === rating)

    this.setState({
      reviews: filteredResults,
      savedReviews: savedReviews,
      filter: 'rating',
      rating: `${rating} star`
    });
  }

  filterReviewsByAthleticType = (athletictype) => {
    $('.filter-popin').show();
    $('.filtered-rating-disclaimer').show();

    let savedReviews = this.state.reviews;
    let filteredResults = this.state.reviews.filter(review => review.athletictype === athletictype);

    this.setState({
        reviews: filteredResults,
        savedReviews: savedReviews,
        filter: 'athletic type',
        athletictype: athletictype
      });
  }

  filterReviewsByAge = (agerange) => {
    $('.filter-popin').show();
    $('.filtered-rating-disclaimer').show();

    let savedReviews = this.state.reviews;
    let filteredResults = this.state.reviews.filter(review => review.agerange === agerange);

    this.setState({
      reviews: filteredResults,
      savedReviews: savedReviews,
      filter: 'age',
      age: agerange
    });
  }

  filterReviewsByBodyType = (bodytype) => {
    $('.filter-popin').show();
    $('.filtered-rating-disclaimer').show();

    let savedReviews = this.state.reviews;
    let filteredResults = this.state.reviews.filter(review => review.bodytype === bodytype);

    this.setState({
      reviews: filteredResults,
      savedReviews: savedReviews,
      filter: 'body type',
      bodyType: bodytype
    });

  }

  sortByFeatured = () => {
    let sortedResults = this.state.reviews.sort((a, b) => (a.featured < b.featured) ? 1 : -1);
    this.setState({
      reviews: sortedResults,
      sortButtonName: 'featured reviews first'
    });
  }



sortByDate = () => {

  let sortableReview = this.state.reviews.map((review) => {
    review.sortdate = convertDate(review.sortablereviewdate);
    return review;
  })

  let sortedResults = sortableReview.sort((b, a) => {
    return a.sortdate > b.sortdate ? 1 : a.sortdate < b.sortdate ? -1 : 0
  });

  this.setState({
   reviews: sortedResults,
   sortButtonName: 'date-newest first'
  });

  function convertDate (date) {
    date = date.slice(4);
    let month = date.slice(0,3);

    if (month === 'Jan') {
      month = '01';
    } else if (month === 'Feb') {
      month = '02';
    } else if (month === 'Mar') {
      month = '03';
    } else if (month === 'Apr') {
      month = '04';
    } else if (month === 'May') {
      month = '05';
    } else if (month === 'Jun') {
      month = '06';
    } else if (month === 'Jul') {
      month = '07';
    } else if (month === 'Aug') {
      month = '08';
    } else if (month === 'Sep') {
      month = '09';
    } else if (month === 'Oct') {
      month = '10';
    } else if (month === 'Nov') {
      month = '11';
    } else if (month === 'Dec') {
      month = '12';
    }

      let day = date.slice(4, 6);
      date = date.slice(7);
      return `${date.slice(0,4)}${month}${day}`;
  }
}

  sortByRatingDescending = () => {
    let sortedResults = this.state.reviews.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
    this.setState({
      reviews: sortedResults,
      sortButtonName: 'rating-high to low'
    });
  }

  sortByRatingAscending = () => {
    let sortedResults = this.state.reviews.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
    this.setState({
      reviews: sortedResults,
      sortButtonName: 'rating-low to high'
    });
  }

  handleRemoveFiltersClick = (event) => {
    event.preventDefault();
    this.setState({
      reviews: this.state.savedReviews
    });
    $('.filter-popin').hide();
    $('.filtered-rating-disclaimer').hide();
  }

  render() {
    let { reviews, sortButtonName, filter, rating, athletictype, age, bodytype } = this.state;
    let sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    let average = Math.round(sum / reviews.length * 10) / 10;
    let averageString = average.toString().split('.').join('_');

    let reviewNumber = reviews.length;

    let filterCriteria;

    if (filter === 'rating') {
      filterCriteria = rating;
    } else if (filter === 'athletic type') {
      filterCriteria = athletictype;
    } else if (filter === 'age') {
      filterCriteria = age;
    } else {
      filterCriteria = bodytype;
    }

    return (
      <div>
        <div className="transition-image-container">
          <img src="https://i.imgur.com/t8kFppE.png" alt="Free shipping, free returns" className="transition-image"/>
        </div>
        <div className="review-header">
          <div className="reviews-title">
            reviews
          </div>
          <div className="review-question">
            How's this gear working for you?
          </div>
          <div className="filtered-rating-disclaimer">
            &#40;based on current filters&#41;
          </div>
          <div className="average-rating">
            <img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${averageString}/5/rating.gif`} alt={`${average} out of 5`} title={`${average} out of 5`}/>
          </div>
          <div>
            <a href="#/" title="Create a review" className="create-review">create a review</a>
          </div>
        </div>
        <div>
          <div>
            <FiltersAndSorts
              reviews={reviews}
              sortButtonName={sortButtonName}
              filterReviewsByRating={this.filterReviewsByRating}
              filterReviewsByAthleticType={this.filterReviewsByAthleticType}
              filterReviewsByAge={this.filterReviewsByAge}
              filterReviewsByBodyType={this.filterReviewsByBodyType}
              sortByFeatured={this.sortByFeatured}
              sortByDate={this.sortByDate}
              sortByRatingDescending={this.sortByRatingDescending}
              sortByRatingAscending={this.sortByRatingAscending}
            />
          </div>
          <div className="filter-popin">
            <div className="show-review-number">
              {`Show me ${reviewNumber} reviews with`}
            </div>
            <div className="filter-and-number" >
              <span className="filter-type">{filter}</span>
              <span>
                <a href=""onClick={this.handleRemoveFiltersClick}>
                  <span className="filter-criteria">{filterCriteria}</span>
                  <span className="filter-number">{`(${reviewNumber})`}</span>
                </a>
              </span>
            </div>
            <div>
              <a href="" onClick={this.handleRemoveFiltersClick}>&#x2715; remove all filters</a>
            </div>
          </div>
          <div className="separator">
          </div>
          <div>
            <div>
              <div className="reviews">
                <Reviews reviews={reviews} />
              </div>
            </div>
          </div>
          <ReviewPageLinks />
        </div>
        <div className="footer-image-container">
          <img src="https://i.imgur.com/DoyLb2O.png" alt="footer image" className="footer-image" />
        </div>
      </div>
    );
  }
}
