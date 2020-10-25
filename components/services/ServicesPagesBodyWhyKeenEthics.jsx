import React from 'react';

const ServicesPagesBodyWhyKeenEthics = ({ whyKeenList, title }) => {
  const leftList = whyKeenList.slice(0, Math.ceil(whyKeenList.length / 2));
  const rightList = whyKeenList.slice(leftList.length);
  const listItem = (side, { icon, alt, description }) => (
    <div className={`service-page-body-why-keen-ethics-list-${side}-item`}>
      <div className={`service-page-body-why-keen-ethics-list-${side}-item-icon`}>
        <img src={icon} alt={alt} />
      </div>
      <div className={`service-page-body-why-keen-ethics-list-${side}-item-descr`}>
        {description}
      </div>
    </div>
  );
  return (
    <section className="service-page-body-why-keen-ethics-wrapp">
      <h3>{title}</h3>
      <div className="service-page-body-why-keen-ethics">
        <div className="service-page-body-why-keen-ethics-list">
          <div className="service-page-body-why-keen-ethics-list-left">
            {leftList.map((item) => listItem('left', item))}
          </div>
          <div className="service-page-body-why-keen-ethics-list-right">
            {rightList.map((item) => listItem('right', item))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPagesBodyWhyKeenEthics;
