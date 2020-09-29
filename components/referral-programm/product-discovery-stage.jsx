import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { teamData } from '../../data/referral-program';

const ProductDiscoveryStage = ({ shouldHide }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const increaseIndex = (e) => {
    e.preventDefault();
    let stepIndex = currentStep + 1;
    stepIndex = stepIndex >= teamData.length ? 0 : currentStep + 1;
    setCurrentStep(stepIndex);
  };

  const decreaseIndex = (e) => {
    e.preventDefault();
    let stepIndex = currentStep - 1;
    stepIndex = stepIndex < 0 ? teamData.length - 1 : stepIndex;
    setCurrentStep(stepIndex);
  };

  return (
    <div className={classNames('product-discovery-stage--wrapper', { hide: shouldHide })}>
      <h3 className="pds-title">What Discovery Stage do you want?</h3>
      <div className="pds-menu">
        {teamData.map((stage, index) => (
          <div
            className={classNames('pds-menu--item', { active: currentStep === index })}
            role="presentation"
            onClick={(e) => { e.preventDefault(); setCurrentStep(index); }}
            key={stage.title}
          >
            <div className="pds-menu--item-underscore">
              <div className="pds-menu--item-stage">
                {index + 1}
              </div>
              <span className="pds-menu--item-title">{stage.title.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pds-slider--wrapper">
        <div
          className="pds-slider--arrow prev"
          onClick={decreaseIndex}
          role="presentation"
        />
        <div className="pds-slider">
          <figure>
            <div
              className="pds-slider-content"
              style={{
                transform: `translateX(-${currentStep * 100}%)`,
              }}
            >
              {teamData.map((stage, index) => (
                <div className="pds-slider--slide" key={stage.title}>
                  <div className="pds-slider--slide-content">
                    <p className="stage">
                      stage
                      <span>{` ${index + 1}`}</span>
                    </p>
                    <h4>{stage.title}</h4>
                    <p>{stage.description}</p>
                    <h5>
                      <span>Main deliverable</span>
                      :
                      {' '}
                      <a href={stage.href} target="_blank" rel="noopener noreferrer">{stage.mainDeliverable}</a>
                    </h5>
                    <h5>
                      <span>{stage.position}</span>
                      :
                      {` ${stage.name}`}
                    </h5>
                  </div>
                  <div className="pds-img">
                    <LazyLoadImage src={stage.imgSrc} alt={stage.position} />
                  </div>
                </div>
              ))}
            </div>
          </figure>
        </div>
        <div
          className="pds-slider--arrow next"
          onClick={increaseIndex}
          role="presentation"
        />
      </div>
      <div className="lets-talk">
        <span>Ready for the Product Discovery?</span>
        <a href="#lets-discuss" className="button orange-btn">LET&#39;S TALK</a>
      </div>
    </div>
  );
};

ProductDiscoveryStage.propTypes = {
  shouldHide: PropTypes.bool,
};

ProductDiscoveryStage.defaultProps = {
  shouldHide: false,
};

export default ProductDiscoveryStage;
