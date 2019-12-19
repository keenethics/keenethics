import React from 'react';
import PropTypes from 'prop-types';

const Testimonial = ({
  isVisible,
  children,
}) => (
  <div className={`partners--testimonial${isVisible ? ' visible' : ''}`}>
    {children}
  </div>
);

Testimonial.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Testimonial;
