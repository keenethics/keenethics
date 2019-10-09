import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const _ = require('lodash');

const Posts = ({ posts }) => {
  const [windowMode, setWindowMode] = useState('desktop');
  const isMobileWindowMode = windowMode === 'mobile';

  function windowModeSetter() {
    if (window.innerWidth < 768) {
      setWindowMode('mobile');
    }
    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      setWindowMode('tablet');
    }
    if (window.innerWidth >= 992) {
      setWindowMode('desktop');
    }
  }

  useEffect(() => {
    windowModeSetter();
    window.addEventListener('resize', windowModeSetter);

    return () => {
      window.removeEventListener('resize', windowModeSetter);
    };
  }, []);

  return (
    <div className="blog-page-posts">
      {posts.map((post, counter) => {
        const {
          fields: {
            slug, title, heroImage, publishDate, tags, description,
          },
        } = post;

        const url = _.get(heroImage, 'fields.file.url');
        const styles = counter === 0 && !isMobileWindowMode
          ? {
            backgroundImage: url
              ? `url(https://${url}?fm=jpg&fl=progressive&q=85&w=1200)`
              : '',
          }
          : {
            backgroundImage: url
              ? `url(https://${url}?fm=jpg&fl=progressive&q=85&w=${
                isMobileWindowMode ? 700 : 950
              })`
              : '',
          };
        /* const alt =
        _.get(heroImage, "fields.description") ||
        _.get(heroImage, "fields.title"); */

        return (
          <div key={slug} className="blog-page-post">
            <div className="blog-page-post-wrap-img">
              <a className="" href={`/post?name=${slug}`}>
                <div className="blog-page-post-img" style={styles} />
              </a>
            </div>
            <div className="blog-page-post-info">
              <div className="blog-page-post-info-tag-container">
                {tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="blog-page-post-date">
                <Moment format="MMMM D, YYYY">{publishDate}</Moment>
              </span>
              <h2>
                <a className="" href={`/post?name=${slug}`}>
                  {title}
                </a>
              </h2>
              {counter === 0 && description && (
                <>
                  <p className="blog-page-post-description">
                    {description.slice(0, 128).concat('...')}
                  </p>
                  <a
                    className="blog-page-post-read-more"
                    href={`/post?name=${slug}`}
                  >
                    Read More
                  </a>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};
Posts.defaultProps = {
  posts: [],
};

export default Posts;
