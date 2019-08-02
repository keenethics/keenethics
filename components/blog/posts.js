import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const _ = require('lodash');

const Posts = ({ posts }) => (
  <div className="blog-page-posts">
    {posts.map((post) => {
      const {
        fields: {
          slug, title, heroImage, publishDate,
        },
      } = post;
      const url = _.get(heroImage, 'fields.file.url');
      const alt = _.get(heroImage, 'fields.description') || _.get(heroImage, 'fields.title');

      return (
        <Link href={`/post?name=${slug}`} as={`/blog/${slug}`} key={slug}>
          <a className="blog-page-post">
            <div className="blog-page-post-img">
              <img src={url ? `https://${url}?fm=jpg&fl=progressive&q=85&w=350` : ''} alt={alt} />
            </div>
            <div className="blog-page-post-header">
              <div className="date">
                <Moment format="MMMM DD YYYY">{new Date(publishDate)}</Moment>
              </div>
              <div className="title">{title}</div>
            </div>
          </a>
        </Link>
      );
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
