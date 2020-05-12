import Head from 'next/head';
import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';

import {
  config,
  servicesWebDevelopmentTabs,
  servicesMobileDevelopment,
  techApps,
  techFrontEnd,
  techBackEnd,
  techDatabase,
  techApiIntegration,
  works,
} from '../../main.config';

const DEFAULT_DESCRIPTION = 'KeenEthics is an ethical web and mobile development partner based in Eastern Europe and represented in the Netherlands and the United States';
const DEFAULT_TITLE = 'Ethical Web and Mobile Development Partner';

const LayoutHead = (props) => {
  const { navigation } = config;
  const { router, meta } = props;

  const currentURL = {
    pathname: router.pathname,
  };

  let currentPoint = null;

  navigation.forEach((point) => {
    if (!currentPoint && point && point.points) {
      const subpoint = point.points.map((p) => p.href)
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

  if (currentURL.pathname === '/post') {
    currentURL.pathname = router.asPath.replace('#', '?').split('?')[0];
  }

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, user-scalable=no, width=device-width"
      />
      {description && description.length ? (
        <meta
          name="description"
          content={description}
        />
      ) : null}
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
        rel="canonical"
        href={`https://keenethics.com${currentURL.pathname}`}
      />
    </Head>
  );
};

LayoutHead.propTypes = {
  router: PropTypes.object,
  meta: PropTypes.object,
};

LayoutHead.defaultProps = {
  router: {},
  meta: {},
};

export default withRouter(LayoutHead);
