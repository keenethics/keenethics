import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import FeaturesList from '../components/content/FeaturesList';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';
import Works from '../components/portfolio/works';

import { techDatabase, works } from '../main.config';

const whyMongoDBSection = [
  {
    icon: '/static/technologies/react-native/geography.png',
    alt: 'Universal',
    description: (
      <>
        <b>Universal</b>
        <br />
        MySQL database management system supports almost every programming
        language and operating system. Thus, you can use it to develop back end
        of almost any app for any device.
      </>
    ),
  },
  {
    icon: '/static/technologies/meteor/users.png',
    alt: 'Popular',
    description: (
      <>
        <b>Popular</b>
        <br />
        MySQL database is the most popular one as numerous surveys and reports
        show. Google, Wiki, NASA, Twitter, WordPress, and Walmart prefer MySQL
        over other databases.
      </>
    ),
  },
  {
    icon: '/static/technologies/react-native/like.png',
    alt: 'Simple',
    description: (
      <>
        <b>Simple</b>
        <br />
        MySQL is very simple to learn, to install, and to use. Basic SQL
        knowledge will be enough to start working with this database management
        system.
      </>
    ),
  },
  {
    icon: '/static/technologies/react-native/success.png',
    alt: 'Secure',
    description: (
      <>
        <b>Secure</b>
        <br />
        MySQL can handle heavy data flows and can be customized to manage over 8
        TB of data. The database is protected with Password encryption and User
        privileges.
      </>
    ),
  },
];

const servicesList = [
  {
    icon: '/static/technologies/mongoDB/settings.png',
    title: 'MySQL database development and management',
  },
  {
    icon: '/static/technologies/mongoDB/api.png',
    title: 'MySQL API development',
  },
  {
    icon: '/static/technologies/mongoDB/diagram.png',
    title: 'MySQL architecture design',
  },
  {
    icon: '/static/technologies/mongoDB/success.png',
    title: 'MySQL testing and QA services',
  },
  {
    icon: '/static/technologies/mongoDB/security.png',
    title: 'MySQL security hardening services',
  },
  {
    icon: '/static/technologies/mongoDB/support.png',
    title: 'MySQL consulting services and support',
  },
];

const whyKeenEthicsList = [
  {
    title: 'Empowering growth.',
    desc: `
    The software industry is so competitive that it barely gives
    a chance for a mistake. At KeenEthics, we understand the pressure
    that the business world puts upon you, and we strive to help
    you succeed. By offering custom software solutions of high quality,
    we empower the growth of your business.`,
  },
  {
    title: 'Building value.',
    desc: `
    KeenEthics has a mission: We strive for a tech world devoted
    to the social good. We believe that the ethical attitude towards
    our employees, partners, fellow citizens, and the global community
    in general is the utmost value we can offer. When partnering up with
    KeenEthics, you can count on our honesty and transparency`,
  },
  {
    title: 'Launching in a matter of weeks.',
    desc: `
    The software industry competition requires you to think
    and act fast. If you are tired of endless calls and meetings,
    of complex bureaucratic structures, we are here for you.
    Our Partner Engagement Manager will make sure that your communication
    with us is efficient and concise. `,
  },
  {
    title: 'Bringing tech expertise.',
    desc: `
    As a back-end development company, KeenEthics specializes in only two
    technologies – MySQL and MongoDB. Such a narrow focus lets
    us make sure that we excel in these technologies. Our
    MySQL developers will gladly share their technical
    and business-related experience with you. `,
  },
  {
    title: 'Protecting your data.',
    desc: `
    Data safety should be your number one concern regardless
    of what app you plan to develop. This is where MySQL
    comes in handy. Known as an incredibly secure technology,
    MySQL database management system lets our developers ensure the
    highest level of information and data safety. `,
  },
];

const TechDataBaseMongo = () => (
  <Layout>
    <ContentNavigation image="be" points={techDatabase()} />
    <div className="content-block">
      <section>
        <h1 className="text-center">MySQL Development Services</h1>
        <p className="text-center text-italic">
          Using one of the most popular, simple, and secure database management
          systems for back end development
        </p>
        <CallToActionButton />
      </section>
      <section>
        <h2>
          <b>58.7%</b>
        </h2>
        <p className="text-center">
          of back end developers prefer MySQL, according to the 2018
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://insights.stackoverflow.com/survey/2018/"
          >
            Stack Overflow
          </a>
          {' '}
          survey.
        </p>
      </section>
      <section>
        <h2>What Is MySQL Database Development?</h2>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.mysql.com/"
          >
            MySQL
          </a>
          {' '}
          is a relational database management system, the most popular and one
          of the most secure databases in the field. This technology is simple
          but perfect. This traditional table-based system is easy to work with,
          it has all the necessary functionality and does not offer any
          excessive features. The basic knowledge of SQL is enough to understand
          and learn this technology.
        </p>
        <p>
          It is perfectly suitable to face the most recent development
          challenges. In particular, MySQL database management system is
          designed to suit
          {' '}
          <Link href="/services-cloud-application-development">
            <a>cloud development</a>
          </Link>
          {' '}
          needs. This technology has a very clear and detailed documentation,
          and the support community is large. This way, using MySQL for your web
          or mobile app, you can be sure that this technology is not going to
          grow outdated any time soon.
        </p>
        <p>
          If there is no way we can convince you to use a relational database,
          check out
          {' '}
          <Link href="/tech-data-base-mongo">
            <a>MongoDB development services</a>
          </Link>
          {' '}
          that we offer.
        </p>
      </section>
      <section>
        <h2>Why MySQL Database?</h2>
        <FeaturesList list={whyMongoDBSection} />
      </section>
      <CallToActionButton title="HIRE MYSQL DEVELOPERS" />
      <section>
        <h2>What MySQL Development Services Do We Offer?</h2>
        <ul className="mobile-development-list">
          {servicesList.map(({ icon, title, href }) => (
            <li className="mobile-development-item" key={title}>
              <figure>
                <img
                  style={{ maxWidth: '130px', maxHeight: '130px' }}
                  src={icon}
                  alt={title}
                />
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
        <h2>Case Studies</h2>
        <div>
          <p className="text-bold text-center">Business Research Platform</p>
          <p>
            This business research platform helps users choose the most suitable
            investment option. The company we cooperated with serves the role of
            a business mediator. It brings together business people who need a
            consultation and consultancy agencies that are willing to provide
            such services. The system we have developed is an internal tool for
            the company employees. It features convenient communication and
            scheduling tools, which minimize the need for any other tools to be
            used. As the platform features a lot of personal data, the security
            of it is the number one concern. MySQL database development of back
            end helped us ensure the ultimate level of data safety.
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
                <span>
                  <Link href="/tech-front-end-react">React</Link>
                </span>
                ,
                <span>
                  <Link href="/services-web-development-node">Node.js</Link>
                </span>
                ,
                <span>LoopBack</span>
                ,
                <span>MySQL</span>
                ,
                <span>
                  AWS
                  (SES, S3, Secrets Manager, Lambda, CloudWatch, ElasticSearch, Kibana)

                </span>
                ,
                <span>Serverless</span>
                ,
                <span>Terraform</span>
                ,
                <span>Jenkins</span>
              </span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Methodology</b>
              : Kanban
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Team</b>
              : 3 developers, 1 QA, and 1 PM
            </div>
          </div>
          <Works
            works={works.filter(({ title }) => ['Business Research Platform'].includes(title))}
          />
        </div>
      </section>
    </div>
    <LetsStart/>
  </Layout>
);

export default TechDataBaseMongo;
