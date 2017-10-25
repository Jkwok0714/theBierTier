let database = require('../database/index');

const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

let port = 3000;

// ==== ROUTES ====


// ==== SERVER ====
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/test', function (req, res) {
  res.status(200);
  // res.set('Content-Type', 'application/json');
  res.end('Future home of EL BIERRES TIERRES. OLÉ');
});
