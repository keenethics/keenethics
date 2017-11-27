/* eslint no-nested-ternary: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

import { config } from '../main.config';

export default class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null);

    return { statusCode };
  }

  render() {
    const { url } = this.props;
    const baseURLs = [];

    config.navigation.forEach((p) => {
      if (!p.points) {
        baseURLs.push(p);
      }
    });

    console.log(baseURLs);

    return (
      <Layout noMenu>
        <div className="page-404 slide-block main">
          <div className="circles">
            <section>
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
            </section>
            <div className="moons">
              <div className="moon" />
              <div className="moon" />
              <div className="moon" />
            </div>
          </div>
          <div className="stars-wrap">
            <div className="stars-1" />
            <div className="stars-2" />
            <div className="stars-3" />
            <div className="stars-4" />
          </div>
          <div className="page-404-socket">
            <section>
              <div className="image">
                <img src="/static/images/404.png" alt="404" />
              </div>
              <p>Looks like you are going the wrong way</p>
              <a href="/" onClick={(e) => { e.preventDefault(); url.back(); }} className="btn-e">
                <span>return back</span>
              </a>
              <div className="base-urls">
                <a href="/">Home</a>
                {baseURLs.map(({ name, href }) => <a href={href}>{name}</a>)}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

Error.propTypes = {
  url: PropTypes.object,
};
Error.defaultProps = {
  url: {},
};
