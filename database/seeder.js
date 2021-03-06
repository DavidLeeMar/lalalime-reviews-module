const Review = require('./index.js');
const fs = require('fs');


const ratings = [1, 2, 3, 4, 5];

const range = (start, end) => {
  var ans = [];
  for (let i = start; i <= end; i++) {
      ans.push(i);
  }
  return ans;
}

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//convert reviewdate to YYYYMMDD format

const convertDate = (date) => {
  date = date.toDateString().slice(4);
  let month = date.slice(0, 3);
  let dateString = '';
  if (month === 'Jan') {
    dateString += 'January';
  } else if (month === 'Feb') {
    dateString += 'February';
  } else if (month === 'Mar') {
    dateString += 'March';
  } else if (month === 'Apr') {
    dateString += 'April';
  } else if (month === 'May') {
    dateString += 'May';
  } else if (month === 'Jun') {
    dateString += 'June';
  } else if (month === 'Jul') {
    dateString += 'July';
  } else if (month === 'Aug') {
    dateString += 'August';
  } else if (month === 'Sep') {
    dateString += 'September';
  } else if (month === 'Oct') {
    dateString += 'October';
  } else if (month === 'Nov') {
    dateString += 'November';
  } else if (month === 'Dec') {
    dateString += 'December';
  }
  if (Number(date.slice(4, 6)) > 9) {
  return `${dateString} ${date.slice(4, 6)}, ${date.slice(7)}`;
  }
  return `${dateString} ${date.slice(5, 6)}, ${date.slice(7)}`;
}

const usernameWords = ['lulu', 'peanut', 'lulufan', 'yogafan', 'mary', 'katie', 'blessed', 'yogagirl', 'yogi', 'pants', 'loveyoga', 'yogagal', 'emily', 'vivian', 'ji'];

const usernameNumbers = range(1000, 9999);

const days = range(1, 31);

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const years = range(2014, 2019);

const helpfulnessVotesThumbs = range(0, 100);

const featured = [true, false];

const locations = ['boulder, co', 'milwaukee, wi', 'los angeles, ca', 'new york, ny', 'portland, or', 'san francisco, ca', 'denver, co', 'madison, wi', 'austin, tx', 'columbus, oh', 'chicago, il', 'ontario, canada', 'san jose, ca', 'quebec, canada', 'british columbia, canada', 'washington, dc', 'aukland, new zealand', 'fargo, nd', 'houston, tx', 'philadelphia, pa', 'sydney, austraia', 'new orleans, la', 'indianapolis, in', 'seattle, wa', 'boise, id', 'phoenix, az', 'boston, ma', 'baltimore, md', 'miami, fl', 'atlanta, ga', 'charleston, sc', 'nashville, tn', 'louisville, ky', 'cincinnati, oh', 'omaha, ne'];

const athleticTypes = ['yogi', 'runner', 'dancer', 'cyclist', 'sweaty-generalist'];

const ageRanges = ['under-18', '18-24', '25-34', '35-44', '45-54', '55-65', 'over-65', 'i-keep-my-age-on-the-dl'];

const bodyTypes = ['athletic', 'curvy', 'lean', 'muscular', 'petite', 'slim', 'solid'];

const wasThisReviewHelpful = range(0, 20);

const negativeAdjectives = ['tight', 'loose', 'itchy', 'small', 'tiny', 'huge', 'big', 'wide', 'narrow', 'smelly', 'long', 'short', 'the worst', 'too thick', 'too thin', 'too heavy', 'too light', 'ugly', 'gross'];

const positiveAdjectives = ['good', 'great', 'perfect', 'amazing', 'beautiful', 'pleasant', 'gorgeous', 'wonderful', 'the best'];

const bottomsNouns = ['ankles', 'hips', 'knees', 'legs'];

const topsNouns = ['shoulders', 'sleeves', 'torso', 'chest'];

const negativeVerbs = ['hate', 'do not like', 'dislike'];

const positiveVerbs = ['love', 'like', 'enjoy'];

