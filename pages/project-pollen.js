import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#6f727d';

const ProjectPollen = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary full-width" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Pollen</h2>
              <h3 className="duration"><span>Duration:</span> 4 months</h3>
              <p className="description">
                Organizing social-campaigns via Gmail contacts
              </p>
              <div className="tags">
                <div className="tag">Meteor</div>
                <div className="tag">Blaze</div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Just a few clicks to boost the sales on Facebook and all over the Internet.
            </p>
            <p>
              Simply put, Pollen is a service for organizing social-campaigns via Gmail contacts.
              This is a simple and cost-effective automation platform for marketing that assists
              the businesses in reaching more customers with the help of the highly targeted ad
              campaigns.
            </p>
            <div className="title">How Pollen Works?</div>
            <p>
              Supposing, Jack has developed some eco-friendly substitute to plastic and he wants
              to get a support from other people who are also concerned about the environment.
              Just in a few clicks, he creates a campaign and adds the emails of his friends who
              might be interested in that topic. In the text of the message, he asks the people
              to spread this message to their friends. In turn, each of his friends who receive
              the message is encouraged to do the same thing. As the
              result, the message spreads wider and wider. More and more genuinely
              interested people learn
              about the product, Jack increases the awareness about his idea and receives
              the support at the
              same time. This approach is extremely effective because it involves
              potentially interested audience
              only, and this is exactly what Pollen does automatically.
            </p>
            <p>
              Pollens uses fewer bullets, but it most certainly hits the target.
            </p>
            <div className="title">The Idea and Technology behind Pollen</div>
            <p>
              An idea that stands behind this application is very simple: it was developed as
              the means to assist people in the organization of social-campaigns using
              the email-contacts of campaign-supporters.
            </p>
            <p>
              Pollen develops an email list of a store, comes up with website engagement
              and social page
              engagement, and based on the analysis of their current traffic and buyers,
              it automatically
              builds similar audiences. This self-serve marketing automation platform
              assists the online
              retailers in acquiring new customers on both Facebook and other websites.
            </p>
            <p>
              Pollen allows the user to launch the complex acquisition and
              conversion driven campaigns.
              The setup takes around two minutes, whereas the new customers keep coming
              long after that.
              The application automatically adjusts the campaigns as they run. Regardless
              of the budget
              for the campaign, each is treated with equal dedication and optimized to
              outperform the competition.
            </p>
            <p>
              The machine learning technology enables Pollen to conduct the analysis
              of online buying patterns.
              Thus, the app will show the ads only to those prospects who are most likely
              to become the customers.
              This is the simple yet powerful solution that helps the business owners get
              the most from their business.
            </p>
            <div className="title">Pollen: Ensuring the Efficiency</div>
            <p>
              The application automatically conducts A/B testing of Ad Creative to allocate the
              budget in a smart way - by promoting the top performing ads first.
            </p>
            <p>
              Pollen also optimizes the client budget to cover not only prospecting
              but also retargeting. This
              particular function enables the acquisition of new prospects and fosters
              their converting into customers.
            </p>
            <p>
              All in all, this is the app that automates a lot of processes and gives
              the business owners peace of mind.
              It is basically an advertising autopilot that triples the effectiveness
              of business processes by turning
              the advertising into a completely hands-free experience.
            </p>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectPollen.propTypes = {
  url: PropTypes.object,
};
ProjectPollen.defaultProps = {
  url: {},
};

export default ProjectPollen;
