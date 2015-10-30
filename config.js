AdminConfig = {
  name: 'Keenethics',
  adminEmails: ['admin@test.com'],
  // routes: {
  //   waitOn: function () {
  //       return [
  //         Meteor.subscribe('images'),
  //         Meteor.subscribe('Jobs')
  //       ]
  //     }
  // },
  collections: {
    Jobs: {
      icon: 'file-o',
      omitFields: ['createdAt'],
      extraFields: ['_id'],
      tableColumns: [
       { label: 'Title', name: 'title' },
       { label: 'Description', name: 'description' },
       { label: 'Reference', name: 'link' },
       { label: 'Picture', name: 'picture' },
       { label: 'Created At', name: 'createdAt' }
      ],
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
};

// AdminDashboard.addSidebarItem('New User', AdminDashboard.path('/Users/new'), { icon: 'plus' });
AdminDashboard.addSidebarItem('New Job', AdminDashboard.path('/Jobs/new'), { icon: 'plus' });