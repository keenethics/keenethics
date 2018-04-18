/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';

import Works from '../components/portfolio/works';

import { works } from '../main.config';

const flatten = deepArray => deepArray.reduce( (a, b) => a.concat(b), []);

const transformateCategories = (chosenCategory, existCategories) => {
  const categories = existCategories.filter(existCategory =>
    chosenCategory.filter(category => category.toLowerCase() === existCategory.toLowerCase()).length);

  return categories.length ? categories : existCategories;
}

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.getGategoriesList.call(this)
    };

    this.worksCountFor = this.worksCountFor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showAllWorks = this.showAllWorks.bind(this);
    this.disabledBtn = this.disabledBtn.bind(this);
  }

  componentDidMount() {
    const subnavigation = document.querySelector('.navigation-item.current > .subnavigation');
    subnavigation.style.display = 'none';
    subnavigation.parentElement.classList.add('is-link');
  }

  getGategoriesList() {
    const { url } = this.props;
    const chosenCategory = url.query.chosen;
    const categories = works
      .map(work => work.category.main)
      .reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []) // flatten
    const uniqCategories = [...new Set(categories)]

    const selectedWorks = chosenCategory && chosenCategory !== 'All'
      ? transformateCategories(chosenCategory.split(','), uniqCategories)
      : uniqCategories;

    return { selectedWorks, categorisList: uniqCategories };
  }

  worksCountFor(work) {
    const { selectedWorks } = this.state;

    return work.category.main.filter(category => selectedWorks.includes(category)).length;
  }

  handleClick(e) {
    const selectedWorks = this.state.selectedWorks.slice();
    const category = e.target.innerHTML;
    const position = selectedWorks.indexOf(category);

    if (position === -1) {
      selectedWorks.push(category);
    } else {
      if (selectedWorks.length === 1) {
        this.disabledBtn(e.target);
        return;
      }
      selectedWorks.splice(position, 1);
    }

    const url = `/portfolio?chosen=${selectedWorks.join(',')}`;
    window.history.replaceState({ url }, '', url);

    this.setState({ selectedWorks });
  }

  showAllWorks(e) {
    let selectedWorks = this.state.selectedWorks.slice();
    const { categorisList } = this.state;

    if (selectedWorks.length === categorisList.length) {
      this.disabledBtn(e.target);
      return;
    }

    selectedWorks = categorisList.slice();
    this.setState({ selectedWorks });
  }

  disabledBtn(btn) {
    btn.classList.add('-disabled');
    setTimeout(() => btn.classList.remove('-disabled'), 500);
  }

  render() {
    const { url } = this.props;
    const { selectedWorks, categorisList } = this.state;
    const FilterBtn = ({ category }) => (
      <li className="filter__item">
        <button className={`filter__btn ${selectedWorks.indexOf(category) !== -1 ? '-red' : '' }`} onClick={this.handleClick}>{category}</button>
      </li>
    );

    return (
      <Layout currentURL={url}>
        <section className="portfolio">
          <Background className="portfolio__background" />
          <div className="portfolio__header">
            <h1 className="portfolio__title">Portfolio</h1>
          </div>
          <div className="filter">
            <div className="filter__show-all">
              <button onClick={this.showAllWorks} className={`filter__btn -show-all ${selectedWorks.length !== categorisList.length ? '-active' : '' }` }>Show all</button>
            </div>
            <ul className="filter__list">
              {categorisList.map(category => (
                <FilterBtn category={category} key={category} />
              ))}
            </ul>
          </div>
          {
            works.length
              ? <Works works={works.filter(this.worksCountFor)} />
              : null
          }
        </section>
      </Layout>
    );
  }
}


Portfolio.propTypes = {
  url: PropTypes.object,
  works: PropTypes.array,
};

Portfolio.defaultProps = {
  url: {},
  works: [],
};
