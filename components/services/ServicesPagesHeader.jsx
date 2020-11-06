import React from 'react';
import CallToActionButton from '../content/CallToActionButton';

const ServicesPagesHeader = () => (
  <div className="service-page-header-wrapp">
    <header className="service-page-header">
      <div className="service-page-header-left-block">
        <div className="service-page-header-left-block-header">
          <h1 className="service-page-header-left-block-header-title">
            Indoor Positioning System
          </h1>
          <div className="service-page-header-left-block-header-red-underline" />
          <div className="service-page-header-left-block-header-description">
            <p>
              This solution will bring your customer service and employee
              management to a new level.
            </p>
          </div>
          <div className="service-page-header-left-block-header-call-to-action-btn">
            <CallToActionButton
              clazz="service-page-header-btn"
              title="Check the cases"
            />
          </div>
        </div>
      </div>
      <div className="scroll-info-container">
        <a href="#advantages">
          <p className="vertical-text">SCROLL DOWN TO LEARN MORE</p>
        </a>
        <button className="mouse-scroll" type="button">
          <a href="#advantages">
            <span className="mouse-scroll-wheel" />
          </a>
        </button>
      </div>
      <div className="circle-container">
        <div className="orange-circle">
          <div className="border" />
        </div>
      </div>
    </header>
  </div>
);

export default ServicesPagesHeader;
