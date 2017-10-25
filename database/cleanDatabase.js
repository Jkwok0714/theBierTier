let database = require('./index.js');

database.cleanDatabase().then(() => {
  process.exit();
})
