const database = require('../database/index');
const questions = require('./questions.js');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

let port = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// ==== ROUTES ====

app.get('/test', (req, res) => {
  res.status(200);
  // res.set('Content-Type', 'application/json');
  res.end('Future home of EL BIERRES TIERRES. OLÉ');
});

app.post('/login', (req, res) => {
  console.log('Got a login request!');
  res.status(200);
  var q = questions.questions[Math.floor(Math.random() * questions.questions.length)];
  res.send(q);
});

app.post('/answer', (req, res) => {
  console.log('Got a login reply!', req.body.a);
  if (questions.answers[questions.questions.indexOf(req.body.q)] === req.body.a.toLowerCase()) {
    res.redirect('/dashboard');
    // res.status(200);
    // res.send('Great');
  } else {
    res.status(200);
    res.send('Bad');
  }
});

app.get('/dashboard', (req, res) => {
  res.status(200).contentType('text/html').sendFile(path.resolve(__dirname + '/../client/dist/main.html'));
});

// ==== SERVER ====
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
