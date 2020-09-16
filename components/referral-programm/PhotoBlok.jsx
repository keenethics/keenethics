/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSlider from './PhotoSlider';

const PhotoBlok = ({
  photos,
  shouldHide,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [slider, setSlider] = useState(null);
  const [desktopView, setDesktopView] = useState(false);
  const steps = photos.map(({ alt }) => alt);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window || {};

      setDesktopView(innerWidth > 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setStep = (toStep, skipSlideChange = false) => {
    if (slider && !skipSlideChange) {
      slider.slickGoTo(toStep);
    }
    setCurrentStep(toStep);
  };

  return (
    <div className={classNames('photo-wrapper', { hide: shouldHide })}>
      {desktopView && (
        <div className="photos">
          {photos.map((photo, index) => (
            <div key={photo.alt} className={classNames('photos-item', { big: index < 2 })}>
              <LazyLoadImage src={photo.path} alt={photo.alt} />
            </div>
          ))}
        </div>
      )}

      {!desktopView && (
        <>
          <PhotoSlider
            setRef={(node) => { setSlider(node); }}
            photos={photos || []}
            onStepChange={setStep}
            currentStep={currentStep}
          />

          <ul className="photo-toggler">
            {
              steps.map((s, i) => (
                <li
                  key={s}
                  className={s === steps[currentStep] ? 'active' : ''}
                  onClick={() => setStep(i)}
                />
              ))
            }
          </ul>
        </>
      )}
    </div>
  );
};

PhotoBlok.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  shouldHide: PropTypes.bool,
};

PhotoBlok.defaultProps = {
  shouldHide: false,
};

export default PhotoBlok;
