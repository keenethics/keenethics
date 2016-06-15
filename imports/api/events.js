import {Meteor} from 'meteor/meteor';
import Modal from '../ui/components/modal';

export function sendContacts(data) {
  var {name, email, message} = data;

  var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email || !emailRegEx.test(email) || !message) {
    return Modal.show('Email and message required.');
  }

  var text = "Message from: " + name + "\rEmail: " + email + "\rContent:" + message;
  Meteor.call( 'sendContactForm', text, function(error, result) {
    if(error) {
      Modal.show('An error occurred.');
    } else {
      Modal.show( 'Your message was sent successfully.');
      t.$('.js-contact-form').trigger('reset');
    }
  });
}
