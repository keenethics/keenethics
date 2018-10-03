/* global window */

import React from 'react';
import PropTypes from 'prop-types';

import Promise from 'promise-polyfill';

import Head from './head';
import Navigation from './navigation/main';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}
export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: -1,
        height: -1,
      },
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);

    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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
    const {
      children,
      currentURL,
      meta,
      noMenu,
    } = this.props;

    const style = { height: this.state.dimensions.height };
    if (noMenu) {
      style.width = '100vw';
    }
    return (
      <div className="layout">
        <Head currentURL={currentURL} meta={meta} />
        {noMenu ? null : <Navigation currentURL={currentURL} />}
        <div className="content">
          <div className="content-inner" style={style}>
            { children }
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  currentURL: PropTypes.object,
  meta: PropTypes.object,
  noMenu: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  currentURL: {},
  meta: {},
  noMenu: false,
};
