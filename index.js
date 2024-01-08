const express = require('express');
const cronJobs = require('./cronJobs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

cronJobs.setupCronJobs();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
