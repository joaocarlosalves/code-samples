const 
    todos = require('./json/todos.json'),
    colors = require('./json/colors.json'),
    icons = require('./json/icons.json'),
    people = require('./json/people.json'),
    texts = require('./json/texts.json'),
    countries = require('./json/countries.json');

module.exports = () => ({
  todos,
  colors,
  icons,
  people,
  texts,
  countries,
});
