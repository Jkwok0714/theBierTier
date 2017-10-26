const database = require('../database/index');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

let port = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})

// ==== ROUTES ====

app.get('/test', (req, res) => {
  res.status(200);
  // res.set('Content-Type', 'application/json');
  res.end('Future home of EL BIERRES TIERRES. OLÉ');
});

app.post('/login', (req, res) => {
  console.log('Got a login request!');
  res.status(200);
  res.send('Loginnnn');
});

app.post('/beer', (req, res) => {

});

// ==== SERVER ====
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
