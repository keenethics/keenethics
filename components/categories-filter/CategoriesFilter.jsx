import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'next/router';
import { debounce } from 'lodash';
import { SlideDown } from 'react-slidedown';

import CategoryButton from './CategoryButton';

// button width
const CATEGORY_BUTTON_WIDTH_DESKTOP = 170;

class CategoriesFilter extends React.Component {
  handleResize = debounce(() => {
    const { isMobile } = this.state;
    const { categoriesList } = this.props;
    const newState = {};

    const leftMenuWidth = 160;
    const containerPadding = 30;
    const rigthButtonsWidth = 300;

    const buttonsWidth = CATEGORY_BUTTON_WIDTH_DESKTOP * categoriesList.length;

    // TODO Replace -10 with scroll width

    const elem = document.getElementById('filter__list');
    newState.sliderWidth = !elem
      ? window.innerWidth
      - leftMenuWidth
      - 2 * containerPadding
      - rigthButtonsWidth
      : elem.clientWidth;

    if (newState.sliderWidth >= buttonsWidth) {
      newState.arrowsIsHidden = true;
    } else {
      newState.arrowsIsHidden = false;
    }

    newState.scroll = 0;

    if (window.innerWidth < 994 && !isMobile) {
      newState.isMobile = true;
    } else if (window.innerWidth >= 994 && (isMobile || isMobile === null)) {
      newState.isMobile = false;
      newState.isExpanded = false;
    }
    this.setState({ ...newState });
  });

  constructor() {
    super();
    this.state = {
      isExpanded: false,
      isMobile: null,
      scroll: 0,
      sliderWidth: 0,
      arrowsIsHidden: false,
    };
    this.categoriesRef = React.createRef();
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
  };

  scroll = (step) => {
    const { scroll, sliderWidth } = this.state;
    const { categoriesList } = this.props;

    const buttonsWidth = CATEGORY_BUTTON_WIDTH_DESKTOP * categoriesList.length - 0;

    let newScroll;

    if (step === 1) {
      newScroll = scroll - 250;
      if (buttonsWidth - sliderWidth + newScroll < 0) {
        newScroll = sliderWidth - buttonsWidth - 10;
        setTimeout(() => {
          this.setState({ scroll: newScroll + 10 });
        }, 100);
      }
    } else if (step === -1) {
      newScroll = scroll + 250;
      if (newScroll > 0) {
        newScroll = 10;
        setTimeout(() => {
          this.setState({ scroll: newScroll - 10 });
        }, 100);
      }
    }
    this.setState({ scroll: newScroll });
  };

  scrollIfOutside = (category) => {
    const { scroll, sliderWidth } = this.state;
    const { categoriesList } = this.props;
    const leftPosition = categoriesList.indexOf(category) * CATEGORY_BUTTON_WIDTH_DESKTOP;

    if (scroll + leftPosition < 0) {
      setTimeout(() => {
        this.setState({ scroll: leftPosition * -1 });
      }, 100);
    }

    const rigthPosition = (categoriesList.indexOf(category) + 1) * CATEGORY_BUTTON_WIDTH_DESKTOP;

    if (scroll + rigthPosition > sliderWidth) {
      setTimeout(() => {
        this.setState({ scroll: sliderWidth - rigthPosition });
      }, 100);
    }
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
      this.scrollIfOutside(category);
    } else {
      selectedItems.splice(position, 1);
    }

    router.replace({
      pathname: `/${pageTitle}`,
      query: { chosen: selectedItems.join(',') },
    });

    filterOnChange(selectedItems);
  };

  clearCategories = () => {
    const { pageTitle, filterOnChange, router } = this.props;

    router.replace({
      pathname: `/${pageTitle}`,
      query: { chosen: '' },
    });

    filterOnChange([]);
  };

  selectAllCategories = () => {
    const {
      filterOnChange, categoriesList, pageTitle, router,
    } = this.props;

    router.replace({
      pathname: `/${pageTitle}` || '/portfolio',
      query: { chosen: categoriesList.join(',') },
    });
    filterOnChange(categoriesList);
  };

  render() {
    const {
      pageTitle,
      categoriesList,
      selectedCategories,
      router,
    } = this.props;
    const {
      isExpanded,
      isMobile,
      scroll,
      arrowsIsHidden,
      sliderWidth,
    } = this.state;
    const categoriesListFullWidth = categoriesList.length * CATEGORY_BUTTON_WIDTH_DESKTOP;
    const { pathname } = router;
    const hideShowAllButton = ['/portfolio', '/blog'];
    console.log(hideShowAllButton.includes(pathname));

    return (
      <>
        <div className={`filter filter__${pageTitle}`}>
          {isMobile && (
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
                {selectedCategories.length
                  ? `${selectedCategories.length} filters selected`
                  : 'Set the filters'}
              </div>

              <SlideDown closed={!isExpanded} className="filter__slidedown">
                <ul className="filter__list">
                  <div className="filter__categories">
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
                        className={classNames('-clear', {
                          '-hidden': !selectedCategories.length,
                        })}
                      />
                    </li>
                    <li className="filter__item">
                      <CategoryButton
                        category="Show All"
                        buttonClick={() => router.push('/portfolio')}
                        className="-show-all"
                      />
                    </li>
                  </div>
                </ul>
              </SlideDown>
            </div>
          )}

          {!isMobile && (
            <div className="filter__wrapper">
              <ul
                ref={this.categoriesRef}
                className="filter__list"
                id="filter__list"
              >
                <div className="filter__categories" style={{ left: scroll }}>
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

              {!arrowsIsHidden && (
                <div className="filter__arrows">
                  <button
                    type="button"
                    disabled={scroll === 0}
                    className="filter__arrow filter__arrow-left"
                    onClick={() => this.scroll(-1)}
                    label="previous"
                  />
                  <button
                    type="button"
                    disabled={(sliderWidth + Math.abs(scroll)) >= categoriesListFullWidth}
                    className="filter__arrow filter__arrow-right"
                    onClick={() => this.scroll(1)}
                    label="next"
                  />
                </div>
              )}

              <div className="filter__controls">
                <CategoryButton
                  category="Clear"
                  buttonClick={this.clearCategories}
                  className={classNames('-clear', {
                    '-hidden': !selectedCategories.length,
                  })}
                />
                {
                    hideShowAllButton.includes(pathname)
                      ? null
                      : (
                        <CategoryButton
                          category="Show All"
                          buttonClick={() => router.push('/portfolio')}
                          className="-show-all"
                        />
                      )
                  }
              </div>
            </div>
          )}
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
