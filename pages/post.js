/* global BACKEND_URL, fetch */
import Error from 'next/error'

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import tinytime from 'tinytime';

import 'isomorphic-fetch';

import Layout from '../components/layout/main';

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
        <div className="post">
          <div className="content-wrap content-wrap-bg">
            <div className="orbit-wrap inner">
              <ul className="orbit">
                <li />
                <li />
                <li />
                <li />
              </ul>

              <div className="orbit-star orbit-star-1">
                <span />
              </div>
              <div className="orbit-star orbit-star-2">
                <span />
              </div>
              <div className="orbit-star orbit-star-3">
                <span />
              </div>
              <div className="orbit-star orbit-star-4">
                <span />
              </div>
            </div>
            <div className="stars-wrap">
              <div className="stars-1" />
              <div className="stars-2" />
              <div className="stars-3" />
              <div className="stars-4" />
            </div>
            <div className="article-page">
              <div className="content-socket-m top">
                <div className="title-page">
                  <div className="title">
                    {post.title}
                  </div>

                  <div className="article-desc">
                    <div className="article-user">
                      <span>{post.author}</span>
                    </div>
                    <div className="article-date">
                      <span>{dateTemplate.render(new Date(+post.date))}</span>
                      <span>{timeTemplate.render(new Date(+post.date))}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-full">
                <div className="article-main">
                  <ReactMarkdown source={post.content} />
                </div>
              </div>
            </div>
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
