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
  works,
} from '../../main.config';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const DEFAULT_DESCRIPTION = 'Custom Software Development Company - Keenethics';
const DEFAULT_TITLE = 'Keenethics is an Eastern European software development company, that provides custom software development for your business';

const LayoutHead = (props) => {
  const { navigation } = config;
  const { currentURL, meta } = props;

  let currentPoint = null;

  navigation.forEach((point) => {
    if (!currentPoint && point && point.points) {
      const subpoint = point.points.map(p => p.href)
        .indexOf(currentURL.pathname);

      if (subpoint > -1) {
        currentPoint = point.points[subpoint];
      }
    }
    if (point && point.href && point.href === currentURL.pathname) {
      currentPoint = point;
    }
  });

  if (!currentPoint) {
    const subnavigation = servicesWebDevelopmentTabs()
      .concat(
        servicesOutstaffing(),
        servicesMobileDevelopment(),
        techApps(),
        techFrontEnd(),
        techBackEnd(),
        techDatabase(),
        techApiIntegration(),
        works,
      );

    subnavigation.forEach((point) => {
      if (point && point.href && point.href === currentURL.pathname) {
        currentPoint = point;
      }
    });
  }

  let title = DEFAULT_TITLE;
  let description = DEFAULT_DESCRIPTION;

  if (meta) {
    title = meta.title || DEFAULT_TITLE;
    description = meta.description || DEFAULT_DESCRIPTION;
  }

  if (currentPoint) {
    title = currentPoint.metaTitle || currentPoint.name || currentPoint.title;
    description = currentPoint.metaDescription || currentPoint.description;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, user-scalable=no, width=device-width"
      />
      {description && description.length ? <meta
        name="description"
        content={description}
      /> : null}
      <link
        type="text/css"
        rel="stylesheet"
        href="/static/main.css"
      />
      <link
        type="image/vnd.microsoft.icon"
        rel="icon"
        href="/static/images/favicon.ico"
      />
      <link
        type="image/x-icon"
        rel="shortcut icon"
        href="/static/images/favicon.ico"
      />
      <link
        rel="alternate"
        hrefLang="en-US"
        href={`https://keenethics.com${currentURL.asPath}`}
      />
    </Head>
  );
};

LayoutHead.propTypes = {
  currentURL: PropTypes.object,
  meta: PropTypes.object,
};

LayoutHead.defaultProps = {
  currentURL: {},
  meta: {},
};

export default LayoutHead;
