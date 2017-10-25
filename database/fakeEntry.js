let database = require('./index.js');

database.save({
  name: 'Benbier',
  brewery: 'Bennest Point',
  style: 'American Adjunct Lager',
  tier: Math.floor(Math.random()*3) + 3,
  url: '',
  tastingNote: 'Only a fluff would like this one',
  date: '1/6/66',
  hops: ['Citra'],
  profile: ['Janky']
}).then((res) => {
  console.log('Saved test dummy Entry');
  process.exit();
}).catch((err) => {
  console.error(err);
});
