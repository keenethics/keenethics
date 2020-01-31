/* eslint no-nested-ternary: 0 */

import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

import { config } from '../main.config';

class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null);

    return { statusCode };
  }

  render() {
    const { router } = this.props;

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
              <a
                href="/"
                onClick={(e) => {
                  if (typeof window !== 'undefined') {
                    e.preventDefault();

                    router.push('/');
                  }
                }}
                className="btn-e"
              >
                <span>go home</span>
              </a>
              <div className="base-urls">
                {config.navigation.map(({ name, href }) => <a key={name} href={href}>{name}</a>)}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

Error.propTypes = {
  router: PropTypes.object,
};
Error.defaultProps = {
  router: {},
};

export default withRouter(Error);
