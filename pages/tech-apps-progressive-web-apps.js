/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import { techApps } from '../main.config';

import './services-mobile-development.scss';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import CalendlyIframe from '../components/content/CalendlyIframe';
import FeaturesList from '../components/content/FeaturesList';

const whyShouldYouGoPwa = [
  {
    description: 'Engaging and convenient.',
    additionalText: 'Having to look for an app in the store is too much effort for modern-day users. PWAs enable users to access a native-like mobile version of their favorite website without spending extra time and effort.',
  },
  {
    description: 'Competitive and with future in mind.',
    additionalText: 'Since users access your app directly via the website, they would not perceive it as a one-time install-click-and-delete app from the store. This is how you overcome competition and establish a firm position in the market.',
  },
  {
    description: 'Fast and simple.',
    additionalText: 'A progressive web app loads faster than a regular website, which is important for the excellent user experience. Also, it does not have all the bars and buttons that a mobile browser has.',
  },
  {
    description: 'Reliable and compatible.',
    additionalText: 'By using cached data from earlier online activities, progressive web apps can perfectly work without access to the Internet. They are compatible with all devices and platforms, namely Windows, MacOS, Linux, and Chrome OS.',
  },
  {
    description: 'User-friendly and profitable.',
    additionalText: 'PWA apps are more personalized than regular mobile apps, which greatly boosts customer engagement and loyalty. As a result, PWAs increase organic traffic and decrease bounce rate.',
  },
  {
    description: 'Resource-efficient.',
    additionalText: 'PWAs are cheaper and faster to develop as long as there is no need to write separate codes for different platforms. The development takes less time, and the overall cost of the final product is considerably lower.',
  },
];

const TechAppsProg = () => (
  <Layout>
    <ContentNavigation
      image="app"
      points={techApps()}
    />
    <div className="content-block">
      <section>
        <h1 className="text-center">Progressive Web App Development Services</h1>
        <p className="text-center text-italic">Fast, reliable, and engaging mobile-ready web apps with little effort.</p>
        <CallToActionButton />
      </section>
      <section>
        <h2>What Is Progressive Web App Development?</h2>
        <p style={{ maxWidth: '580px', margin: '0 auto' }}>A progressive web app is a website designed to function as a mobile application, which offers the benefits and minimized the drawbacks of both.</p>
        <img
          style={{ margin: '0 auto' }}
          src="/static/services/tech-apps-progressive-web-apps/tech-apps-progressive-web-apps-on-mobile-and-web.jpg"
          alt="Mobile and web"
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-10px -10px 30px -10px', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'right', maxWidth: '360px', padding: '10px' }}>As a mobile application progressive web apps can be accessed cia a home screen icon. They offer app-like navigation, push notifications, and excellent visual content.</div>
          <div style={{ maxWidth: '360px', padding: '10px' }}>As a website, progressive web applications are fast and convenient. Thet are compatible across multiple platforms, can be shared through URL and installed with a few simple taps.</div>
        </div>
        <p>Progressive web app development comprises optimal software development practices for the purpose of striking the golden mean between a website and a mobile app. It is implemented with the help of service workers – JS files that enable offline information storage and app execution.</p>
        <img
          style={{ maxWidth: '500px', margin: '25px auto 35px auto' }}
          src="/static/services/tech-apps-progressive-web-apps/tech-apps-progressive-web-apps-functionality.jpg"
          alt="Functionality"
        />
        <p>By boosting the performance, accessibility, and customization, progressive web app developers make PWAs to be fast, engaging, and reliable.</p>
      </section>
      <section>
        <h2>Why Should You Go PWA?</h2>
        <FeaturesList list={whyShouldYouGoPwa} titleItalic />
      </section>
      <section>
        <h2>Why KeenEthics?</h2>

        <h3 className="red-italic-title"><span>1</span>Devoted to future.</h3>
        <p>The industry of web development is bound to change for the benefit of a user. We strive to make the user experience not just <b>simpler, faster, and more enjoyable</b> but all of these at the same time.</p>

        <h3 className="red-italic-title"><span>2</span>Devoted to professionalism.</h3>
        <p>Our PWA developers have <b>sound professional experience</b> in progressive web application development. We position <b>perfection, reliability, and efficiency</b> as our key values, and PWA development enables us to implement these values in real life.</p>

        <h3 className="red-italic-title"><span>3</span>Devoted to the needs of your business.</h3>
        <p>We offer a <b>reasonable pricing policy</b> and the opportunity to choose a paying model you prefer. We perfectly follow <b>data security regulations</b> and the requirements of the NDA you choose to sign.</p>

        <h3 className="red-italic-title"><span>4</span>Devoted to consistency.</h3>
        <p>We offer you <b>full-cycle cooperation</b>, and we will be glad to take your project from an idea to a perfectly functioning and continuously improved final product. We will also encourage you to <Link href="/blog/1553896800000-how-to-monitor-your-project-distantly">monitor the project</Link> and communicate with our team continuously.</p>
      </section>
      <CalendlyIframe />
    </div>
  </Layout>
);

export default TechAppsProg;
