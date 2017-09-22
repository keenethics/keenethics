import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techApiIntegration } from '../main.config';

const TechApiIntegrationBraintree = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      url={url}
      image="be"
      points={techApiIntegration}
    />
    <div className="content-block">
      <h1>Braintree API Integration Services</h1>
      <p>
        Payment System Integration is one of the basic services you are going to look for when
        launching a business online. Braintree is one of the most trusted online payments
        gateway providers.
      </p>
      <p>
        Braintree is a PayPal service. So you get Braintree’s innovative technology and support
        by one of the world’s most trusted fintech brands. This fact makes Braintree Payments
        safe. Therefore, Braintree development services are required on the market.
      </p>
      <p>
        Braintree integration is a complex solution, and there are 4 products to choose from:
      </p>
      <ul>
        <li>
          Braintree Direct. Used when you are looking for accepting direct payments;
        </li>
        <li>
          Braintree Marketplace. Great when you want to power your marketplace;
        </li>
        <li>
          Braintree Auth for those who want to take action on merchant’s behalf;
        </li>
        <li>
          Contextual Commerce is used for creating connected commerce experience.
        </li>
      </ul>
      <p>
        So if you want to go big and grow your business, Braintree API Integration will help you
        to achieve your goal. Braintree has the tools you need to grow internationally. With one
        integration, your business can accept online and mobile payments in 130+ currencies and
        44 countries.
      </p>
      <p>
        Braintree Integration helps businesses accept, process, and split payments to help
        maximize business opportunities and revenue growth.
      </p>
      <h2>Hire Braintree Developers</h2>
      <p>
        Outsourcing is one of the most popular tools to cut the software development costs and
        save up to 40% of the budget. What kind of work companies outsource? Front-end and
        back-end development, PayPal, Stripe, Braintree API Integration services, chatbot
        development, and a lot more.
      </p>
      <p>
        The problem is, finding a trustworthy partner can take time. Many companies consider
        Eastern Europe, due to the closer proximity of time zones, similar values, and solid
        technological expertise. Ukraine remains one of the top IT outsourcing destinations in
        the region offering great results for reasonable prices.
      </p>
      <p>
        Depending on the aspects that are important for your business, you may decide which
        vendor is better for you and hire Braintree Developers for effective cooperation.
      </p>
      <p>
        On the Keenethics spaceship, astronauts can provide the integration with technologies
        and tools like PayPal, Stripe, Elastic Search, and Braintree API Integration. Strong
        experience in back-end development guarantees the work will be done properly and on
        time. Contact us to find an effective solution for your project.
      </p>
    </div>
  </Layout>
);

TechApiIntegrationBraintree.propTypes = {
  url: PropTypes.object,
};
TechApiIntegrationBraintree.defaultProps = {
  url: {},
};

export default TechApiIntegrationBraintree;
