import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import FeaturesList from '../components/content/FeaturesList';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';
import Works from '../components/portfolio/works';

import { techDatabase, works } from '../main.config';

const whyMongoDBSection = [
  {
    icon: '/static/technologies/react-native/geography.png',
    alt: 'Universal',
    description:
  <>
    <b>Universal</b>
    <br />
    MongoDB can be used to build the back-end of both web and mobile apps.
    Yet, it is particularly suitable for IoT and cloud
    solutions as it is what it was mainly developed for
  </>,
  },
  {
    icon: '/static/technologies/meteor/users.png',
    alt: 'Users',
    description:
  <>
    <b>Popular</b>
    <br />
    While MongoDB is not open source, one of the user plans it offers is free.
    This technology is used by such tech giants as Facebook,
    inVision, eBay, Adobe, Google, EA, Verizon, and Shutterfly.
  </>,
  },
  {
    icon: '/static/technologies/react-native/like.png',
    alt: 'Like',
    description:
  <>
    <b>Flexible</b>
    <br />
    Each database consists of collections, which consist of documents.
    Each of these documents can be different in terms of the
    number of fields, size, and content.
  </>,
  },
  {
    icon: '/static/technologies/react-native/dimension.png',
    alt: 'Scalable',
    description:
  <>
    <b>Scalable</b>
    <br />
    A MongoDB development company does not have to define a database
    schema in advance. In fact, they can easily add fields
    to documents, documents to collections, and collections
    to the database on the go.
  </>,
  },
  {
    icon: '/static/technologies/react-native/user.png',
    alt: 'Convenient',
    description:
  <>
    <b>Convenient</b>
    <br />
    MongoDB makes queries simpler. It supports all kinds of queries,
    including field, range, and regular expression searches.
    MongoDB developers can also improve search performance with indexing.
  </>,
  },
  {
    icon: '/static/technologies/react-native/success.png',
    alt: 'Stable',
    description:
  <>
    <b>Stable</b>
    <br />
    MongoDB can withstand an increasing data load. It splits data across
    a few MongoDB instances, can run over a few servers,
    balance the load, or duplicate data
    to ensure the system stability.
  </>,
  },
];

const servicesList = [
  {
    icon: '/static/technologies/mongoDB/settings.png',
    title: 'MongoDB database development and management',
  },
  {
    icon: '/static/technologies/mongoDB/api.png',
    title: 'MongoDB architecture design',
  },
  {
    icon: '/static/technologies/mongoDB/diagram.png',
    title: 'MongoDB security hardening services',
  },
  {
    icon: '/static/technologies/mongoDB/success.png',
    title: 'MongoDB API development',
  },
  {
    icon: '/static/technologies/mongoDB/security.png',
    title: 'MongoDB testing and QA services',
  },
  {
    icon: '/static/technologies/mongoDB/support.png',
    title: 'MongoDB consulting services and support',
  },
];

const whyKeenEthicsList = [
  {
    title: 'Empowering growth.',
    desc: `
    For a software product to empower the growth of your business,
    it has to be high-quality, cost-efficient, and utterly personalized.
    MongoDB developers at KeenEthics will make sure that the
    back end of your app meets these three requirements.
    Let us know if you need assistance with
    the front end as well!`,
  },
  {
    title: 'Building value.',
    desc: `
    There are so many agencies offering MongoDB development services,
    but we declare that we are different. KeenEthics is an
    ethical company – we treat our employees, clients,
    and partners in an ethical way. If you strive for
    honest cooperation, we will gladly
    welcome you as a partner!`,
  },
  {
    title: 'Launching in a matter of weeks.',
    desc: `
    The software development market is so competitive,
    and there is no time to fool around.
    Our expert Partner Engagement Manager will
    contact you in the shortest terms and collect
    all the project requirements to transition it to
    the Project Management department.`,
  },
  {
    title: 'Bringing tech expertise.',
    desc: `
    The back end of your app is as important as the front end even
    if you cannot see it. Our MongoDB developers
    will make sure that the server side of your
    app is secure and performant. They will also
    gladly provide you with MongoDB consulting services
    in case you need such.`,
  },
  {
    title: 'Protecting your data.',
    desc: `
    The server side of your application is where all
    your data is stored, and by no means can you
    afford to have it compromised. By cooperating with MongoDB
    developers from KeenEthics, you can rest assured that they
    do everything necessary to keep your data safe.`,
  },
];

