/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';

const LeadersDesktop = ({ data }) => {
  const [step, setStep] = useState(0);

  const arrowClick = ({ target: { classList } }) => {
    if (classList.contains('left') && step > 0) {
      setStep(step - 1);
    } else if (classList.contains('right') && step < 2) {
      setStep(step + 1);
    }
  };

  // animation required even number of pictures but we have odd
  const leftData = [...data];
  const rightData = leftData.splice(leftData.length / 2, leftData.length);

  return (
    <>
      <div className="gallery desktop">
        <figure>
          <div
            className="figure-images"
            style={{
              transform: `translateX(-${step * 260}px)`,
            }}
          >
            {
              leftData
                .map((item) => (
                  <div className="wrapper" key={item.name}>
                    <img
                      src={`static/images/about-us/leaders/${item.picture}.jpg`}
                      alt={item.name}
                    />
                    <div className="overlay">
                      <a href={item.email}>Send an email</a>
                      <a href={item.linkedin}>LinkedIn</a>
                    </div>
                  </div>
                ))
            }
          </div>

          <div
            className="figcaptions"
            style={{
              transform: `translateX(-${step * 260}px)`,
            }}
          >
            {
              leftData.map((item) => (
                <figcaption key={item.position}>
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </figcaption>
              ))
            }
          </div>
        </figure>

        <figure>
          <div
            className="figure-images"
            style={{
              transform: `translateX(-${step * 260}px)`,
            }}
          >
            {
              rightData
                .map((item) => (
                  <div className="wrapper" key={item.name}>
                    <img
                      src={`static/images/about-us/leaders/${item.picture}.jpg`}
                      alt={item.name}
                    />
                    <div className="overlay">
                      <a href={item.email}>Send an email</a>
                      <a href={item.linkedin}>LinkedIn</a>
                    </div>
                  </div>
                ))
              }
          </div>

          <div
            className="figcaptions"
            style={{
              transform: `translateX(-${step * 260}px)`,
            }}
          >
            {
              rightData.map((item) => (
                <figcaption key={item.position}>
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </figcaption>
              ))
            }
          </div>
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
