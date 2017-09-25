import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ className }) => (
  <div className={`page-background ${className}`}>
    <div className="orbits">
      <div className="orbit" />
      <div className="orbit" />
      <div className="orbit" />
      <div className="orbit" />
    </div>
    <div className="stars">
      <div className="star-1" />
      <div className="star-2" />
      <div className="star-3" />
      <div className="star-4" />
    </div>
  </div>
);

Background.propTypes = {
  className: PropTypes.string,
};

Background.defaultProps = {
  className: 'content-navigation-background',
};

export default Background;
