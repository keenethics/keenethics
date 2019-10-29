/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import Works from '../components/portfolio/works';

import { techBackEnd, works } from '../main.config';

const whyExpressJs = [
  {
    description: 'Scalable.',
    additionalText: 'Applications developed with Express.js can be easily scaled, which gives us an opportunity to build Express.js projects of any size.',
  },
  {
    description: 'Lightweight.',
    additionalText: 'Express makes it possible to build lightweight, interactive, and user-friendly applications.',
  },
  {
    description: 'Hybrid.',
    additionalText: 'Express.js extends the functionality of Node.js, which lets us develop a high-quality hybrid app.',
  },
  {
    description: 'Unlimited.',
    additionalText: 'Express.js is not limited to one platform but makes it possible to develop cross-platform applications.',
  },
  {
    description: 'Fast.',
    additionalText: 'The development process becomes easier and more flexible by about two times, which lets the team deliver the final product faster and at a significantly lower cost.',
  },
  {
    description: 'Easy.',
    additionalText: 'Web and mobile applications developed with Express.js are easy to support and maintain.',
  },
];

const servicesList = [
  {
    icon: '/static/services/node-js/node-js-web-and-application-development.png',
    title: 'Express.js web and mobile app development',
  },
  {
    icon: '/static/services/node-js/node-js-data-management.png',
    title: 'Express.js data management',
  },
  {
    icon: '/static/services/node-js/custom-node-js-software-development-solutions.png',
    title: 'Custom Express.js software development solutions',
  },
  {
    icon: '/static/services/node-js/node-js-migrating.png',
    title: 'Express.js migrating',
  },
  {
    icon: '/static/services/node-js/ui-ux-development-for-node-js.png',
    title: 'UI/UX development for Express.js',
  },
  {
    icon: '/static/services/node-js/node-js-applications.png',
    title: 'Express.js applications maintenance and support',
  },
];

const TechBackEndExpress = () => (
  <Layout>
    <ContentNavigation
      image="be"
      points={techBackEnd()}
    />
    <div className="content-block">
      <section>
        <h1 className="text-center">Express.js Development Services</h1>
        <p className="text-center text-italic">Using the lightweight and time-efficient web and mobile development framework.</p>
        <CallToActionButton />
      </section>
      <section>
        <h2>What Is Express.js?</h2>
        <p>Express.js is the most popular and efficient Node.js framework, which is fully customizable in terms of both the development process and the final app. It offers numerous built-in features, which means the developer does not have to write them from scratch but uses ready-made templates and saves a great deal of time. Express.js considerably assists in keeping the code clean and organized. </p>
        <p>Express.js does not contradict but rather complements the functionality of Node.js. It offers a robust list of features, which includes content negotiation, robust routing, application view options, environment-based configuration, dynamic view helpers, and session-based flash notifications.</p>
        <p>Therefore, this server-side framework is actively used for both back-end and front-end <a href="/services-web-development" target="_blank" rel="noopener noreferrer nofollow">web app development</a> and <a href="/services-mobile-development" target="_blank" rel="noopener noreferrer nofollow">mobile app development</a>. Due to the advantages and opportunities it provides, the popularity of Express.js is expected to grow.</p>
        <p>Popular websites such as <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer nofollow">Paypal</a>, <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer nofollow">Yahoo!</a>, <a href="https://www.wsj.com/" target="_blank" rel="noopener noreferrer nofollow">Wall Street Journal Online</a>, <a href="https://www.groupon.com/" target="_blank" rel="noopener noreferrer nofollow">Groupon</a>, <a href="https://www.shutterstock.com/" target="_blank" rel="noopener noreferrer nofollow">Shutterstock</a>, and <a href="https://myspace.com/" target="_blank" rel="noopener noreferrer nofollow">MySpace</a>, are powered by Express.js.</p>
      </section>

      <section>
        <h2>Why Express js?</h2>

        <img
          style={{ margin: '25px auto 35px auto' }}
          src="/static/services/tech-back-end-express/why-express-js.jpg"
          alt="Why Express js"
        />
        <FeaturesList list={whyExpressJs} titleBold />

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
        <p>The answer is simple: we are a leading <a href="/services-web-development-node" target="_blank" rel="noopener noreferrer nofollow">Node.js development company</a>. Plus, Express.js, being one of the most efficient Node.js frameworks, lets us do an even better job.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth.</h3>
        <p>Regardless of the industry you are in, we strive for you to reach the best business outcome. You will be offered to cooperate with a professional specializing in your industry, should you be <a href="/services-education-software-development" target="_blank" rel="noopener noreferrer nofollow">developing an educational app</a>, a healthcare management system, or an e-commerce platform.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value.</h3>  
        <p>You can be sure that our cooperation will be built on the principles of honesty, transparency, and efficiency. As an <a href="/blog/1551175200000-our-ethical-dimension" target="_blank" rel="noopener noreferrer nofollow">ethical company</a>, we prioritize the interests and needs of our partners and users.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks.</h3>
        <p>Due to a perfectly organized partner engagement process, we are able to promptly collect requirements, conduct an estimate, and start working on your project. Also, you can cooperate full-cycle with us so that we take your idea from the initial stages to the perfect final product.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise.</h3>
        <p>Our Express.js developers are result-oriented and experienced. We have proven expertise in the field, and we are ready to share it with you. The <a href="/portfolio" target="_blank" rel="noopener noreferrer nofollow">solutions</a> that we offer you are robust, innovative, and reliable.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data.</h3>
        <p>Your software development experience will be trouble-free because our pricing and <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank" rel="noopener noreferrer nofollow">data security</a> strategies are fair and transparent. Also, we invite you to sign an NDA for both of us to have legal quarantees.</p>
      </section>

      <section>
        <h2>Portfolio</h2>
        <p>As an Express.js development company we have created:</p>
        <Works works={works.filter(({ title }) => ['Education System Platform', 'Pree', 'Banker Advisor'].includes(title))} />
      </section>

      <CallToActionButton title="CONTACT US" href="/contacts" />
    </div>
  </Layout>
);

export default TechBackEndExpress;
