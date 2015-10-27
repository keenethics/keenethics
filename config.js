AdminConfig = {
  name: 'Admin',
  adminEmails: ['admin@test.com'],
  collections: {
    Jobs: {
      icon: 'file-o',
      omitFields: ['createdAt'],
      tableColumns: [
       { label: 'Title', name: 'title' },
       { label: 'Description', name: 'description' },
       { label: 'Link', name: 'link' }
       // { label: 'User', name: 'owner', template: 'userEmail' }
      ],
      showEditColumn: true, // Set to false to hide the edit button. True by default.
      showDelColumn: true, // Set to false to hide the edit button. True by default.
      showWidget: false,
      color: 'green'
    }
  }
  // autoForm:
  //   omitFields: ['createdAt']
};

AdminDashboard.addSidebarItem('New Job', AdminDashboard.path('/Jobs/new'), { icon: 'plus' });
