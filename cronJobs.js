const cron = require('node-cron');

// Your function to fetch data
function fetchWords(req, res) {
  fetch('https://random-word-api.herokuapp.com/word?number=10')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

// Define your cron job in a function
function setupCronJobs() {
  // Schedule the cron job to run every day at a specific time (e.g., 12:00 AM)
  cron.schedule('* * * * *', () => {
    fetchWords();
  });
}

module.exports = { setupCronJobs };
