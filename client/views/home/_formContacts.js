Template._formContacts.events({
  'click .button.-wide': function(){
      var name = $('#name').val(),
          email = $('#email').val(),
          message = $("#message").val();
      var text = "Message from: " + name + "\rEmail: " + email + "\rContent:" + message;

      Meteor.call('sendEmail', email, text);
  }
});