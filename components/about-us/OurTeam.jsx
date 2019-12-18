import React from 'react';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { times } from 'lodash';

import CategoryButton from '../categories-filter/CategoryButton';

const OurTeam = () => {
  const redirect = () => {
    console.log('rendering');
  };
  
  return (
    <div className="our-team">
      <h2>Meet Our Team</h2>
      <p className="subheading">
        We work hand-in-hand to deliver robust software solutions to our business partners.
        This is our corporate culture, and we want
        <br />
        you to be a part of it!
      </p>
      <CategoryButton
        buttonClick={redirect}
        category="Open Positions"
        isActive
      />
      <div className="pictures">
        {
          times(5, (index) => (
            <img
              alt={`team ${index + 1}`}
              src={`static/images/about-us/team-images/${index + 1}.jpg`}
            />
          ))
        }
      </div>
      <p className="description">
        Now is the perfect time to join KeenEthics!
        <br />
        Learn more about our benefits or check open vacancies.
        <CategoryButton
          buttonClick={redirect}
          category="Open Positions"
          isActive
        />
      </p>
    </div>
  );
};

export default OurTeam;
