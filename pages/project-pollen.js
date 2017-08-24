import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Navigation from '../components/project/navigation';

const baseColor = '#6f727d';

const ProjectPollen = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary full-width" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Pollen</h2>
              <h3 className="duration"><span>Duration:</span> 4 months</h3>
              <p className="description">
                Organizing social-campaigns via Gmail contacts
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Meteor</div>
                <div className="tag" style={{ color: baseColor }}>Blaze</div>
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <p>
              An idea behind this application was to help people organize social-campaigns through
              email-contacts that campaign-supporters have. This could serve as an alternative to
              Facebook and other social-networks in some cases.
            </p>
            <p>
              Let’s say you want to support law that restricts production of some products dangerous
              for the environment. In a few clicks you can create a campaign and add your friends’
              emails to it with a message that you’ll appreciate if they spread information on this
              campaign to their friends. Each of your friends can do the same thing spreading it
              wider to their friends which finally may have everyone involved in the campaign given
              people really support it.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Project was heavily refactored and it’s size was reduced by 10 000 strings of
                  code. At the same time it’s stability was increased and multiple bugs were fixed.
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
ProjectPollen.propTypes = {
  url: PropTypes.object,
};
ProjectPollen.defaultProps = {
  url: {},
};

export default ProjectPollen;
