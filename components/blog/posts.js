import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


const Posts = ({ posts }) => (
  <div className="blog-page-posts">
    {posts.map(post => (
      <Link href={`/post?name=${post.href}`} as={`/blog/${post.href}`} key={post.title}>
        <a className="blog-page-post">
          <div className="blog-page-post-img">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-page-post-header">
            <div className="date"><Moment format="MMMM DD YYYY">{new Date(+post.date)}</Moment></div>
            <div className="title">{post.title}</div>
          </div>
        </a>
      </Link>
    ))}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array,
};
Posts.defaultProps = {
  posts: [],
};

export default Posts;
