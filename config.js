AdminConfig = {
  name: 'Admin Panel',
  adminEmails: ['admin@test.com'],
  skin: 'black-light',
  routes: {
    new: {
      waitOn: function () {
        return [
          Meteor.subscribe('images'),
          Meteor.subscribe('Jobs')
        ]
      }},
    view: {
      waitOn: function () {
        return [
          Meteor.subscribe('images'),
          Meteor.subscribe('Jobs')
        ]
      }},
    edit: {
      waitOn: function () {
        return [
          Meteor.subscribe('images'),
          Meteor.subscribe('Jobs')
        ]
      }}
  },
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
    }
  }
};

// AdminDashboard.addSidebarItem('New User', AdminDashboard.path('/Users/new'), { icon: 'plus' });
AdminDashboard.addSidebarItem('New Job', AdminDashboard.path('/Jobs/new'), { icon: 'plus' });