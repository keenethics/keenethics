/* global Raven */

import Head from 'next/head';
import Router from 'next/router';

import React from 'react';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class LayoutHead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentDidMount() {
    Raven.config('https://354718bb50184a3f8b2d6561c650daec@sentry.io/201137').install();
  }
  render() {
    return (
      <Head>
        <title>KEEN.ETHICS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link type="text/css" rel="stylesheet" href="/static/main.css" />
        <link type="image/vnd.microsoft.icon" rel="icon" href="/static/images/favicon.ico" />
        <link type="image/x-icon" rel="shortcut icon" href="/static/images/favicon.ico" />
        <script type="text/javascript" src="https://secure.skypeassets.com/i/scom/js/skype-uri.js" />
        <script src="https://cdn.ravenjs.com/3.17.0/raven.min.js" crossOrigin="anonymous" />
      </Head>
    );
  }
}
