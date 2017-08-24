import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

const baseColor = '#20cc97';

const ProjectPrix = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Prix</h2>
              <h3 className="duration">
                <span>Duration:</span> 1 month. 1 developer. Full cycle of React web app.
              </h3>
              <p className="description">
                Increasing loyalty of existing clients
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>React</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/prix.png" alt="Prix" className="screen" />
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <p>
              Flexible charts and reporting to visualize Python REST API of the service. Enable to
              increase loyalty of the app’s existing clients. A machine-learning system based
              service for generating revenue.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Keenethics did front-end for them;
                </li>
                <li>
                  Implemented beautiful graphs of data;
                </li>
                <li>
                  Keenethics managed to apply results of client’s machine learning calculations;
                </li>
              </ul>
            </div>
            <div className="project-feedback">
              <h3>Feedback</h3>
              <p>
                We were impressed with Keenethics form the get-go. They really get startups and are
                able to work without perfect project-plans - making clever and reasonable
                assumptions as they go and clarifying when the need arises. Great team, solid
                communication and fast-paced, high-quality development.
              </p>
              <div className="project-customer">
                Jens Munch, Founder of Prix
              </div>
            </div>
            <a
              href="http://52.48.81.242/signIn"
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
ProjectPrix.propTypes = {
  url: PropTypes.object,
};
ProjectPrix.defaultProps = {
  url: {},
};

export default ProjectPrix;
