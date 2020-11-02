import React from 'react';
import PropTypes from 'prop-types';

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

ServicesPagesBodyTotalServiceCost.propTypes = {
  priceText: PropTypes.string,
  text: PropTypes.string,
};

export default ServicesPagesBodyTotalServiceCost;
