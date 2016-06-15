import React from 'react';
import {render} from 'react-dom';
import HomeHeader from '/imports/ui/components/homeHeader';

Meteor.startup(function () {
  console.log('hello');
  render((
    <div>
      <HomeHeader />
    </div>
  ), document.getElementById('react-root'));
});
