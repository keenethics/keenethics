Router.route('/', {
  name: 'home',
  onAfterAction: function () {
    SEO.set({
      title: 'Keenethics: Advanced Web Development Services',
      meta: {
        description: 'Let us improve your business using modern JavaScript frameworks like Meteor.js, React or MEAN Stack.'
      },
    });
  },
  waitOn: function() {
    return [
      Meteor.subscribe('images'),
      Meteor.subscribe('Jobs')
    ]
  },
  fastRender: true
});
