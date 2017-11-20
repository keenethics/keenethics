/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';
import Background from '../components/content/background';

export default class Blog extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${BACKEND_URL}/posts`);
    const json = await res.json();

    return { posts: json };
  }
  constructor(props) {
    super(props);

    this.posts = [];
  }
  render() {
    const { url, posts } = this.props;
    return (
      <Layout currentURL={url}>
        <div className="blog-page">
          <Background className="blog-page-background" />
          <div className="blog-page-content">
            <div className="blog-page-header">
              <div className="blog-page-title">Blog</div>
            </div>
            {!posts.length ? <div className="blog-loading">Loading...</div> : <Posts posts={posts} />}
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
