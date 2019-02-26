import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#ab2e6b';

const ProjectPhenix = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Phenix</h2>
              <h3 className="duration">
                <span>Duration:</span> 5 months, project continues
              </h3>
              <p className="description">
                Online video-streaming
              </p>
              <div className="tags">
                <div className="tag">Meteor</div>
                <div className="tag">React</div>
                <div className="tag">Redux</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/phenix.png" alt="Phenix" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Web app that allows to publish different types of streams is several ways:
              peer-to-peer, multi-party-chat-room, sync-watch, etc.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Created several npm independent npm packages for app. Like ChatView, Player,
                  GUMConfiguration, GUMVerification;
                </li>
                <li>
                  Importing user&apos;s photo from Gravatar by email;
                </li>
                <li>
                  Multiple themes (dark/light);
                </li>
                <li>
                  Adaptive design;
                </li>
              </ul>
            </div>
            <a
              href="https://phenixp2p.com"
              rel="noopener noreferrer nofollow"
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
ProjectPhenix.propTypes = {
  url: PropTypes.object,
};
ProjectPhenix.defaultProps = {
  url: {},
};

export default ProjectPhenix;
