import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';

const LetsStart = ({ section, isMobile }) => {
  const test = isMobile;
  return (
    <div className="section fp-auto-height" id={section}>
      <div className="home-footer" />
      {test}
    </div>
  );
};

LetsStart.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired,
};

export default LetsStart;
