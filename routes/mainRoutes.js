Router.route('/', {
  name: 'home',
  onAfterAction: function () {
    SEO.set({ title: 'Home -' + Meteor.App.NAME });
  },
  waitOn: function() {
    return [
      Meteor.subscribe ('images'),
      Meteor.subscribe('Jobs')
    ]
  }
});