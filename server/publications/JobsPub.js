Meteor.publish('Jobs', function () {
  return Jobs.find();
});
