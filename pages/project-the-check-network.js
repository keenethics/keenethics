import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';

const baseColor = '#258b49';

const ProjectTheCheckNetwork = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">The Check Network</h2>
              <h3 className="duration">
                <span>Duration:</span> 7 months so far, planned one more year, then Keenethics will
                be supporting the project
              </h3>
              <p className="description">
                Commerce platform for effective SEO , It also allows for combining of several
                commerce platforms in one
              </p>
              <PortfolioTechnologyTags tags={['Meteor', 'React']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/the-check-network.png" alt="The Check Network" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <div className="title">E-Commerce Platform for Effective SEO Optimization</div>
            <p>
              The Check Network is a unique company. It presents an all-encompassing solution for
              different kinds of businesses. The growing companies, brands, and e-stores will
              be able to get the best use of their platforms by generating the extra sales through
              the promotion of their products or services to the specific target groups.
            </p>
            <p>
              The service provided by The Check Network is specifically designed to help their
              clients achieve the best results and save the resources at the same time. This
              service, however, is not about economizing and underperforming; it is all about
              doing the right thing in the right place and at the right time.
            </p>
            <div className="title">Reconsidering your Approach to Sales</div>
            <p>
              Some of your prospects may not even realize that they want your product until they
              see it. At the same time, there are many people who will never buy anything from you.
              The businesses achieve the best results when they put themselves out there and reach
              their target audience. Why so? Because according to the Pareto principle, 80% of
              profits
              come from 20% of customers, just like the 80% of sales come from 20% of advertising.
            </p>
            <p>
              Therefore, the business needs promotion, but it must be effective. This is
              exactly the kind of assistance that The Check Network provides. Their service
              is the 80:20 principle in action.
            </p>
            <div className="title">The Main Features</div>
            <p>
              This is the international network that combines a number of
              multifunctional e-marketing platforms with each specializing in
              a particular field of interest, as well as different
              aspects of lifestyle. The business, webshop, or brand that
              joins the network is sure to reach the new clients with relevant
              content and thus create more turnover.
            </p>
            <p>
              The Check Network provides the consumers with everything they want
              to know about the product
              or service. They get to discover the business and see everything that it has to offer,
              which prompts them to fulfill their need and make a purchase.
            </p>
            <p>
              The Check Network combines the meaningful and relevant pieces
              of content with an integrated
              shopping environment. This unique mix of simplicity,
              efficiency, and cost-effectiveness is
              a definition of the successful promotion.
            </p>
            <p>
              The specter of businesses that are currently being promoted through
              The Check Network covers
              a pretty large scope, from the horse riders to coffee lovers,
              and their approach to the
              promotion is the solution that really works.
            </p>
            <div className="title">The Team</div>
            <p>
              The company is run by the team of professionals who know
              everything about the possibilities
              of the global network and most importantly, they have all
              the right strategies and tools
              to make the internet work for the business. The expert online marketers and editors
              help the clients reach their business goals by working
              with target groups on a daily basis.
            </p>
            <p>
              Overall, The Check Network is a great service for the
              businesses, web stores, and brands as
              it enables them to achieve much better results.
            </p>
            <div className="project-feedback">
              <h3>Feedback</h3>
              <p>
                Keenethics’s is a young company that may need to hone its message
                but their high level of technical
                expertise, friendly staff, and cost-conscious approach stood out
                compared to the competition. They
                are thoughtful in their suggestions and feedback. They feel like a business partner.
              </p>
              <div className="project-customer">
                Maarten Pieter Overvliet, the Netherlands
              </div>
            </div>
            <a
              href="http://thechecknetwork.com"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectTheCheckNetwork.propTypes = {
  url: PropTypes.object,
};
ProjectTheCheckNetwork.defaultProps = {
  url: {},
};

export default ProjectTheCheckNetwork;
