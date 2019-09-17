/* eslint-disable */
import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#20cc97';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">PaceUp</h1>
              <p className="description">Comprehensive revenue management system for increasing customer loyalty</p>
              <PortfolioTechnologyTags tags={['Business', 'AI']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/paceup.png" alt="Paceup" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section>
              <h2 className="title">What Is Pace?</h2>
              <p>
                Pace is one of the best revenue management software solutions for hotels and hostels based on the machine learning system. It provides a user with convenient tools for data analysis and reporting. The application visualizes Python REST API of the service and generates data that can later be used for revenue management purposes and subsequent business growth.
              </p>
              <p>
                Managing revenues manually is time-consuming and not necessarily effective. Pace lets the user automate and therefore, optimize this process. It lets the business respond to the everchanging demands of the market and timely adjust the pricing strategy. This application is both a great operational consultant and a financial advisor for revenue management strategy.
              </p>
              <img
                style={{ maxWidth: '700px', width: '100%' }}
                src="/static/portfolio/paceup/paceup-top.jpg"
                alt="PaceUp"
              />
            </section>
            <section>
              <h2>Our Cooperation</h2>
              <p>
                The platform was designed as a complex data collection and analysis system. The main challenge with revenue management solutions is how to make the interface intuitive, user-friendly, and elegant without losing in terms of functionality. We strove to create a platform that would be easily understood by both new and experienced users.
              </p>
              <p>
                More than that, we realized how huge the information flow was going to be, and we had to make sure that the application would withstand the load.
              </p>
              <p>
                We have managed to develop stably functioning front-end with simple navigation and visually appealing data charts.
              </p>
              <p>
                The system was developed as a web application with the use of React
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/react.png" alt="react" />
                </li>
              </ul>
              <p>
                As for the project management methodology, we have used Waterfall since the customer had clear requirements and was badly limited in terms of time. Do you want to learn more about <a target="_blank" href="/blog/how-to-choose-your-optimal-development-methodology">how to choose the optimal development methodology</a>?
              </p>
            </section>
            <section>
              <h2>What Makes Pace Special?</h2>
              <h3>Business value</h3>
              <p>
                Pace is one of the best revenue management software solutions, which grants hospitality management the power to strike a balance between business revenue optimization and the interests of their customers as it lets them set the optimal price. The service takes into account the industry segment tendencies and demands and changes the price hourly to offer the best and most relevant one.
              </p>
              <img
                style={{ maxWidth: '700px', width: '100%' }}
                src="/static/portfolio/paceup/business-value.gif"
                alt="Business value"
              />
              <h3>Real-time forecasts</h3>
              <p>
                Unlike most revenue management solutions, Pace enables a business to forecast booking curves ahead of the time. It foresees the unusual patterns and gives one the ability to respond immediately. Based on the obtained data, the user can adjust their pricing for each segment, room category, and date.
              </p>
              <img
                style={{ maxWidth: '700px', width: '100%' }}
                src="/static/portfolio/paceup/real-time-forecasts.jpg"
                alt="Real-time forecasts"
              />
              <h3>Customer needs kept in mind</h3>
              <p>
                Business revenue is generated from different market segments, and these segments need to be treated differently. What makes Pace stand out among other revenue management systems is that the service lets the user differentiate between customers and set the price that is the most appropriate for a particular segment.
              </p>
              <img
                style={{ maxWidth: '700px', width: '100%' }}
                src="/static/portfolio/paceup/customer-needs-kept-in-mind.jpg"
                alt="Customer needs kept in mind"
              />
              <h3>Organization and convenience</h3>
              <p>
                The dashboards organize all the relevant information in one place and let a property owner see the overall business picture at a glance. If the user needs more detailed information, they can move from the general dashboard to more specific charts. It is fast and convenient since Pace is one of those revenue management systems that value the time and effort of their users.
              </p>
              <img
                style={{ maxWidth: '700px', width: '100%' }}
                src="/static/portfolio/paceup/organization-and-convenience.jpg"
                alt="Organization and convenience"
              />
              <h3>Multifaceted interaction</h3>
              <p>
                The user can track data on a particular property or on all properties at the same time. They can monitor all the events around each property, get insights on the booking behavior of their customers, or compare the performance of each marketing segment in order to develop a comprehensive revenue management strategy. More than that, they can control user access and add notes for their team
              </p>
              <img
                style={{ maxWidth: '500px', width: '100%' }}
                src="/static/portfolio/paceup/paceup.jpg"
                alt="Multifaceted interaction"
              />
              <h3>Gorgeous intuitive interface</h3>
              <p>
                Despite Pace being a comprehensive data management tool for business, it has an intuitive user-friendly and beautifully designed interface. It arranges even the most complex data into a coherent visualization for revenue optimization. No training is required to figure out the dashboard functionality, and the user is able to start working right away.
              </p>
              <img
                style={{ maxWidth: '700px', width: '100%' }}
                src="/static/portfolio/paceup/gorgeous-intuitive-interface.jpg"
                alt="Gorgeous intuitive interface"
              />
              <h3>Cost-efficiency</h3>
              <p>
                The pricing strategy is rather competitive comparing with the other revenue management systems. It is flexible as the price depends on the property type and the set of functions that the user needs. It may vary from 2 to 9 euros per room a month. For those who are still not a hundred percent sure whether Pace is the most suitable platform for them, the company offers a one-month-long trial period absolutely for free.
              </p>
              <img
                style={{ maxWidth: '700px', width: '100%' }}
                src="/static/portfolio/paceup/pricing.jpg"
                alt="Cost-efficiency"
              />
            </section>
            <section>
              <h2>Feedback</h2>
              <blockquote>
                <p>We were impressed with Keenethics form the get-go. They really get startups and are able to work without perfect project-plans - making clever and reasonable assumptions as they go and clarifying when the need arises. Great team, solid communication and fast-paced, high-quality development.</p>
                <p>
                  <i />
                  <div className="person">
                    <img src="/static/portfolio/paceup/jens-munch.jpeg" alt="Jens Munch" />
                    <span className="info">
                      <span className="name">Jens Munch</span>
                      <span className="title">Founder of Pace</span>
                    </span>
                  </div>
                  <i />
                </p>
              </blockquote>
            </section>
            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <a
                    href="https://www.paceup.com/en/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <button type="button" className="call-to-cation-btn -secondary">
                      CHECK THE PROJECT
                    </button>
                  </a>
                )}
              />
            </section>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
