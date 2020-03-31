import React from 'react';

import Layout from '../components/layout/main';
import OurStory from '../components/about-us/OurStory';
import OurMission from '../components/about-us/OurMission';
import OurValues from '../components/about-us/OurValues';
import OurTeam from '../components/about-us/OurTeam';
import LetsStart from './home-page-lets-start';
import MeetOurLeaders from '../components/about-us/MeetOurLeaders';

const AboutUs = () => (
  <Layout>
    <section className="page__wrapper page__about-us">
      <div className="page__header">
        <h1 className="page__title">
          CODE FOR BUSINESS&nbsp;
          <nobr>
            <img className="keen-dot" src="/static/images/keen-dot.png" alt="" />
          </nobr>
          <br />
          CARE&nbsp;
          <span className="color-red">FOR THE WORLD</span>
        </h1>
        <div className="separator" />
        <h5>
          KeenEthics is a full-cycle software development partner based in Lviv, Ukraine, and
          locally represented in Oss, the Netherlands.
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
      <MeetOurLeaders />
      <OurTeam />
      <LetsStart />
    </section>
  </Layout>
);

export default AboutUs;
