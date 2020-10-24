import React from 'react';
import CallToActionButton from '../content/CallToActionButton';

const ServicesPagesHeader = () => (
  <div className="service-page-header-wrapp">
    <header className="service-page-header">
      <div className="service-page-header-left-block">
        <div className="service-page-header-left-block-header">
          <h1 className="service-page-header-left-block-header-title">
            WEB DEVELOPMENT SERVICE
          </h1>
          <div className="service-page-header-left-block-header-red-underline" />
          <div className="service-page-header-left-block-header-description">
            <p>
              Developing high-quality and fault-tolerant web platforms for the
              Internet and private networks
            </p>
          </div>
          <div className="service-page-header-left-block-header-call-to-action-btn">
            <CallToActionButton clazz="service-page-header-btn" title="Check the cases" />
          </div>
        </div>
      </div>
      <div className="scroll-info-container">
        <a href="/#services">
          <p className="vertical-text">SCROLL DOWN TO LEARN MORE</p>
        </a>
        <button className="mouse-scroll" type="button">
          <a href="/#services">
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
