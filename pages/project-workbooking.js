import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#289e94';

const ProjectWorkbooking = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">WorkBooking</h2>
              <h3 className="duration"><span>Duration:</span> 4 months, 3 developers</h3>
              <p className="description">
                Get hired or find someone to do the job for you
              </p>
              <div className="tags">
                <div className="tag">Meteor</div>
                <div className="tag">React</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/workbooking.png" alt="Workbooking" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              A service where any kind of craftsperson can find a relevant job.
            </p>
            <p>
              Workbooking.net promo website is intended to introduce new service, describe benefits
              for all  audiences, and increase brand awareness and the number of service users.
            </p>
            <p>
              Sign up and get new possibilities to manage your schedule and do what you like most.
              Whether it’s just a hobby or what you want to do professionally, you are going to be
              able to create your own working conditions tailored up to your personality and
              preferences! If you are looking for professionals in a specific field, you can find a
              broad variety of categories on our platform that give you a great pool to surf through
              and choose what you are looking for.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Launched MVP that has enabled target audience validation and gathered early
                  adopters. The app is on pause due to difficulties licences and other legal
                  proceedings.
                </li>
              </ul>
            </div>
            <a
              href="http://workbooking.net"
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
ProjectWorkbooking.propTypes = {
  url: PropTypes.object,
};
ProjectWorkbooking.defaultProps = {
  url: {},
};

export default ProjectWorkbooking;
