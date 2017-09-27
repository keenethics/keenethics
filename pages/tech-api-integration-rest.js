import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techApiIntegration } from '../main.config';

const TechApiIntegrationRest = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      url={url}
      image="be"
      points={techApiIntegration()}
    />
    <div className="content-block">
      <h1>REST Development</h1>
      <p>
        Let’s start from what is REST and what is its role in the software development process.
      </p>
      <p>
        REST is not a specific programming language nor a technology, it has no official set of
        tools or specification. REST development is rather a method of creating APIs
        (Application Programming Interface, which are methods of connecting with other libraries
        or applications) with certain organizational principles. It is easy to understand REST
        as a series of guidelines and architectural styles used for data transmission.
      </p>
      <p>
        REST is the most logical, efficient and widespread standard in the creation of APIs for
        web applications, but can pass data to software as well. The focus is on making APIs
        last for decades, instead of optimizing for performance. Also, REST and REST API
        development makes the apps horizontal growth possible.
      </p>
      <p>
        Following REST development principles emphasizes scalability of component interactions,
        generality of interfaces, independent deployment of components, and intermediary
        components to reduce interaction latency, enforce security, and encapsulate legacy
        systems.
      </p>
      <p>
        REST systems aim for fast performance, reliability, and the ability to grow, by reusing
        components that can be managed and updated without affecting the system as a whole, even
        while it is running. These are main reasons why we choose REST development on our
        Keenethics spaceship.
      </p>
      <h2>Hire REST Developers</h2>
      <p>
        Most businesses, especially the rising ones, search for opportunities to keep the budget
        within reason. One of the ways is to assign the development part to an offshore provider
        that has lower rates but the same quality.
      </p>
      <p>
        We understand that finding a reliable nearshore vendor to develop a working software
        product is not an easy business decision. When hiring a REST development service
        provider, we suggest to you to consider:
      </p>
      <ul>
        <li>company&apos;s years of experience in general;</li>
        <li>similar or related projects in vendor’s portfolio;</li>
        <li>match your project’s size with provider’s capabilities.</li>
      </ul>
      <p>
        If you want to save time, contact us and our REST developers will do their best to
        deliver an efficient solution to your business.
      </p>
    </div>
  </Layout>
);

TechApiIntegrationRest.propTypes = {
  url: PropTypes.object,
};
TechApiIntegrationRest.defaultProps = {
  url: {},
};

export default TechApiIntegrationRest;
