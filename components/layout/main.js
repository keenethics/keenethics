/* global window */

import React from 'react';
import PropTypes from 'prop-types';

import Promise from 'promise-polyfill';

import Head from './head';
import Navigation from './navigation/main';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

const Layout = ({ children, currentURL, noMenu }) => (
  <div className="layout">
    <Head currentURL={currentURL} />
    {noMenu ? null : <Navigation currentURL={currentURL} />}
    <div className="content">
      <div className="content-inner">
        { children }
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  currentURL: PropTypes.object,
  noMenu: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  currentURL: {},
  noMenu: false,
};

export default Layout;
