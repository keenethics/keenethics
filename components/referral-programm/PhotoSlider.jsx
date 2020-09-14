import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class PhotoSlider extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.currentStep !== nextProps.currentStep) {
      return false;
    }
    return true;
  }

  render() {
    const { photos, setRef, onStepChange } = this.props;
    const sliderBreakpoints = [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.6,
          centerPadding: 0,
          centerMode: true,
          infinite: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.3,
          centerPadding: 0,
          centerMode: true,
          infinite: false,
        },
      },
    ];

    return (
      <SlickSlider
        className="kekSlider"
        arrows={false}
        infinite={false}
        responsive={sliderBreakpoints}
        ref={setRef}
        beforeChange={(_, toStep) => {
          onStepChange(Math.floor(toStep), true);
        }}
      >
        {photos.map((photo) => (
          <div key={photo.alt}>
            <LazyLoadImage className="slider-photo" src={photo.path} alt={photo.alt} />
          </div>
        ))}
      </SlickSlider>
    );
  }
}

PhotoSlider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRef: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
  currentStep: PropTypes.string.isRequired,
};

export default PhotoSlider;
