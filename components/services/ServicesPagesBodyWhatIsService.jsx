import React from 'react';
import CallToActionButton from '../content/CallToActionButton';
import ServicesPagesBodyOtherServices from './ServicesPagesBodyOtherServices';

const ServicePagesBodyWhatIsService = ({ title, paragraphs }) => (
  <section className="service-page-body-what-is-service-wrapp">
    <div className="service-page-body-what-is-service">
      <div className="service-page-body-what-is-service-title">{title}</div>
      <div className="service-page-body-what-is-service-paragraphs">
        {paragraphs.map((paragraph) => (
          <p className="service-page-body-what-is-service-paragraphs-paragraph">{paragraph}</p>
        ))}
      </div>
      <div className="service-page-body-what-is-service-call-to-action-btn">
        <CallToActionButton title="Ask us questions" />
      </div>
    </div>
    <ServicesPagesBodyOtherServices />
  </section>
);

export default ServicePagesBodyWhatIsService;
