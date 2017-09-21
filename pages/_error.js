/* eslint no-nested-ternary: 0 */

import React from 'react';

import Layout from '../components/layout/main';

export default class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null);

    return { statusCode };
  }

  render() {
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
                <img src="/static/images/404.png" alt="" />
              </div>
              <p>Looks like you are going the wrong way</p>
              <a href="/" className="btn-e">
                <span>return home</span>
              </a>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
