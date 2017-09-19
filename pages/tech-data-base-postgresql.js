import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techDatabase } from '../main.config';

const TechDataBasePostgresql = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="be"
        points={techDatabase}
      />
      <div className="content-block">
        <div className="content">
          <h2>PostgreSQL Development</h2>
          <p>
            Let’s start from what is PostgreSQL and what are its main benefits. Shortly, PostgreSQL
            is a powerful, open source object-relational database system with more than 15 years of
            active development.
          </p>
          <p>
            PostgreSQL’s source code is available under an open source license. This license gives
            the freedom to use, modify and distribute PostgreSQL in any form.
          </p>
          <p>
            One of the key pros of PostgreSQL is that it is highly customizable. PostgreSQL runs
            stored procedures in more than a dozen programming languages, including Java, Node.js,
            Perl, Python, Ruby, C/C++, and its own PL/pgSQL, which is similar to Oracle’s PL/SQL.
            PostgreSQL database developers can run it on all major operating systems, including
            Linux, UNIX, and Windows.
          </p>
          <p>
            There is a long list of other PostgreSQL benefits for your project:
          </p>
          <ul>
            <li>
              Significant saving on staffing costs. PostgreSQL has been designed and created to have
              much lower maintenance and tuning requirements, yet still retain all of the features,
              stability, and performance.
            </li>
            <li>
              Reliability and stability. It is extremely common for companies to report that
              PostgreSQL has never, ever crashed in several years of high activity operation.
            </li>
            <li>
              Extensible. The source code is available to all at no charge. If we need to customise
              or extend PostgreSQL in any way, we are able to do so with a minimum of effort, and
              with no attached costs. This is complemented by the community of PostgreSQL
              professionals and enthusiasts around the globe that also actively extend PostgreSQL on
              a daily basis.
            </li>
            <li>
              Designed for high volume environments. PostgreSQL is extremely responsive in high
              volume environments.
            </li>
            <li>
              GUI database design and administration tools. There are many high-quality GUI Tools
              available for PostgreSQL development from both open source developers and commercial
              providers.
            </li>
          </ul>
          <p>
            PostgreSQL has a proven architecture that has earned it a strong reputation for
            reliability, data integrity, and correctness. You should definitely choose PostgreSQL
            vs. MySQL for potentially scalable, fast-growing projects. But PostgreSQL is not only
            a powerful database system capable of running enterprise projects, it is a development
            platform to build web and software products as well.
          </p>
          <h3>PostgreSQL Database Developers</h3>
          <p>
            If you want to hire PostgreSQL developers and keep you budget cost-efficient, consider
            offshore software development service providers. Reasonable rates, huge talent pool,
            and favourable business climate make Ukraine one of the best destinations for
            outsourcing PostgreSQL services to.
          </p>
          <p>
            When choosing a PostgreSQL service vendor in Ukraine, take into account several
            factors: what company’s portfolio says about expertise in various domains and
            technology areas, long-term partnerships with customers, available engagement models,
            does the company follow Agile Methodologies, etc. Check if the company has experience
            in other database systems, for example, MySQL.
          </p>
          <p>
            Contact our astronauts to get a technical advice and a professional estimate on your
            project.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechDataBasePostgresql.propTypes = {
  url: PropTypes.object,
};
TechDataBasePostgresql.defaultProps = {
  url: {},
};

export default TechDataBasePostgresql;
