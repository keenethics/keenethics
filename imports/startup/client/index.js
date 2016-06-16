import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import HomePage from '/imports/ui/pages/home';

Meteor.startup(() => (
  render(<HomePage />, document.getElementById('react-root'))
));
