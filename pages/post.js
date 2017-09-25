/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import tinytime from 'tinytime';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Error from './_error';

const dateTemplate = tinytime('{MMMM} {DD}');
const timeTemplate = tinytime('{h}:{mm} {a}');

export default class Post extends React.Component {
  static async getInitialProps(p) {
    const name = p.query.name;

    const res = await fetch(`${BACKEND_URL}/post/${name}`);
    const json = await res.json();

    return { post: json };
  }
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    const { post } = this.props;

    if (post && post.statusCode && post.statusCode === 404) {
      return <Error statusCode={404} />;
    }

    return (
      <Layout>
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
        </div>
      </Layout>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
};

Post.defaultProps = {
  post: {},
};
