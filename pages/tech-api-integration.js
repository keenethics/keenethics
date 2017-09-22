import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import PageTabs from '../components/content/tabs';

import { techApiIntegration } from '../main.config';

const TechApiIntegration = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image="be" />
    <PageTabs points={techApiIntegration} />
    <div className="content-block">
      <h1>API Integration Services</h1>
      <p>
        No future-oriented E-Commerce, Enterprise, FinTech or other similar projects can work
        properly without integration with one of the Payment Processing Systems. So no wonder
        API Integration services are highly required.
      </p>
      <p>
        On our Keenethics spaceship, we work only with safe world-known systems and provide:
      </p>
      <ul>
        <li>PayPal API Integration;</li>
        <li>Stripe API Integration;</li>
        <li>Braintree API Integration;</li>
      </ul>
      <p>
        Each of these systems has its pros and cons. The choice depends on many factors and if
        you do not know for sure it is better to consult API Integration Developers. On our
        spaceship, we have experience providing API Integration for a variety of businesses,
        from startups to solid market players. We have completed PayPal API Integration for
        mobile apps, landing pages, online stores, desktop apps. Stripe API Integration was done
        for retail markets, online services, and other digital products.
      </p>
      <h2>Hire API Integration Developers</h2>
      <p>
        No matter the size of the business, you can not do everything in-house using only your
        existing resources. When looking for a service provider, companies often consider
        different outsourcing destinations.
      </p>
      <p>
        What are the main reasons why companies, from small to large, hire offshore software
        development companies? Let’s take a closer look.
      </p>
      <ul>
        <li>
          Focus on the most important business processes. Sometimes we all want to take part
          in everything that is going around. But let’s face it: unlikely you have to
          participate in routine processes.
        </li>
        <li>
          Reduce load on the in-house teams. Outsource a part of the project, for example, API
          Integration services, chatbot development, website updates, or a whole project to a
          specialized company. This will let your employees do the job they were hired for and
          achieve better results instead of spending time on additional tasks.
        </li>
        <li>
          Cost-effectiveness. Companies save up to 40% of software development costs when
          outsourcing. Plus, usually, you can choose a comfortable pricing model.
        </li>
        <li>
          No need to find, hire and teach new employees, especially if the project is not a
          long-term one.
        </li>
      </ul>
      <p>
        If you have decided to outsource front end and back end development, API Integration,
        maintenance and support, look for trustworthy solid market players. Check your potential
        partner’s portfolio and case studies, look for references on professional social
        networks, take a free consultation and ask questions.
      </p>
      <p>
        Whether you want to launch a landing page or build a mobile app, integrate with Payment
        Processing Systems or build a chatbot, delegate the work to our Keenethics spaceship and
        receive the result you need.
      </p>
    </div>
  </Layout>
);

TechApiIntegration.propTypes = {
  url: PropTypes.object,
};
TechApiIntegration.defaultProps = {
  url: {},
};

export default TechApiIntegration;
