import React from 'react';

const ServicesPagesBodyTotalServiceCost = ({ priceText, text }) => (
  <div className="service-page-total-cost-wrapp">
    <div className="service-page-total-cost">
      {text}
      <span className="service-page-total-cost-background-price">
        {priceText.replace(/ /g, '')}
      </span>
    </div>
  </div>
);

export default ServicesPagesBodyTotalServiceCost;
