var imageStore = new FS.Store.GridFS("images", {});

Images = new FS.Collection("images", {
  stores: [imageStore]
});

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Images.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
