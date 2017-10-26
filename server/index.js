const database = require('../database/index');
const questions = require('./questions.js');

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());

// ==== ROUTES ====

app.get('/test', (req, res) => {
  res.status(200);
  // res.set('Content-Type', 'application/json');
  res.end('Future home of EL BIERRES TIERRES. OLÉ');
});

app.post('/login', (req, res) => {
  console.log('Got a login request!');
  if (req.cookies.Serenna === 'Azurell') {
    res.status(200);
    res.send('All clear');
  }
  res.status(200);
  var q = questions.questions[Math.floor(Math.random() * questions.questions.length)];
  res.send(q);
});

app.post('/answer', (req, res) => {
  console.log('Got a login reply!', req.body.a);
  if (questions.answers[questions.questions.indexOf(req.body.q)] === req.body.a.toLowerCase().trim()) {
    res.cookie('Serenna', 'Azurell', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.redirect('/dashboard');
  } else {
    res.status(200);
    res.send('Bad');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.cookies.Serenna !== 'Azurell') {
    res.status(200);
    res.redirect('/');
  } else {
    res.status(200).contentType('text/html').sendFile(path.resolve(__dirname + '/../client/dist/main.html'));
  }
});

// ==== SERVER ====
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
