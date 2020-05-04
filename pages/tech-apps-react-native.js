import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';

import { techApps, works } from '../main.config';

const whyReactNativeSection = [
  {
    icon: '/static/technologies/react-native/profit.png',
    alt: 'performance',
    description:
  <>
    <b>Performant</b>
    <br />
    Reactive Native apps perform as well as the native ones.
    In fact, the &nbsp;
    <a href="https://medium.com/the-react-native-log/comparing-the-performance-between-native-ios-swift-and-react-native-7b5490d363e2" target="_blank" rel="noopener noreferrer nofollow">research</a>
    &nbsp; confirms that the only performance characteristic where
    React Native loses to Swift is CPU usage.
  </>,
  },
  {
    icon: '/static/technologies/react-native/user.png',
    alt: 'simple usage',
    description:
  <>
    <b>Simple</b>
    <br />
    React Native is super easy to master with the knowledge of JavaScript
    and React and some basic understanding of native development languages.
  </>,
  },
  {
    icon: '/static/technologies/react-native/flash-symbol.png',
    alt: 'fastest technology',
    description:
  <>
    <b>Fast</b>
    <br />
    When developing a native app, you have to wait for a build to finish to see the results
    of your changes. With React Native app development,
    you can see changes as soon as you press “Save”, which makes the development faster.
  </>,
  },
  {
    icon: '/static/technologies/react-native/dimension.png',
    alt: 'compatible with multiple platforms',
    description:
  <>
    <b>Cross-platform</b>
    <br />
    React Native lets you develop both Android and iOS apps with the same technical stack.
    This significantly reduces development expenses and development time.
  </>,
  },
  {
    icon: '/static/technologies/react-native/like.png',
    alt: 'trusted technologies',
    description:
  <>
    <b>Trusted</b>
    <br />
    React Native is an open source project developed and supported by Facebook.
    The ongoing support of this tech giant inspires trust in the security and performance
    of this framework.
  </>,
  },
  {
    icon: '/static/technologies/react-native/geography.png',
    alt: 'Popular technologies',
    description:
  <>
    <b>Popular</b>
    <br />
    The React Native community is one of the fastest-growing in the industry.
    React Native is used by such tech and business giants as Facebook, Skype,
    Pinterest, Uber, Tesla, Gyroscope, Soundcloud, TikTok, and Walmart.
  </>,
  },
];

const servicesList = [
  {
    icon: '/static/services/node-js/node-js-web-and-application-development.png',
    title: 'Custom React Native application',
  },
  {
    icon: '/static/services/node-js/node-js-applications.png',
    title: 'React Native applications',
  },
  {
    icon: '/static/services/node-js/ui-ux-development-for-node-js.png',
    title: 'UI/UX React Native development',
  },
  {
    icon: '/static/services/node-js/node-js-data-management.png',
    title: 'React Native data management',
  },
];

