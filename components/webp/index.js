import React from 'react';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils';

const Webp = ({
  className, style, src, fallbackImg, alt,
}) => (
  <img
    className={className}
    style={style}
    src={isWebpSupported() ? src : fallbackImg}
    alt={alt}
  />
);
Webp.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallbackImg: PropTypes.string.isRequired,
};
Webp.defaultProps = {
  className: '',
  style: {},
  alt: '',
};

export default Webp;
