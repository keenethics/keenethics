import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Navigation from '../components/project/navigation';

const baseColor = '#1b9c19';

const ProjectBarfrogs = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary full-width" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">BarFrogs</h2>
              <h3 className="duration"><span>Duration:</span> 5 months, 1 developer</h3>
              <p className="description">
                Find an event you are interested in
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Express</div>
                <div className="tag" style={{ color: baseColor }}>React</div>
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <p>
              Application which helps you to find the bar or event you have been looking for. Has
              web and mobile-application.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Completed web and iOS app. Ready to be scaled and to be sold for other clients as
                  a white lable app.
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
ProjectBarfrogs.propTypes = {
  url: PropTypes.object,
};
ProjectBarfrogs.defaultProps = {
  url: {},
};

export default ProjectBarfrogs;
