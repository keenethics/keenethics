Jobs = new Mongo.Collection('Jobs');

Jobs.attachSchema(
  new SimpleSchema({
    title: {
      type: String,
      label: 'Title'
    },
    description: {
      type: String,
      label: 'Description',
      autoform: {
        rows: 4
      }
    },
    link: {
      type: String,
      label: 'Reference'
    },
    createdAt: {
      type: Date,
      label: 'Date',
      autoValue: function () {
        if (this.isInsert) {
          return new Date();
        }
      },
      denyUpdate: true
    },
    picture: {
      type: String,
      label: 'Picture',
      optional: true,
      autoform: {
        afFieldInput: {
          accept: 'image/*',
          type: 'fileUpload',
          collection: 'Images',
          label: 'Choose picture'
        }
      }
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Jobs.allow({
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

Jobs.helpers({
  formatedDate: function() {
    return moment(this.createdAt).format('MM-DD-YYYY');
  }
});