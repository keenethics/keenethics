import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Posts from '../components/blog/posts';
import { getPostsList } from '../lib/contentful';

const KeenBlog = ({ section }) => {
  const [test, setTest] = useState();

  const getPosts = async () => {
    const res = await getPostsList();
    const posts = res.items;
    setTest(posts.slice(posts.length - 2));
  };

  useEffect(() => {
    if (!test) {
      getPosts();
    }
  });

  const topTitle = (
    <h1 className="home-section-title">
      Keen Blog
    </h1>
  );
  return (
    <div className="section fp-auto-height keen-blog" id={section}>
      {topTitle}
      <Posts posts={test} />
    </div>
  );
};

KeenBlog.propTypes = {
  // isMobile: PropTypes.bool.isRequired,
  section: PropTypes.string,
};

KeenBlog.defaultProps = {
  section: '',
};

export default KeenBlog;
