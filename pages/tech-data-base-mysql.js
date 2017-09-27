import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techDatabase } from '../main.config';

const TechDataBaseMysql = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      url={url}
      image="be"
      points={techDatabase()}
    />
    <div className="content-block">
      <h1>MySQL Development</h1>
      <p>
        When launching a website or a mobile app, you will need to involve MySQL developers in
        your project. In short, MySQL is a database management system. It is owned by Oracle
        Corporation, a multinational computer technology corporation, headquartered in
        California. The company specializes in developing and marketing database software and
        technology, cloud engineered systems and enterprise software products.
      </p>
      <p>
        MySQL is offered under two different editions:
      </p>
      <ul>
        <li>the open source MySQL Community Server;</li>
        <li>the proprietary Enterprise Server.</li>
      </ul>
      <p>
        The open source MySQL edition is being used for small to medium web pages. MySQL
        development has one major advantage: since it is free, it is usually available on shared
        hosting packages and can be easily set up in a Linux, Unix or Windows environment.
      </p>
      <p>
        MySQL Enterprise Edition includes a set of advanced features, management tools and
        technical support to achieve the highest levels of MySQL scalability, security,
        reliability, and uptime. It reduces the risk, cost, and complexity in developing,
        deploying, and managing business-critical MySQL applications.
      </p>
      <p>
        MySQL is a central component of the LAMP (an acronym for Linux, Apache, MySQL,
        Perl/PHP/Python) open-source web application software stack. Also, MySQL database
        development is being used when building database applications with Node.js.
      </p>
      <p>
        In the list of MySQL customers you will find such giants as Google, Facebook, PayPal,
        YouTube, eBay, Twitter, UBER, LinkedIn, CISCO, Tesla, Netflix, Alibaba.com and others.
      </p>
      <h2>MySQL Developers</h2>
      <p>
        If hiring a MySQL development professional on your local market is not budget-friendly,
        you can always look for developers abroad. This decision can be a hard to make because
        it is not easy to find a trustworthy software development service provider. Here are
        some general tips on how to choose a strong MySQL development company:
      </p>
      <ul>
        <li>Find as many information about the company as you can;</li>
        <li>Look for feedbacks (for example, on Upwork, Clutch and so on);</li>
        <li>Check similar projects in company’s portfolio, look for live projects;</li>
        <li>After sending the first request, pay attention on how does the company respond.</li>
      </ul>
      <p>
        On our Keenethics spaceship, we have MySQL developers, Mongo, PostgreSQL and Neo4j
        database developers. Contact our astronauts and get a professional advice on which
        database will suit your project.
      </p>
    </div>
  </Layout>
);

TechDataBaseMysql.propTypes = {
  url: PropTypes.object,
};
TechDataBaseMysql.defaultProps = {
  url: {},
};

export default TechDataBaseMysql;
