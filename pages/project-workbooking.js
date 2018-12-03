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
              <div className="tags">
                <div className="tag">Consumer apps</div>
                <div className="tag">Job platform</div>
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
            <div className="project-content-chapter">
              <p className="chapter-title">What is the purpose of the app?</p>
              <p className="chapter-paragraph">Workbooking introduces new service with benefits for all audiences.</p>
              <p className="chapter-paragraph">Workbooking is the place that unites people who are looking for individuals in a specific fields for a specific task at particular time and place; and professionals who are looking for a part-time job.</p>
            </div>

            <div className="project-content-chapter">
              <p className="chapter-title">Our task</p>
              <p className="chapter-paragraph">Our task was to develop and release easy and fast platform with the search and calander available for any devices.</p>
            </div>

            <div className="double-column-wrapper">
              <div className="column">
                <img src="static/images/project/workbooking-persona.png" alt="Persona" />
              </div>
              <div className="column">
                <div className="project-content-chapter">
                  <p className="chapter-title">User personas</p>
                  <p className="chapter-paragraph">In current case, we had 2 user personas, which represent 2 major user groups, there are Customers and Professionals. Focused on the needs and expectations of these user personas, we figured out a clear picture of user’s expectations and how they are likely to use the site.</p>
                </div>
              </div>
            </div>

            <div className="project-content-chapter">
              <p className="chapter-title custom">Wireframes</p>
              <p className="chapter-paragraph">We used wireframing to provide a visual understanding of a platform early in a project.
                A website service was separated at the structural level. Content and functionality were laid out on the platform with
                taking into account user needs and user journeys.
              </p>
              <p className="chapter-paragraph">We use this practice early in the development process to establish the basic structure of the website before visual design and content is added. </p>
            </div>

          </div>

          <div className="project-content-summary custom" style={{ background: baseColor }}>
            <div className="three-column-wrapper">
              <img className="column" src="static/images/project/workbooking-1-1.png" />
              <img className="column" src="static/images/project/workbooking-1-2.png" />
              <img className="column" src="static/images/project/workbooking-1-3.png" />
            </div>
            <div className="three-column-wrapper">
              <img className="column" src="static/images/project/workbooking-2-1.png" />
              <img className="column" src="static/images/project/workbooking-2-2.png" />
              <img className="column" src="static/images/project/workbooking-2-3.png" />
            </div>
          </div>

          <div className="project-content-more">
            <div className="project-content-chapter">
              <p className="chapter-title">Technology</p>
              <div className="chapter-paragraph">
                <div className="tags">
                  <div className="tag incontent">Meteor</div>
                  <div className="tag incontent">React</div>
                  <div className="tag incontent">Mongo</div>
                </div>
              </div>
            </div>

            <div className="project-content-chapter">
              <img className="chapter-image" src="static/images/project/workbooking-people.png" />
            </div>

            <div className="project-content-chapter custom">
              <p className="chapter-title">Challenges</p>
              <div className="double-column-wrapper">
                <div className="column">
                  <div className="project-content-chapter">
                    <p className="chapter-subtitle">Customers</p>
                    <p className="chapter-paragraph">iSimplify finding occasional demand of some services for businesses, NGOs and private sector. As well as provide guarantees of quality and reliability of these services.</p>
                    <img className="chapter-image" src="static/images/project/workbooking-chalanges-1.png" />
                  </div>
                </div>
                <div className="column">
                  <div className="project-content-chapter">
                    <p className="chapter-subtitle">Professionals</p>
                    <p className="chapter-paragraph">Provide oportunities for existing market of people who are looking for a part-time job on regular and flexible basis as well as increasing a number of clients.</p>
                    <img className="chapter-image" src="static/images/project/workbooking-chalanges-2.png" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-content-chapter custom">
              <div className="project-achievements">
                <p className="chapter-subtitle">Achievement</p>
                <ul>
                  <li>Developed a platform for professionals who are looking for part-time job.</li>
                  <li>Developed feature for managing schedule of professionals.</li>
                  <li>Developed easy search of appropriate candidates among different fields for a range of goals diversity at one place.</li>
                </ul>
              </div>
            </div>

            <div className="project-content-chapter custom">
              <img className="chapter-image" src="static/images/project/workbooking-monitors.png" />
            </div>

            <div className="project-content-chapter custom">
              <p className="chapter-title">Client's feedback</p>
              <p className="chapter-paragraph italic short">"I am really impressed with the different tools and tips that we also got to bring with us, extremely useful."</p>
            </div>

            <div className="project-content-chapter custom">
              <img className="chapter-image" src="static/images/project/workbooking-leptop.png" />
            </div>
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
