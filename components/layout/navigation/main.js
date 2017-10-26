/* global window, document */

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
      dimensions: {
        width: -1,
        height: -1,
      },
      showSidebar: false,
      offsetTop: 0,
    };

    this.getPointContent = this.getPointContent.bind(this);
    this.getPointHeight = this.getPointHeight.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);

    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  getPointContent(navigation, currentPoint, currentSubpoint) {
    const { points } = navigation;

    if (points && this.state.dimensions.height > -1) {
      return (
        <ul className="subnavigation" style={{ height: `${this.state.dimensions.height}px` }}>
          <div
            ref={(n) => { this.wrapper = n; }}
            id={currentPoint && currentSubpoint ? 'subnavigation-inner-current' : ''}
            className="subnavigation-inner"
          >
            {points.map((p, i) => (
              <Point
                key={p.name}
                element={p}
                height={this.getPointHeight(points.length)}
                currentSubpoint={currentPoint && currentSubpoint === i}
                scroll={this.constructor.scrollToActiveSubpoint}
              />
            ))}
          </div>
        </ul>
      );
    }
    if (points && this.state.dimensions.height < 0) {
      return (
        <ul className="subnavigation" style={{ height: `${this.state.dimensions.height}px` }}>
          <div className="subnavigation-loading" />
        </ul>
      );
    }
    if (!points) {
      return null;
    }

    return null;
  }
  getPointHeight(numberOfPoints) {
    const { height } = this.state.dimensions;

    if ((height / numberOfPoints) > 90) {
      return `${100 / numberOfPoints}%`;
    }

    return '90px';
  }
  showSidebar() {
    this.setState({
      showSidebar: true,
    });
  }
  handleClickOutside() {
    if (!this.state.showSidebar) {
      return;
    }

    this.setState({
      showSidebar: false,
    });
  }
  updateDimensions() {
    this.setState({
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }
  render() {
    const { showSidebar, dimensions } = this.state;
    const { currentURL } = this.props;

    const { navigation } = config;
    const height = `${100 / navigation.filter(n => !n.type && n.type !== 'hidden').length}%`;

    let currentPoint = null;
    let currentSubpoint = null;

    navigation.forEach((point, i) => {
      if (!currentPoint && point && point.points) {
        const subpoint = point.points.map(p => p.href).indexOf(currentURL.pathname);

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
        <div className="navigation-hamburger" onClick={this.showSidebar} role="presentation">
          <span />
        </div>
        <div className="navigation-inner" style={{ height: dimensions.height }}>
          <div className="navigation-header">
            <Link href={'/'} prefetch>
              <a className="logo">
                <img src="/static/images/svg/logo.svg" alt="Keenethics" width="120px" />
              </a>
            </Link>
          </div>
          <ul className="navigation-content" style={{ height: dimensions.height }}>
            {navigation.map((n, i) => {
              if (n.type && n.type === 'hidden') {
                return null;
              }
              return (
                <Point
                  key={n.name}
                  element={n}
                  height={height}
                  currentPoint={currentPoint === i}
                >
                  {this.getPointContent(n, currentPoint === i, currentSubpoint)}
                </Point>
              );
            })}
          </ul>
          <div className="navigation-footer">
            <Link href="contacts">
              <a className="button">Contact us</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  currentURL: PropTypes.object,
};

Navigation.defaultProps = {
  currentURL: {},
};

export default ClickOutside(Navigation);
