import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function FilterBtn({
  isActive,
  buttonClick,
  category,
  isDisabled,
  className,
}) {
  return (
    <li className={`filter__item ${className}`}>
      <button
        className={classnames(
          'filter__btn',
          className,
          {
            '-red': isActive,
            '-disabled': isDisabled,
          },
        )}
        onClick={buttonClick}
        type="button"
      >
        {category}
      </button>
    </li>
  );
}
FilterBtn.propTypes = {
  isActive: PropTypes.bool,
  buttonClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};
FilterBtn.defaultProps = {
  isActive: false,
  isDisabled: false,
  className: '',
};
