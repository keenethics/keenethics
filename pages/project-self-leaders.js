import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import ProjectWhatIsHeader from '../components/project/ProjectWhatIsHeader';
import ProjectCooperationHeader from '../components/project/ProjectCooperationHeader';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#261353';

const ProjectSelfLeaders = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">SelfLeaders</h1>
              <p className="description">Personal Growth Tool</p>
              <PortfolioTechnologyTags tags={['Education', 'Business']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img loading="lazy" src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img loading="lazy" src="/static/images/project/self-leaders.png" alt="SelfLeaders" className="screen" />
              </div>
            </div>
            <Background />
          </div>

          <div className="project-content-more">
            <h2 className="text-center">
              <b>SelfLeaders</b>
            </h2>
            <p className="center text-italic" style={{ marginBottom: '40px' }}>
              A Swedish company helping its customers drive personal
              development and create a sound corporate culture.
            </p>
            <section>
              <h2 className="title">What Is SelfLeaders?</h2>
              <ProjectWhatIsHeader
                projectName='SelfLeaders'
                industries={['Education', 'Business Administration']}
                size='11-50'
                location='Stockholm, Sweden'
                logo='/static/portfolio/self-leaders/self-leaders-logo.png'
              />
              <p>
                Understanding your values is the key to understanding your motivation.
                Ever since the launch of SelfLeaders in 2009, this truth has
                defined their approach to working with individual and organizational transformation. The SelfLeaders company offers a variety of
                educational modules and tools for personal growth and professional development in self-leadership. Also, they deliver training
                vents and workshops, which help companies advance their corporate culture. Their target clients include businesses of different
                sizes, NGOs, and public sector organizations.
              </p>
            </section>

            <section>
              <h2 className="title">Our Cooperation</h2>
              <ProjectCooperationHeader 
                platforms={['Android and iOS', 'desktop']}
                technologies={['Meteor', 'GraphQL', 'and React']}
                methodology='Scrum'
                team='4 developers, 1 QA, 1 PM'
              />
              <h3 className="red-italic-title">Challenges & Solutions</h3>
              <p>
                SelfLeaders would not be able to pursue its mission without going digital. Today, this company offers a set of personal development
                tools for the people who organize and participate in educational events. It provides an opportunity to conduct workshops with
                interactive materials, videos, presentations, etc.
              </p>
              <p>
                We continue working on this project and constantly improving the applications for the best interest of the end users. As of now, we
                have fully refactored the code, replaced Blaze with React and Meteor DDP pub/sub with Apollo/GraphQL. Moreover, we have
                implemented a new design, and developed a lot of new functions. 
              </p>

              <h3 className="red-italic-title">Our Team</h3>
              <p>
                The team working on SelfLeaders tools for personal growth currently includes four full-stack developers, one QA specialist, and one Project Manager.
              </p>

              <h3 className="red-italic-title">Technologies</h3>
              <p>
                The tools for personal growth have been developed both for mobile Android and iOS platforms and for desktop. The tech stack we have used includes Meteor, GraphQL, and React.
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/android.svg" alt="android" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/ios.svg" alt="ios" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/meteor.svg" alt="meteor" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/graphql.png" alt="graphql" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/react.png" alt="react" />
                </li>
              </ul>

              <h3 className="red-italic-title">Methodology</h3>
              <p>
                We use Scrum since the project is being continuously developed and we closely
                communicate with the client. SelfLeaders is the best example of the Agile methodology
                successfully running on the project.
              </p>
            </section>

            <section>
              <h2>What Makes SelfLeaders Special?</h2>
              <p>
                The company aims to create “a more conscious, sustainable, and prosperous world” where everyone is a leader. SelfLeaders strives
                to inspire people to leave the limits of traditions and conventionality and to become self-organized, self-reliant, self managing, and
                self-sufficient. It abandons the managerial hierarchy in its classical meaning and encourages other individuals and companies to
                discover their own potential and stimulate their own personal fulfillment. SelfLeaders is dedicated to helping others and highly
                values clarity, devotion, empathy, and freedom.
              </p>
              <p>
                Over the course of the past year, the SelfLeaders company has grown, acquired new clients, gone global, and signed a contract with
                Spotify for a workshop including 300 people. They sold tools for personal growth and conducted leadership development training
                sessions for multiple companies from Sweden and all over the world, including Bonnierförlagen, Ricoh, Nordic, and SEB. 
              </p>
              <p>
                One of the essential self development tools that SelfLeaders offers is The Values Tree — a simple personal growth reflection tool for
                personal development and a proactive mindset. Since its launch in 2016, it has been used by 26 000+ employees from all over the
                world. It enables a user to build their own tree of values while choosing among numerous options offered here. By understanding
                one’s values, a person can understand better what motivates or demotivates them. In turn, it will help them lead themselves and
                boost their personal productivity and performance.
              </p>
              <img
                loading="lazy"
                src="/static/portfolio/self-leaders/self-leaders-special_1.png"
                alt="Self Leaders"
                className="image-gaps"
              />
              <p>
                Most importantly, the SelfLeaders team stays devoted to their goal even in their own business. Thus, for each digital tree that has
                been purchased from them, they offer such self improvement tools for free to students and NGO workers and also plant an actual
                tree in East Africa. This is how, each digital tree they sell helps not only their client but also students, NGO workers, and East African
                people. It is a rather simple scheme, which helps SelfLeaders maximize their global impact on leadership development.
              </p>
              <img
                loading="lazy"
                src="/static/portfolio/self-leaders/self-leaders-special_2.png"
                alt="Self Leaders"
                className="image-gaps"
              />
            </section>

            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <a
                    href="http://selfleaders.com"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    <button type="button" className="call-to-cation-btn -secondary">
                      Check The Project
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

export default ProjectSelfLeaders;
