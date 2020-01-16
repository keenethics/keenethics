import React from 'react';
import PropTypes from 'prop-types';
import RocketBlueSVG from './RocketBlueSVG';
import RocketRedSVG from './RocketRedSVG';
import RocketFailSVG from './RocketFailSVG';

const RocketHeader = ({ success, error }) => {
  if (!success && !error) {
    return (
      <>
        <RocketBlueSVG />
        <h4>
KEEN
          <span className="black">BLOG</span>
        </h4>
      </>
    );
  } if (success) {
    return (
      <>
        <RocketRedSVG />
        <h4>SUCCESSFULLY</h4>
      </>
    );
  }
  return (
    <>
      <RocketFailSVG />
      <h4>SOMETHING WENT WRONG</h4>
    </>
  );
};

RocketHeader.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
};

RocketHeader.defaultProps = {
  success: false,
  error: false,
};

export default RocketHeader;
