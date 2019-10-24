import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SlideDown } from 'react-slidedown';

import CategoryButton from './CategoryButton';

export default class CategoriesFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  toggleExpand = () => {
    this.setState((state) => ({ isExpanded: !state.isExpanded }));
  }

  selectCategory = (category) => {
    const { filterOnChange, selectedCategories, pageTitle } = this.props;
    const selectedItems = selectedCategories.slice();
    const position = selectedCategories.indexOf(category);

    if (position === -1) {
      selectedItems.push(category);
    } else {
      selectedItems.splice(position, 1);
    }
    const url = `/${pageTitle}?chosen=${selectedItems.join(',')}`;
    window.history.replaceState({ url }, '', url);
    filterOnChange(selectedItems);
  }

  clearCategories = () => {
    const { pageTitle, filterOnChange } = this.props;

    const url = `/${pageTitle}`;
    window.history.replaceState({ url }, '', url);

    filterOnChange([]);
  }

  selectAllCategories = () => {
    const { filterOnChange, categoriesList, pageTitle } = this.props;

    const url = `/${pageTitle}?chosen=${categoriesList.join(',')}`;
    window.history.replaceState({ url }, '', url);
    filterOnChange(categoriesList);
  }

  render() {
    const { pageTitle, categoriesList, selectedCategories } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className={`filter filter__${pageTitle}`}>
        <div
          role="button"
          tabIndex={0}
          onClick={this.toggleExpand}
          onKeyPress={this.toggleExpand}
          className={classNames('filter__toggler', {
            'filter__toggler--expanded': isExpanded,
            'filter__toggler--selected': selectedCategories.length,
          })}
        >
          {
            selectedCategories.length
              ? `${selectedCategories.length} filters selected`
              : 'Set the filters'
          }
        </div>

        <SlideDown
          closed={!isExpanded}
          className="filter__slidedown"
        >
          <ul className="filter__list">
            <div className="filter__categories">
              {categoriesList.map((category) => (
                <CategoryButton
                  category={category}
                  key={category}
                  isActive={selectedCategories.includes(category)}
                  buttonClick={() => this.selectCategory(category)}
                />
              ))}
            </div>
            <div className="filter__controls">
              <CategoryButton
                category="Clear"
                buttonClick={this.clearCategories}
                className={classNames('-clear', { '-hidden': !selectedCategories.length })}
              />
              <CategoryButton
                category="Show All"
                buttonClick={this.selectAllCategories}
                className="-show-all"
              />
            </div>

          </ul>
        </SlideDown>
      </div>
    );
  }
}

CategoriesFilter.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  categoriesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  filterOnChange: PropTypes.func.isRequired,
};

CategoriesFilter.defaultProps = {
  selectedCategories: [],
};
