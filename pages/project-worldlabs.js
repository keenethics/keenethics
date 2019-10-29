/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#4b6ac9';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">WorldLabs</h1>
              <p className="description">A business incubation platform giving people the power to elevate their ideas.</p>
              <PortfolioTechnologyTags tags={['Business']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/worldlabs/wl-screenshot.jpg" alt="Blood Test Application" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section className="clearfix">
              <h2 className="title">What Is WorldLabs?</h2>
              <div className="columns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="column">
                  <table>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Name</b>:
                      </td>
                      <td style={{ border: 0 }}>WorldLabs</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Industry</b>:
                      </td>
                      <td style={{ border: 0 }}>Business development</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Size</b>:
                      </td>
                      <td style={{ border: 0 }}>11-50 employees</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Location</b>:
                      </td>
                      <td style={{ border: 0 }}>London, Great Britain 🇬🇧</td>
                    </tr>
                  </table>
                </div>
                <div className="column">
                  <img src="/static/portfolio/worldlabs/logo-color.svg" style={{ width: '220px' }} alt="worldlabs logo" />
                </div>
              </div>
              <p>
                WordLabs is a platform for entrepreneurs to push forward their innovative business ideas and meet like-minded peers.
              </p>
              <hr />
              <blockquote>
                <p>
                  Keenethics delivers the required tasks within the time frame and at high quality. Their expertise in software development and their dedication to our company has helped WorldLabs launch a fully functional product. Keenethics’ cost-effective and hands-on approach was an integral part of our early growth.
                </p>
                <p>
                  <i />
                  <div className="person">
                    <img src="/static/portfolio/worldlabs/andreas-feller.jpg" alt="Andreas Feller" />
                    <span className="info">
                      <span className="name">
                        <a href="https://www.linkedin.com/in/andreas-feller-42a83363/" target="_blank" rel="noopener noreferrer nofollow">Andreas Feller</a>
                      </span>
                      <span className="title">Co-founder & COO at WorldLabs</span>
                    </span>
                  </div>
                  <i />
                </p>
              </blockquote>
              <hr />
              <p>
                <b style={{ display: 'block' }}>WorldLabs for entrepreneurs:</b>
                It helps people find partners, investors, or collaborators from all around the world. Entrepreneurs showcase their ideas and upload video pitches for them. They connect with other innovators and join various thematic groups. By expanding their network, they find partners and supporters and start developing their projects.
              </p>
              <p>
                <b style={{ display: 'block' }}>WorldLabs for organizations:</b>
                Some organizations may be looking for unique business ideas to work with. WorldLabs helps them plan, launch, manage, and promote contests for the initiative they will support. It also enables employers to look for exceptional and yet undiscovered talents.
              </p>
              <p>
                <b style={{ display: 'block' }}>WorldLabs for society:</b>
                WorldLabs inspires the advancement of local and global business communities. It fosters collaboration because collaboration is the key to success and global progress. Here, people share their insights and resources.
              </p>
              <hr />
              <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Their mission is “to break down barriers to societal and technological progress.” They strive to give startuppers and business owners the power to elevate their ideas.</p>
              <hr />
              <p>
                By the way, <a href="https://www.worldlabs.org/event/elevatingideas18" target="_blank" rel="noopener noreferrer nofollow">“Elevating Ideas”</a> is an annual event for entrepreneurs, which takes place every November in London. KeenEthics is proud to have been a part of this conference in 2018.
              </p>
              <img style={{ margin: '30px auto', maxWidth: '600px' }} src="/static/portfolio/worldlabs/worldlabs-elevating-ideas-competition.jpg" alt="elevating ideas" />
            </section>
            <section>
              <h2>Our Cooperation</h2>
              <table style={{ marginLeft: 0 }}>
                <tr>
                  <td style={{ border: 0, paddingLeft: 0 }}>
                    <b>Platform</b>:
                  </td>
                  <td style={{ border: 0 }}>Web</td>
                </tr>
                <tr>
                  <td style={{ border: 0, paddingLeft: 0 }}>
                    <b>Technologies</b>:
                  </td>
                  <td style={{ border: 0 }}>MongoDB, React, and Meteor</td>
                </tr>
                <tr>
                  <td style={{ border: 0, paddingLeft: 0 }}>
                    <b>Methodology</b>:
                  </td>
                  <td style={{ border: 0 }}>Kanban</td>
                </tr>
                <tr>
                  <td style={{ border: 0, paddingLeft: 0 }}>
                    <b>Team</b>:
                  </td>
                  <td style={{ border: 0 }}>10 developers and QA specialists, 1 PM</td>
                </tr>
              </table>
              <h3>Challenges & Solutions</h3>
              <p>
                When we first started working on the project, it was already in progress. The existing design had to be changed entirely. Stripe and sign-up via social media had not been implemented either. The code needed a great deal of improvement. In less than two months, we prepared the app for the release.
              </p>
              <hr />
                <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Along with minor technical and organizational difficulties, there was one major challenge: WordLabs wanted to be different.</p>
              <hr />
              <p>
                We made a lot of advancements to help them be unique. Yet, there is one feature we are proud of the most.
              </p>
              <p>
                The platform lets organizations launch, promote and manage their own contests. They can appoint external judges to review the ideas and projects of applicants. In this way, competitions are open and fair, each person has an equal chance to prosper, and the hosting company starts working with the most deserving people.
              </p>
              <p>
                As a result of the fruitful cooperation with the WorldLabs team, we developed a powerful one-of-a-kind social media platform. It is focused on business cooperation for start-ups and fledgling businesses. It fosters the exchange and elevation of ideas.
              </p>
              <h3>Our Team</h3>
              <p>
                The project is long-lasting, so about ten expert full-stack developers and QA specialists have been working on it. The team is managed by a proficient Project Manager. UI/UX design is conducted on the client’s part.
              </p>
              <h3>Technologies</h3>
              <p>
                We have developed both back-end and front-end of this web platform with the use of MongoDB, React, and Meteor.
              </p>

              <ul className="technologies-list">
                <li className="technologies-item">
                  <img style={{ maxHeight: '50px' }} src="/static/portfolio/technologies/react.png" alt="react" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/meteor.svg" alt="meteor" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/mongodb.svg" alt="mongodb" />
                </li>
              </ul>

              <h3>Methodology</h3>
              <p>
                We have been working on this online startup incubator for over two years already. The approach to the development process has changed a few times. Yet, we have successfully adapted the <Link href="/blog/how-to-choose-your-optimal-development-methodology">Kanban</Link> methodology to our needs.
              </p>
            </section>
            <section>
              <h2>What Makes WorldLabs Special?</h2>
              <p>
                WorldLabs is not a typical online business incubator. It does not help every start-up grow. Instead, it supports start-ups and entrepreneurs with unique and innovative ideas.
              </p>
              <img style={{ margin: '30px auto', maxWidth: '250px' }} src="/static/portfolio/worldlabs/explore.png" alt="explore" />
              <p>
                The WorldLabs community is diverse. It unites people from all parts of the world and different professional spheres. There are business owners, social activists, students, and educators. There are large corporations and small start-ups. WorldLabs does not limit the opportunities but gives everyone a chance to thrive.
              </p>
              <img style={{ margin: '0 auto', maxWidth: '300px' }} src="/static/portfolio/worldlabs/network.png" alt="network" />
              <p style={{ marginBottom: '5px' }}>
                The business incubation process is not typical either. Usually, it involves four stages:
              </p>
              <p style={{ paddingLeft: '3%' }}>
                1. ideating<br />
                2. verifying<br />
                3. searching for funding<br />
                4. entering the market
              </p>
              <p>
                WorldLabs describes its business incubation process differently and more comprehensively.
              </p>
              <img style={{ margin: '30px auto' }} src="/static/portfolio/worldlabs/create-profile.jpg" alt="create profile" />
              <p>
                WorldLabs is not one out of many similar startup incubator programs. It is a trusted business incubation and collaboration service, used and supported by <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer nofollow">Cambridge University</a>, <a href="https://www.thetimes.co.uk/" target="_blank" rel="noopener noreferrer nofollow">The Times</a>, <a href="https://www.businessweekly.co.uk/" target="_blank" rel="noopener noreferrer nofollow">Business Weekly</a>, and <a href="https://www.ucl.ac.uk/enterprise/" target="_blank" rel="noopener noreferrer nofollow">UCL Innovation and Enterprise</a>.
              </p>
              <img style={{ margin: '30px auto' }} src="/static/portfolio/worldlabs/wl-partners.jpg" alt="wl partners" />
            </section>
            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <a
                    href="https://www.worldlabs.org/"
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
