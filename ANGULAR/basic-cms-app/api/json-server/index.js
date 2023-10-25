const users = require('./users.json');
const posts = require('./posts.json');
const people = require('./people.json');
const countries = require('./countries.json');
const icons = require('./icons.json');

module.exports = () => ({
  users: users,
  posts: posts,
  people: people,
  icons: icons,
  countries: countries
});
