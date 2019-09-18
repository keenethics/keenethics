import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import Promise from 'promise-polyfill';

import '../../styles/main.scss';

import Head from './head';
import Navigation from './navigation/main';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}
class Layout extends React.Component {
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
      dimensions,
    } = this.state;
    const {
      children,
      router,
      meta,
      noMenu,
    } = this.props;

    const currentURL = router.route;

    const style = { height: dimensions.height };
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
  router: PropTypes.object,
  meta: PropTypes.object,
  noMenu: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  router: {},
  meta: {},
  noMenu: false,
};

export default withRouter(Layout);