const createBottoms = () => {
  const bottomReview = {};

  bottomReview.rating = ratings[Math.floor(Math.random() * Math.floor(5))];

  bottomReview.username = `${usernameWords[Math.floor(Math.random() * Math.floor(usernameWords.length))]}${usernameNumbers[Math.floor(Math.random() * Math.floor(usernameNumbers.length))]}`;

  bottomReview.activeSinceDate = `${months[Math.floor(Math.random() * Math.floor(months.length))]} ${days[Math.floor(Math.random() * Math.floor(days.length))]}, ${years[Math.floor(Math.random() * Math.floor(years.length))]}`;

  bottomReview.helpfulnessVotesThumbsUp = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  bottomReview.helpfulnessVotesThumbsDown = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  bottomReview.featured = featured[Math.floor(Math.random() * Math.floor(featured.length))];

  bottomReview.location = `${locations[Math.floor(Math.random() * Math.floor(locations.length))]}`;

  bottomReview.athleticType = `${athleticTypes[Math.floor(Math.random() * Math.floor(athleticTypes.length))]}`;

  bottomReview.ageRange = `${ageRanges[Math.floor(Math.random() * Math.floor(ageRanges.length))]}`;

  bottomReview.bodyType = `${bodyTypes[Math.floor(Math.random() * Math.floor(bodyTypes.length))]}`;

  bottomReview.whatYouLike = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`;

  bottomReview.whatYouDidntLike = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`;

  bottomReview.sortableReviewDate = randomDate(new Date(2014, 0, 1), new Date());

  bottomReview.reviewDate = convertDate(bottomReview.sortableReviewDate);

  if (bottomReview.rating < 3) {
    bottomReview.reviewTitle = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`
  } else {
    bottomReview.reviewTitle = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`
  }

  if (bottomReview.rating < 3) {
    bottomReview.reviewBody = `I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} how ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} they are in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}. I feel they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} and ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}. I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} them, especially because they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}. `.repeat(Math.ceil(Math.random() * Math.ceil(3)));
  } else {
    bottomReview.reviewBody = `I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} how ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} they are in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}. I feel they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} and ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}. I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} them, especially because they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}. `.repeat(Math.ceil(Math.random() * Math.ceil(3)));
  }

  bottomReview.wasThisReviewHelpfulYes = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  bottomReview.wasThisReviewHelpfulNo = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  return bottomReview;
};

const createTops = () => {
  const topReview = {};

  topReview.rating = ratings[Math.floor(Math.random() * Math.floor(5))];

  topReview.username = `${usernameWords[Math.floor(Math.random() * Math.floor(usernameWords.length))]}${usernameNumbers[Math.floor(Math.random() * Math.floor(usernameNumbers.length))]}`;

  topReview.activeSinceDate = `${months[Math.floor(Math.random() * Math.floor(months.length))]} ${days[Math.floor(Math.random() * Math.floor(days.length))]}, ${years[Math.floor(Math.random() * Math.floor(years.length))]}`;

  topReview.helpfulnessVotesThumbsUp = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  topReview.helpfulnessVotesThumbsDown = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  topReview.featured = featured[Math.floor(Math.random() * Math.floor(featured.length))];

  topReview.location = `${locations[Math.floor(Math.random() * Math.floor(locations.length))]}`;

  topReview.athleticType = `${athleticTypes[Math.floor(Math.random() * Math.floor(athleticTypes.length))]}`;

  topReview.ageRange = `${ageRanges[Math.floor(Math.random() * Math.floor(ageRanges.length))]}`;

  topReview.bodyType = `${bodyTypes[Math.floor(Math.random() * Math.floor(bodyTypes.length))]}`;

  topReview.whatYouLike = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`;

  topReview.whatYouDidntLike = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`;

  topReview.sortableReviewDate = randomDate(new Date(2014, 0, 1), new Date());

  topReview.reviewDate = convertDate(topReview.sortableReviewDate);

  if (topReview.rating < 3) {
    topReview.reviewTitle = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`
  } else {
    topReview.reviewTitle = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`
  }

  if (topReview.rating < 3) {
    topReview.reviewBody = `I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} how ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} they are in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}. I feel they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} and ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}. I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} them, especially because they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}. `.repeat(Math.ceil(Math.random() * Math.ceil(3)));
  } else {
    topReview.reviewBody = `I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} how ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} they are in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}. I feel they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} and ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}. I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} them, especially because they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}. `.repeat(Math.ceil(Math.random() * Math.ceil(3)));
  }

  topReview.wasThisReviewHelpfulYes = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  topReview.wasThisReviewHelpfulNo = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  return topReview;
};

const createBottomReviews = () => {
  let bottomReviewsArr = [];
  for (let i = 0; i < 120; i++) {
    bottomReviewsArr.push(createBottoms());
  }
  return bottomReviewsArr;
}

const createTopReviews = () => {
  let topReviewsArr = [];
  for (let i = 0; i < 250; i++) {
    topReviewsArr.push(createTops());
  }
  return topReviewsArr;
}

// const combineReviews = () => {
//   let bottomArray = createBottomReviews();
//   let topArray = createTopReviews();

//   return [...bottomArray, ...topArray];
// }


// const insertMockData = () => {
//   let mockReviews = createBottomReviews();
//   Review.insertMany(mockReviews)
//     .then((docs) => {
//       // console.log(docs);
//       console.log('database seeded')
//     })
//     .catch((err) => console.error(err));
// }

// insertMockData();



