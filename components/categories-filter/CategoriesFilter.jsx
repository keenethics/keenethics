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
      preventDisablingLast: '',
    };
  }

  toggleExpand = () => {
    this.setState((state) => ({ isExpanded: !state.isExpanded }));
  }

  buttonClick = (category) => {
    const { filterOnChange, selectedCategories, pageTitle } = this.props;
    const selectedItems = selectedCategories.slice();
    const position = selectedCategories.indexOf(category);

    if (position === -1) {
      selectedItems.push(category);
    } else if (selectedItems.length === 1) {
      this.setState({ preventDisablingLast: category });
      setTimeout(() => {
        this.setState({ preventDisablingLast: '' });
      }, 500);
      return;
    } else {
      selectedItems.splice(position, 1);
    }
    const url = `/${pageTitle}?chosen=${selectedItems.join(',')}`;
    window.history.replaceState({ url }, '', url);
    filterOnChange(selectedItems);
  }

  render() {
    const { pageTitle, categoriesList, selectedCategories } = this.props;
    const { isExpanded, preventDisablingLast } = this.state;

    return (
      <div className={`filter filter__${pageTitle}`}>
        <div
          role="button"
          tabIndex={0}
          onClick={this.toggleExpand}
          onKeyPress={this.toggleExpand}
          className={classNames('filter__toggler', { 'filter__toggler--expanded': isExpanded })}
        >
          {
            selectedCategories.length
              && selectedCategories.length !== categoriesList.length
              ? `${selectedCategories.length} filters selected`
              : 'Set the filters'
          }
        </div>

        <SlideDown
          closed={!isExpanded}
          className="filter__slidedown"
        // transitionOnAppear={false}
        >
          <ul className="filter__list">
            {categoriesList.map((category) => (
              <CategoryButton
                category={category}
                key={category}
                isActive={selectedCategories.includes(category)}
                buttonClick={() => this.buttonClick(category)}
                isDisabled={preventDisablingLast === category}
              />
            ))}
            <br />
            <CategoryButton
              category="Clear"
              buttonClick={() => null}
              className="-clear"
            />
            <CategoryButton
              category="Show All"
              buttonClick={() => null}
              className="-show-all"
            />
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
