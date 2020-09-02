import React, { Component } from 'react';

export default class FiltersAndSorts extends Component {
  constructor(props) {
    super(props);
  }

  handleRatingClick = (event) => {
    event.preventDefault();
    $('#rating-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#rating-dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleAthleticClick = (event) => {
    event.preventDefault();
    $('#athletic-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#athletic-dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleAgeClick = (event) => {
    event.preventDefault();
    $('#age-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#age-dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleBodyClick = (event) => {
    event.preventDefault();
    $('#body-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#body-dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleSortClick = (event) => {
    event.preventDefault();
    $('#sort-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  render() {
    const { reviews } = this.props;

    let oneStarCount = 0;
    let twoStarCount = 0;
    let threeStarCount = 0;
    let fourStarCount = 0;
    let fiveStarCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].rating === 1) {
        oneStarCount++;
      }
      if (reviews[i].rating === 2) {
        twoStarCount++;
      }
      if (reviews[i].rating === 3) {
        threeStarCount++;
      }
      if (reviews[i].rating === 4) {
        fourStarCount++;
      }
      if (reviews[i].rating === 5) {
        fiveStarCount++;
      }
    }

    let yogiCount = 0;
    let runnerCount = 0;
    let dancerCount = 0;
    let cyclistCount = 0;
    let sweatyCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].athletictype === 'yogi') {
        yogiCount++;
      }
      if (reviews[i].athletictype === 'runner') {
        runnerCount++;
      }
      if (reviews[i].athletictype === 'dancer') {
        dancerCount++;
      }
      if (reviews[i].athletictype === 'cyclist') {
        cyclistCount++;
      }
      if (reviews[i].athletictype === 'sweaty-generalist') {
        sweatyCount++;
      }
    }


    let firstAgeCount = 0;
    let secondAgeCount = 0;
    let thirdAgeCount = 0;
    let fourthAgeCount = 0;
    let fifthAgeCount = 0;
    let sixthAgeCount = 0;
    let seventhAgeCount = 0;
    let eighthAgeCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].agerange === 'under-18') {
        firstAgeCount++;
      }
      if (reviews[i].agerange === '18-24') {
        secondAgeCount++;
      }
      if (reviews[i].agerange === '25-34') {
        thirdAgeCount++;
      }
      if (reviews[i].agerange === '35-44') {
        fourthAgeCount++;
      }
      if (reviews[i].agerange === '45-54') {
        fifthAgeCount++;
      }
      if (reviews[i].agerange === '55-65') {
        sixthAgeCount++;
      }
      if (reviews[i].agerange === 'over-65') {
        seventhAgeCount++;
      }
      if (reviews[i].agerange === 'i-keep-my-age-on-the-dl') {
        eighthAgeCount++;
      }
    }

    let athleticCount = 0;
    let curvyCount = 0;
    let leanCount = 0;
    let muscularCount = 0;
    let petiteCount = 0;
    let slimCount = 0;
    let solidCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].bodytype === 'athletic') {
        athleticCount++;
      }
      if (reviews[i].bodytype === 'curvy') {
        curvyCount++;
      }
      if (reviews[i].bodytype === 'lean') {
        leanCount++;
      }
      if (reviews[i].bodytype === 'muscular') {
        muscularCount++;
      }
      if (reviews[i].bodytype === 'petite') {
        petiteCount++;
      }
      if (reviews[i].bodytype === 'slim') {
        slimCount++;
      }
      if (reviews[i].bodytype === 'solid') {
        solidCount++;
      }
    }

    const { filterReviewsByRating, filterReviewsByAthleticType, filterReviewsByAge, filterReviewsByBodyType, sortByFeatured, sortByDate, sortByRatingDescending, sortByRatingAscending, sortButtonName } = this.props;

    return (
      <div>
        <div className="filters-and-sorts">
          <div className="filter-dropdown">
            <button onClick={this.handleRatingClick} id="rating-dropbtn" className="dropbtn" title="See more 'rating' filters">rating<i className="fa fa-caret-down"></i></button>
            <span id="rating-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {filterReviewsByRating(1)}}>1 star &#40;{oneStarCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByRating(2)}}>2 stars &#40;{twoStarCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByRating(3)}}>3 stars &#40;{threeStarCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByRating(4)}}>4 stars &#40;{fourStarCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByRating(5)}}>5 stars &#40;{fiveStarCount}&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={this.handleAthleticClick} id="athletic-dropbtn"  className="dropbtn" title="See more 'athletic type' filters">athletic type<i className="fa fa-caret-down"></i></button>
            <span id="athletic-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {filterReviewsByAthleticType('yogi')}}>yogi &#40;{yogiCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAthleticType('runner')}}>runner &#40;{runnerCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAthleticType('dancer')}}>dancer &#40;{dancerCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAthleticType('cyclist')}}>cyclist &#40;{cyclistCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAthleticType('sweaty-generalist')}}>sweaty generalist &#40;{sweatyCount}&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={this.handleAgeClick} id="age-dropbtn" className="dropbtn" title="See more 'age' filters">age<i className="fa fa-caret-down"></i></button>
            <span id="age-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {filterReviewsByAge('under-18')}}>under 18 &#40;{firstAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAge('18-24')}}>18-24 &#40;{secondAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAge('25-34')}}>25-34 &#40;{thirdAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAge('35-44')}}>35-44 &#40;{fourthAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAge('45-54')}}>45-54 &#40;{fifthAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAge('55-65')}}>55-65 &#40;{sixthAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAge('over-65')}}>over 65 &#40;{seventhAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByAge('i-keep-my-age-on-the-dl')}}>i keep my age on the d.l. &#40;{eighthAgeCount}&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={this.handleBodyClick} id="body-dropbtn" className="dropbtn" title="See more 'body type' filters">body type<i className="fa fa-caret-down"></i></button>
            <span id="body-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {filterReviewsByBodyType('athletic')}}>athletic &#40;{athleticCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByBodyType('curvy')}}>curvy &#40;{curvyCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByBodyType('lean')}}>lean &#40;{leanCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByBodyType('muscular')}}>muscular &#40;{muscularCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByBodyType('petite')}}>petite &#40;{petiteCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByBodyType('slim')}}>slim &#40;{slimCount}&#41;</a>
              <a href="#/" onClick={()=> {filterReviewsByBodyType('solid')}}>solid &#40;{solidCount}&#41;</a>
            </span>
          </div>
          <div className="sort-dropdown">
            <button onClick={this.handleSortClick} id="sort-dropbtn" className="dropbtn">{sortButtonName}<i className="fa fa-caret-down"></i></button>
            <span id="sort-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {sortByFeatured()}} >featured reviews first</a>
              <a href="#/" onClick={()=> {sortByDate()}}>date-newest first</a>
              <a href="#/" onClick={()=> {sortByRatingDescending()}}>rating-high to low</a>
              <a href="#/" onClick={()=> {sortByRatingAscending()}}>rating-low to high</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}