/* global fetch */

import React from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.posts = [];
    this.state = {
      onLoaded: false,
    };

    (async () => {
      if (typeof fetch !== 'undefined') {
        const res = await fetch('/posts');
        this.posts = await res.json();

        this.setState({
          onLoaded: true,
        });
      }
    })();
  }

  render() {
    const { url } = this.props;

    return (
      <Layout currentURL={url}>
        <div className="content-wrap content-wrap-bg">
          <div className="content-socket-m">
            <div className="orbit-wrap inner">
              <ul className="orbit"><li /><li /><li /><li /></ul>
              <div className="orbit-star orbit-star-1">
                <span />
              </div>
              <div className="orbit-star orbit-star-2">
                <span />
              </div>
              <div className="orbit-star orbit-star-3">
                <span />
              </div>
              <div className="orbit-star orbit-star-4">
                <span />
              </div>
            </div>
            <div className="stars-wrap">
              <div className="stars-1" />
              <div className="stars-2" />
              <div className="stars-3" />
              <div className="stars-4" />
            </div>
            <div className="filter-head">
              <div className="title">{!this.state.onLoaded ? 'Loading...' : 'Blog'}</div>
            </div>
            {!this.state.onLoaded ? null : <Posts posts={this.posts} />}
          </div>
        </div>
      </Layout>
    );
  }
}

Blog.propTypes = {
  url: PropTypes.object,
};

Blog.defaultProps = {
  url: {},
};
