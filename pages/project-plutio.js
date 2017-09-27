import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#4b44b7';

const ProjectPlutio = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Plutio</h2>
              <h3 className="duration">
                <span>Duration:</span> 3 months (beginning 2017)
              </h3>
              <p className="description">
                Business management platform
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Meteor</div>
                <div className="tag" style={{ color: baseColor }}>React</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/plutio.png" alt="Plutio" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Plutio is web app for managing your business. This platform is an all-in-one
              business-management and productivity platform, designed specifically for freelancers
              and small teams. With Plutio you can manage your projects, tasks, conversations,
              files, invoices etc in one central place.
            </p>
            <p>
              It’s fairly customizable and has different instruments for tasks-organization.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Create project templates;
                </li>
                <li>
                  Rich text editor;
                </li>
                <li>
                  Improve messaging functionality.
                </li>
              </ul>
            </div>
            <a
              href="https://plutio.com"
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
ProjectPlutio.propTypes = {
  url: PropTypes.object,
};
ProjectPlutio.defaultProps = {
  url: {},
};

export default ProjectPlutio;
