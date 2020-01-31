import React from 'react';
import PropTypes from 'prop-types';

const TextHeader = ({ success }) => (
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
};

TextHeader.defaultProps = {
  success: false,
};

export default TextHeader;
