import { withRouter } from "next/router";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout/main";
import Posts from "../components/blog/posts";
import Background from "../components/content/background";
import CategoriesFilter from "../components/categories-filter/CategoriesFilter";
import Pagination from "../components/pagination";
import { getPostsList, getAllCategories } from "../lib/contentful";

const _ = require("lodash");

const RESULTS_PER_PAGE = 8;

const Blog = ({ router, url, allCategories }) => {
  const [selectedPostsCategories, setSelectedPostsCategories] = useState(
    allCategories
  );
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    async function getPosts() {
      const contResp = await getPostsList({
        limit: RESULTS_PER_PAGE,
        skip,
        categories:
          selectedPostsCategories.length < allCategories.length
            ? selectedPostsCategories
            : allCategories
      });

      setPosts(contResp && contResp.items ? contResp.items : []);
      setTotal(contResp && contResp.total ? contResp.total : 0);
      setSkip(contResp && contResp.skip ? contResp.skip : 0);
    }

    getPosts();
  }, [selectedPostsCategories, skip]);

  function filterOnChange(selectedPostsCategories) {
    setSkip(0);
    setSelectedPostsCategories(selectedPostsCategories);
  }

  return (
    <Layout currentURL={router.current}>
      <div className="blog-page">
        {/* <Background className="blog-page-background here1" /> */}
        <div className="blog-page-content">
          <div className="blog-page-header">
            <h1 className="blog-page-title">Blog</h1>
          </div>
          <CategoriesFilter
            categorisList={allCategories}
            selectedCategories={selectedPostsCategories}
            filterOnChange={filterOnChange}
            pageTitle="blog"
          />
          {!posts.length ? (
            <div className="blog-loading">Loading...</div>
          ) : (
            <Posts posts={posts} />
          )}
        </div>
        <div className="text-center">
          <Pagination
            total={total}
            skip={skip}
            limit={RESULTS_PER_PAGE}
            onPageChange={({ skip }) => setSkip(skip)}
          />
        </div>
      </div>
    </Layout>
  );
};

Blog.getInitialProps = async () => {
  const categoriesEntries = (await getAllCategories()).items;
  const allCategories = categoriesEntries.reduce((acc, item) => {
    if (item && item.fields && item.fields.categories)
      return [...acc, ...item.fields.categories];

    return acc;
  }, []);

  return {
    allCategories: _.uniq(allCategories)
  };
};

Blog.propTypes = {
  url: PropTypes.object,
  router: PropTypes.object,
  posts: PropTypes.array
};

Blog.defaultProps = {
  url: {},
  router: {},
  posts: []
};

export default withRouter(Blog);
