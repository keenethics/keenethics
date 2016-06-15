import React from 'react';
import {render} from 'react-dom';

import HomePage from '/imports/ui/pages/home';

Meteor.startup(function () {
  console.log('hello');
  render(<HomePage />, document.getElementById('react-root'));
});
