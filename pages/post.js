/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import Link from 'next/link';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Error from './_error';

export default class Post extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.post.title !== this.props.post.title) {
      document.querySelector('.content-inner').scrollTo(0, 0);
    }
  }
  static async getInitialProps(p) {
    const { name } = p.query;

    const res = await fetch(`${BACKEND_URL}/post/${name}`);
    const json = await res.json();

    return { post: json };
  }
  render() {
    const { url, post } = this.props;
    const { hrefToPreviousPost, hrefToNextPost } = post;

    if (post && post.statusCode && post.statusCode === 404) {
      return <Error statusCode={404} />;
    }

    const meta = {};

    if (post && post.metaTitle && post.metaDescription) {
      meta.title = post.metaTitle;
      meta.description = post.metaDescription;
    }

    return (
      <Layout currentURL={url} meta={meta}>
        <div className="blog-post-page page">
          <div className="blog-post-page-header page-header">
            <div className="blog-post-page-title page-title">
              <h1>{post.title}</h1>
              <div className="blog-post-page-description">
                <div className="blog-post-page-user">
                  <span>{post.author}</span>
                </div>
                <div className="blog-post-page-date">
                  <span><Moment format="MMMM DD YYYY">{new Date(+post.date)}</Moment></span>
                </div>
              </div>
              <Background className="open-source-page-background" />
            </div>
          </div>
          <div className="blog-post-page-content content-block">
            <ReactMarkdown source={post.content} escapeHtml={false} />
          </div>
          <div className="blog-post-navigation">
            {hrefToPreviousPost ? (
              <Link href={`/post?name=${hrefToPreviousPost}`}>
                <div className="prev-arrow">{'<'} Previous</div>
              </Link>
            ) : null}
            <Link href={hrefToNextPost ? `/post?name=${hrefToNextPost}` : '/blog'}>
              <div className="next-arrow">{hrefToNextPost ? `Next ${'>'}` : 'Blog'}</div>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

Post.propTypes = {
  url: PropTypes.object,
  post: PropTypes.object,
};

Post.defaultProps = {
  url: {},
  post: {},
};
