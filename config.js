AdminConfig = {
  name: 'Keenethics',
  adminEmails: ['admin@test.com'],
  collections: {
    Jobs: {
      icon: 'file-o',
      omitFields: ['createdAt'],
      extraFields: ['_id'],
      tableColumns: [
       { label: 'Title', name: 'title' },
       { label: 'Description', name: 'description' },
       { label: 'Reference', name: 'link' },
       { label: 'Picture', template: '_picturePreview' },
       { label: 'Created At', name: 'createdAt' } //formatedDate().createdAt
      ],
      extraFields: ['picture'],
      showEditColumn: true,
      showDelColumn: false,
      showWidget: true,
      color: 'green'
      // templates: {
      //   new: {
      //     name: '_jobCreator'
      //   }
      // }
    }
  }
  // userSchema: new SimpleSchema({
  //   name: {
  //     type: String,
  //     regEx: /^[a-z0-9A-Z_]{3,15}$/,
  //     label: "Name"
  //   },
  //   emails: {
  //     type: [Object],
  //     optional: true
  //   },
  //   "emails.$.address": {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   },
  //   "emails.$.verified": {
  //     type: Boolean
  //   },
  //   createdAt: {
  //     type: Date,
  //     optional: true
  //   },
  //   roles: {
  //    type: Object, // [String]
  //    optional: true,
  //    blackbox: true
  //   }
  // })
};

// AdminDashboard.addSidebarItem('New User', AdminDashboard.path('/Users/new'), { icon: 'plus' });
// AdminDashboard.addSidebarItem('New Job', AdminDashboard.path('/Jobs/new'), { icon: 'plus' });