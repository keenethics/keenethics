import Head from 'next/head';
import Router from 'next/router';

import React from 'react';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const LayoutHead = () => (
  <Head>
    <title>KEEN.ETHICS</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link type="text/css" rel="stylesheet" href="/static/main.css" />
    <link type="image/vnd.microsoft.icon" rel="icon" href="/static/images/favicon.ico" />
    <link type="image/x-icon" rel="shortcut icon" href="/static/images/favicon.ico" />
  </Head>
);

export default LayoutHead;
