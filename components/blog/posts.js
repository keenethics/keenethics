import { Link } from 'next-url-prettifier';

import React from 'react';
import PropTypes from 'prop-types';
import tinytime from 'tinytime';

import { Router } from '../../routes';

const dateTemplate = tinytime('{MMMM} {DD} – {h}:{mm} {a}');

const Posts = ({ posts }) => (
  <div className="blog-page-posts">
    {posts.map(post => (
      <Link route={Router.linkPage('post', { name: post.href })} key={post.title}>
        <a className="blog-page-post">
          <div className="blog-page-post-img">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-page-post-header">
            <div className="date">{dateTemplate.render(new Date(+post.date))}</div>
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
