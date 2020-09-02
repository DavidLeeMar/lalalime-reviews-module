
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost/lalalime';

// Database Name
const dbName = 'lalalime';
// Use connect method to connect to the server

MongoClient.connect(url, { useUnifiedTopology: true }, { useNewUrlParser: true }, function(err,database) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  //const db = client.db(dbName);

});

module.exports = MongoClient


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/lalalime', { useNewUrlParser: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('database connected');
// });

// let reviewSchema = new mongoose.Schema({
//   rating: Number,
//   username: String,
//   activeSinceDate: String,
//   helpfulnessVotesThumbsUp: Number,
//   helpfulnessVotesThumbsDown: Number,
//   featured: Boolean,
//   location: String,
//   athleticType: String,
//   ageRange: String,
//   bodyType: String,
//   whatYouLike: String,
//   whatYouDidntLike: String,
//   reviewDate: String,
//   sortableReviewDate: Date,
//   reviewTitle: String,
//   reviewBody: String,
//   wasThisReviewHelpfulYes: Number,
//   wasThisReviewHelpfulNo: Number
// });
//const Review = mongoose.model('Review', reviewSchema);

//module.exports = Review;