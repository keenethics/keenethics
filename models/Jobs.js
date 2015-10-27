Jobs = new Mongo.Collection('Jobs');

Jobs.attachSchema(
  new SimpleSchema({
    title: {
      type: String,
      label: 'Job Title'
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
    }
    // owner: {
    //   type: String,
    //   regEx: SimpleSchema.RegEx.Id,
    //   autoValue: function () {
    //     if (this.isInsert) {
    //       return Meteor.userId();
    //     }
    //   },
    //   autoform: {
    //     options: function () {
    //       _.map(Meteor.users.find().fetch(), function (user) {
    //         return {
    //           label: user.emails[0].address,
    //           value: user._id
    //         };
    //       });
    //     }
    //   }
    // }
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
  title: function() {
    return this.title;
  },
  description: function() {
    return this.description;
  },
  link: function() {
    return this.link;
  }
});