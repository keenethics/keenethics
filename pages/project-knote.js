import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

const baseColor = '#33aee7';

const ProjectKnotel = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Knote</h2>
              <h3 className="duration"><span>Duration:</span> Developing since May 2015</h3>
              <p className="description">
                A tool for online collaboration and task-management
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Meteor</div>
                <div className="tag" style={{ color: baseColor }}>Blaze</div>
                <div className="tag" style={{ color: baseColor }}>Chrome Extension</div>
                <div className="tag" style={{ color: baseColor }}>iOS</div>
                <div className="tag" style={{ color: baseColor }}>Android</div>
                <div className="tag" style={{ color: baseColor }}>React Native</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/knote.png" alt="Knote" className="screen" />
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <p>
              Knotable makes things flow. It’s a modern conversation platform that let’s groups
              focus — organized and modern like productivity apps and seamlessly open like email.
              You can bring people together and keep them on the same page.
            </p>
            <p>
              Kill permathreads. Move them to shared knotepads. Seamless with mail where the
              conversations are starting, Knotable lets you move to spaces where you can manage the
              people, manage the content, and use more than words: deadlines, decisions, votes,
              tasks.
            </p>
            <p>
              Knote is an app for teamwork that let&apos;s you grab the idea wherever it strikes
              then move it forward simply. Knotable helps teamwork by keeping people on the same
              page.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Implemented different mute levels for alerts and email notification for separate
                  boards(pads);
                </li>
                <li>
                  Worked on React Native app implementation,(it is suspended at the moment at the
                  will of the owner);
                </li>
                <li>
                  Helped to implement customised WYSIWYG;
                </li>
                <li>
                  Users can answer on cards(notes) and create them via email;
                </li>
                <li>
                  Worked on chrome push notifications;
                </li>
                <li>
                  Integration with Mixpanel;
                </li>
              </ul>
            </div>
            <a
              href="https://knote.com"
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
ProjectKnotel.propTypes = {
  url: PropTypes.object,
};
ProjectKnotel.defaultProps = {
  url: {},
};

export default ProjectKnotel;
