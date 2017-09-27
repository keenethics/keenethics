import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techDatabase } from '../main.config';

const TechDataBaseNeo4j = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="be"
        points={techDatabase()}
      />
      <div className="content-block">
        <div className="content">
          <h2>Neo4j</h2>
        </div>
      </div>
    </div>
  </Layout>
);
TechDataBaseNeo4j.propTypes = {
  url: PropTypes.object,
};
TechDataBaseNeo4j.defaultProps = {
  url: {},
};

export default TechDataBaseNeo4j;
