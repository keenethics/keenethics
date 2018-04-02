/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';

import Works from '../components/portfolio/works';

import { works } from '../main.config';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    
    this.filterList = [];
    this.activeWorks = [];
    this.getFilterList();
    
    this.state = {
      activeWorks: this.activeWorks
    }

    this.filter = this.filter.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  getFilterList() {
    works.map(work => {
      work.category.main.map(category => {
        if (this.filterList.indexOf(category) < 0) {
          this.filterList.push(category);
        }
      });
    });
    this.activeWorks = this.filterList.slice();
  }

  filter(work) {
    for (let wi = 0; wi < this.state.activeWorks.length; wi++) {
      for (let ci = 0; ci < work.category.main.length; ci++) {
        if (work.category.main[ci] === this.state.activeWorks[wi]) {
          return true;
        }
      }
    }
    return false;
  }

  handleClick(e) {
    let category = e.target.innerHTML;
    let position = this.activeWorks.indexOf(category);

    if (position < 0) {
      this.activeWorks.push(category);
    } else {
      if (this.activeWorks.length === 1) {
        return;
      }
      this.activeWorks.splice(position, 1);
    }
    this.setState({activeWorks: this.activeWorks});
  };
  
  render() {
    const { url } = this.props;
    const {activeWorks} = this.state;

    const FilterBtn = ({ category }) => (
      <li className="filter__item">
        <button className={`filter__btn ${activeWorks.indexOf(category)>=0 ? 'filter__btn--active' : '' }`} onClick={this.handleClick}>{category}</button>
      </li>
    );

    return (
      <Layout currentURL={url}>
        <section className="portfolio">
          <Background className="portfolio__background" />
          <div className="portfolio__header">
            <h1 className="portfolio__title">Portfolio</h1>
          </div>
          <ul className="filter__list">
            {this.filterList.map((category) => (
              <FilterBtn category={category} key={category}/>
            ))}
          </ul>
          {works.length && <Works works={works.filter(this.filter)} />}
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
