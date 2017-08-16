/* global window */

import React from 'react';
import PropTypes from 'prop-types';

import Promise from 'promise-polyfill';

import Head from './head';
import Navigation from './navigation/main';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

const Layout = ({ children, currentURL }) => (
  <div className="root">
    <Head currentURL={currentURL} />
    <Navigation currentURL={currentURL} />
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  currentURL: PropTypes.object,
};

Layout.defaultProps = {
  children: null,
  currentURL: {},
};

export default Layout;
