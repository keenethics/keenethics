Template._formContacts.events({
  'click .button.-wide': function(){
    var name = $('#name').val(),
        email = $('#email').val(),
        message = $("#message").val();
    var text = "Message from: " + name + "\rEmail: " + email + "\rContent:" + message;
    var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email || !emailRegEx.test(email) || !message) {
      return Modal.show( '_sendEmailPopup', {'message': 'Email and message required.'} );
    }
    Meteor.call( 'sendContactForm', text, function(error, result) {
      if(error) {
        Modal.show( '_sendEmailPopup', {'message': 'An error occurred.'} );
      } else {
        Modal.show( '_sendEmailPopup', {'message': 'Your message was sent successfully.'} );
        $('.js-contact-from-input').val( '' );
      }
    });
    return false;
  }
});
