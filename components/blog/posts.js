import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../content/ListItem';

const Posts = ({ posts }) => (
  <div className="page__list">
    {posts.map((post) => {
      const {
        fields: { slug },
      } = post;

      return (<ListItem work={post.fields} key={slug} />);
    })}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array,
};
Posts.defaultProps = {
  posts: [],
};

export default Posts;
