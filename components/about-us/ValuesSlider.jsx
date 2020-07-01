import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import { ItemDescription } from './StoryItem';

class Slider extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.step !== nextProps.step) {
      return false;
    }
    return true;
  }

  render() {
    const { values, setRef, onStepChange } = this.props;
    const sliderBreakpoints = [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1.14,
          centerPadding: 0,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
          centerMode: true,
        },
      },
    ];

    return (
      <SlickSlider
        slidesToShow={1.3}
        responsive={sliderBreakpoints}
        className="values-slides"
        // centerMode
        // centerPadding="20%"
        ref={setRef}
        arrows={false}
        beforeChange={(_, toStep) => {
          onStepChange(Math.floor(toStep), true);
        }}
      >
        {
          values.map((value) => (
            <div key={value.title} className="slide">
              <div className="img-wrap">
                <img
                  src={value.image}
                  alt={value.title}
                />
              </div>
              <div className="caption">
                <h4>{value.title}</h4>
                <p>
                  <ItemDescription
                    text={value.description}
                    links={value.links}
                    visible
                  />
                </p>
              </div>
            </div>
          ))
        }
      </SlickSlider>
    );
  }
}

Slider.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRef: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default Slider;