const TechAppsRN = () => (
  <Layout>
    <ContentNavigation
      image="app"
      points={techApps()}
    />
    <div className="content-block">
      <section>
        <h1 className="text-center">React Native App Development</h1>
        <p className="text-center text-italic">Using a fast, convenient, performant, and universal framework to develop cross-platform mobile apps.</p>
        <CallToActionButton />
        <h2 style={{ fontSize: '40px', fontWeight: 900 }}>$1.25 billion</h2>
        <p className="text-center">
          is the projected size of the global chatbot market in 2025, according to&nbsp;
          <Link href="https://www.statista.com/topics/1002/mobile-app-usage/">
            <a target="_blank" rel="noopener noreferrer nofollow">
              Statista
            </a>
          </Link>
          .
        </p>
      </section>
      <section>
        <h2>What Is React Native Application Development?</h2>
        <p>
          There are two target audiences that the mobile app owner should aim at, – Android users and iOS users, – and neither one can be ignored. Developing a separate app for each platform is time-consuming, inconvenient,
          and expensive. React Native solves this problem. By offering the opportunity for cross-platform development, React Native greatly reduces the amount of resources needed for the development of Android and iOS apps without compromising the app quality.
        </p>
        <p>
          React Native is a JavaScript-based cross-platform mobile app development framework. 95% of React Native codebase is shared by iOS and Android apps. Moreover, some business logic of a web app written in React can be reused with the help of React Native application development.
          It is faster, more effective, and more convenient.
        </p>
      </section>
      <section>
        <h2>Why React Native App Development?</h2>
        <FeaturesList list={whyReactNativeSection} />
      </section>
      <CallToActionButton title="HIRE REACT NATIVE DEVELOPMENT" href="/contacts" />
      <section>
        <h2>What React Native Development Services Do We Offer?</h2>
        <ul className="mobile-development-list">
          {
            servicesList.map(({ icon, title, href }) => (
              <li className="mobile-development-item" key={title}>
                <figure>
                  <img src={icon} alt={title} />
                  <figcaption className="mobile-development-figcaption">
                    {
                      href ? <Link href={href}>{title}</Link> : title
                    }
                  </figcaption>
                </figure>
              </li>
            ))
          }
        </ul>
      </section>

      <section>
        <h2>Why KeenEthics?</h2>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span>
          Empowering growth.
        </h3>
        <p>
          <p>
            Developing native apps for iOS and Android is a time-consuming and expensive endeavor.
            By choosing React Native app development, you save some budget for
            other business initiatives. By helping you use resources more efficiently, our React Native team helps your business grow.
          </p>
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span>
          Building value.
        </h3>
        <p>
          To establish a valuable relationship with users and clients, you should communicate with them effectively and often. A fast, responsive, and lightweight mobile app with push-notifications is the best way to keep customers engaged.
          With React Native, we will help you achieve this goal.
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span>
          Launching in a matter of weeks.
        </h3>
        <p>
          The greatest advantage of React Native is resource-efficiency. With this technology, we will develop two apps over the time needed to develop one. Moreover, our partner engagement process is optimized greatly to make sure that
          little to no time is spent on repetitive conversations and courtesy calls.
        </p>
        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span>
          Bringing tech expertise.
        </h3>
        <p>
          Despite all the advantages of it, there are not so many expert React Native app development specialists. But we will provide you with professionals needed to complete your project. Our React Native development company offers not only
          high-quality software solutions but also sound expertise in your industry or business field.
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span>
          Protecting your data.
        </h3>
        <p>
          Your users will never give your app a second chance if they have even the slightest doubt about the safety of their information. Our expert React Native application development experts will make sure
          that your app is protected against technical errors and hacking attempts.
        </p>
      </section>

      <section>
        <h2>Case Study</h2>
        <div>
          <p className="text-bold text-center">ParkQX</p>
          <p>
            ParkQX is a mobile application aimed to facilitate the parking routine and to spare the unnecessary hustle.
            On the one hand, it helps drivers find, book, and pay for a parking spot in a few simple taps. On the other hand, it helps parking spot owners profit from their unused parking space. This
            mobile solution has the potential to improve the transport and parking situation in any city.
          </p>
          <div>
            <div style={{ marginBottom: '5px' }}>
              <b>Platform</b>
              :&nbsp;
              <Link href="/services-mobile-development-android">Android</Link>
                &nbsp;and&nbsp;
              <Link href="/services-mobile-development-apple">iOS</Link>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Technologies</b>
              :
              <span className="technologies-links">
                <span>Redux</span>
                ,
                <span><Link href="/services-web-development-node">Node.js</Link></span>
                ,
                <span><Link href="/tech-data-base-mongo">MongoDB</Link></span>
                ,
                <span>Firebase</span>
                ,
                <span>Twilio</span>
                ,
                <span><Link href="/tech-apps-react-native">React Native Maps</Link></span>
                ,
                <span><Link href="/tech-apps-react-native">React Native Push Notifications</Link></span>
              </span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Methodology</b>
              : Scrum
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Team</b>
              : 1 UI/UX designer, 2 full-stack developers, 1 QA specialist, and 1 Project Manager.
            </div>
          </div>
          <Works works={works.filter(({ title }) => ['ParkQX'].includes(title))} />
        </div>
      </section>
      <h2>Now, let’s discuss your business idea!</h2>

      <CallToActionButton title="CONTACT US" href="/contacts" />
    </div>
  </Layout>
);

export default TechAppsRN;
