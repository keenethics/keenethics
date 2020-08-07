import React from 'react';
import Slider from 'react-slick';

const steps = [
  { label: 'Business Discovery' },
  { label: 'UX/UI Discovery' },
  { label: 'Technical Discovery' },
  { label: 'Project Estimate' },
];

const DiscoveryStageReferralProgram = () => (
  <section className="discovery-stage">
    <div className="discovery-stage-steppers">
      {steps.map(({ label }, index) => (
        <div div key={label} className="discovery-stage-steppers-item">
          <span className="discovery-stage-steppers-item-number">
            {index + 1}
          </span>
          <span className="discovery-stage-steppers-item-text">
            {label}
          </span>
        </div>
      ))}
    </div>

    <div className="discovery-stage-slider">
      <div className="discovery-stage-slides">
        <div className="discovery-stage-slides-item">
          <div className="discovery-stage-slides-item-img">
            <img src="static/images/referral-program/oksana-pleten.jpg" alt="" />
          </div>
          <div className="discovery-stage-slides-item-description">
            <div className="discovery-stage-slides-item-description-stage">1</div>
            <div className="discovery-stage-slides-item-description-title">1</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DiscoveryStageReferralProgram;
