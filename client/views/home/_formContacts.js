Template._formContacts.events({
  'click .button.-wide': function(){
    var name = $('#name').val(),
        email = $('#email').val(),
        message = $("#message").val();
    var text = "Message from: " + name + "\rEmail: " + email + "\rContent:" + message;

    Meteor.call( 'sendContactForm', text, function(error, result) {
      if(error) {
        Modal.show( '_sendEmailPopup', {'message': 'An error occurred.'} );
      } else {
        Modal.show( '_sendEmailPopup', {'message': 'Your message was sent successfully.'} );
        $('#name').val( '' );
        $('#email').val( '' );
        $('#message').val( '' );
      }
    });
    return false;
  }
});
