import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

  render() {
    const { pageTitle, categoriesList, selectedCategories } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className={`filter filter--${pageTitle}`}>
        <div
          role="button"
          tabIndex={0}
          onClick={this.toggleExpand}
          onKeyPress={this.toggleExpand}
          className={classNames('filter--toggler', { 'filter--toggler__expanded': isExpanded })}
        >
          {
            selectedCategories.length
              && selectedCategories.length !== categoriesList.length
              ? `${selectedCategories.length} filter selected`
              : 'Set the filters'}
        </div>
      </div>
    );
  }
}

CategoriesFilter.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  categoriesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
};

CategoriesFilter.defaultProps = {
  selectedCategories: [],
};
