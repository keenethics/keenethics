/* global BACKEND_URL, fetch, document */

import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';
import Background from '../components/content/background';
import CategoriesFilter from '../components/categories-filter/CategoriesFilter';
import { getPostsList } from '../lib/contentful';
const _ = require('lodash');

const flatten = deepArray => deepArray.reduce((a, b) => a.concat(b), []);

const transformateCategories = (chosenCategory, existCategories) => {
  const categories = existCategories.filter(
    existCategory =>
      chosenCategory.filter(category => category.toLowerCase() === existCategory.toLowerCase())
        .length,
  );

  return categories.length ? categories : existCategories;
};

function getCategoriesList({ posts, url }) {
  const chosenCategory = url.query.chosen;
  const categories = posts.reduce((acc, post) => {
    if (post.fields && post.fields.categories) {
      return [...acc, ...post.fields.categories];
    }

    return acc;
  }, []);
  const uniqCategories = [...new Set(categories)];
  const selectedPosts = chosenCategory
    ? transformateCategories(chosenCategory.split(','), uniqCategories)
    : uniqCategories;

  return { selectedPosts, categorisList: uniqCategories };
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategories: [],
      categorisList: [],
      selectedPosts: [],
    };
    this.posts = [];
    this.contentfulPosts = [];
  }

  componentDidMount() {
    document.body.style.overflowY = 'hidden';

    const { url, posts } = this.props;
    posts && posts.length && this.setState({ ...getCategoriesList({ url, posts }) });
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'initial';
  }

  static async getInitialProps() {
    const contResp = await getPostsList();

    return { posts: contResp && contResp.items ? contResp.items : [] };
  }

  postsFilterd = () => {
    const { selectedPosts } = this.state;
    const { posts } = this.props;

    if (selectedPosts.length === posts.length) return posts;

    return posts.reduce((acc, post) => {
      if (post.fields && post.fields.categories) {
        return _.intersection(post.fields.categories, selectedPosts).length ? [...acc, post] : acc;
      }

      return acc;
    }, []);
  };

  filterOnChange = selectedPosts => {
    this.setState({ selectedPosts });
  };

  render() {
    const { categorisList, selectedPosts } = this.state;
    const { router, posts } = this.props;

    return (
      <Layout currentURL={router.current}>
        <div className="blog-page">
          <Background className="blog-page-background" />
          <div className="blog-page-content">
            <div className="blog-page-header">
              <h1 className="blog-page-title">Blog</h1>
            </div>
            <CategoriesFilter
              categorisList={categorisList}
              selectedCategories={selectedPosts}
              filterOnChange={this.filterOnChange}
              pageTitle="blog"
            />
            {!posts.length ? (
              <div className="blog-loading">Loading...</div>
            ) : (
              <Posts posts={this.postsFilterd()} />
            )}
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
