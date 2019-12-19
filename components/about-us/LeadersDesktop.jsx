/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';

const LeadersDesktop = ({ data }) => {
  console.log('desktop');
  const [step, setStep] = useState(0);

  const arrowClick = ({ target: { classList } }) => {
    if (classList.contains('left') && step > 0) {
      setStep(step - 1);
    } else if (classList.contains('right') && step < data.length) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className="gallery desktop">
        <figure>
          <div className="wrapper">
            <img
              src={`static/images/about-us/leaders/max-savonin.jpg`}
              alt="Max Savonin"
            />
            <div className="overlay">
              <a href="#">Send an email</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <figcaption>
            <h3>Max Savonin</h3>
            <p>Chief Executive Officer</p>
          </figcaption>
        </figure>

        <figure>
          <div className="wrapper">
            <img
              src={`static/images/about-us/leaders/irene-krot.jpg`}
              alt="Irene Krot"
            />
            <div className="overlay">
              <a href="#">Send an email</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <figcaption>
            <h3>Irene Krot</h3>
            <p>Head of Partner Engagement</p>
          </figcaption>
        </figure>
      </div>

      <ul className="values-toggler desktop">
        <li
          className="arrow left"
          onClick={arrowClick}
        />
        {
          times(3, (i) => (
            <li
              key={i}
              className={i === step ? 'active' : ''}
            />
          ))
        }
        <li
          className="arrow right"
          onClick={arrowClick}
        />
      </ul>
    </>
  );
};

LeadersDesktop.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LeadersDesktop;
