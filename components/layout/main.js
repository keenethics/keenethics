import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import Promise from 'promise-polyfill';
import classnames from 'classnames';

import '../../styles/main.scss';

import Head from './head';
import Footer from './footer';

import Navigation from './navigation/main';
import PostsContext from '../context/posts-context';
import { getPostsList } from '../../lib/contentful';

const isClient = typeof window !== 'undefined';

if (isClient && !window.Promise) {
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
      showNav: true,
      posts: [],
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    getPostsList().then((res) => {
      this.setState({ posts: res.items });
    });

    if (isClient) {
      window.addEventListener('resize', this.updateDimensions);

      this.updateDimensions();
    }
  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('resize', this.updateDimensions);
    }
  }

  updateDimensions() {
    if (isClient) {
      this.setState({
        dimensions: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      });
    }
  }

  toggleNav() {
    const { showNav } = this.state;

    this.setState({
      showNav: !showNav,
    });
  }

  render() {
    const {
      dimensions,
      posts,
    } = this.state;
    const {
      children,
      router,
      meta,
      noMenu,
      noFooter,
      className,
      style,
    } = this.props;

    const currentURL = router.route;

    const contentInnerStyle = { ...style };

    const isTablet = isClient ? (dimensions.width <= 768 && dimensions.width > 480) : false;
    const isMobile = isClient ? dimensions.width <= 480 : false;

    return (
      <div className="layout">
        <Head currentURL={currentURL} meta={meta} />
        {noMenu || (
          <Navigation
            currentURL={currentURL}
            toggleNav={this.toggleNav}
            isBurgerMenu={isTablet || isMobile}
          />
        )}
        <div className={noMenu ? 'content content-no-menu' : 'content'}>
          <PostsContext.Provider value={posts}>
            <div className={classnames('content-inner', className)} style={contentInnerStyle}>
              {children}
              {noFooter || (
                <Footer
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              )}
            </div>
          </PostsContext.Provider>
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
  noFooter: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

Layout.defaultProps = {
  children: null,
  router: {},
  meta: {},
  noMenu: false,
  noFooter: false,
  className: '',
  style: {},
};

export default withRouter(Layout);
