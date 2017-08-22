import Head from 'next/head';
import Router from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';

import {
  config,
  servicesWebDevelopmentTabs,
  servicesMobileDevelopment,
  servicesOutstaffing,
  techApps,
  techFrontEnd,
  techBackEnd,
  techDatabase,
  techApiIntegration,
} from '../../main.config';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class LayoutHead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    const { navigation } = config;
    const { currentURL } = this.props;

    let currentPoint = null;

    navigation.forEach((point) => {
      if (!currentPoint && point && point.points) {
        const subpoint = point.points.map(p => p.href).indexOf(currentURL.pathname);

        if (subpoint > -1) {
          currentPoint = point.points[subpoint];
        }
      }
      if (point && point.href && point.href === currentURL.pathname) {
        currentPoint = point;
      }
    });

    if (!currentPoint) {
      const subnavigation = servicesWebDevelopmentTabs.concat(
        servicesMobileDevelopment,
        servicesOutstaffing,
        techApps,
        techFrontEnd,
        techBackEnd,
        techDatabase,
        techApiIntegration,
      );

      subnavigation.forEach((point) => {
        if (point && point.href && point.href === currentURL.pathname) {
          currentPoint = point;
        }
      });
    }

    const title = `KEEN.ETHICS - ${currentPoint && currentPoint.name ? currentPoint.name : 'Home'}`;
    const description = currentPoint && currentPoint.description ? currentPoint.description : 'Software development';

    return (
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {description.length ? <meta name="description" content={description} /> : null}
        <link type="text/css" rel="stylesheet" href="/static/main.css" />
        <link type="image/vnd.microsoft.icon" rel="icon" href="/static/images/favicon.ico" />
        <link type="image/x-icon" rel="shortcut icon" href="/static/images/favicon.ico" />
      </Head>
    );
  }
}

LayoutHead.propTypes = {
  currentURL: PropTypes.object,
};

LayoutHead.defaultProps = {
  currentURL: {},
};
