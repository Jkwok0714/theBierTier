var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/biers', {useMongoClient: true});

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
    Progression.find((err, results) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
};

const find = (query, callback) => {
  return new Promise ((resolve, reject) => {
    Repo.find(query, (err, data) => {
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
