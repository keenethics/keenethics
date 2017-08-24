import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Navigation from '../components/project/navigation';

const baseColor = '#258b49';

const ProjectTheCheckNetwork = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">The Check Network</h2>
              <h3 className="duration">
                <span>Duration:</span> 7 months so far, planned one more year, then Keenethics will
                be supporting the project
              </h3>
              <p className="description">
                Commerce platform for effective SEO , It also allows for combining of several
                commerce platforms in one
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
                <img src="/static/images/project/the-check-network.png" alt="The Check Network" className="screen" />
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>Finished an MVP;</li>
                <li>Released version 2.0.1;</li>
                <li>Categorizing system based on integration of Google Ads;</li>
                <li>
                  Admin can easily find the most popular search keywords, male category using them
                  and add products into category in two clicks;
                </li>
                <li>
                  Creating product feeds from csv, xml, json files and from affiliate networks API;
                </li>
                <li>Internalization;</li>
                <li>SEO optimising;</li>
              </ul>
            </div>
            <a
              href="http://thechecknetwork.com"
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
ProjectTheCheckNetwork.propTypes = {
  url: PropTypes.object,
};
ProjectTheCheckNetwork.defaultProps = {
  url: {},
};

export default ProjectTheCheckNetwork;
