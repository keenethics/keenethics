Meteor.methods({
  sendEmail: function (from, text) {
    check([from, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: 'founders@keenethics.com',
      from: from,
      subject: 'New message from contact form',
      text: text
    });
  }
});