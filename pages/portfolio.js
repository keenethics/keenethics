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
    this.activeAllWorks = this.activeAllWorks.bind(this);
    this.disabledBtn = this.disabledBtn.bind(this);

  }

  componentDidMount() {
    let subnavigation = document.querySelector('.navigation-item.current > .subnavigation');
    subnavigation.style.display = 'none';
    subnavigation.parentElement.classList.add('is-link');
  }

  getFilterList() {
    const { url } = this.props;

    works.map(work => {
      work.category.main.map(category => {
        if (this.filterList.indexOf(category) < 0) {
          this.filterList.push(category);
        }
      });
    });

    let ankerPosition = url.asPath.indexOf('#');

    if (ankerPosition > -1) {
      let anker = url.asPath.slice(ankerPosition + 1, url.asPath.length);
      let ankerArr = anker.split('-');
      ankerArr.forEach((el, i) => {
        ankerArr[i] = el.charAt(0).toUpperCase() + el.substr(1)
      });

      let category = ankerArr.join(' ');

      if (category === 'All') {
        this.activeWorks = this.filterList.slice();
      } else {
        works.map(work => {
          work.category.main.map(c => {
            if (c === category) {
              this.activeWorks[0] = c;
            }
          });
        });
      }
    } else {
      this.activeWorks = this.filterList.slice();
    };
  };

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
        this.disabledBtn(e.target);
        return;
      }
      this.activeWorks.splice(position, 1);
    }

    this.setState({ activeWorks: this.activeWorks });
  };

  activeAllWorks(e) {
    if (this.state.activeWorks.length == this.filterList.length) {
      this.disabledBtn(e.target);
      return;
    }
    this.activeWorks = this.filterList.slice();
    this.setState({activeWorks: this.activeWorks});
  };

  disabledBtn(btn) {
    btn.classList.add('-disabled');
    setTimeout(function() { btn.classList.remove('-disabled') }, 500);
  };
  
  render() {
    const { url } = this.props;
    const {activeWorks} = this.state;
    const FilterBtn = ({ category }) => (
      <li className="filter__item">
        <button className={`filter__btn ${activeWorks.indexOf(category)>=0 ? '-red' : '' }`} onClick={this.handleClick}>{category}</button>
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
              <button onClick={this.activeAllWorks} className={`filter__btn -show-all ${this.state.activeWorks.length !== this.filterList.length ? '-active' : '' }` }>Show all</button>
            </div>
            <ul className="filter__list">
              {this.filterList.map(category => (
                <FilterBtn category={category} key={category}/>
              ))}
            </ul>
          </div>
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
