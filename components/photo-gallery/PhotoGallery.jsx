/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';

const PhotoGallery = ({ data, nextStep }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(nextStep);
  }, [nextStep]);

  return (
    <div className="photo-gallery-container">
      <div className="photo-gallery">
        <figure>
          <div
            className="figure-images"
            style={{
              transform: `translateX(-${step * 100}%)`,
            }}
          >
            {
                            data
                              .map((item) => (
                                <div className="wrapper" key={item.name}>
                                  <img
                                    src={item.picture}
                                    alt={item.name}
                                  />
                                </div>
                              ))
                        }
          </div>

          <div
            className="figcaptions"
            style={{
              transform: `translateX(-${step * 100}%)`,
            }}
          >
            {
                            data.map((item) => (
                              <figcaption key={item.position}>
                                <h3>{item.name}</h3>
                                <p>{item.position}</p>
                              </figcaption>
                            ))
                        }
          </div>
        </figure>
      </div>

      <ul className="values-toggler">
        {
                    times(data.length, (i) => (
                      <li
                        key={i}
                        className={i === step ? 'active' : ''}
                        onClick={() => setStep(i)}
                      />
                    ))
                }

      </ul>
    </div>
  );
};

PhotoGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextStep: PropTypes.number.isRequired,
};

export default PhotoGallery;
