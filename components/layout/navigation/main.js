import { withRouter } from 'next/router';
import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';

import Point from './point';

import { config } from '../../../main.config';

class Navigation extends React.Component {
  static scrollToActiveSubpoint(scroll) {
    const inner = document.getElementById('subnavigation-inner-current');

    if (inner) {
      inner.scrollTop = scroll;
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
    };

    this.getPointContent = this.getPointContent.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  getPointContent(navigation, currentPoint, currentSubpoint) {
    const { points } = navigation;

    if (points) {
      return (
        <ul className="subnavigation">
          <div
            ref={(n) => { this.wrapper = n; }}
            id={currentPoint && currentSubpoint ? 'subnavigation-inner-current' : ''}
            className="subnavigation-inner"
          >
            {points.map((p, i) => (
              <Point
                key={p.name}
                element={p}
                isSubpoint
                currentSubpoint={currentPoint && currentSubpoint === i}
                scroll={this.constructor.scrollToActiveSubpoint}
              />
            ))}
          </div>
        </ul>
      );
    }
    if (!points) {
      return null;
    }

    return null;
  }

  showSidebar() {
    this.props.toggleNav();

    const {
      showSidebar,
    } = this.state;

    this.setState({
      showSidebar: !showSidebar,
    });
  }

  handleClickOutside() {
    if (!this.state.showSidebar) {
      return;
    }
    this.props.toggleNav();
    this.setState({
      showSidebar: false,
    });
  }

  render() {
    const { showSidebar } = this.state;
    const { router, isTablet } = this.props;

    const currentURL = router;

    const { navigation } = config;

    let currentPoint = null;
    let currentSubpoint = null;

    navigation.forEach((point, i) => {
      if (!currentPoint && point && point.points) {
        const subpoint = point.points.map((p) => p.href).indexOf(currentURL.pathname);

        if (subpoint > -1) {
          currentSubpoint = subpoint;
          currentPoint = i;
        }
      }
      if (point && point.href && point.href === currentURL.pathname) {
        currentPoint = i;
      }
    });

    return (
      <div className={showSidebar ? 'navigation is-open' : 'navigation'}>
        <div
          className="navigation-hamburger"
          onClick={this.showSidebar}
          onKeyDown={this.showSidebar}
          role="presentation"
        >
          <span />
        </div>
        <div className="navigation-inner">
          <Link href="/">
            <a className="navigation-logo">
              <img src="/static/images/logo.svg" alt="Keenethics" />
            </a>
          </Link>
          <ul className="navigation-content">
            {navigation.map((n, i) => {
              if (n.type && n.type === 'hidden') {
                return null;
              }
              return (
                <Point
                  key={n.name}
                  element={n}
                  currentPoint={currentPoint === i}
                  isTablet={isTablet}
                >
                  {isTablet && this.getPointContent(n, currentPoint === i, currentSubpoint)}
                </Point>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  router: PropTypes.object,
  toggleNav: PropTypes.func.isRequired,
  isTablet: PropTypes.bool,
};

Navigation.defaultProps = {
  router: {},
  isTablet: false,
};

export default withRouter(ClickOutside(Navigation));