/*FOR MONGO 50M */
/*

const writeUsers = fs.createWriteStream('mongodata9a.csv');
writeUsers.write(`id, rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 5000001;
  let id = 45000001;
  let product_id = 5000001;

  function write() {
    let ok = true;
    do {
      i -= 1;


      let review = createTops();

      const data =
      `${id}, ${review.rating}, ${review.username}, "${review.activeSinceDate}", ${review.helpfulnessVotesThumbsUp}, ${review.helpfulnessVotesThumbsDown}, ${review.featured}, "${review.location}", ${review.athleticType}, ${review.ageRange}, ${review.bodyType}, ${review.whatYouLike}, ${review.whatYouDidntLike}, "${review.reviewDate}", "${review.sortableReviewDate}", ${review.reviewTitle}, "${review.reviewBody}", ${review.wasThisReviewHelpfulYes}, ${review.wasThisReviewHelpfulNo}, ${product_id}\n`;

      if (i === 1) {
        console.log('done', data);
        writer.write(data, encoding, callback);

      } else {

      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }

      id += 1;
      product_id += 1;

    } while (i > 1 && ok);
    if (i > 1) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});

*/
/*FOR POSTGRES */

/*
const writeUsers = fs.createWriteStream('sqldata5.csv');
writeUsers.write(`rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 5000001;

  function write() {
    let ok = true;
    do {
      i -= 1;


      let review = createTops();
      let randomNumber = (Math.floor(Math.random() * 5000000)) + 5000001;
      const data =
      `${review.rating},${review.username},"${review.activeSinceDate}",${review.helpfulnessVotesThumbsUp},${review.helpfulnessVotesThumbsDown},${review.featured},"${review.location}",${review.athleticType},${review.ageRange},${review.bodyType},${review.whatYouLike},${review.whatYouDidntLike},"${review.reviewDate}","${review.sortableReviewDate}",${review.reviewTitle},"${review.reviewBody}",${review.wasThisReviewHelpfulYes},${review.wasThisReviewHelpfulNo},${randomNumber}\n`;

      if (i === 1) {
        console.log('done', data);
        writer.write(data, encoding, callback);

      } else {

      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }

    } while (i > 1 && ok);
    if (i > 1) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});


*/



//MONGO SEEDING METHOD
//=====================================



// const writeUsers = fs.createWriteStream('user991.json');

// function writeTenMillionUsers(writer, encoding, callback) {
//   let i = 500000;
//   let id = 9500000;
//   function write() {
//     let ok = true;
//     do {
//       let obj = {}
//       obj.id = id;
//       obj.reviews = [];
//       for (let i = 0; i < 5; i++) {
//         obj.reviews.push(createTops());
//       }

//       i -= 1;
//       id += 1;

//       const data = JSON.stringify(obj) + ',\n';
//       if (i === 0) {
//         console.log('done', data);
//         writer.write((data.slice(0, -2) + ']'), encoding, callback);
//       } else {

// // see if we should continue, or wait
// // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
// // had to stop early!
// // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }

// writeTenMillionUsers(writeUsers, 'utf-8', () => {
//   writeUsers.end();

// });






//LEGACY SEEDING METHOD
//======================================
// const insertMockData = () => {
//   let mockReviews = createBottomReviews();


//   mockReviews = mockReviews.map(review => JSON.stringify(review) + "\n").join('');

//   /* fs.writeFile('bulk.json', mockReviews, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log('data written')
//     }
//   }); */



// }

// insertMockData();




/*FOR POSTGRES PRODUCTS TABLE */
/*

const writeUsers = fs.createWriteStream('productTable.csv');
writeUsers.write(`product_id\n`, 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000001;

  function write() {
    let ok = true;
    do {
      i -= 1;

      const data =
      `${i}\n`;

      if (i === 1) {
        console.log('done', data);
        writer.write(data, encoding, callback);

      } else {

      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }

    } while (i > 1 && ok);
    if (i > 1) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
*/


//** 5M - 0 **/

