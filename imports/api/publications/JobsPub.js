if (Meteor.isServer) {
  Meteor.publish('Jobs', function () {
    return Jobs.find();
  });
}
