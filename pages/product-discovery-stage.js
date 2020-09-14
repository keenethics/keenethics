import React, { useState } from 'react';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Layout from '../components/layout/main';
import productDiscoveryStageData from '../data/productDiscoverystage';

const ProductDiscoveryStage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const increaseIndex = (e) => {
    e.preventDefault();
    let stepIndex = currentStep + 1;
    stepIndex = stepIndex >= productDiscoveryStageData.length ? 0 : currentStep + 1;
    setCurrentStep(stepIndex);
  };

  const decreaseIndex = (e) => {
    e.preventDefault();
    let stepIndex = currentStep - 1;
    stepIndex = stepIndex < 0 ? productDiscoveryStageData.length - 1 : stepIndex;
    setCurrentStep(stepIndex);
  };

  return (
    <Layout noMenu noFooter>
      <div className="product-discovery-stage--wrapper">
        <h3>What is Your Product Discovery Stage?</h3>
        <div className="pds-menu">
          {productDiscoveryStageData.map((stage, index) => (
            <div
              className={classNames('pds-menu--item', { active: currentStep === index })}
              role="presentation"
              onClick={(e) => { e.preventDefault(); setCurrentStep(index); }}
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
                {productDiscoveryStageData.map((stage, index) => (
                  <div className="pds-slider--slide">
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
                        {` ${stage.mainDeliverable}`}
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
      </div>
    </Layout>
  );
};

export default ProductDiscoveryStage;
