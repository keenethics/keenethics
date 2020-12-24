import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { techApps, works } from '../main.config';

const whyElectronList = [
  {
    icon: '/static/technologies/react-native/geography.png',
    alt: 'Universal',
    description: (
      <>
        <b>Universal </b>
        <br />
        Electron apps are compatible with Mac, Windows, and Linux, so developing
        a cross-platform desktop application is as easy as it could ever get.
      </>
    ),
  },
  {
    icon: '/static/technologies/meteor/users.png',
    alt: 'Popular ',
    description: (
      <>
        <b>Popular</b>
        <br />
        Electron is an open source project maintained by GitHub and an active
        community of contributors. It has been used to create applications by
        companies like Microsoft, WordPress, WhatsApp, Slack, Avocode, and
        inVision.
      </>
    ),
  },
  {
    icon: '/static/technologies/react-native/flash-symbol.png',
    alt: 'Convenient',
    description: (
      <>
        <b>Convenient</b>
        <br />
        Electron framework greatly facilitates development. It features
        automatic updates, crash reports, native menus, and native
        notifications. Debugging and profiling are also simpler with Electron.
      </>
    ),
  },
  {
    icon: '/static/technologies/meteor/stopwatch.png',
    alt: 'compatible with multiple platforms',
    description: (
      <>
        <b>Time-efficient </b>
        <br />
        Since Electron spares the need to develop a separate desktop app for
        each platform, it saves you a lot of development hours. It also saves
        time for those who move their app from web to desktop
      </>
    ),
  },
];

const servicesList = [
  {
    icon:
      '/static/services/node-js/node-js-web-and-application-development.png',
    title: 'Electron app development',
  },
  {
    icon: '/static/services/node-js/node-js-applications.png',
    title: 'Electron applications maintenance and support',
  },
  {
    icon: '/static/services/node-js/ui-ux-development-for-node-js.png',
    title: 'UI/UX development for Electron',
  },
  {
    icon: '/static/services/node-js/node-js-data-management.png',
    title: 'Electron data management',
  },
  {
    icon:
      '/static/services/node-js/custom-node-js-software-development-solutions.png',
    title: 'Custom Electron software development solutions',
  },
  {
    icon: '/static/services/node-js/node-js-migrating.png',
    title: 'Electron migrating',
  },
];

const whyKeenEthicsList = [
  {
    title: 'Empowering growth.',
    desc: `
    If a desktop app is essential to your business strategy, as an Electron JS
    development company, we will gladly help you develop it.
    The advantage of Electron desktop development is that it
    takes notably fewer hours to achieve the same result as
    when developing native desktop apps for each platform separately.
    Fewer hours will cost you less, so you will have more
    budget to fund other needs.`,
  },
  {
    title: 'Building value.',
    desc: `Transparency and respect are the essential values that we build our
        cooperation upon. By communicating openly and honestly, we will make
        sure that the development process is as effective as it only can be.
        Also, our mission is to inspire the tech world to invest in social good.
        Do you feel like joining us in this endeavor? We will happily invite you
        as a partner!`,
  },
  {
    title: 'Launching in a matter of weeks.',
    desc: `
    We spent months and years to optimize our partner engagement process.
    Now, we can proudly say that we achieved the point where the
    project can be launched in the shortest terms possible.
    Our Partner Engagement Manager will make sure that all your
    ideas and needs are heard, well-documented, and understood.
    When she forwards these to a PM, the project will be ready to start.`,
  },
  {
    title: 'Bringing tech expertise.',
    desc: `
    All our software engineers are full-stack and JS-oriented.
    Some of them have 10+ years of development experience, some are
    W3Schools certified. Through regular code reviews, pair programming,
    and knowledge-sharing events, our Electron JS development
    company ensures the optimal quality of software. Along with
    technical expertise, our specialists have industry-specific
    experience, which they will happily share.`,
  },
  {
    title: 'Protecting your data.',
    desc: `
    One of the major concerns about Electron apps is data
    security of these. Yet, this concern will not turn into a
    threat if Electron development is handled by an experienced and
    devoted Electron JS development company. We make sure that the
    app follows all technical data safety requirements, as well as
    legal ones. Our cooperation will also be protected by the
    NDA if you choose to sign one.`,
  },
];

const TechAppsElectron = () => (
  <Layout>
    <ContentNavigation image="app" points={techApps()} />
    <div className="content-block">
      <section>
        <h1 className="text-center">Electron Development Services</h1>
        <p className="text-center text-italic">
          Using a convenient and popular runtime framework to create
          cross-platform desktop apps
        </p>
        <CallToActionButton />
      </section>
      <section>
        <h2>79,600</h2>
        <p className="text-center">
          is the number of stars Electron has on
          {' '}
          <a
            href="https://github.com/electron/electron"
            rel="nofollow noopener noreferer"
          >
            GitHub
          </a>
        </p>
        <h2>What Is Electron Development?</h2>
        <p>
          Electron is a runtime framework for cross-platform desktop
          development, which was initially released in July 2013 by OpenJS
          Foundation. The idea of Electron is to bridge the gap between web and
          desktop development and facilitate the latter. Electron framework uses
          Chromium and
          {' '}
          <Link href="services-web-development-node">
            <a>Node.js</a>
          </Link>
          {' '}
          to let you build a desktop app with JS, HTML, and CSS. If you have an
          existing web app, migrating it to desktop platforms should be no big
          deal since most of the code can be reused. If you do not feel like
          learning Electron, request the services of an Electron JS development
          company.
        </p>
        <p>
          While desktop apps are not that popular anymore, in some cases, they
          are necessary. Sometimes, it is just a matter of personal preference.
          Other times, it is the functionality that only desktop allows
          implementing. Whatever your case is, if you want to develop a desktop
          app, we suggest developing it with Electron. This way, you will easily
          move it to the web if necessary.
        </p>
      </section>
      <section>
        <h2>Why Electron?</h2>
        <FeaturesList list={whyElectronList} />
      </section>
      <CallToActionButton title="HIRE ELECTRON DEVELOPERS" href="/contacts" />
      <section>
        <h2>What Electron Development Services Do We Offer?</h2>
        <ul className="mobile-development-list">
          {servicesList.map(({ icon, title, href }) => (
            <li className="mobile-development-item" key={title}>
              <figure>
                <img src={icon} alt={title} />
                <figcaption className="mobile-development-figcaption">
                  {href ? <Link href={href}>{title}</Link> : title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Why KeenEthics?</h2>

        <WhyKeenethicsList list={whyKeenEthicsList} />
      </section>

      <section>
        <h2>Case Study</h2>
        <div>
          <p className="text-bold text-center">Let’s Start Coding</p>
          <p>
            It is an interactive educational system for children to learn the
            basics of programming. The Let’s Start Coding system consists of a
            web platform, an Electron desktop app, and physical coding kits –
            printed circuit boards in the shape of cars, rockets, or pianos. By
            playing and trying to manipulate the behavior of this hardware,
            children are encouraged to learn to code.
          </p>
          <div>
            <div style={{ marginBottom: '5px' }}>
              <b>Platform</b>
              :&nbsp;
              <span>Desktop</span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Technologies</b>
              :
              <span className="technologies-links">
                <span>Electron</span>
              </span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Methodology</b>
              : Scrum
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Team</b>
              : 2 full-stack developers, and 1 QA specialist.
            </div>
          </div>
          <Works
            works={works.filter(({ title }) => ['Let’s Start Coding'].includes(title))}
          />
        </div>
      </section>
    </div>
    <LetsStart/>
  </Layout>
);

export default TechAppsElectron;
