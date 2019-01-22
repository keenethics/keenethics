/* global BACKEND_URL, fetch, document */
import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';
import Background from '../components/content/background';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.posts = [];
  }
  componentDidMount() {
    document.body.style.overflowY = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflowY = 'initial';
  }
  static async getInitialProps() {
    const res = await fetch(`${BACKEND_URL}/posts`);
    const json = await res.json();

    return { posts: json };
  }
  render() {
    const { router, posts } = this.props;
    return (
      <Layout currentURL={router.current}>
        <div className="blog-page">
          <Background className="blog-page-background" />
          <div className="blog-page-content">
            <div className="blog-page-header">
              <h1 className="blog-page-title">Blog</h1>
            </div>
            {!posts.length ? <div className="blog-loading">Loading...</div> : <Posts posts={posts} />}
          </div>
        </div>
      </Layout>
    );
  }
}

Blog.propTypes = {
  router: PropTypes.object,
  posts: PropTypes.array,
};

Blog.defaultProps = {
  router: {},
  posts: [],
};

export default withRouter(Blog);
