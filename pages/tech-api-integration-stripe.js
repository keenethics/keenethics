import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techApiIntegration } from '../main.config';

const TechApiIntegrationStripe = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="be"
        points={techApiIntegration}
      />
      <div className="content-block">
        <div className="content">
          <h2>Stripe API Integration Services</h2>
          <p>
            When integrating online business with a payment processing system, forward-thinking
            companies usually choose Stripe API Integration, PayPal or Braintree. Each of these
            systems works great. The choice mostly depends on your requirements.
          </p>
          <p>
            Stripe is known as a powerful and flexible software platform for running a business
            online. Whether you are building a subscription service, an on-demand marketplace, an
            e-commerce store, or a crowdfunding platform, Stripe Payment System will suit you.
          </p>
          <p>
            The key features of Stripe are that in almost all cases, Stripe is a cheaper option than
            PayPal because of lower service fees. Stripe is an always-improving product that gains
            new features every month. Integrating Stripe API means you get early access to the
            latest technologies, from Apple Pay to Bitcoin.
          </p>
          <p>
            Also, Stripe values data portability. If you decide to leave Stripe, your Stripe
            Developers can migrate your credit card data in a secure and PCI-Compliant way. It is
            good to know you have a choice, and will not be locked in forever.
          </p>
          <p>
            Therefore, Stripe API Integration services are good for almost all fields:
          </p>
          <ul>
            <li>Mobile Commerce;</li>
            <li>On-demand Economy;</li>
            <li>Software as a service;</li>
            <li>Nonprofits;</li>
            <li>Platform Payments.</li>
          </ul>
          <p>
            World’s most innovative technology companies are scaling faster and more efficiently by
            building their businesses on Stripe. Kickstarter, Facebook, Slack, Asana, Wetransfer,
            Dribble, The Guardian and others use Stripe API Integration services to create the best
            possible product for users.
          </p>
          <h3>Hire Stripe Developers</h3>
          <p>
            For companies looking their ways to get savings outsourcing becomes one of the most
            prominent, and safe tools. Hiring an outsource Dedicated Development Team helps to save
            up to 40% of the software development costs. You can outsource front-end and back-end
            development, PayPal, Braintree, Stripe API Integration, and a lot more.
          </p>
          <p>
            As an Agile-oriented company, here at Keenethics we strive to satisfy the customer
            through an early and continuous delivery of high-quality software. Our back-end
            astronauts have experience using a wide range of technologies and tools for different
            purposes. Our Stripe API Developers can easily integrate your business with a robust
            payment system. If you need PayPal or Braintree API Integration, we can do that as well.
          </p>
          <p>
            Contact our astronauts and find out what technologies will help you to achieve your
            business goals.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechApiIntegrationStripe.propTypes = {
  url: PropTypes.object,
};
TechApiIntegrationStripe.defaultProps = {
  url: {},
};

export default TechApiIntegrationStripe;
