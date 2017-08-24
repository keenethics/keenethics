import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

const baseColor = '#fd725f';

const ProjectCarecru = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">CareCru</h2>
              <h3 className="duration">
                <span>Duration:</span> half a year so far, planned 6 months more
              </h3>
              <p className="description">
                Medical services online
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>React</div>
                <div className="tag" style={{ color: baseColor }}>Redux</div>
                <div className="tag" style={{ color: baseColor }}>Express</div>
                <div className="tag" style={{ color: baseColor }}>RethinkDB</div>
                <div className="tag" style={{ color: baseColor }}>Webpack 2</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/carecru.png" alt="CareCru" className="screen" />
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <p>
              Application for medical clinics in Canada. The team consists of a team-lead from their
              side and middle developer, html/css coder and a designer from our side.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  The company got a second round of investment with the help of our development;
                </li>
                <li>
                  Also one challenging task was accomplished: Solved a problem with server
                  rendering. Initially a server bundling had been done, then solved a problem with
                  a HMR - Hot Module Replacement. It was a tough task, there were many issues on
                  that one on the GitHub. This achievement has significantly improved the
                  architecture which allowed much faster work of the application.
                </li>
              </ul>
            </div>
            <a
              href="http://carecru.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
ProjectCarecru.propTypes = {
  url: PropTypes.object,
};
ProjectCarecru.defaultProps = {
  url: {},
};

export default ProjectCarecru;
