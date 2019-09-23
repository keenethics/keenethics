import Link from "next/link";

import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const _ = require("lodash");

const Posts = ({ posts }) => (
  <div className="blog-page-posts">
    {posts.map((post, counter) => {
      const {
        fields: { slug, title, heroImage, publishDate, tags, description }
      } = post;

      const url = _.get(heroImage, "fields.file.url");
      {
        /* const alt =
        _.get(heroImage, "fields.description") ||
        _.get(heroImage, "fields.title"); */
      }

      return (
        <div key={slug} className="blog-page-post">
          <div className="blog-page-post-wrap-img">
            <div
              className="blog-page-post-img"
              style={{
                backgroundImage: url
                  ? `url(https://${url}?fm=jpg&fl=progressive&q=85&w=1888)`
                  : "red"
              }}
            />
          </div>
          <div className="blog-page-post-info">
            <div className="blog-page-post-info-tag-container">
              {tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <span className="blog-page-post-date">
              <Moment format="MMMM D, YYYY">{publishDate}</Moment>
            </span>
            <h2>{title}</h2>
            {counter === 0 && description && (
              <React.Fragment>
                <p className="blog-page-post-description">
                  {description.slice(0, 128).concat("...")}
                </p>
                <a
                  className="blog-page-post-read-more"
                  href={`/post?name=${slug}`}
                >
                  Read More
                </a>
              </React.Fragment>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array
};
Posts.defaultProps = {
  posts: []
};

export default Posts;
