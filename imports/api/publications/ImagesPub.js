if (Meteor.isServer) {
  Meteor.publish('images', function () {
    return Images.find();
  });
}
