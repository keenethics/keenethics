import { Meteor } from 'meteor/meteor';
import { fetchNews } from './news';

import _ from 'underscore';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';
import moment from 'moment';

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
    const sorted = _.sortBy(fetchNews(), 'publishedDate').reverse().slice(0, 4);

    _.each(sorted, (value, key) => {
      sorted[key].publishedDate = moment(value.publishedDate).format('MMMM DD YYYY');
    });

    return sorted;
  },
});
