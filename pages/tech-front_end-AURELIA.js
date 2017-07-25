import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndAurelia = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="fe"
        points={techFrontEnd}
      />
      <div className="content-block">
        <div className="content">
          <h2>Aurelia</h2>
        </div>
      </div>
    </div>
  </Layout>
);
TechFrontEndAurelia.propTypes = {
  url: PropTypes.object,
};
TechFrontEndAurelia.defaultProps = {
  url: {},
};

export default TechFrontEndAurelia;
