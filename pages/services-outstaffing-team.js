import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesOutstaffing } from '../main.config';

const ServicesOutstaffingTeam = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      url={url}
      image={'outstaffing_team'}
      points={servicesOutstaffing()}
    />
    <div className="content-block">
      <h1>Dedicated Development Team</h1>
      <p>
        Outstaffing is the process of using by one company another`s company staff. The
        company-customer does not enter law relations with the staff of the organization that is
        providing outstaffing. At the same time hired workers undertake to fulfill a list of
        work that is specified in the contract.
      </p>
      <p>
        Thus, an outstaffing company provides a part of its staff for the defined period. The
        customer specifies terms, time and amount of work in the contract. And from now, workers
        technically are registered in the outstaffing company, and will do the work for another
        enterprise.
      </p>
      <p>
        Why it is good to withdraw staff from the company? What does it give to business? Our
        customers, who use this approach for many years, pursue different objectives. We tried
        to list a few:
      </p>
      <ul>
        <li>
          The company can remain in the status of &quot;small business&quot;, with existing
          staff of more than 500 people;
        </li>
        <li>
          The customer gets rid of the need to spend time on the process of hiring and firing;
        </li>
        <li>Customers accountants get rid of time-consuming reports and paperwork;</li>
        <li>
          Outstaffing also eliminates the need to track time and days of working for that type
          of employees;
        </li>
        <li>It optimizes staffing and minimizes conflicts at the office;</li>
        <li>Well, and of course – outstaffing significantly optimizes the financial side.</li>
      </ul>
      <p>
        Which of the following benefits is more important to you – it depends on your business.
        At the same time, outstaffing also used when a foreign company does not have its
        representative office in a country or city, but wants to engage market.
      </p>
      <p>
        Keenethics provides outstaffing for your business. Let`s get in touch, so you can learn
        more and use all the outstaffing features.
      </p>
    </div>
  </Layout>
);

ServicesOutstaffingTeam.propTypes = {
  url: PropTypes.object,
};
ServicesOutstaffingTeam.defaultProps = {
  url: {},
};

export default ServicesOutstaffingTeam;
