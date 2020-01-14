/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesMobileDevelopment, works } from '../main.config';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';

const whyAndroid = [
  {
    icon: '/static/services/world.svg',
    alt: 'world',
    description: <p>Android market is growing at a rapid pace, and you can become a part of it. At the end of 2018, <a href="//www.statista.com/statistics/266136/global-market-share-held-by-smartphone-operating-systems/" target="_blank" rel="noopener noreferrer nofollow">88% of all smartphones</a> sold to end users were using Android. Your business will go global.</p>,
  },
  {
    icon: '/static/services/audience.svg',
    alt: 'audience',
    description: <p>Android devices are more affordable and accessible than their Apple counterparts due to a wide range of prices that Android manufacturers offer. Therefore, your app can <b>reach any audience</b> you want.</p>,
  },
  {
    icon: '/static/services/business-and-finance.svg',
    alt: 'business and finance',
    description: <p>Android-based IoT market is growing at an unprecedented rate, so do not hesitate to enter this <b>profitable niche</b> while it is not yet overcrowded.</p>,
  },
  {
    icon: '/static/services/compatible-with-multiple-platforms.svg',
    alt: 'compatible with multiple platforms',
    description: <p>Android is <b>compatible</b> with multiple devices, including smart TVs, watches, bracelets, tablets, and even vacuum cleaners.</p>,
  },
  {
    icon: '/static/services/fastest-technology.svg',
    alt: 'fastest technology',
    description: <p>Android development process is <b>fast and easy</b> due to the huge open-source communities. One can also dig into the source code of any app to see how it works.</p>,
  },
  {
    icon: '/static/services/google-play.svg',
    alt: 'google play',
    description: <p>With Android, you can <b>publish your app as soon as it is finished</b>. You have fewer guidelines to follow and avoid going through a lengthy process of app approval.</p>,
  },
  {
    icon: '/static/services/light-bulb.svg',
    alt: 'light bulb',
    description: <p>Due to the absence of narrow guidelines, Android developers have <b>full freedom</b> and can create and deploy almost any product you may think of.</p>,
  },
  {
    icon: '/static/services/working-impeccably.svg',
    alt: 'working impeccably',
    description: <p>The newest Android devices have <b>hardware so powerful</b> that your app can do whatever you want it to.</p>,
  },
];

const androidWorks = works.filter(({ title }) => ['Pree', 'ParkQX', 'Tetrami'].includes(title));

const ServicesWebDevelopmentAndroid = () => (
  <Layout>
    <ContentNavigation image="android" points={servicesMobileDevelopment()} />
    <div className="content-block">
      <section>
        <h1 className="text-center">Android App Development Services</h1>
        <p className="text-center text-italic">We offer practical, profitable, and compatible apps.</p>
        <CallToActionButton />
      </section>

      <section>
        <h2>What Is Android App Development?</h2>
        <p>The goal of the Android app development process is to design, develop, and test a perfectly functioning app. Our professionals make sure that each of these steps is fast and successful. Meanwhile, due to the large market size, you would want to make sure that your idea is unique and viable. We will be glad to offer you our <Link href="/approach-minimum-viable-product">MVP</Link> services in order to test and upgrade your idea before implementing it to its fullest.</p>
        <p>Therefore, if approached properly, Android is a perfect platform to develop a practical and profitable software solution. Along with iOS, it is one of the two most popular mobile platforms.</p>
      </section>

      <section>
        <h2>So Why Android?</h2>
        <FeaturesList list={whyAndroid} />
      </section>

      <section>
        <h2>Why KeenEthics?</h2>
        <p>Check out some of the Android mobile applications we have developed:</p>
        <Works works={androidWorks} />
      </section>
    </div>
  </Layout>
);

export default ServicesWebDevelopmentAndroid;
