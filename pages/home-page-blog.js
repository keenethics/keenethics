import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Posts from '../components/blog/posts';
import PostsContext from '../components/context/posts-context';

const KeenBlog = ({ section }) => {
  const posts = useContext(PostsContext);
  const topTitle = (
    <h1 className="home-section-title">
      Keen Blog
    </h1>
  );
  return (
    <div className="section fp-auto-height keen-blog" id={section}>
      {topTitle}
      <Posts posts={posts} />
    </div>
  );
};

KeenBlog.propTypes = {
  section: PropTypes.string,
};

KeenBlog.defaultProps = {
  section: '',
};

export default KeenBlog;
