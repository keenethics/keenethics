import React from 'react';
import App from 'next/app';
// Get around webpack deferred modules for CSS
import '../styles/empty.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
