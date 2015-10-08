Router.route('/', {
  name: 'home',
  onAfterAction: function () {
    SEO.set({ title: 'Home -' + Meteor.App.NAME });
  }
});

