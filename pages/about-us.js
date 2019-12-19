import React from 'react';

import Layout from '../components/layout/main';
import OurStory from '../components/about-us/OurStory';
import OurMission from '../components/about-us/OurMission';
import OurValues from '../components/about-us/OurValues';
import OurTeam from '../components/about-us/OurTeam';
import LetsStart from './home-page-lets-start';

// eslint-disable-next-line react/prefer-stateless-function
class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <section className="page__wrapper page__about-us">
          <div className="page__header">
            <h1 className="page__title">
              we solve&nbsp;
              <br className="desktop-plus" />
              your
              <br className="tablet" />
              <em>
                business&nbsp;
                <br className="mobile-only" />
                challenges
              </em>
              <br />
              WITH FULL-CYCLE DEVELOPMENT
            </h1>
            <div className="separator" />
            <h5>
              KeenEthics is an ethical web and mobile development partner based in Eastern Europe
              and represented in the Netherlands and the United States.
            </h5>
            <p>
            Since 2015, we have been solving business challenges with full-cycle development.
            More than 40 companies have turned their ideas into lucrative products with us.
            The successful web and mobile projects include PWA, MVP, chatbots and
            AI-powered, cloud and IoT solutions.
            </p>
          </div>
          <OurStory />
          <OurMission />
          <OurValues />
          <OurTeam />
          <LetsStart />
        </section>
      </Layout>
    );
  }
}

export default AboutUs;
