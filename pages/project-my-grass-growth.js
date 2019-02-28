import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioFeedback from '../components/portfolio/PortfolioFeedback';

const baseColor = '#28b293';

const ProjectMyGrassGrowth = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">My Grass Growth</h2>
              <h3 className="duration"><span>Duration:</span> 6 months</h3>
              <p className="description">
                Keep you cows healthy and well-fed
              </p>
              <div className="tags">
                <div className="tag">Meteor</div>
                <div className="tag">Blaze</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/my-grass-growth.png" alt="My Grass Growth" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <PortfolioFeedback
              title="Wim Honkoop, Bedrijfsplanning B.V. The Netherlands"
              feedback="Despite the physical distance and never meeting each other in person, Keenethics has built a complicated dairy industry related webapp for us. I found the cooperation in the development of this tool good, honest and straightforward."
            />
            <p>
              The main purpose of the app is to show a prognosis for the farmer&apos;s and help them
              manage the feeding their herds, grazing and mowing their paddocks, based on by
              user&apos;s data and the a set of formulas. Application helps farmers to graze cows
              and make related calculations.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  A subscription plan to give new users the opportunity to have one month free
                  before they start paying;
                </li>
                <li>
                  Integrated payments platform - MOLLIE;
                </li>
                <li>
                  Paying users receives a bill automatically to their emails;
                </li>
                <li>
                  The accessible via an admin panel database;
                </li>
                <li>
                  Downloadable to Excel in CSV format report (based on data stored by a user);
                </li>
                <li>
                  Added possibility to change default user settings/constants;
                </li>
                <li>
                  Notifications from app to user (about needed settings or subscriptions etc.);
                </li>
                <li>
                  Mailing service (invoices, pdf-reports, system notifications);
                </li>
                <li>
                  App is deployed to Docker (production server) and Heroku (staging server);
                </li>
                <li>
                  Multiple languages (Dutch and English);
                </li>
                <li>
                  Implemented results page with a set of tables and charts based on calculations;
                </li>
                <li>
                  Added possibility to generate .pdf reports of inputted data and prognosis.
                </li>
              </ul>
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
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectMyGrassGrowth.propTypes = {
  url: PropTypes.object,
};
ProjectMyGrassGrowth.defaultProps = {
  url: {},
};

export default ProjectMyGrassGrowth;
