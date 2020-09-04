const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');


const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.redirect('/1');
});

app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.use('/reviews', router);

app.listen(port, () => console.log(`app is listening on port ${port}`));