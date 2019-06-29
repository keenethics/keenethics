import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#261353';

const ProjectPlutio = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">SelfLeaders</h1>
              <p className="description">Personal Growth Tool</p>
              <PortfolioTechnologyTags tags={['Fintech', 'E-Commerce', 'Education']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/self-leaders.png" alt="SelfLeaders" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p className="center text-italic" style={{ marginBottom: '40px' }}>
              A Swedish company helping its customers drive personal
              development and create a sound corporate culture.
            </p>
            <section>
              <h2 className="title">What Is SelfLeaders?</h2>
              <p>
                Understanding your values is the key to understanding your motivation.
                Ever since the launch of SelfLeaders in 2009, this truth has defined
                their approach to working with individual and organizational transformation.
                SelfLeaders delivers training events and workshops for professional and
                personal development in self-leadership. The target companies include
                businesses of different sizes, NGOs, and the public sector. SelfLeaders is
                working by a 1:1 principle: for every paid user of their service,
                they offer a free leadership development account for a student or
                an NGO employee. This is how they make a large impact with minor efforts.
              </p>
              <img
                src="/static/images/project/self-leaders-prew-1.jpg"
                alt="Self Leaders"
                className="image-gaps"
              />
            </section>
            <section>
              <h2 className="title">Our Cooperation</h2>
              <h3 className="red-italic-title">Challenges</h3>
              <p>
                SelfLeaders would not be able to pursue its mission without the application.
                This app is a set of personal growth tools for the people who organize and
                participate in educational events. It provides an opportunity to conduct
                workshops with interactive materials, videos, presentations, etc.
              </p>
              <p>
                We continue working on this project and constantly improving the applications
                for the best interest of the end users. As of now, we have fully refactored
                the code, replaced Blaze with React and Meteor DDP pub/sub with Apollo/GraphQL.
                Moreover, we have implemented a new design, and developed a lot of new functions.
              </p>

              <h3 className="red-italic-title">Our Team</h3>
              <p>
                The team working on the SelfLeaders app currently includes four
                full-stack developers, one QA specialist, and one Project Manager.
              </p>

              <h3 className="red-italic-title">Technologies</h3>
              <p>
                The tools for personal growth have been developed both for mobile
                <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-android">Android</Link></span>
                and
                <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-apple">iOS</Link></span>
                platforms and for desktop. The tech stack we have used includes
                <span style={{ marginLeft: '.25em' }}><Link href="/tech-back-end-meteor">Meteor</Link></span>
                ,
                <span style={{ marginLeft: '.25em' }}><Link href="/tech-api-integration-graphql">GraphQL</Link></span>
                , and
                <span style={{ marginLeft: '.25em' }}><Link href="/tech-front-end-react">React</Link></span>
                .
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/android.svg" alt="android" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/ios.svg" alt="ios" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/meteor.svg" alt="meteor" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/graphql.png" alt="graphql" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/react.png" alt="react" />
                </li>
              </ul>

              <h3 className="red-italic-title">Methodology</h3>
              <p>
                We use Scrum since the project is being continuously developed and we
                closely communicate with the client. Self Leaders is the best example
                of the Agile methodology successfully running on the project.
              </p>
            </section>

            <section>
              <h2>What Makes SelfLeaders Special?</h2>
              <p>
                The company aims to create “a more conscious, sustainable, and prosperous world”
                where everyone is a leader. SelfLeaders strives to leave the limits of traditions
                and conventionality and to become self-organized, self-reliant, and self-sufficient.
                It abandons the managerial hierarchy in its classical meaning and encourages other
                individuals and companies to discover their own potential and stimulate their own
                personal fulfillment. SelfLeaders is dedicated to helping others and highly values
                clarity, devotion, empathy, and freedom.
              </p>
              <p>
                Over the course of the past year, the SelfLeaders company has grown, acquired new
                clients,gone global, and signed a contract with
                <a style={{ margin: '0 .25em' }} href="//www.spotify.com/" target="_blank" rel="noopener noreferrer nofollow">Spotify</a>
                for a workshop including 300 people. They sold tools for personal growth and
                conducted leadership development training sessions for multiple companies from
                Sweden and all over the world, including
                <a style={{ marginLeft: '.25em' }} href="//www.bonnierforlagen.se/" target="_blank" rel="noopener noreferrer nofollow">Bonnierförlagen</a>
                ,
                <a style={{ marginLeft: '.25em' }} href="//www.ricoh.com/" target="_blank" rel="noopener noreferrer nofollow">Ricoh</a>
                , and
                <a style={{ marginLeft: '.25em' }} href="//sebgroup.com/" target="_blank" rel="noopener noreferrer nofollow">SEB</a>
                . One of the most popular applications that SelfLeaders offers is
                <a style={{ margin: '0 .25em' }} href="//valuestree.com/login" target="_blank" rel="noopener noreferrer nofollow">The Values Tree</a>
                – a simple personal growth reflection tool for personal development and a proactive
                mindset. Since its launch in 2016, it has been used by 26 000+ employees from all
                over the world. It enables a user to build their own tree of values while choosing
                among numerous options offered here.
              </p>
              <img
                src="/static/images/project/self-leaders-prew-3.jpg"
                alt="Self Leaders"
                className="image-gaps"
              />
            </section>

            <CallToActionButton
              buttonBefore={(
                <a
                  href="http://selfleaders.com"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <button type="button" className="call-to-cation-btn -secondary">
                    Look at the project
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
