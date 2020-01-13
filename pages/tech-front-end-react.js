/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import Works from '../components/portfolio/works';

import { techFrontEnd, works } from '../main.config';

const whyReactJs = [
  {
    description: 'Quick launch.',
    additionalText: 'A React.js development company can launch a project in a short time as the framework takes only a few minutes to set up.',
  },
  {
    description: 'Responsive design.',
    additionalText: 'React is the most convenient framework for creating interactive and intuitive designs. Reactjs app development is the optimal decision for fetching and recording dynamically changing data.',
  },
  {
    description: 'Reusable design components.',
    additionalText: 'A React.js development company can develop applications for different platforms almost simultaneously and two times faster.',
  },
  {
    description: 'Easy integration.',
    additionalText: 'With no extra effort, React can be integrated with other libraries and frameworks, such as jQuery, Angular, Backbone, or Vue. The code written with React is more predictable and easier to read and debug.',
  },
  {
    description: 'Suitable for any project.',
    additionalText: 'A Reactjs developer can make any idea work: both create a complex web or mobile app from scratch or integrate some new features into an existing software product.',
  },
  {
    description: 'Comprehensive documentation.',
    additionalText: 'The React community is large and steadily growing. For this reason, there is a comprehensive documentation of this framework and a lot of readily available solutions.',
  },
];

const servicesList = [
  {
    icon: '/static/services/node-js/node-js-web-and-application-development.png',
    title: 'Web and mobile Reactjs app development',
  },
  {
    icon: '/static/services/node-js/node-js-applications.png',
    title: 'React applications maintenance and support',
  },
  {
    icon: '/static/services/node-js/ui-ux-development-for-node-js.png',
    title: 'UI/UX development for React',
  },
  {
    icon: '/static/services/node-js/node-js-data-management.png',
    title: 'React data management',
  },
  {
    icon: '/static/services/node-js/custom-node-js-software-development-solutions.png',
    title: 'Custom React software development solutions',
  },
  {
    icon: '/static/services/node-js/node-js-migrating.png',
    title: 'React.js migrating',
  },
];

const TechFrontEndReact = () => (
  <Layout>
    <ContentNavigation
      image="fe"
      points={techFrontEnd()}
    />
    <div className="content-block">
      <section>
        <h1 className="text-center">React JS Development Company</h1>
        <p className="text-center text-italic">Using a JS library for the development of responsive user interfaces and management of dynamically changing data.</p>
        <CallToActionButton />
      </section>
      <section>
        <h2>What Is React JS?</h2>
        <p>React is a JavaScript library for building the most visually appealing and responsive user interfaces. It can be used to build simple but elegant one-page websites or basic mobile applications. At the same time, it allows us to build major applications and platforms, which can operate with large and dynamically changing data without the need to incorporate other libraries or constantly reload the web page. </p>
        <p>The React framework is simple but efficient. The code written with React is quick and easy to test and debug. You can hire React.js developers to create a scalable and adaptive application or a platform, which will never fail your business nor your users. </p>
        <p>Our highly-skilled professionals offer Reactjs development services of the highest quality. With us, Reactjs app development becomes even easier.</p>
      </section>
      <section>
        <h2>Why React JS?</h2>
        <img
          style={{ margin: '25px auto 35px auto' }}
          src="/static/services/tech-front-end-react/why-react-js.jpg"
          alt="Why React JS?"
        />
        <FeaturesList list={whyReactJs} titleBold />
        <CallToActionButton title="ESTIMATE YOUR PROJECT" href="/contacts?activeForm=estimate" />
      </section>

      <section>
        <h2>What Do We Offer?</h2>
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

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth.</h3>
        <p>You can request Reactjs development services and robust solutions in multiple industries, including <a href="/services-education-software-development" target="_blank" rel="noopener noreferrer nofollow">education</a>, e-commerce, healthcare, finance, business services, fashion, food, real estate, and logistics. Our Reactjs developers have not just technical expertise but also industry-specific skills and knowledge.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value.</h3>  
        <p>We are ethical towards our employees, partners, and customers. You can be sure that we communicate and cooperate with the principles of honesty and transparency because ethics is more than just a part of our corporate name.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks.</h3>
        <p>Let us promptly turn your idea into a perfect final software product. As a full-cycle React.js development company, we offer Reactjs services including discovery and research, design and development, testing and debugging, deployment, maintenance, and support.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise.</h3>
        <p>Our team has a great deal of expertise in React development, and we are willing to share it with you. React is the JS library we use the most. Almost half of <a href="/portfolio" target="_blank" rel="noopener noreferrer nofollow">projects</a> we have developed are React-based.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data.</h3>
        <p>You can be sure that we closely follow all the <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank" rel="noopener noreferrer nofollow">data security</a> regulations and NDA requirements, Also, we want our pricing strategy to be fair and transparent. When you hire React.js developers, we want your software development experience to be pleasant and trouble-free. For this reason, we employ a pricing strategy of your choosing, should it be a fixed price or a <a href="/blog/1554420300000-estimates" target="_blank" rel="noopener noreferrer nofollow">Time-and-Material</a> approach.</p>
      </section>

      <section>
        <h2>React Projects</h2>
        <Works works={works.filter(({ title }) => ['SelfLeaders', 'Banker Advisor', 'WorkBooking'].includes(title))} />
      </section>

      <CallToActionButton title="CONTACT US" href="/contacts" />
    </div>
  </Layout>
);

export default TechFrontEndReact;
