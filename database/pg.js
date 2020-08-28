const { Client } = require('pg');

const client = new Client({
  user: 'davidmar',
  host: 'localhost',
  database: 'progresso',
  password: '',
  port: 5432
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('postgres connected')
  }
});


module.exports = client;


// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'testdb',
//   password: '1234abcd',
//   port: 5432,
// });