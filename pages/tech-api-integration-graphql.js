import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techApiIntegration } from '../main.config';

const TechApiIntegrationGraphql = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="be"
        points={techApiIntegration()}
      />
      <div className="content-block">
        <div className="content">
          <h2>GraphQL Development</h2>
          <p>
            In short, what is GraphQL and how this technology can make your app greater?
          </p>
          <p>
            GraphQL is a query language for your API which lets developers describe the complex,
            nested data dependencies of modern applications. GraphQL is designed to operate over a
            single endpoint via HTTP, optimizing for performance and flexibility.
          </p>
          <p>
            Skilled GraphQL developers can use it with any language or platform to define app’s
            backend as a well-defined schema.
          </p>
          <p>
            GraphQL provides a complete and understandable description of the data in an API, gives
            clients the power to ask for exactly what they need and nothing more, makes it easier to
            evolve APIs over time, and enables powerful developer tools.
          </p>
          <p>
            GraphQL queries access not just the properties of one resource but also smoothly follow
            references between them. While typical REST APIs require loading from multiple URLs,
            GraphQL APIs get all the data your app needs in a single request.
          </p>
          <p>
            Long story short, the key benefits of GraphQL app development are:
          </p>
          <ul>
            <li>Apps can use types to avoid writing manual parsing code;</li>
            <li>
              Apps using GraphQL are fast and stable because they control the data they get, not the
              server.
            </li>
            <li>Apps using GraphQL can be quick even on slow mobile network connections.</li>
          </ul>
          <p>
            Our GraphQL developers can grow your app from a small project all the way to something
            big. An amazing scalability is one of the main reasons why companies prefer GraphQL. Of
            course, everything depends on your projects. Here we suggest to you to contact our
            astronauts to receive a free tech advice about GraphQL, REST and other technologies.
          </p>
          <p>
            Who is using GraphQL? GraphQL is used by teams of all sizes in many different
            environments and languages to power mobile apps, websites, and APIs. Facebook&apos;s
            mobile apps have been powered by GraphQL since 2012. In the list of companies using
            GraphQL development you will find such giants as GitHub, Airbnb, Pinterest, Coursera,
            Meteor, Shopify, Mixcloud, M1 Finance, Intuit and others.
          </p>
          <h3>GraphQL Developers</h3>
          <p>
            Hiring an offshore software service provider will make your project cost-efficient
            without any quality losses. Hiring offshore GraphQL developers in Ukraine provides
            businesses with tangible benefits such as an access to ample resources and enhanced
            flexibility. Consider hiring developers who have solid understanding and experience in
            GraphQL development and relevant projects in their portfolio. We have used GraphQL in a
            variety of projects for different industries and business needs. Some of them were build
            with GraphQL and Node.js, GraphQL and Meteor and other technologies.
          </p>
          <p>
            Just contact our GraphQL developers and get a project estimate in no time.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechApiIntegrationGraphql.propTypes = {
  url: PropTypes.object,
};
TechApiIntegrationGraphql.defaultProps = {
  url: {},
};

export default TechApiIntegrationGraphql;
