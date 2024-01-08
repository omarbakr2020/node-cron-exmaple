const express = require('express');
const cron = require('node-cron');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

function fetchWords(req, res) {
  fetch('https://random-word-api.herokuapp.com/word?number=10')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

cron.schedule('* * * * *', () => {
  fetchWords();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
