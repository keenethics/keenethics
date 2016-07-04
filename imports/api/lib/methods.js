import { Meteor } from 'meteor/meteor';
import ParsingLib from './parsingLib';
import GetNewsData from './getNewsData'

import _ from 'underscore';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

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
    const parsingLib = new ParsingLib();
    const getNewsData = new GetNewsData();
    const mediumResult = parsingLib.parseMedium(getNewsData.getMediumJson());
    const meetupResult = parsingLib.parseMeetup(getNewsData.getMeetupJson());

    const result = _.union(_.values(mediumResult), meetupResult);
    const sorted = _.sortBy(result, 'publishedDate').reverse().slice(0, 4);

    _.each(sorted, (value, key) => {
      const splDate = new Date(value.publishedDate).toString().split(' ');
      sorted[key].publishedDate = `${splDate[1]} ${splDate[2]} ${splDate[3]} `;
    });

    return sorted;
  },
});
