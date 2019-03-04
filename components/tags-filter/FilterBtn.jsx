import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function FilterBtn({ isActive, buttonClick, category }) {
  return (
    <li className="filter__item">
      <button
        className={classnames('filter__btn', { '-red': isActive })}
        onClick={e => buttonClick(e, category)}
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
};
FilterBtn.defaultProps = {
  isActive: false,
};
