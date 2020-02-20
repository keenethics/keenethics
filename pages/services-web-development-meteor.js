import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works, servicesWebDevelopmentTabs } from '../main.config';

import Works from '../components/portfolio/works';

const ServicesWebDevelopmentMeteor = () => {
  const whyVue = [
    {
      icon: '/static/technologies/meteor/geography.png',
      alt: 'Geography',
      description:
  <>
    <b>Universal</b>
    <br />
    Meteor is used to develop both server-side back end and client-side front end of a web platform
    or a native mobile app. This way, the entire application is written in pure JavaScript.
  </>,
    },
    {
      icon: '/static/technologies/meteor/stopwatch.png',
      alt: 'Stopwatch',
      description:
  <>
    <b>Efficient</b>
    <br />
    Since front end and back end share the same language, the development process becomes much
    faster. The less development hours it takes, the more cost-efficient it will be.
  </>,
    },
    {
      icon: '/static/technologies/meteor/users.png',
      alt: 'Users',
      description:
  <>
    <b>Popular</b>
    <br />
    Meteor JS framework has a vast and proactive community, who continuously work on documentation.
    Also, it is used by such large companies as Mazda, IKEA, Qualcomm, and Honeywell.
  </>,
    },
    {
      icon: '/static/technologies/meteor/like.png',
      alt: 'Like',
      description:
  <>
    <b>Convenient</b>
    <br />
    Meteor supports live reloading of pages. Each time a code is modified, the altered elements
    are updated, not the entire page. This greatly improves the development experience.
  </>,
    },
    {
      icon: '/static/technologies/meteor/meteor.png',
      alt: 'Meteor',
      description:
  <>
    <b>Easily deployed </b>
    <br />
    Meteor is augmented with&nbsp;
    <a href="https://www.meteor.com/hosting" target="_blank" rel="noopener noreferrer nofollow">Galaxy</a>
    &nbsp;– an efficient PaaS solution for convenient deployment and
    monitoring of Meteor applications. It allows to greatly reduce the time spent on DevOps.
  </>,
    },
    {
      icon: '/static/technologies/meteor/dimension.png',
      alt: 'Dimension',
      description:
  <>
    <b>Extensible</b>
    <br />
    Meteor can be extended with numerous libraries and packages, which are provided and tested
    by the open source community. Also, it can be integrated with various development tools.
  </>,
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/technologies/meteor/image20.png',
      title:
  <>
    Web and mobile Meteor.js
    <br />
    development
  </>,
    },
    {
      icon: '/static/technologies/meteor/image9.png',
      title:
  <>
    Meteor.js applications
    <br />
    maintenance and support
  </>,
    },
    {
      icon: '/static/technologies/meteor/image1.png',
      title: 'UI/UX development for Meteor',
    },
    {
      icon: '/static/technologies/meteor/image19.png',
      title: 'Meteor.js data management',
    },
    {
      icon: '/static/technologies/meteor/image14.png',
      title:
  <>
    Custom Meteor.js software
    <br />
    development solutions
  </>,
    },
    {
      icon: '/static/technologies/meteor/image6.png',
      title: 'Meteor.js migrating',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'Business growth closely depends on your revenue growth, and there are two ways we can help. On the one hand, our Meteor JS specialists will help you save on app development. On the other hand, we make sure that your software product is high-quality, which lets it meet its purpose and bring profit.',
    },
    {
      title: 'Building value',
      desc: 'KeenEthics was founded with a certain idea in mind – “We strive for a tech world devoted to the social good”. Social responsibility and ethical attitude to partners are the pillars of our business. If you share our desire to contribute to the common good, we will happily have you as a partner.',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'If you are eager to start the development as soon as possible, Meteor JS is the framework you should choose, Easily configured, it helps to save time on project setup. Our expert Partner Engagement Manager will help you move to the project development phase in a few weeks’ time.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'As we said, we have an outstanding experience in Meteor development since we have been working with this technology since it was introduced. While building a Meteor app, we also engage expert QA specialists, BA professionals, designers, and a professional PM to reach the best project outcome.',
    },
    {
      title: 'Protecting your data',
      desc: 'User privacy is the top concern in the modern-day web, and we make sure that your web or mobile app is a hundred percent secure. Also, we will gladly keep our partnership secret if you want us to. Sign an NDA with us and rest assured that your information is kept private.',
    },
  ];

  return (
    <Layout>
      <ContentNavigation image="web_development" points={servicesWebDevelopmentTabs()} />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Meteor JS Development Services
          </h1>
          <p className="text-center text-italic">
            Using a highly efficient, popular, convenient, and universal JavaScript framework.
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '1em' }}>19,000</h2>
          <p className="text-center">
            is the number of websites powered by Meteor, according to&nbsp;
            <a href="https://www.lambdatest.com/blog/top-javascript-frameworks-for-2019/" target="_blank" rel="noopener noreferrer nofollow">LambdaTest</a>
            .
          </p>
        </section>
        <section>
          <h2>What Is Meteor JS Development?</h2>
          <p>
            Meteor is an open sourced Node.js-based platform for web, mobile, and desktop app
            development. Initially released in 2012, Meteor shook the development world as a
            revolutionary framework. Unlike the vast majority of other JS frameworks, Meteor
            can be used for both back end and front end development regardless of what kind
            of app you want to develop – web, native mobile, or desktop. This makes the development
            process more time-efficient and cost-efficient, and the entire app can be developed by
            the same team of software developers. Therefore, this framework perfectly suits rapid
            prototyping.
          </p>
          <p>
            Here at KeenEthics, more than a half of all the projects have been developed with
            the usage of Meteor JS framework. Our leading developers and CTO himself have been
            supporting the open source community and promoting this technology in Ukraine.
            While some may say that the glory days of Meteor are over, we will argue that they
            are definitely not. This framework is actively supported, and it deserves attention
            due to the benefits it offers.
          </p>
        </section>
        <section>
          <h2>Why Meteor JS?</h2>
          <FeaturesList list={whyVue} />
          <CallToActionButton
            title="HIRE Meteor JS DEVELOPERS"
            href="/contacts"
          />
        </section>
        <section>
          <h2>What Meteor JS Development Services Do We Offer?</h2>
          <ul className="mobile-development-list">
            {
              whatDoWeOfferIcons.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="mobile-development-figcaption">
                      {
                        href ? <a href={href}>{title}</a> : title
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
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Case Study</h2>
          <div>
            <p className="text-bold text-center">SelfLeaders</p>
            <p>
              It is a platform for professional and personal development, which is used by
              businesses and NGOs of different sizes. SelfLeaders comprises various personal
              growth tools for people organizing and participating in educational events.
              The tool that we have developed is&nbsp;
              <a href="https://valuestree.com/login" target="_blank" rel="noopener noreferrer nofollow">The Values Tree</a>
              &nbsp;– a simple reflection tool
              for self-development. Launched in 2016, this tool has been used by 26 000+
              employees from all parts of the globe. By building their own trees of values,
              the users learn to understand themselves better and to think proactively. For
              businesses, this tool offers an important opportunity to evaluate corporate
              culture and employee satisfaction.
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
                  <span><Link href="/tech-back-end-meteor">Meteor</Link></span>
                  ,
                  <span><Link href="/tech-api-integration-graphql">GraphQL</Link></span>
                  &nbsp;and
                  <span><Link href="/tech-front-end-react">React</Link></span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 4 full-stack developers, 1 QA specialist, and 1 Project Manager.
              </div>
            </div>
            <Works works={works.filter(({ title }) => ['SelfLeaders'].includes(title))} />
          </div>
          <div>
            <p className="text-bold text-center">ComicEnglish</p>
            <p>
              It is a web platform for managing schedules and salaries of employees in a convenient
              and timely manner. Via Attendance, team members can adjust their schedules, share
              information about vacation days, sick leaves, or days off, and check their salary
              coefficient. The idea of this platform is to keep it simple but quick and responsive
              for the employees to conveniently use it.
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
                :&nbsp;
                <Link href="/services-web-development-meteor">Meteor</Link>
                &nbsp;and Ionic
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Kanban
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 2 full-stack developers.
              </div>
            </div>
            <Works works={works.filter(({ title }) => ['ComicEnglish'].includes(title))} />
          </div>
          <div>
            <p className="text-bold text-center">Tetrami</p>
            <p>
              It is a global e-commerce platform enjoyed by numerous people from all over the world.
              Tetrami offers each user a unique opportunity to win a discount and to strike a
              bargain. Once the users come up with a four-characters-long promo code and nobody else
              repeats it, they are granted a large discount. Unlike in regular stores, Tetrami lets
              users reduce costs of the item of their own choice. Despite the fact that this company
              delivers only to the American addresses, users from other countries can also place
              orders if they organize shipping on their own.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :
                <span className="technologies-links">
                  <span><Link href="/services-web-development">Web</Link></span>
                  ,
                  <span><Link href="/services-mobile-development-android">Android</Link></span>
                  &nbsp;and
                  <span><Link href="/services-mobile-development-apple">iOS</Link></span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :&nbsp;
                <Link href="/tech-back-end-meteor">Meteor</Link>
                , Blaze, Ionic, and&nbsp;
                <Link href="/tech-front-end-angular">Angular</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Kanban
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 3 full-stack developers, 1 QA specialist, and 1 Project Manager.
              </div>
            </div>
            <Works works={works.filter(({ title }) => ['Tetrami'].includes(title))} />
          </div>
          <div>
            <p className="text-bold text-center">The Check Network</p>
            <p>
              It is a comprehensive e-commerce SEO platform, which brings customers and businesses
              together. The Check Network is an international network of e-stores and online
              websites. It offers a convenient search option, a localized price comparison, and a
              convenient division on categories. This web platform enables startups and small
              businesses to get the most advantage from their websites and online stores, to
              promote their products and services to a specific target group, and to generate
              extra sales.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-web-development">Web</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span><Link href="/tech-back-end-meteor">Meteor</Link></span>
                  &nbsp;and
                  <span><Link href="/tech-front-end-react">React</Link></span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 3 full-stack developers, 1 QA specialist.
              </div>
            </div>
            <Works works={works.filter(({ title }) => ['The Check Network'].includes(title))} />
          </div>
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <CallToActionButton
          title="Contact us"
          href="/contacts"
        />
      </div>
    </Layout>
  );
};

export default ServicesWebDevelopmentMeteor;
