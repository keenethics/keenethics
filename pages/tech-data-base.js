import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import PageTabs from '../components/content/tabs';

import { techDatabase } from '../main.config';

const TechDataBase = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image="db" />
    <PageTabs points={techDatabase} />
    <div className="content-block">
      <h1>Database Development Services</h1>
      <p>
        More than 95% of web-based products and services require database development and
        support. If you are about to build something more complex than a static page, you
        will definitely need to find database developers to join your team.
      </p>
      <p>
        On our Keenethics spaceship, we have experience in database development using the
        following database systems:
      </p>
      <ul>
        <li>Mongo;</li>
        <li>MySQL;</li>
        <li>PostgreSQL.</li>
      </ul>
      <p>
        The concrete choice often is based on the type of technologies used on the project
        before. If the project starts from sketch, together we can choose a database, that
        will satisfy all the requirements and suit the project in the most effective way. Each
        of these database development systems works great. The thing is to use them in the
        right context.
      </p>
      <p>
        MySQL database is the most popular and often used when it comes to developing
        corporate websites, online stores, marketplaces, and other typical web-based products.
        Many startups, large companies, and government agencies choose MongoDB Development.
        With MongoDB, our astronauts can build and deploy a highly scalable and
        performance-oriented database. Choose Mongo DB, if you expect a high write load and
        need high availability in an unreliable environment (Cloud and Real Life). Another
        system, PostgreSQL Database is reliability and stable, it is extremely responsive in
        high volume environments.
      </p>
      <p>
        If you hesitate, contact our database developers and tell more about your project to
        find the most cost-effective and reasonable solution.
      </p>
      <h2>Hire Database Developers</h2>
      <p>
        Depending on your business goals, software and database development can cost a
        fortune. To keep the budget within reason and accelerates time-to-market, many
        companies cooperate with offshore software development providers.
      </p>
      <p>
        Some of the most successful products that we use today were outsourced. Some of the
        examples are Slack, GitHub, Alibaba, and UpWork, among many others.
      </p>
      <p>
        When hiring an offshore Database Development company, follow these tips:
      </p>
      <ul>
        <li>Make a thought-out decision, do not hire in a hurry;</li>
        <li>Avoid companies with suspiciously low rates and a wide range of services;</li>
        <li>Check company’s portfolio, case studies and look for related projects;</li>
        <li>
          If possible, search for references and feedbacks, check professional networks.
        </li>
      </ul>
      <p>
        Contact our astronauts to receive a free consultation and hire a team of Database
        Developers to build a top-notch product for your business.
      </p>
    </div>
  </Layout>
);

TechDataBase.propTypes = {
  url: PropTypes.object,
};
TechDataBase.defaultProps = {
  url: {},
};

export default TechDataBase;
