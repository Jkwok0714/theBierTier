let database = require('./index.js');

database.fetch().then((data) => {
  console.log(data);
  process.exit();
}).catch((err) => {
  console.error(err);
})
