import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#4b44b7';

const ProjectPlutio = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Plutio</h2>
              <h3 className="duration">
                <span>Duration:</span>
                {' '}
                3 months (beginning 2017)
              </h3>
              <p className="description">
                Business management platform
              </p>
              <PortfolioTechnologyTags tags={['Meteor', 'React']} />
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

            <h2>Do You Have a Similar Project Idea?</h2>
            <CallToActionButton
              title="SHARE YOUR IDEA"
              buttonBefore={(
                <a
                  href="https://plutio.com"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <button type="button" className="call-to-cation-btn -secondary">
                    CHECK THE PROJECT
                  </button>
                </a>
              )}
            />
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPlutio;
