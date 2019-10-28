import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce } from 'lodash';
import { SlideDown } from 'react-slidedown';

import CategoryButton from './CategoryButton';

// button width + margin-right
const CATEGORY_BUTTON_WIDTH_DESKTOP = 150 + 10;

const getVisibleLinksAmount = (screenWidth) => {
  if (screenWidth >= 960 && screenWidth < 1024) {
    return 3;
  }
  if (screenWidth >= 1024 && screenWidth < 1280) {
    return 2;
  }
  if (screenWidth >= 1280 && screenWidth < 1440) {
    return 4;
  }
  if (screenWidth >= 1440 && screenWidth < 1600) {
    return 6;
  }
  if (screenWidth >= 1600) {
    return 8;
  }
  return NaN;
};

export default class CategoriesFilter extends React.Component {
  handleResize = debounce(() => {
    const { isMobile } = this.state;
    if (window.innerWidth < 960 && !isMobile) {
      this.setState({ isMobile: true });
    } else if (window.innerWidth >= 960 && (isMobile || isMobile === null)) {
      this.setState({ isMobile: false, isExpanded: false });
    }
  })

  constructor() {
    super();
    this.state = {
      isExpanded: false,
      isMobile: null,
      scroll: 0,
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  toggleExpand = () => {
    this.setState((state) => ({ isExpanded: !state.isExpanded }));
  }

  scroll = (step) => {
    const { scroll } = this.state;
    const { categoriesList } = this.props;

    // prevent switching to unexistent steps
    if (
      (step === -1 && scroll === 0)
      || (step === 1 && scroll === categoriesList.length)
    ) {
      return;
    }

    // prevent scrolling to blank space
    if (
      step === 1
      && scroll > categoriesList.length - getVisibleLinksAmount(window.innerWidth)
    ) {
      return;
    }

    this.setState({ scroll: scroll + step });
  };

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
    const { isExpanded, isMobile, scroll } = this.state;

    return (
      <>
        <div className={`filter filter__${pageTitle}`}>
          {
            isMobile
            && (
              <div className="filter__wrapper">
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
                    <div
                      className="filter__categories"
                    >
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
            )
          }

          {
            isMobile === false
            && (
              <div className="filter__wrapper">
                <ul className="filter__list">
                  <div
                    className="filter__categories"
                    style={{ left: scroll * -CATEGORY_BUTTON_WIDTH_DESKTOP }}
                  >
                    {categoriesList.map((category) => (
                      <CategoryButton
                        category={category}
                        key={category}
                        isActive={selectedCategories.includes(category)}
                        buttonClick={() => this.selectCategory(category)}
                      />
                    ))}
                  </div>
                </ul>

                <div className="filter__arrows">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    type="button"
                    className="filter__arrow -left"
                    onClick={() => this.scroll(-1)}
                  />
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    type="button"
                    className="filter__arrow -right"
                    onClick={() => this.scroll(1)}
                  />
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
              </div>
            )
          }

        </div>
      </>
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
