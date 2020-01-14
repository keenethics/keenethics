import React from 'react';
import PropTypes from 'prop-types';

const TextHeader = ({ success, error }) => (
  <>
    {success ? (
      <h4 className="green-text-flash">Thank you for subscribing!</h4>
    ) : (
      <h4>Don&apos;t miss updates from us!</h4>
    )}  
  </>
);

TextHeader.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
};

TextHeader.defaultProps = {
  success: false,
  error: false,
};

export default TextHeader;