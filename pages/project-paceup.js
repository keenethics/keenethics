import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';

const baseColor = '#20cc97';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Paceup</h2>
              <h3 className="duration">
                <span>Duration:</span>
                {' '}
1 month. 1 developer. Full cycle of React web app.
              </h3>
              <p className="description">
                Increasing loyalty of existing clients
              </p>
              <PortfolioTechnologyTags tags={['React']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/paceup.png" alt="Prix" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Revenue management machine-learning based service Paceup provides the user
              with flexible charts and reporting. The application visualizes Python REST API of the
              service and generated data that can later be used for improving revenue management
              performance and subsequent revenue grows of the business.
            </p>
            <div className="title">Importance of Revenue Management</div>
            <p>
              These days, there are very few successful businesses that consider revenue management
              unnecessary. It is virtually impossible to help the company boost the revenue growth
              if it has no tools to connect with their customers or understand changes in
              their business.
            </p>
            <p>
              The revenue management of the previous decades is the procedure based on pricing by
              occupancy-level or plain seasonal strategies. The revenue management of today is
              almost supernatural mechanism. Due to the implementation of machine learning into
              their daily
              operations, hotels shifted to open pricing. They forecast booking curves in real time
              and make corresponding adjustments. The most successful hotels change their prices
              hundreds of times every day.
            </p>
            <p>
              Extraordinary revenue management is exactly the kind of service that Paceup provides.
              Paceup has an amazing setup that generates very real revenue improvement.
              The application revolutionizes revenue management by giving your business the
              power to always set an optimal price.
            </p>
            <div className="title">Revenue Management Style</div>
            <p>
              Many companies in hospitality industry manage their revenues through rules and manual
              overrides in their channel management, which is time-consuming and not particularly
              effective at times. Paceup enables the business to dynamically respond to changing
              demands of the market, which makes an appreciable impact on revenues. Paceup provides
              the companies with a very clear vision for changes
              that are necessary to foster their growth. Thus, you receive a great operational
              consultant and financial advisor in one application.
            </p>
            <div className="title">Paceup for Your Business</div>
            <div>
              <ul>
                <li>
                  Forecasting in Real-time
                </li>
              </ul>
            </div>
            <p>
              Paceup enables your business to forecast booking curves ahead of the time. It foresees
              the unusual
              patterns and gives you the ability to respond immediately. Based on the obtained data,
              you can
              adjust your pricing for each segment, room-category, and a night spent in your hotel.
            </p>
            <div>
              <ul>
                <li>
                  Actualizing price sensitivity
                </li>
              </ul>
            </div>
            <p>
              Paceup is based on the machine learning algorithms. This means that the application
              enables demand
              forecasting at any price, which is a significant leap from the previous years when
              the revenue
              management relied on unconstrained demand. Now, the ability to capture optimal revenue
              is extended
              on each and every point of the booking curve.
            </p>
            <div>
              <ul>
                <li>
                  Gorgeous intuitive interface
                </li>
              </ul>
            </div>
            <p>
              Despite Paceup being a comprehensive data management tool for business, it has
              intuitive user-friendly
              and beautifully designed interface. It elegantly arranges even the most complex
              data into a coherent
              visualization. No training is required to figure out the dashboard functionality,
              and the user is able
              to start working right away.
            </p>
            <div className="title">Contribution of KeenEthics </div>
            <p>
              KeenEthics developed front-end for this application. We are proud to have created a
              smooth user-friendly
              interface for Paceup. Our achievements on this project also include the implementation
              of beautiful
              graphs of data and successful application of the results of client’s machine
              learning calculations.
              We are delighted to know that the client was completely satisfied with our work.
            </p>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
