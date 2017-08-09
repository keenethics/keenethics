/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';

export default class Blog extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${BACKEND_URL}/posts`);
    const json = await res.json();

    return { posts: json };
  }
  constructor(props) {
    super(props);

    this.posts = [];
    this.state = {
      onLoaded: false,
    };
  }
  render() {
    const { url, posts } = this.props;
    return (
      <Layout currentURL={url}>
        <div className="content-wrap content-wrap-bg">
          <div className="content-socket-m">
            <div className="orbit-wrap inner">
              <ul className="orbit"><li /><li /><li /><li /></ul>
              <div className="orbit-star orbit-star-1">
                <span />
              </div>
              {this.f}
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
              <div className="title">{!posts.length ? 'Loading...' : 'Blog'}</div>
            </div>
            {!posts.length ? null : <Posts posts={posts} />}
          </div>
        </div>
      </Layout>
    );
  }
}

Blog.propTypes = {
  url: PropTypes.object,
  posts: PropTypes.array,
};

Blog.defaultProps = {
  url: {},
  posts: [],
};
