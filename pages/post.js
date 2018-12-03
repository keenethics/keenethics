/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import tinytime from 'tinytime';
import { Link } from 'next-url-prettifier';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Error from './_error';
import { Router } from '../server/routes';

const dateTemplate = tinytime('{YYYY} {MMMM} {DD}');
const timeTemplate = tinytime('{h}:{mm} {a}');

export default class Post extends React.Component {
  static async getInitialProps(p) {
    const name = p.query.name;

    const res = await fetch(`${BACKEND_URL}/post/${name}`);
    const json = await res.json();

    return { post: json };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post.title !== this.props.post.title) {
      document.querySelector('.content-inner').scrollTo(0, 0);
    }
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
                  <span>{dateTemplate.render(new Date(+post.date))}</span>
                  <span>{timeTemplate.render(new Date(+post.date))}</span>
                </div>
              </div>
              <Background className="open-source-page-background" />
            </div>
          </div>
          <div className="blog-post-page-content content-block">
            <ReactMarkdown source={post.content} />
          </div>
          <div className="blog-post-navigation">
            {hrefToPreviousPost
              ? <Link route={Router.linkPage('post', { name: hrefToPreviousPost })}>
                <div className="prev-arrow">{'<'} Previous</div>
              </Link>
              : null}
            <Link route={Router.linkPage(hrefToNextPost ? 'post' : 'blog', { name: hrefToNextPost })}>
              <div className="next-arrow">{hrefToNextPost ? `Next ${'>'}` : 'Blogs list'}</div>
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
