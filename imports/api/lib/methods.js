import { Meteor } from 'meteor/meteor';

import _ from 'underscore';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

const parseJSON = function parseJSON(parts) {
  let posts = parts.substring(parts.indexOf('"Post"'));
  posts = `{${posts.substring(0, posts.indexOf('"Post"}}') + 8)}}`;

  let users = parts.substring(parts.indexOf('"User"'));
  users = `{${users.substring(0, users.indexOf('"User"}}') + 8)}}`;

  posts = JSON.parse(posts);
  users = JSON.parse(users);

  _.each(posts.Post, (value, key) => {
    _.extend(value, { authorName: users.User[value.creatorId].name });
    posts.Post[key] = _.pick(value, 'uniqueSlug', 'virtuals', 'title', 'creatorId', 'authorName');
  });
  return posts.Post;
};

Meteor.methods({
  sendContactForm(text) {
    check(text, String);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: 'founders@keenethics.com',
      from: 'noreply@keenethics.com',
      subject: 'New message from contact form',
      text,
    });
  },

  getPosts() {
    this.unblock();
    const url = 'https://blog.keenethics.com/?format=json';
    const result = Meteor.http.call('GET', url, {
      params: {
        timeout: 3000,
      },
      headers: {
        cookie: 'sid=1:Ae8BWDRjWeqWqHqGt3Ik6om0Z8MYiyFSgKLtnEqcwb9GzRN5xVtNgay6WT1Yx5PU;' +
                'uid=f82ad8efa94',
        'content-type': 'application/json',
      },
    });
    const res = parseJSON(result.content);
    return res;
  },
});
