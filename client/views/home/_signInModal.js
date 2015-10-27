Accounts.onLogin(function(){
  Modal.hide();
})

Template.signInModal.events({
  'click .sign-out': function () {
    Meteor.logout();
  }
});