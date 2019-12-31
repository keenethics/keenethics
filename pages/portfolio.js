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
    this.setCategoryList = this.setCategoryList.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { router } = this.props;

    if (router.query.chosen !== prevProps.router.query.chosen) {
      this.setCategoryList(router);
    }
  }

  setCategoryList(router) {
    this.setState({
      ...this.getCategoriesList(router),
    });
  }

  getCategoriesList(url) {
    const chosenCategory = url.query.chosen;
    const categories = works
      .map((work) => work.category.main)
      .reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []); // flatten

    console.log(categories);
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
    const {
      selectedCategories,
      categoriesList,
    } = this.state;
    const {
      postIds,
      pageTitle,
      topTitle,
      isMobile,
    } = this.props;
    const filteredWorks = works.filter(this.worksCountFor);

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
        {postIds.length > 0 && (
          <Works works={
            filteredWorks.filter((work) => {
              if (!selectedCategories.length) return postIds.some((title) => title === work.title);
              return true;
            }).slice(isMobile ? -2 : -3)
          }
          />
        )}
        {works.length > 0 && !postIds.length ? <Works works={filteredWorks} /> : null}
      </section>
    );
    return postIds.length ? portfolioComponent : this.wrapperCondition(portfolioComponent);
  }
}

Portfolio.propTypes = {
  router: PropTypes.object,
  postIds: PropTypes.array,
  pageTitle: PropTypes.string,
  topTitle: PropTypes.node,
  isMobile: PropTypes.bool,
};
Portfolio.defaultProps = {
  router: {},
  postIds: [],
  isMobile: false,
  pageTitle: '',
  topTitle: '',
};

export default withRouter(Portfolio);
