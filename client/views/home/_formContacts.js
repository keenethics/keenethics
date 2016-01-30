Template._formContacts.events({
  'submit .js-contact-form': function(e, t){
    e.preventDefault();
    var name = t.$('#name').val(),
        email = t.$('#email').val(),
        message = t.$("#message").val();
    var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email || !emailRegEx.test(email) || !message) {
      return Modal.show( '_sendEmailPopup', {'message': 'Email and message required.'} );
    }

    var text = "Message from: " + name + "\rEmail: " + email + "\rContent:" + message;
    Meteor.call( 'sendContactForm', text, function(error, result) {
      if(error) {
        Modal.show( '_sendEmailPopup', {'message': 'An error occurred.'} );
      } else {
        Modal.show( '_sendEmailPopup', {'message': 'Your message was sent successfully.'} );
        t.$('.js-contact-form').trigger('reset');
      }
    });
  }
});
