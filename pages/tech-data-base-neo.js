import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techDatabase } from '../main.config';

const TechDataBaseNeo4j = () => (
  <Layout>
    <div className="content-wrap">
      <ContentNavigation
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

export default TechDataBaseNeo4j;
