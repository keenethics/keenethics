import { Link } from 'next-url-prettifier';

import React from 'react';
import PropTypes from 'prop-types';
import tinytime from 'tinytime';

import { Router } from '../../routes';

const dateTemplate = tinytime('{MMMM} {DD} – {h}:{mm} {a}');

const Posts = ({ posts }) => (
  <div className="blog-grid">
    {posts.map(post => (
      <Link route={Router.linkPage('post', { name: post.href })} key={post.title}>
        <a className="art-item">
          <div className="img">
            <img src={post.image} alt="" />
          </div>
          <div className="art-desc">
            <div className="art-desc-i">
              <div className="date">
                {dateTemplate.render(new Date(+post.date))}
              </div>
              <div className="title">{post.title}</div>
              <p className="description">{post.subtitle}</p>
            </div>
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
