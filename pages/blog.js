import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import SubscribeModal from '../components/blog/SubscribeModal';
import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';
import BellIcon from '../components/blog/BellIcon';
import CategoriesFilter from '../components/categories-filter/CategoriesFilter';
import { getPostsList } from '../lib/contentful';

const _ = require('lodash');

const transformateCategories = (chosenCategory, existCategories) => {
  const categories = existCategories.filter(
    (existCategory) => chosenCategory.filter(
      (category) => category.toLowerCase() === existCategory.toLowerCase(),
    ).length,
  );

  return categories.length ? categories : existCategories;
};

function getCategoriesList({ posts, url }) {
  const chosenCategory = url.query ? url.query.chosen : '';
  const categories = posts.reduce((acc, post) => {
    if (post.fields && post.fields.categories) {
      return [...acc, ...post.fields.categories];
    }

    return acc;
  }, []);
  const uniqCategories = [...new Set(categories)];
  const selectedPosts = chosenCategory
    ? transformateCategories(chosenCategory.split(','), uniqCategories)
    : [];

  return { selectedPosts, categoriesList: uniqCategories };
}

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesList: [],
      selectedPosts: [],
      isSubscribeModalOpen: false,
    };
    this.posts = [];
    this.contentfulPosts = [];
  }

  componentDidMount() {
    document.body.style.overflowY = 'hidden';

    const { url, posts } = this.props;

    if (posts && posts.length) {
      this.setState({ ...getCategoriesList({ url, posts }) });
    }
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

    if (selectedPosts.length === posts.length || selectedPosts.length === 0) return posts;

    return posts.reduce((acc, post) => {
      if (post.fields && post.fields.categories) {
        return _.intersection(post.fields.categories, selectedPosts).length ? [...acc, post] : acc;
      }
      return acc;
    }, []);
  };

  filterOnChange = (selectedPosts) => {
    this.setState({ selectedPosts });
  };

  openSubscribeModal = () => {
    this.setState({
      isSubscribeModalOpen: true,
    });
  }

  closeSubscribeModal = () => {
    this.setState({
      isSubscribeModalOpen: false,
    })
  }

  render() {
    const { categoriesList, selectedPosts, isSubscribeModalOpen } = this.state;
    const { router, posts } = this.props;

    return (
      <Layout currentURL={router.current}>
        <div className="page__wrapper">
          <div className="blog-page-content">
            <div className="page__header">
              <h1 className="page__title">
                <em>keen</em>
                &nbsp;blog&nbsp;
                <button className="invisible-button" onClick={this.openSubscribeModal}>
                  <BellIcon />
                </button>
                <br />
                on tech and business
              </h1>
            </div>
            <CategoriesFilter
              categoriesList={categoriesList}
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
        <SubscribeModal isOpen={isSubscribeModalOpen} close={this.closeSubscribeModal} />
      </Layout>
    );
  }
}

Blog.propTypes = {
  url: PropTypes.object,
  router: PropTypes.object,
  posts: PropTypes.array,
};

Blog.defaultProps = {
  url: {},
  router: {},
  posts: [],
};

export default withRouter(Blog);
