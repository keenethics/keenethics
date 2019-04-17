/* global BACKEND_URL, fetch, document */
import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';
import Background from '../components/content/background';
import CategoriesFilter from '../components/categories-filter/CategoriesFilter';

const flatten = deepArray => deepArray.reduce((a, b) => a.concat(b), []);

const transformateCategories = (chosenCategory, existCategories) => {
  const categories = existCategories.filter(existCategory =>
    chosenCategory.filter(category =>
      category.toLowerCase() === existCategory.toLowerCase()).length);
  return categories.length ? categories : existCategories;
};

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.getCategoriesList(props.url),
    };
    this.posts = [];
    this.postsCountFor = this.postsCountFor.bind(this);
    this.filterOnChange = this.filterOnChange.bind(this);
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

  getCategoriesList(url) {
    const { posts } = this.props;
    const chosenCategory = url.query.chosen;
    const categories = posts
      .map(post => post.categories)
      .reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []); // flatten
    const uniqCategories = [...new Set(categories)];
    const selectedPosts = chosenCategory
      ? transformateCategories(chosenCategory.split(','), uniqCategories)
      : uniqCategories;
    return { selectedPosts, categorisList: uniqCategories };
  }

  postsCountFor(post) {
    const { selectedPosts } = this.state;
    return post.categories.filter(category => selectedPosts.includes(category)).length;
  }

  filterOnChange(selectedPosts) {
    this.setState({ selectedPosts });
  }

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
            {!posts.length ? <div className="blog-loading">Loading...</div> : <Posts posts={posts.filter(this.postsCountFor)} />}
          </div>
        </div>
      </Layout>
    );
  }
}

Blog.propTypes = {
  router: PropTypes.object,
  posts: PropTypes.array,
  url: PropTypes.object,
};

Blog.defaultProps = {
  router: {},
  posts: [],
  url: {},
};

export default withRouter(Blog);
