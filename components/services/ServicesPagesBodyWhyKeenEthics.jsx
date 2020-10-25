import React from 'react';

const ServicesPagesBodyWhyKeenEthics = ({ whyKeenList, title }) => (
  <section className="service-page-body-why-keen-ethics-wrapp">
    <h3>{title}</h3>
    <div className="service-page-body-why-keen-ethics">
      <div className="service-page-body-why-keen-ethics-list">
        <div className="service-page-body-why-keen-ethics-list-left">
          {whyKeenList.map(({ icon, alt, description }) => (
            <div className="service-page-body-why-keen-ethics-list-left-item">
              <div className="service-page-body-why-keen-ethics-list-left-item-icon">
                <img src={icon} alt={alt} />
              </div>
              <div className="service-page-body-why-keen-ethics-list-left-item-descr">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesPagesBodyWhyKeenEthics;
