import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const _ = require('lodash');

const Posts = ({ posts }) => (
  <div className="page__list">
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
          <a className="page__item page__item-link">
            <figure className="page__item-figure">
              <div className="page__item-figure-img-wrap">
                <img
                  src={url ? `https://${url}?fm=jpg&fl=progressive&q=85&w=350` : ''}
                  alt={alt}
                  className="page__item-img"
                />
              </div>
              <figcaption className="page__item-figcaption">
                <div className="page__item-figcaption-heading">
                  <ul className="page__item-tags">
                    {
                      post.fields.categories
                        ? post.fields.categories.map((category) => (<li className="page__item-tag" key={category}>{category}</li>))
                        : null
                    }
                  </ul>
                  <Moment format="MMM DD, YYYY" className="page__item-date">{new Date(publishDate)}</Moment>
                </div>
                <h3 className="page__item-title">
                  {title}
                </h3>
              </figcaption>
            </figure>
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
