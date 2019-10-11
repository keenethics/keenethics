import React from 'react';
import App, { createUrl } from 'next/app';
// Get around webpack deferred modules for CSS
import '../styles/empty.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const url = createUrl(router);

    return <Component {...pageProps} url={url} />;
  }
}

export default MyApp;
