/* global fetch */

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import tinytime from 'tinytime';

import 'whatwg-fetch';

import Layout from '../components/layout/main';

const dateTemplate = tinytime('{MMMM} {DD}');
const timeTemplate = tinytime('{h}:{mm} {a}');

export default class Post extends React.Component {
  static getInitialProps({ query: { name } }) {
    return { name };
  }
  constructor(props) {
    super(props);

    this.post = {};
    this.state = {
      onLoaded: false,
    };

    (async () => {
      if (typeof fetch !== 'undefined' && props.name) {
        const res = await fetch(`/post/${props.name}`);
        this.post = await res.json();

        this.setState({
          onLoaded: true,
        });
      }
    })();
  }
  render() {
    const { onLoaded } = this.state;
    if (!onLoaded) return null;

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
                    {this.post.title}
                  </div>

                  <div className="article-desc">
                    <div className="article-user">
                      <span>{this.post.author}</span>
                    </div>
                    <div className="article-date">
                      <span>{dateTemplate.render(new Date(+this.post.date))}</span>
                      <span>{timeTemplate.render(new Date(+this.post.date))}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-full">
                <div className="article-main">
                  <ReactMarkdown source={this.post.content} />
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
  name: PropTypes.string,
};

Post.defaultProps = {
  name: '',
};
