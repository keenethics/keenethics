import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

import Works from '../components/portfolio/works';
import CategoriesFilter from '../components/categories-filter/CategoriesFilter';

import { works } from '../main.config';

const flatten = (deepArray) => deepArray.reduce((a, b) => a.concat(b), []);

const transformateCategories = (chosenCategory, existCategories) => {
  const categories = existCategories.filter(
    (existCategory) => chosenCategory.filter(
      (category) => category.toLowerCase() === existCategory.toLowerCase(),
    ).length,
  );

  return categories.length ? categories : existCategories;
};

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.getCategoriesList(props.router),
    };

    this.worksCountFor = this.worksCountFor.bind(this);
    this.filterOnChange = this.filterOnChange.bind(this);
    this.wrapperCondition = this.wrapperCondition.bind(this);
  }

  componentDidMount() {
    const subnavigation = document.querySelector('.navigation-item.current > .subnavigation');
    if (subnavigation) {
      subnavigation.style.display = 'none';
      subnavigation.parentElement.classList.add('is-link');
    }
    //  else {
    //   const subnav = document.getElementsByClassName('subnavigation');
    //   console.log(subnav);
    //   for (let i = 0; i < subnav.length; i++) {
    //     const element = subnav[i];
    //     element.style.display = 'none';
    //     element.parentElement.classList.add('is-link');
    //   }
    // }
  }

  getCategoriesList(url) {
    const chosenCategory = url.query.chosen;
    const categories = works
      .map((work) => work.category.main)
      .reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []); // flatten
    const uniqCategories = [...new Set(categories)];
    // no selected categories by default
    const selectedCategories = chosenCategory ? transformateCategories(chosenCategory.split(','), uniqCategories)
      : [];
    return { selectedCategories, categoriesList: uniqCategories };
  }

  worksCountFor(work) {
    const { selectedCategories } = this.state;
    // When no categories selected - show all works
    if (selectedCategories.length === 0) {
      return true;
    }
    return work.category.main.some((category) => selectedCategories.includes(category));
  }

  filterOnChange(selectedCategories) {
    this.setState({ selectedCategories });
  }

  wrapperCondition(component) {
    return <Layout>{component}</Layout>;
  }

  render() {
    const { selectedCategories, categoriesList } = this.state;
    const {
      isFullPage,
      pageTitle,
      topTitle,
      isMobile,
    } = this.props;
    const filteredWorks = works.filter(this.worksCountFor);
    let worksSliceToShow = 0;
    if (isFullPage) {
      worksSliceToShow = isMobile ? filteredWorks.length - 2 : filteredWorks.length - 3;
    }
    const portfolioComponent = (
      <section className="portfolio page__wrapper">
        {topTitle || (
          <div className="page__header">
            <h1 className="page__title">
              <em>Keen</em>
              &nbsp;projects
              <br />
              we put into action
            </h1>
          </div>
        )}
        <CategoriesFilter
          categoriesList={categoriesList}
          selectedCategories={selectedCategories}
          filterOnChange={this.filterOnChange}
          pageTitle={pageTitle || 'portfolio'}
        />
        {
          works.length
            ? <Works works={filteredWorks.slice(worksSliceToShow)} />
            : null
        }
      </section>
    );
    return isFullPage ? portfolioComponent : this.wrapperCondition(portfolioComponent);
  }
}

Portfolio.propTypes = {
  router: PropTypes.object,
  isFullPage: PropTypes.bool,
  pageTitle: PropTypes.string,
  topTitle: PropTypes.node,
  isMobile: PropTypes.bool,
};
Portfolio.defaultProps = {
  router: {},
  isFullPage: false,
  pageTitle: '',
  topTitle: '',
  isMobile: false,
};

export default withRouter(Portfolio);
