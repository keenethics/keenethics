/* eslint-disable */
import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesMobileDevelopment, works } from '../main.config';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';


const whyIosList = [
  {
    icon: '/static/services/leader-in-the-technology.svg',
    alt: 'leader in the technology',
    description: <p>Apple is an undoubted <b>leader in the technology field</b>, and iPhones must be the most common smartphones used worldwide.</p>,
  },
  {
    icon: '/static/services/business-and-finance.svg',
    alt: 'business and finance',
    description: <p>iOS is the best way to monetize your application. According to AppInstitute, iOS apps generate <b>45% more revenue</b> than their Android counterparts via in-app purchases.</p>,
  },
  {
    icon: '/static/services/compatible-with-multiple-platforms.svg',
    alt: 'compatible with multiple platforms',
    description: <p>The evergrowing range of Apple products will let you <b>integrate your iOS app with IoT devices</b>.</p>,
  },
  {
    icon: '/static/services/working-impeccably.svg',
    alt: 'working impeccably',
    description: <p>iOS is designed to suit all the needs of a user and to be <b>working impeccably</b> without any failures.</p>,
  },
  {
    icon: '/static/services/elegance.svg',
    alt: 'elegance',
    description: <p>The design guidelines for iOS apps are based on the principles of <b>simplicity, elegance, and perfection</b>.</p>,
  },
  {
    icon: '/static/services/never-be-outdated.svg',
    alt: 'never be outdated',
    description: <p>iOS is being constantly developed, and so will be your iOS application. In this way, your app will <b>never be outdated</b>.</p>,
  },
  {
    icon: '/static/services/refined-searchable-fairly-displayed.svg',
    alt: 'refined searchable fairly displayed',
    description: <p>The process of deploying your app to the App Store can be troublesome, but you will be sure that your app is <b>refined, searchable, fairly displayed</b> in the list, and not foreshadowed by ads.</p>,
  },
  {
    icon: '/static/services/like.svg',
    alt: 'like',
    description: <p>The ethical guidelines of iOS are difficult to follow, but our loss is the gain of our user. <b>Your users will appreciate</b> that you value their safety, opinion, rights, and freedoms.</p>,
  },
];

const iosWorks = works.filter(({ title }) => ['OneRemission', 'Pree', 'ComicEnglish'].includes(title));

const ServicesWebDevelopmentApple = () => (
  <Layout>
    <ContentNavigation image="apple" points={servicesMobileDevelopment()} />
    <div className="content-block">
      <section>
        <h1 className="text-center">iOS App Development Services</h1>
        <p className="text-center text-italic">We offer simplicity, elegance, and perfection.</p>
        <CallToActionButton />
      </section>

      <section>
        <h2>What Is iOS App Development?</h2>
        <p>As an iOS app development company, we offer you a full-stack service, from the discovery stage through coding and testing and up to continuous maintenance and support. Any developer would admit that the most complicated part of the iOS development process is deploying the app to the App Store. However, we know how to follow all the guidelines and to go through the app approval process promptly and successfully. Most importantly, we know how to turn our loss into our user’s gain.</p>
        <p>Along with Android, iOS is one of the two most popular mobile platforms.</p>
      </section>

      <section>
        <h2>So Why iOS?</h2>
        <FeaturesList list={whyIosList} />
      </section>

      <section>
        <h2>Why KeenEthics?</h2>
        <h3>Check out some of the iOS mobile applications we have developed:</h3>
        <Works works={iosWorks} rounded />
      </section>
    </div>
  </Layout>
);

export default ServicesWebDevelopmentApple;
