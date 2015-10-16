Meteor.startup(function () {
  // process.env.MAIL_URL = 
  //   'smtp://postmaster%40keenethics.com:9bca0f1a2ab47071860702e72f619a27@smtp.mailgun.org:587';
});

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
