import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'next/router';
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

class CategoriesFilter extends React.Component {
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
    const {
      filterOnChange,
      selectedCategories,
      pageTitle,
      router,
    } = this.props;
    const selectedItems = selectedCategories.slice();
    const position = selectedCategories.indexOf(category);

    if (position === -1) {
      selectedItems.push(category);
    } else {
      selectedItems.splice(position, 1);
    }

    router.replace({
      pathname: `/${pageTitle}`,
      query: { chosen: selectedItems.join(',') },
    });

    filterOnChange(selectedItems);
  }

  clearCategories = () => {
    const { pageTitle, filterOnChange, router } = this.props;

    router.replace({
      pathname: `/${pageTitle}`,
      query: { chosen: '' },
    });

    filterOnChange([]);
  }

  selectAllCategories = () => {
    const {
      filterOnChange, categoriesList, pageTitle, router,
    } = this.props;

    router.replace({
      pathname: `/${pageTitle}`,
      query: { chosen: categoriesList.join(',') },
    });
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
                        <li className="filter__item" key={category}>
                          <CategoryButton
                            category={category}
                            isActive={selectedCategories.includes(category)}
                            buttonClick={() => this.selectCategory(category)}
                          />
                        </li>
                      ))}
                    </div>
                    <div className="filter__controls">
                      <li className="filter__item">
                        <CategoryButton
                          category="Clear"
                          buttonClick={this.clearCategories}
                          className={classNames('-clear', { '-hidden': !selectedCategories.length })}
                        />
                      </li>
                      <li className="filter__item">
                        <CategoryButton
                          category="Show All"
                          buttonClick={this.selectAllCategories}
                          className="-show-all"
                        />
                      </li>
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
                    style={{ left: scroll * (-1 * CATEGORY_BUTTON_WIDTH_DESKTOP) }}
                  >
                    {categoriesList.map((category) => (
                      <li className="filter__item" key={category}>
                        <CategoryButton
                          category={category}
                          isActive={selectedCategories.includes(category)}
                          buttonClick={() => this.selectCategory(category)}
                        />
                      </li>
                    ))}
                  </div>
                </ul>

                <div className="filter__arrows">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    type="button"
                    className="filter__arrow filter__arrow-left"
                    onClick={() => this.scroll(-1)}
                  />
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    type="button"
                    className="filter__arrow filter__arrow-right"
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
  router: PropTypes.object.isRequired,
};

CategoriesFilter.defaultProps = {
  selectedCategories: [],
};

export default withRouter(CategoriesFilter);
