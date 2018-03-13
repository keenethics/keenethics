import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#fc634d';

const ProjectKnotel = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Knotel</h2>
              <h3 className="duration"><span>Duration:</span> In development since April 2016</h3>
              <p className="description">
                Headquarters as a Service
              </p>
              <div className="tags">
                <div className="tag">Meteor</div>
                <div className="tag">React</div>
                <div className="tag">React Native</div>
                <div className="tag">Mongo</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/knotel.png" alt="Knotel" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Headquarters as a Service: Knotel provides comprehensive office services powered by
              domain experts and best of breed technology.
            </p>
            <p>
              Teams are shrinking. The growth of entrepreneurship and the independent workforce are
              leading to changes in traditional office environments. The new office worker demands a
              new office environment. The checklist for the modern CEO has also changed dramatically
            </p>
            <p>
              Knotel is meeting this need by providing an open planned and on demand office that is
              operated, not fresh. Spaces that are flexible, not leased. Pricing is inclusive and
              simple.
            </p>
            <p>
              As hosted workspace solutions proliferate a pattern of serving smaller, high churn
              demographics has emerged. Yet, solutions for serious, growing professional teams
              (venture backed, CEO led, purposeful groups growing businesses) are in great demand.
            </p>
            <p>
              Knotel is hosted workspaces for serious growing teams. We focus on a low churn, mature
              clientele. Our team is made up of well connected, veteran founders, as well as former
              WeWork, Starwood and NeueHouse executives.
            </p>
            <p>
              Knotel is the next level in company-sized workspaces.
            </p>
            <a
              href="https://knotel.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectKnotel.propTypes = {
  url: PropTypes.object,
};
ProjectKnotel.defaultProps = {
  url: {},
};

export default ProjectKnotel;
