import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techApiIntegration } from '../main.config';

const TechApiIntegrationElastic = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="be"
        points={techApiIntegration}
      />
      <div className="content-block">
        <div className="content">
          <h2>Elasticsearch Development Services </h2>
          <p>
            Elasticsearch is not as well-known as many tools and technologies but used properly it
            can give mind blowing results. Let’s start from what is Elasticsearch and how it can
            improve your business.
          </p>
          <p>
            In a few words, Elasticsearch is a search engine based on Lucene. Elasticsearch is a
            distributed, multitenant-capable full-text (RESTful) search and analytics engine with an
            HTTP web interface and schema-free JSON documents capable of solving various use cases.
          </p>
          <p>
            Firstly, Elasticsearch helps to perform and combine structured, unstructured, geo,
            metric, and any other searches needed.
          </p>
          <p>
            Secondly, Elasticsearch aggregations help to zoom out to explore and analyze trends and
            patterns in data and understand the bigger picture. This type of Elasticsearch usage is
            recognized in E-Commerce projects and also loved by business analytics. As
            metaphorically mentioned on the official website, Elasticsearch helps to discover the
            expected and uncover the unexpected.
          </p>
          <p>Take a look at some key Elasticsearch cons:</p>
          <ul>
            <li>Speed;</li>
            <li>Easy to install and setup;</li>
            <li>The price (open source under the terms of the Apache License);</li>
            <li>JSON over HTTP transfers;</li>
            <li>Scalability (running on several servers is possible);</li>
            <li>Real-Time indexation;</li>
            <li>Multi-tenancy;</li>
            <li>Possible to transfer to the Cloud.</li>
          </ul>
          <p>
            Elasticsearch services are used by various companies and organizations, including such
            giants as GitHub, Stack Exchange, Blizzard, Dell, eBay, Warner Brothers, Netflix,
            Facebook, Slack, BBC, Walmart, USAA, and a lot more.
          </p>
          <h3>Hire Elasticsearch Developers</h3>
          <p>
            Hiring in-house teams or local market players can be expensive and burn a hole in the
            project budget. No wonder many businesses, from small to large, are looking for offshore
            partners.
          </p>
          <p>
            Since for the last few years every future-oriented businesses are interested in data
            analytics, Elasticsearch development became a highly required service. Outsourcing this
            type of service allows companies to focus on core competencies and strategy. Therefore,
            outsourcing is not only effective for saving costs without additional risks but may also
            minimize business disruptions.
          </p>
          <p>
            On our Keenethics spaceship, Elasticsearch developers can build a search engine for your
            E-Commerce, Enterprise and other projects. Tell us more about your project and your
            ideas so we can help to find the most efficient solution for you to grow.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechApiIntegrationElastic.propTypes = {
  url: PropTypes.object,
};
TechApiIntegrationElastic.defaultProps = {
  url: {},
};

export default TechApiIntegrationElastic;
