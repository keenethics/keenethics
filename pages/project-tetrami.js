import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#dffd35';
const accentColor = '#222';

const ProjectTetrami = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor, color: accentColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title" style={{ color: accentColor }}>Tetrami</h2>
              <h3 className="duration" style={{ color: accentColor }}>
                <span>Duration:</span> 4 months, nearly done, will be on google play and app store
                soon
              </h3>
              <p className="description">
                Online discounting
              </p>
              <div className="tags">
                <div className="tag" style={{ color: accentColor, borderColor: 'rgba(34, 34, 34, 0.5)' }}>Meteor</div>
                <div className="tag" style={{ color: accentColor, borderColor: 'rgba(34, 34, 34, 0.5)' }}>Angular 1.3</div>
                <div className="tag" style={{ color: accentColor, borderColor: 'rgba(34, 34, 34, 0.5)' }}>Ionic 1.2</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/tetrami.png" alt="Tetrami" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Tetrami is a brand new “deal” shopping project having its unique discounting method.
            </p>
            <p>
              You can either download Tetrami IOS or Android APP or use the conventional web
              browsers to join Tetrami network.
            </p>
            <p>
              There’s no “lose” at Tetrami. Anybody who’s interested in listed products/services
              will get up to %100 discounts via creating their own promo codes/coupons and entering
              into a promo code challenge!
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Built the app, debugging now and deploying.
                </li>
              </ul>
            </div>
            <a
              href="http://web.tetrami.com/login"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
              style={{ background: baseColor, color: '#222' }}
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
ProjectTetrami.propTypes = {
  url: PropTypes.object,
};
ProjectTetrami.defaultProps = {
  url: {},
};

export default ProjectTetrami;
