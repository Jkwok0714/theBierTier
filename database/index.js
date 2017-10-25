var mongoose = require('mongoose');
// const dbURL = process.env.DATABASE_URL || 'mongodb://localhost/biers';
const dbURL = 'mongodb://localhost/biers';
mongoose.connect(dbURL, {useMongoClient: true});

let bierSchema = mongoose.Schema({
  name: String,
  brewery: String,
  style: String,
  tier: Number,
  url: String,
  tastingNote: String,
  date: String,
  hops: Array,
  profile: Array
});

var Bier = mongoose.model('Bier', bierSchema);

const save = (options) => {
  var model = new Bier(options);
  return new Promise ((resolve, reject) => {
    model.save((err) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const fetch = () => {
  return new Promise ((resolve, reject) => {
    Bier.find((err, results) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const find = (query, callback) => {
  return new Promise ((resolve, reject) => {
    Bier.find(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // callback(data);
        resolve(data);
      }
    });
  });
};

let cleanDatabase = () => {
  return new Promise ((resolve, reject) => {
    Bier.remove({}, () => {
      console.log('Cleaned database');
      resolve();
    });
  });
};

module.exports = {
  save,
  cleanDatabase,
  find,
  fetch
};
