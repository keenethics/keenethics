import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesWebDevelopmentTabs } from '../main.config';

const ServicesWebDevelopmentNode = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation image="web_development" points={servicesWebDevelopmentTabs()} />
    <div className="content-block">
      <h1>Node.Js Development Services</h1>
      <p>
        Since businesses spend more and more time on their digital activities, Node.js
        development services become needed. Node.js is a free, open-source, cross-platform
        JavaScript runtime environment. With the help of Node.js programmers can build a diverse
        variety of server tools and applications, Node.js Chatbots, complex websites, real-time
        applications, and more. For instance, PHP, another popular back-end technology, can not
        do that.
      </p>
      <p>
        The Node.js community has developed server frameworks to accelerate the application and
        website development process. Such frameworks include Express.js, Meteor, Derby, and many
        others. Thanks to a large choice of frameworks and libraries Node.js website development
        becomes the most efficient solution for achieving specific business goals. Furthermore,
        if you hire Node.js programmers, you will get an opportunity to receive a cross-platform
        application or a website which can be scaled when your business grows.
      </p>
      <p>
        You must have heard about top sites powered on Node.JS:
      </p>
      <ul>
        <li>PayPal;</li>
        <li>Groupon;</li>
        <li>Wall Street Journal;</li>
        <li>Shutterstock;</li>
        <li>Zendesk.</li>
      </ul>
      <p>
        Corporate users of Node.js software include GoDaddy, IBM, LinkedIn, Microsoft, Netflix,
        Rakuten, Walmart, Yahoo! and others. So if you need to receive not just a standard
        website, but a powerful tool for your business, you will need to hire Hire NodeJS
        Developers to build a site that will stand out on the market.
      </p>
      <h2>Hire Node.js Developers</h2>
      <p>
        If you can not find a software Node.js development company on your local market, or
        their rates do not fit your budget, consider some trustworthy outsourcing destinations,
        like Eastern Europe. For example, many Ukrainian Node.js website development companies
        provide their services for clients from the US, Europe, Australia, Japan and other
        countries worldwide.
      </p>
      <p>
        We can deliver websites on Node.js for various needs and businesses. We have experience
        developing Node.js websites for Financial & Banking, Medical Services, E-commerce,
        Transportation and other industries.
      </p>
      <p>
        By hiring our Keenethics spaceship, you will receive a few benefits:
      </p>
      <ul>
        <li>Reasonable pricing policy;</li>
        <li>A chance to choose a paying model (fixed price, Time & Materials);</li>
        <li>Clean code and a high-class product as a result;</li>
        <li>You will always be able to keep an eye on the process.</li>
      </ul>
      <p>
        Our astronauts can develop Node.js chatbots, websites, E-commerce platforms, server
        tools, and applications. Contact us anytime to hire a team of skilled website Node.js
        developers and give your users a chance to get a keen user experience.
      </p>
    </div>
  </Layout>
);

ServicesWebDevelopmentNode.propTypes = {
  url: PropTypes.object,
};
ServicesWebDevelopmentNode.defaultProps = {
  url: {},
};

export default ServicesWebDevelopmentNode;
