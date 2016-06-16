Meteor.methods({
  sendContactForm: function (text) {
    check(text, String);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to:      'founders@keenethics.com',
      from:    'noreply@keenethics.com',
      subject: 'New message from contact form',
      text
    });
  }
});
