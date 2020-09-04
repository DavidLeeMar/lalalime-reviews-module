const db = require('../database/dbhelpers.js');

const controller = {

  sortByDate: (req, res) => {
    db.sortReviewsByDate(req.params.id, (err, result) =>{
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  delete: (req, res) => {
    db.deleteReview(req.params.id, (err, result) =>{
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send('Successfully Deleted');
      }
    })
  },

  updateReviewBody: (req, res) => {
    db.updateReviewBody(req.body, (err, result) =>{
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send('Successfully Updated');
      }
    })
  },

  insertReview: (req, res) => {
    db.insertReview(req.params.id, (err, result) =>{
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  }
};

module.exports = controller;

  // get: (req, res) => {
  //   getAllReviews()
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // },

  // filterByRating: (req, res) => {
  //   let { rating } = req.params;
  //   getReviewsByRating({ rating })
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // },

  // filterByAthleticType: (req, res) => {
  //   let { athleticType } = req.params;
  //   getReviewsByAthleticType({ athleticType })
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // },

  // filterByAgeRange: (req, res) => {
  //   let { ageRange } = req.params;
  //   getReviewsByAgeRange({ ageRange })
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // },

  // filterByBodyType: (req, res) => {
  //   let { bodyType } = req.params;
  //   getReviewsByBodyType({ bodyType })
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // },

  // sortByFeatured: (req, res) => {
  //   let { featured } = req.params;
  //   sortReviewsByFeatured({ featured })
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // },
   //let { reviewDate } = req.params;

    //sortReviewsByDate({ reviewDate })
    //  .then(reviews => res.status(200).send(reviews))
    //  .catch(err => res.status(400).send(err));
  // ,

  // sortByRatingDescending: (req, res) => {
  //   let { rating } = req.params;
  //   sortReviewsByRatingDescending({ rating })
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // },

  // sortByRatingAscending: (req, res) => {
  //   let { rating } = req.params;
  //   sortReviewsByRatingAscending({ rating })
  //     .then(reviews => res.status(200).send(reviews))
  //     .catch(err => res.status(400).send(err));
  // }