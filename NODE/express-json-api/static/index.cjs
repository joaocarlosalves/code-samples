const 
    users = require('./users.json'),
    posts = require('./posts.json'),
    people = require('./people.json'),
    peoplepg = require('./people-pag.json'),
    countriespt = require('./countries-pt.json'),
    countriesen = require('./countries-en.json'),
    mock = require('./mock.json');

module.exports = () => ({
  users,
  posts,
  people,
  peoplepg,
  countriespt,
  countriesen,
  mock
});
