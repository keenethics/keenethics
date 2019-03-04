import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import FilterBtn from './FilterBtn';

export default function TagsFilter({
  categorisList,
  selectedCategories,
  filterOnChange,
  pageTitle,
}) {
  const disabledBtn = (btn) => {
    btn.classList.add('-disabled');
    setTimeout(() => btn.classList.remove('-disabled'), 500);
  };

  const buttonClick = (e, category) => {
    const selectedItems = selectedCategories.slice();
    const position = selectedItems.indexOf(category);

    if (position === -1) {
      selectedItems.push(category);
    } else {
      if (selectedItems.length === 1) {
        disabledBtn(e.target);
        return;
      }
      selectedItems.splice(position, 1);
    }

    const url = `/${pageTitle}?chosen=${selectedItems.join(',')}`;
    window.history.replaceState({ url }, '', url);

    filterOnChange(selectedItems);
  };

  const showAllWorks = (e) => {
    const selectedItems = selectedCategories.slice();

    if (selectedItems.length === categorisList.length) {
      disabledBtn(e.target);
      return;
    }

    const url = `/${pageTitle}`;
    window.history.replaceState({ url }, '', url);

    filterOnChange(categorisList);
  };

  return (
    <div className={`filter filter--${pageTitle}`}>
      <div className="filter__show-all">
        <button
          onClick={showAllWorks}
          className={classnames('filter__btn -show-all', { '-active': selectedCategories.length !== categorisList.length })}
        >
            Show all
        </button>
      </div>
      <ul className="filter__list">
        {categorisList.map(category => (
          <FilterBtn
            category={category}
            key={category}
            isActive={selectedCategories.indexOf(category) !== -1}
            buttonClick={buttonClick}
          />
        ))}
      </ul>
    </div>
  );
}
TagsFilter.propTypes = {
  categorisList: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array,
  filterOnChange: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};
TagsFilter.defaultProps = {
  selectedCategories: [],
};
