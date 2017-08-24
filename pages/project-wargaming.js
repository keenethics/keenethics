import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Navigation from '../components/project/navigation';

const baseColor = '#867dd0';

const ProjectWargaming = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary full-width" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Wargaming</h2>
              <h3 className="duration">
                <span>Duration:</span> 7 months so far, planned one more year, then Keenethics will
                be supporting the project.
              </h3>
              <p className="description">
                Platform for forecasting and validation of business strategies for companies. It’s
                intended to develop strategic thinking, intuition and deep understanding of
                market-processes. Sophisticated algorithm shows possible steps, history of previous
                actions and allows to perform retrospective analysis.
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Meteor</div>
                <div className="tag" style={{ color: baseColor }}>React</div>
              </div>
            </div>
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
                  Keenethics managed to apply results of client’s machine learning calculations;
                </li>
              </ul>
            </div>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectWargaming.propTypes = {
  url: PropTypes.object,
};
ProjectWargaming.defaultProps = {
  url: {},
};

export default ProjectWargaming;
