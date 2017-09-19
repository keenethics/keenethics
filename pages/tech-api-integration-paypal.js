import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techApiIntegration } from '../main.config';

const TechApiIntegrationPayPal = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="be"
        points={techApiIntegration}
      />
      <div className="content-block">
        <div className="content">
          <h2>PayPal API Integration Services</h2>
          <p>
            Every E-Commerce project needs to be integrated with a Payment Processing System. We
            suggest choosing only trusted and world-known systems like PayPal Payment Processing
            System. PayPal makes it simple to get paid securely anywhere you do business: online, on
            mobile, in person or via an invoice. You can create a personal or business PayPal
            account.
          </p>
          <p>
            PayPal Integration offers a few ways on how to accept payments:
          </p>
          <ul>
            <li>On your website or app;</li>
            <li>In person or in your store;</li>
            <li>By email or phone.</li>
          </ul>
          <p>
            What is great about the PayPal Payment System, you can easily integrate with Braintree
            for next-generation commerce solutions. On our Keenethics spaceship, astronauts can
            provide any integration you need.
          </p>
          <p>
            According to the Nielsen’s Online Buyer Insights, businesses that use PayPal API
            Integration can sell more. Up to 5.3% incremental new buyers, up to 44% higher checkout
            conversion with PayPal and up to 83% of PayPal shoppers are new to the business. In the
            list of PayPal partners you will find WooCommerce, Magento, Shopify, BigCommerce, and
            others.
          </p>
          <p>
            The next step will be to find and hire PayPal API Developers and open new opportunities
            for your business.
          </p>
          <h3>Hire PayPal Developers</h3>
          <p>
            For many companies, software development services are budget-burners. To cut the
            software development costs many businesses hire offshore providers and outsource the
            part of the project or the entire project. In web app development, front-end
            development, back-end development, Stripe, Braintree, PayPal Integration services are
            the major parts businesses choose to outsource. The main difficulty is to find a
            reliable partner that has related experience and resources and can deliver a high-end
            product you need.
          </p>
          <p>
            On the Keenethics spaceship, we do not offer everything. We focus on front-end and
            back-end development, chatbot development, API Integration and other related services.
            We use wide-known JavaScript frameworks like Node.js, Vue.js, Redux.js, and others. We
            can provide Braintree, Stripe and PayPal API Integration and help to understand how the
            system works.
          </p>
          <p>
            Contact us to choose the most efficient technologies and Payment Processing Systems and
            get some tips on how to build or improve your product.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechApiIntegrationPayPal.propTypes = {
  url: PropTypes.object,
};
TechApiIntegrationPayPal.defaultProps = {
  url: {},
};

export default TechApiIntegrationPayPal;
