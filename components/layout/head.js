/* global BACKEND_URL, fetch */

import Head from 'next/head';
import Router from 'next/router';

import 'isomorphic-fetch';

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
    const { currentURL, meta } = this.props;

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
      const subnavigation = servicesWebDevelopmentTabs().concat(
        servicesOutstaffing(),
        servicesMobileDevelopment(),
        techApps(),
        techFrontEnd(),
        techBackEnd(),
        techDatabase(),
        techApiIntegration(),
      );

      subnavigation.forEach((point) => {
        if (point && point.href && point.href === currentURL.pathname) {
          currentPoint = point;
        }
      });
    }

    let title = 'Custom Software Development Company - Keenethics';
    let description = 'Keenethics is an Eastern European software development company, that provides custom software development for your business';

    if (currentPoint && currentPoint.metaTitle) {
      title = currentPoint.metaTitle;
    } else if (currentPoint && currentPoint.name) {
      title = currentPoint.name;
    }

    if (currentPoint && currentPoint.metaDescription) {
      description = currentPoint.metaDescription;
    } else if (currentPoint && currentPoint.description) {
      description = currentPoint.description;
    }

    if (!currentPoint && meta && meta.title && meta.description) {
      title = meta.title;
      description = meta.description;
    }

    return (
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" />
        {description.length ? <meta name="description" content={description} /> : null}
        <link type="text/css" rel="stylesheet" href="/static/main.css" />
        <link type="image/vnd.microsoft.icon" rel="icon" href="/static/images/favicon.ico" />
        <link type="image/x-icon" rel="shortcut icon" href="/static/images/favicon.ico" />
	<link rel="alternate" hreflang="en-US" href={`https://keenethics.com${currentURL.pathname}`} />
      </Head>
    );
  }
}

LayoutHead.propTypes = {
  currentURL: PropTypes.object,
  meta: PropTypes.object,
};

LayoutHead.defaultProps = {
  currentURL: {},
  meta: {},
};
