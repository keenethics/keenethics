import { Link } from 'next-url-prettifier';

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { Router } from '../../server/routes';

const Posts = ({ posts }) => (
  <div className="blog-page-posts">
    {posts.map(post => (
      <Link route={Router.linkPage('post', { name: post.href })} key={post.title}>
        <a className="blog-page-post">
          <div className="blog-page-post-img">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-page-post-header">
            <div className="date"><Moment format="YYYY MMMM DD - h:mm a">{new Date(+post.date)}</Moment></div>
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
