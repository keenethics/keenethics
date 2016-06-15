import React from 'react';
import {render} from 'react-dom';
import HomeHeader from '/imports/ui/components/homeHeader';
import ListIconsTechnologies from '/imports/ui/components/listIconsTechnologies';
import SlideInfo from '/imports/ui/components/slideInfo';
import SlideServices from '/imports/ui/components/slideServices';

Meteor.startup(function () {
  console.log('hello');
  render((
    <div>
      <HomeHeader />
      <main className="main" role="main">
        <ListIconsTechnologies />
        <SlideInfo />
        <SlideServices />
      </main>
    </div>
  ), document.getElementById('react-root'));
});
