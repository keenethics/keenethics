import { Meteor } from 'meteor/meteor';

function loadUser(user) {
  const userAlreadyExists = typeof Meteor.users.findOne({ username: user.username }) === 'object';

  if (!userAlreadyExists) {
    Accounts.createUser(user);
  }
}

Meteor.startup(function () {
  const users = YAML.eval(Assets.getText('users.yml'));

  for (const key in users) {
    if (users.hasOwnProperty(key)) {
      loadUser(users[key]);
    }
  }
});
