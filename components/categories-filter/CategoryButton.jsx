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
    <button
      className={classnames(
        'filter__btn',
        className,
        {
          '-active': isActive,
          '-disabled': isDisabled,
        },
      )}
      onClick={buttonClick}
      type="button"
    >
      {category}
    </button>
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