const writeUsers1 = fs.createWriteStream('aws1.csv');
writeUsers1.write(`rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

function first5million(writer, encoding, callback) {
  let i = 5000001;

  function write() {
    let ok = true;
    do {
      i -= 1;


      let review = createBottoms();
      //let randomNumber = (Math.floor(Math.random() * 5000000)) + 5000001;
      const data =
      `${review.rating},${review.username},"${review.activeSinceDate}",${review.helpfulnessVotesThumbsUp},${review.helpfulnessVotesThumbsDown},${review.featured},"${review.location}",${review.athleticType},${review.ageRange},${review.bodyType},${review.whatYouLike},${review.whatYouDidntLike},"${review.reviewDate}","${review.sortableReviewDate}",${review.reviewTitle},"${review.reviewBody}",${review.wasThisReviewHelpfulYes},${review.wasThisReviewHelpfulNo},${i}\n`;

      if (i === 1) {
        console.log('done', data);
        writer.write(data, encoding, callback);

      } else {

      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }

    } while (i > 1 && ok);
    if (i > 1) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

first5million(writeUsers1, 'utf-8', () => {
  writeUsers1.end();
});


//** 10M - 5M **/

const writeUsers2 = fs.createWriteStream('aws2.csv');
writeUsers2.write(`rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

function second5million(writer, encoding, callback) {
  let i = 10000001;

  function write() {
    let ok = true;
    do {
      i -= 1;


      let review = createTops();
      //let randomNumber = (Math.floor(Math.random() * 5000000)) + 5000001;
      const data =
      `${review.rating},${review.username},"${review.activeSinceDate}",${review.helpfulnessVotesThumbsUp},${review.helpfulnessVotesThumbsDown},${review.featured},"${review.location}",${review.athleticType},${review.ageRange},${review.bodyType},${review.whatYouLike},${review.whatYouDidntLike},"${review.reviewDate}","${review.sortableReviewDate}",${review.reviewTitle},"${review.reviewBody}",${review.wasThisReviewHelpfulYes},${review.wasThisReviewHelpfulNo},${i}\n`;

      if (i === 5000001) {
        console.log('done', data);
        writer.write(data, encoding, callback);

      } else {

      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }

    } while (i > 5000001 && ok);
    if (i > 5000001) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

second5million(writeUsers2, 'utf-8', () => {
  writeUsers2.end();
});



//** additional 10M bottoms **

const writeUsersBottom3 = fs.createWriteStream('aws3.csv');
writeUsersBottom3.write(`rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

const writeUsersBottom4 = fs.createWriteStream('aws4.csv');
writeUsersBottom4.write(`rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

function additional5millionbottoms(writer, encoding, callback) {
  let i = 5000001;

  function write() {
    let ok = true;
    do {
      i -= 1;


      let review = createBottoms();
      let randomNumber = (Math.floor(Math.random() * 5000000)) + 1;
      const data =
      `${review.rating},${review.username},"${review.activeSinceDate}",${review.helpfulnessVotesThumbsUp},${review.helpfulnessVotesThumbsDown},${review.featured},"${review.location}",${review.athleticType},${review.ageRange},${review.bodyType},${review.whatYouLike},${review.whatYouDidntLike},"${review.reviewDate}","${review.sortableReviewDate}",${review.reviewTitle},"${review.reviewBody}",${review.wasThisReviewHelpfulYes},${review.wasThisReviewHelpfulNo},${randomNumber}\n`;

      if (i === 1) {
        console.log('done', data);
        writer.write(data, encoding, callback);

      } else {

      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }

    } while (i > 1 && ok);
    if (i > 1) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

additional5millionbottoms(writeUsersBottom3, 'utf-8', () => {
  writeUsersBottom3.end();
});

additional5millionbottoms(writeUsersBottom4, 'utf-8', () => {
  writeUsersBottom4.end();
});



//** additional 10M tops **

const writeUsersTops5 = fs.createWriteStream('aws5.csv');
writeUsersTops5.write(`rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

const writeUsersTops6 = fs.createWriteStream('aws6.csv');
writeUsersTops6.write(`rating, username, activeSinceDate, helpfulnessVotesThumbsUp, helpfulnessVotesThumbsDown, featured, location, athleticType, ageRange, bodyType, whatYouLike, whatYouDidntLike, reviewDate, sortableReviewDate,reviewTitle, reviewBody, wasThisReviewHelpfulYes, wasThisReviewHelpfulNo, product_id\n`, 'utf8');

function additional5milliontops(writer, encoding, callback) {
  let i = 5000001;

  function write() {
    let ok = true;
    do {
      i -= 1;


      let review = createTops();
      let randomNumber = (Math.floor(Math.random() * 5000000)) + 5000001;
      const data =
      `${review.rating},${review.username},"${review.activeSinceDate}",${review.helpfulnessVotesThumbsUp},${review.helpfulnessVotesThumbsDown},${review.featured},"${review.location}",${review.athleticType},${review.ageRange},${review.bodyType},${review.whatYouLike},${review.whatYouDidntLike},"${review.reviewDate}","${review.sortableReviewDate}",${review.reviewTitle},"${review.reviewBody}",${review.wasThisReviewHelpfulYes},${review.wasThisReviewHelpfulNo},${randomNumber}\n`;

      if (i === 1) {
        console.log('done', data);
        writer.write(data, encoding, callback);

      } else {

      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }

    } while (i > 1 && ok);
    if (i > 1) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

additional5milliontops(writeUsersTops5, 'utf-8', () => {
  writeUsersTops5.end();
});

additional5milliontops(writeUsersTops6, 'utf-8', () => {
  writeUsersTops6.end();
});

