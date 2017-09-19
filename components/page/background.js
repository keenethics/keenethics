import React from 'react';
import PropTypes from 'prop-types';

const PageBackground = () => (
  <div className="page-background">
    <div className="orbits">
      <div className="orbit" />
      <div className="orbit" />
      <div className="orbit" />
      <div className="orbit" />
    </div>
    <div className="stars">
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
    </div>
  </div>
);

PageBackground.propTypes = {
};

PageBackground.defaultProps = {
};

export default PageBackground;
