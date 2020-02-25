/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import PropTypes from 'prop-types';
// import { isWebpSupported } from 'react-image-webp/dist/utils';

const Webp = ({
  className, style, fallbackImg, alt,
}) => {
  // let isWebpFormatSupported = false;
  // try catch block is needed for nextjs static optimization
  // because isWebpSupported uses html page elements to work
  try {
    // isWebpFormatSupported = isWebpSupported();
  } catch (e) {
    console.warn('Error while checking webp format. This isn\'t critical');
    console.error(e.message);
  }
  return (
    <img
      className={className}
      style={style}
      src={fallbackImg}
      alt={alt}
    />
  );
};
Webp.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  // src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallbackImg: PropTypes.string.isRequired,
};
Webp.defaultProps = {
  className: '',
  style: {},
  alt: '',
};

export default Webp;