const TechDataBaseMongo = () => (
  <Layout>
    <ContentNavigation
      image="be"
      points={techDatabase()}
    />
    <div className="content-block">
      <section>
        <h1 className="text-center">MongoDB Development Services</h1>
        <p className="text-center text-italic">
          Using a flexible, scalable, and convenient database
          to solve the latest development challenges.
        </p>
        <CallToActionButton />
      </section>
      <section>
        <h2>#1</h2>
        <p className="text-center">
          MongoDB is the most popular among NoSQL databases in 2018, according to
          {' '}
          <a target="_blank" rel="noopener noreferrer nofollow" href="https://insights.stackoverflow.com/survey/2018/">
            Stack Overflow
          </a>
        </p>
      </section>
      <section>
        <h2>What Is MongoDB Development?</h2>
        <p>
          MongoDB is a document-based, distributed, dynamic, and scalable
          database, which is built to suit the latest development needs.
          Initially released in 2009, MongoDB is now at its fourth
          version, and the updates are released on a regular basis.
          The greatest advantages of this database are its flexibility,
          scalability, and convenience.
        </p>
        <p>
          SQL databases are table-based. Here, the data is stored in rows
          and columns typical of a traditional relational database. MongoDB
          is NoSQL and, respectively, document-based.
          A document-based database like MongoDB stores data in JSON objects,
          which enables MongoDB developers to create flexible
          and effective schemas.
        </p>
      </section>
      <section>
        <h2>Why MongoDB?</h2>
        <FeaturesList list={whyMongoDBSection} />
      </section>
      <CallToActionButton title="HIRE MONGO DB DEVELOPERS" />
      <section>
        <h2>What MongoDB Development Services Do We Offer?</h2>
        <ul className="mobile-development-list">
          {
            servicesList.map(({ icon, title, href }) => (
              <li className="mobile-development-item" key={title}>
                <figure>
                  <img style={{ maxWidth: '130px', maxHeight: '130px' }} src={icon} alt={title} />
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
        <WhyKeenethicsList list={whyKeenEthicsList} />
      </section>
      <section>
        <h2>Case Studies</h2>
        <div>
          <p className="text-bold text-center">WorldLabs</p>
          <p>
            It is a business development platform, which lets entrepreneurs
            push forward their innovative ideas for startups.
            Here, they can meet partners, investors, or peers to collaborate
            with from all around the world. WorldLabs serves a unique
            purpose for entrepreneurs, for employers, and for the society
            as a whole. It inspires both local and global business communities
            to advance. The goal of WorldLabs is to foster
            collaboration because collaboration is the key to success.
            In this project, we have provided both front end development
            services and back end MongoDB development services.
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
                <span>MongoDB</span>
                ,
                <span><Link href="/tech-front-end-react">React</Link></span>
                  &nbsp;and
                <span><Link href="/services-web-development-meteor">Meteor</Link></span>
              </span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Methodology</b>
              : Kanban
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Team</b>
              : 10 developers and QA specialists, 1 PM.
            </div>
          </div>
          <Works works={works.filter(({ title }) => ['WorldLabs'].includes(title))} />
        </div>

        <div>
          <p className="text-bold text-center">OneRemission</p>
          <p>
            It is a healthcare app for mobile Apple devices, the idea
            of which is to facilitate and improve the lives of cancer survivors.
            Being the first chatbot-based mobile app in the field
            of Integrative Oncology, OneRemission often receives the highest
            reviews. It serves an important purpose of educating people
            who successfully fought cancer and their caregivers on how to
            avoid the disease from reoccurring. KeenEthics is proud to
            have been a part of such a socially significant project.
          </p>
          <div>
            <div style={{ marginBottom: '5px' }}>
              <b>Platform</b>
              :&nbsp;
              <Link href="/services-mobile-development-apple">IOS</Link>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Technologies</b>
              :
              <span className="technologies-links">
                <span>MongoDB</span>
                ,
                <span><Link href="/services-web-development-node">Node.js</Link></span>
                ,
                <span>Wit.ai</span>
                ,
                <span>BotPress</span>
                ,
                <span>WebSocket</span>
              </span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Methodology</b>
              : Kanban
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Team</b>
              : 2 developers and 1 PM
            </div>
          </div>
          <Works works={works.filter(({ title }) => ['OneRemission'].includes(title))} />
        </div>

        <div>
          <p className="text-bold text-center">Banker Advisor</p>
          <p>
            It is a platform aimed to help users find the optimal provider
            of financial services. When you plan a trip, you go
            to TripAdvisor and look for the best places to go to.
            The founder of Banker Advisor constantly asked himself a
            question, why there is no such a comparative service
            for the investment and banking industry? The platform we
            have developed changes the game. It gives you a full
            picture of a certain bank or investment management agency
            through trusted peer reviews. MongoDB development services
            were particularly important here as the platform
            utilizes cloud technology.
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
                <span>Keystonejs</span>
                ,
                <span><Link href="/tech-front-end-react">React</Link></span>
                ,
                <span>Redux</span>
                ,
                <span><Link href="/tech-back-end-express">Express</Link></span>
                ,
                <span><Link href="/services-web-development-node">Node.js</Link></span>
                ,
                <span>SCSS</span>
                ,
                <span>MongoDB</span>
                ,
                <span>Mongoose</span>
                ,
                <span>AWS (SES, SNS, S3, EC2)</span>
              </span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Methodology</b>
              : Kanban
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Team</b>
              : 5 developers, 1 QA, and 1 PM
            </div>
          </div>
          <Works works={works.filter(({ title }) => ['BankerAdvisor'].includes(title))} />
        </div>

        <div>
          <p className="text-bold text-center">WorkBooking</p>
          <p>
            It is a business administration platform, which lets
            employers find part-time employees and employees find an employer.
            WorkBooking suits well both commercial businesses and NGOs.
            It is augmented with convenient tools for searching and
            scheduling, and it can be accessed on any device.
            It brings together the people who are looking for
            specialists in a certain field, place, and time to do a certain
            task and the people who want to offer such services.
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
                ,
                <span><Link href="/tech-front-end-react">React</Link></span>
                 &nbsp;and
                <span>MongoDB</span>
              </span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Methodology</b>
              : Scrum
            </div>
            <div style={{ marginBottom: '5px' }}>
              <b>Team</b>
              : 3 full-stack developers, 1 QA specialist, and 1 PM
            </div>
          </div>
          <Works works={works.filter(({ title }) => ['WorkBooking'].includes(title))} />
        </div>
      </section>
      <section>
        <h2>Now, let’s discuss your business idea!</h2>
        <CallToActionButton title="CONTACT US" />
      </section>
    </div>
  </Layout>
);

export default TechDataBaseMongo;
