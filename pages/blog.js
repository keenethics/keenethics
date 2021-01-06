import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import SubscribeModal from '../components/blog/SubscribeModal';
import Layout from '../components/layout/main';
import Posts from '../components/blog/posts';
import BellIcon from '../components/blog/BellIcon';
import CategoriesFilter from '../components/categories-filter/CategoriesFilter';
import { getPostsList } from '../lib/contentful';

const { intersection } = require('lodash');

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

    this.blogPostListRef = React.createRef();

    this.state = {
      categoriesList: [],
      selectedPosts: [],
      step: 1,
      loading: false,
      isSubscribeModalOpen: false,
    };
    this.posts = [];
    this.contentfulPosts = [];
  }

  componentDidMount() {
    const { router, posts } = this.props;
    if (typeof window === 'object') {
      window.addEventListener('scroll', debounce(this.handleScroll, 50), true);
    }
    if (router.asPath === '/blog#subscribe') this.openSubscribeModal();

    if (posts && posts.length) {
      this.setState({ ...getCategoriesList({ url: router.pathname, posts }) });
    }
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'initial';
    window.removeEventListener('scroll', this.handleScroll);
  }

  static async getInitialProps() {
    const contResp = await getPostsList();

    return { posts: contResp && contResp.items ? contResp.items : [] };
  }

  handleScroll = (e) => {
    const { step, loading } = this.state;
    const { posts } = this.props;
    const current = this.blogPostListRef.current;
    const offsetTop = current?.clientHeight
      - current?.offsetTop
      - (e.target.scrollTop + current?.offsetTop);
    if (loading) return;
    if (step * 9 >= posts.length) return;
    if (offsetTop <= 150) {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState((state) => ({ step: state.step + 1, loading: false }));
      }, 500);
    }
  };

  postsFilterd = () => {
    const { selectedPosts, step } = this.state;
    const { posts } = this.props;

    if (
      selectedPosts.length === 0
    ) { return posts.slice(0, step * 9); }

    return posts.reduce((acc, post) => {
      if (post.fields && post.fields.categories) {
        return intersection(post.fields.categories, selectedPosts).length
          ? [...acc, post]
          : acc;
      }
      return acc;
    }, []).slice(0, step * 9);
  };

  filterOnChange = (selectedPosts) => {
    this.setState({ selectedPosts });
  };

  openSubscribeModal = () => {
    const { router } = this.props;
    router.replace(`${router.pathname}#subscribe`);
    this.setState({
      isSubscribeModalOpen: true,
    });
  };

  closeSubscribeModal = () => {
    const { router } = this.props;
    router.replace(router.pathname);
    this.setState({
      isSubscribeModalOpen: false,
    });
  };

  render() {
    const { categoriesList, selectedPosts, isSubscribeModalOpen } = this.state;
    const { router, posts } = this.props;

    return (
      <Layout currentURL={router.current}>
        <div onScroll={this.handleScroll} className="page__wrapper">
          <div className="blog-page-content">
            <div className="page__header">
              <h1 className="page__title">
                <em>keen</em>
                &nbsp;blog&nbsp;
                <button
                  className="invisible-button"
                  onClick={this.openSubscribeModal}
                  type="button"
                >
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
              <Posts ref={this.blogPostListRef} posts={this.postsFilterd()} />
            )}
          </div>
        </div>
        <SubscribeModal
          isOpen={isSubscribeModalOpen}
          close={this.closeSubscribeModal}
        />
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
