const express = require('express');
const request = require('request');

const app = express();

app.get('/player-count', (req, res) => {
  request('http://localhost:30120/players.json', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const playerCount = JSON.parse(body).length;
      res.json({ count: playerCount });
    } else {
      res.json({ error: 'Unable to retrieve player count' });
    }
  });
});

//THE PORT CAN BE CHANGED IF REQUIRED
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

