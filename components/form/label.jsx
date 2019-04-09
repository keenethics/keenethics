import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classnames';

const Label = ({
  htmlFor,
  children,
  className,
}) => {
  const labelClass = cc({
    label: true,
    [className]: className,
  });

  return (
    <label
      className={labelClass}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
};
Label.defaultProps = {
  children: 'Label',
  className: null,
};

export default Label;
