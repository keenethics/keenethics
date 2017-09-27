import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#3c67ab';

const ProjectBlackBook = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Black Book</h2>
              <h3 className="duration"><span>Duration:</span> 6 months, one month left. 1 developer.</h3>
              <p className="description">
                Display the statistics of company employees
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Meteor</div>
                <div className="tag" style={{ color: baseColor }}>Ionic</div>
                <div className="tag" style={{ color: baseColor }}>Angular 2</div>
                <div className="tag" style={{ color: baseColor }}>D3</div>
              </div>
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
            <p>
              An app helps track statistics on company employees around the world in real time. An
              enterprise solution for a company with numerous employees.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>The project is being built from scratch by Keenethics;</li>
                <li>
                  Accepted MVP and preceding development process of the next versions. We enabled
                  customer’s analytics and top management to keep an eye on the reports, to filter
                  data and to have an access off-line;
                </li>
                <li>
                  Keenethics developer worked in according to team’s agile methodology, which means
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
                rel="noopener noreferrer"
                target="_blank"
                className="link"
                style={{ background: baseColor }}
              >
                Look at the project
              </a>
            </div>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectBlackBook.propTypes = {
  url: PropTypes.object,
};
ProjectBlackBook.defaultProps = {
  url: {},
};

export default ProjectBlackBook;
