const Review = require('./index.js');
const db = require('./pg.js');

const sortReviewsByDate = (id, callback) => {
  let queryStr = `SELECT * FROM reviews where product_id = ${id} ORDER BY sortablereviewdate`;
  db.query(queryStr, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}


module.exports = {
  sortReviewsByDate,
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