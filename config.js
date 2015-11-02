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
       { label: 'Created At', name: 'createdAt' }
      ],
      extraFields: ['picture'],
      showEditColumn: true,
      showDelColumn: false,
      showWidget: true,
      color: 'green'
    }
  }
};

AdminDashboard.addSidebarItem('New Job', AdminDashboard.path('/Jobs/new'), { icon: 'plus' });