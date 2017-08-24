import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

const baseColor = '#261353';

const ProjectPlutio = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">SelfLeaders</h2>
              <h3 className="duration">
                <span>Duration:</span> 24.11.2016 until present time. An ongoing project
              </h3>
              <p className="description">
                Personal Growth Tool
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Meteor</div>
                <div className="tag" style={{ color: baseColor }}>GraphQL</div>
                <div className="tag" style={{ color: baseColor }}>React</div>
                <div className="tag" style={{ color: baseColor }}>Blaze</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/self-leaders.png" alt="SelfLeaders" className="screen" />
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <p>
              SelfLeaders is a Swedish company that helps their customers create strong cultures
              where co workers are engaged, driving development and taking care of themselves and
              each other. We call it self-leadership.” It is an app for facilitators and
              participants of workshops.
            </p>
            <p>
              There was only one developer on this project in the beginning, but as the company grew
              they hired more and now there are 3 developers working on that project from our side.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Implemented a lot of new core functionality;
                </li>
                <li>
                  Replaced Blaze with React in most of app;
                </li>
                <li>
                  Use Apollo/GraphQL instead of Meteor DDP pub/sub;
                </li>
                <li>
                  Merge two client&apos;s applications (WIP);
                </li>
                <li>
                  Implement new design;
                </li>
                <li>
                  Full app refactoring;
                </li>
                <li>
                  Over course of the past 10 months the company has grown, acquired new clients,
                  went international and signed a contract with Spotify for a workshop of 300
                  people.
                </li>
              </ul>
            </div>
            <a
              href="http://selfleaders.com"
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
ProjectPlutio.propTypes = {
  url: PropTypes.object,
};
ProjectPlutio.defaultProps = {
  url: {},
};

export default ProjectPlutio;
