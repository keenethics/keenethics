import Link from "next/link";

import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const _ = require("lodash");

const Posts = ({ posts }) => (
  <div className="blog-page-posts">
    {posts.map(post => {
      const {
        fields: { slug, title, heroImage, publishDate, tags }
      } = post;

      const url = _.get(heroImage, "fields.file.url");
      const alt =
        _.get(heroImage, "fields.description") ||
        _.get(heroImage, "fields.title");

      return (
        <div className="blog-page-post">
          <figure className="blog-page-post-img">
            <img
              src={url ? `https://${url}?fm=jpg&fl=progressive&q=1&w=1888` : ""}
              alt={alt}
            />
          </figure>
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
          </div>
          {/* <div className="blog-page-post-header">
            <div className="title">{title}</div>
          </div> */}
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

{
  /* <Link href={`/post?name=${slug}`} as={`/blog/${slug}`} key={slug}> */
}
{
  /* </Link> */
}
