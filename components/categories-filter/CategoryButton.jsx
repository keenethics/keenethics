import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function FilterBtn({
  isActive,
  buttonClick,
  category,
  isDisabled,
}) {
  return (
    <li className="filter__item">
      <button
        className={classnames(
          'filter__btn',
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
};
FilterBtn.defaultProps = {
  isActive: false,
  isDisabled: false,
};
