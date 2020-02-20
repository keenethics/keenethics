import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';

const baseColor = '#867dd0';

const ProjectWargaming = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary full-width" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Wargaming</h2>
              <h3 className="duration">
                <span>Duration:</span>
                {' '}
                7 months so far, planned one more year, then KeenEthics will
                be supporting the project.
              </h3>
              <p className="description">
                Platform for forecasting and validation of business strategies for companies. It’s
                intended to develop strategic thinking, intuition and deep understanding of
                market-processes. Sophisticated algorithm shows possible steps, history of previous
                actions and allows to perform retrospective analysis.
              </p>
              <PortfolioTechnologyTags tags={['Meteor', 'React']} />
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>Finished an MVP;</li>
                <li>
                  Implemented a complicated calculation of large data that was initially calculated
                  and shared between the participants of this business via Excel.
                </li>
                <li>
                  Documents can be easily accessed by all employees around the world;
                </li>
                <li>
                  The company can expand much easily;
                </li>
                <li>
                  New employees can be hired faster;
                </li>
                <li>
                  KeenEthics managed to apply results of client’s machine learning calculations;
                </li>
              </ul>
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectWargaming;
