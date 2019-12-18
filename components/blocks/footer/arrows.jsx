import React from 'react';
import PropTypes from 'prop-types';

export const LeftArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      label="slider"
      type="button"
      className={className}
      onClick={onClick}
    />
  );
};

LeftArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

LeftArrow.defaultProps = {
  className: '',
};

export const RightArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      label="slider"
      type="button"
      className={className}
      onClick={onClick}
    />
  );
};

RightArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

RightArrow.defaultProps = {
  className: '',
};
