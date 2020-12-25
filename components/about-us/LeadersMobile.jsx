/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const LeadersMobile = ({ data }) => {
  const [step, setStep] = useState(0);
  const ourLeaders = [...data];
  let sliderRef = null;

  const stepper = (toStep) => {
    sliderRef.slickGoTo(toStep * 2);
    setStep(toStep);
  };

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    beforeChange: (_, toStep) => {
      stepper(toStep / 2);
    },
  };

  return (
    <>
      <div className="gallery mobile">
        <Slider
          slidesToScroll={2}
          swipeToSlide
          className="hello"
          ref={(node) => { sliderRef = node; }}
          {...settings}
        >
          {
            ourLeaders.sort((a, b) => a.id - b.id).map((item, index) => (
              <figure key={index}>
                <div className="wrapper">
                  <img
                    src={`static/images/about-us/leaders/${item.picture}.webp`}
                    alt={item.name}
                  />
                  <div className="overlay">
                    <a href={item.email}>Send an email</a>
                    <a href={item.linkedin}>LinkedIn</a>
                  </div>
                </div>

                <figcaption>
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </figcaption>
              </figure>
            ))
          }
        </Slider>
      </div>

      <ul className="values-toggler mobile">
        {
          ourLeaders.slice(0, 3).map((_, i) => (
            <li
              key={i}
              className={i <= step ? 'active' : ''}
              onClick={() => stepper(i)}
            />
          ))
        }
      </ul>
    </>
  );
};

LeadersMobile.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LeadersMobile;
