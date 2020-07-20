import React from 'react';
import { useRouter } from 'next/router';
import { times } from 'lodash';
import {
  LazyLoadComponent,
} from 'react-lazy-load-image-component';
import CategoryButton from '../categories-filter/CategoryButton';

const OurTeam = () => {
  const router = useRouter();
  const redirect = () => {
    router.push('/careers');
  };

  return (
    <div className="our-team">
      <h2>Meet Our Team</h2>
      <p className="subheading">
        We work hand-in-hand to deliver robust software solutions to our
        business partners. This is our corporate culture, and we want
        <br />
        {' '}
        you to be a part of it!
      </p>
      <CategoryButton
        buttonClick={redirect}
        category="Open Positions"
        isActive
      />
      <div className="pictures-wrapper">
        <div className="pictures">
          {times(5, (index) => (
            <div className="pictures-item" key={index}>
              <LazyLoadComponent>
                <picture>
                  <source
                    srcSet={`static/images/about-us/team-images/${
                      index + 1
                    }.webp`}
                  />
                  <img
                    src={`static/images/about-us/team-images/${index + 1}.jpg`}
                    alt={`team ${index + 1}`}
                  />
                </picture>
              </LazyLoadComponent>
            </div>
          ))}
        </div>
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
