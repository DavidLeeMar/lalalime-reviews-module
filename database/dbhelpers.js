const Review = require('./index.js');
const db = require('./pg.js');

const sortReviewsByDate = (id, callback) => {
  let queryStr = `SELECT * FROM reviews where product_id = ${id}`;
  db.query(queryStr, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}

const insertReview = (params, callback) => {
  let queryStr = `INSERT INTO products (name) VALUES (${params.name})`;
  db.query(queryStr, (err, result) => {
    if (err) {
      callback(err);
    } else {
      let queryStr = `INSERT INTO reviews (rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location,  athleticType,  ageRange,  bodyType,  whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate, reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id) VALUES (${rating}, ${username}, ${activeSinceDate}, ${helpfulnessVotesThumbsUp}, ${helpfulnessVotesThumbsDown}, ${featured}, ${location},  ${athleticType},  ${ageRange},  ${bodyType},  ${whatYouLike}, ${whatYouDidntLike}, ${reviewDate}, ${sortableReviewDate}, ${reviewTitle}, ${reviewBody}, ${wasThisReviewHelpfulYes}, ${wasThisReviewHelpfulNo}, ${product_id})`
    }
  })
}

const updateReviewBody = (body, callback) => {
  let queryStr = `UPDATE reviews SET reviewbody = ${body.reviewbody} WHERE id = ${id}`;
  db.query(queryStr, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}

const deleteReview = (id, callback) => {
  let queryStr = `DELETE FROM reviews WHERE product_id=${id}`;
  db.query(queryStr, (err, result) => {
    if (err) {
      callback(err);
    } else {
      let queryStr = `DELETE FROM products WHERE product_id=${id}`;
      db.query(queryStr, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      })
    }
  })
}


module.exports = {
  sortReviewsByDate,
  insertReview,
  updateReviewBody,
  deleteReview
};



// const getAllReviews = () => {
//   return Review.collection("reviews50m").find();
// };

// // filter by rating
// const getReviewsByRating = (rating) => {
//   return Review.find({ rating: { $eq: rating.rating } });
// };

// // filter by athleticType
// const getReviewsByAthleticType = (athleticType) => {
//   return Review.find({ athleticType: athleticType.athleticType });
// }

// // filter by ageRange
// const getReviewsByAgeRange = (ageRange) => {
//   return Review.find({ ageRange: ageRange.ageRange });
// }

// // filter by bodyType
// const getReviewsByBodyType = (bodyType) => {
//   return Review.find({ bodyType: bodyType.bodyType });
// }

// // sort by featured true first
// const sortReviewsByFeatured = () => {
//   return Review.find({}).sort({ featured: -1 });
// }


// // sort by rating descending
// const sortReviewsByRatingDescending = () => {
//   return Review.find({}).sort({ rating: -1 });
// }

// // sort by rating ascending
// const sortReviewsByRatingAscending = () => {
//   return Review.find({}).sort({ rating: 1 });
// }