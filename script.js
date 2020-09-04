import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 50 },
    { duration: '10s', target: 200 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 800 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 0 },

  ],
};

export default function() {

  let randomID = Math.floor(Math.random() * 10000000) + 1
  http.get(`http://localhost:3000/reviews/sort-by-date/${randomID}`);
  sleep(1);
}