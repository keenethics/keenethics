var imageStore = new FS.Store.GridFS("images", {
  // chunkSize: 1024*1024,
  // // transform before write to db
  // transformWrite: function(fileObj, readStream, writeStream) {
  //   gm(readStream, fileObj.name()).resize('720', '720').stream().pipe(writeStream);
  // }
});

Images = new FS.Collection("images", {
  stores: [imageStore],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
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

if (Meteor.isClient) { 
  Meteor.subscribe('images');
}