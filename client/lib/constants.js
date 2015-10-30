// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Meteor Boilerplate',
  DESCRIPTION: 'A boilerplate for meteorjs projects http://matteodem.github.io/meteor-boilerplate/',
  MINIFIED_CSS_FILE_PATH: '/merged-stylesheets-prefixed.css'
};
