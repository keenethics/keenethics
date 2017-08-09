/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import Raven from 'raven-js';

import Promise from 'promise-polyfill';

import Head from './head';
import Navigation from './navigation/main';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context,
  });

  /* eslint no-console: 0 no-unused-expressions: 0 */
  typeof window !== 'undefined' && window.console && console.error && console.error(ex);
};

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    try {
      return (
        <div className="root">
          <Head />
          <Navigation currentURL={this.props.currentURL} />
          { this.props.children }
        </div>
      );
    } catch (ex) {
      logException(ex);
    }

    return null;
  }
}

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
