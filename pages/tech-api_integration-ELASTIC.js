import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techApiIntegration } from '../main.config';

const TechApiIntegrationElastic = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="be"
        points={techApiIntegration}
      />
      <div className="content-block">
        <div className="content">
          <h2>Braintree</h2>
        </div>
      </div>
    </div>
  </Layout>
);
TechApiIntegrationElastic.propTypes = {
  url: PropTypes.object,
};
TechApiIntegrationElastic.defaultProps = {
  url: {},
};

export default TechApiIntegrationElastic;
