import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import PortfolioFeedback from '../components/portfolio/PortfolioFeedback';

const baseColor = '#3c67ab';

const ProjectBlackBook = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Black Book</h2>
              <h3 className="duration">
                <span>Duration:</span>
                {' '}
                7 months. 1 developer.
              </h3>
              <p className="description">
                Display the statistics of company employees
              </p>
              <PortfolioTechnologyTags tags={['Meteor', 'Ionic', 'Angular 2', 'D3']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/black-book.png" alt="Nokia Black Book" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <PortfolioFeedback
              feedback="The team was multi-cultural and able to address any communication challenges before they became a problem. KeenEthics provided various solutions to problems and consulted on the benefits of each. They have a good network of resources and are able to bring in the best people for each job."
              link="https://clutch.co/profile/keenethics#review-183862"
            />
            <p>
              An app helps track statistics on company employees around the world in real time. An
              enterprise solution for a company with numerous employees.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>The project is being built from scratch by KeenEthics;</li>
                <li>
                  Accepted
                  {' '}
                  <Link href="/approach-minimum-viable-product"><a>MVP</a></Link>
                  {' '}
                  and preceding development process of the next versions. We enabled
                  customer’s analytics and top management to keep an eye on the reports, to filter
                  data and to have an access off-line;
                </li>
                <li>
                  KeenEthics developer worked in according to team’s agile methodology, which means
                  he had to adjust constantly.
                </li>
              </ul>
            </div>
            <div className="project-preview">
              <p>
                Testing server you can have a look at:
                <span>Login: user@mail.com</span>
                <span>Password: 111111</span>
              </p>
              <a
                href="http://bb-ipad.herokuapp.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="link"
                style={{ background: baseColor }}
              >
                Look at the project
              </a>
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectBlackBook;
