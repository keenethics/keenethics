import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';
import PageTabs from '../components/page/tabs';

import { servicesOutstaffing } from '../main.config';

const ServicesOutstaffing = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap with-icons">
      <PageNavigation url={url} image={'outstaffing'} />
      <div className="content-block">
        <PageTabs
          points={servicesOutstaffing}
          withDescription
        />
        <div className="content">
          <h2>Outstaffing Process</h2>
          <p>
            Outstaffing is the process of using by one company another&apos;s company staff.
          </p>
          <p>
            The company-customer does not enter law relations with the staff of the organization
            that is providing outstaffing. At the same time hired workers undertake to fulfill a
            list of work that is specified in the contract.
          </p>
          <p>
            Thus, an outstaffing company provides a part of its staff for the defined period.
            The customer specifies terms, time and amount of work in the contract. And from now,
            workers technically are registered in the outstaffing company, and will do the work
            for another enterprise.
          </p>
          <p>
            Why it is good to withdraw staff from the company? What does it give to business? Our
            customers, who use this approach for many years, pursue different objectives. We tried
            to list a few:
          </p>
          <ul>
            <li>
              The company can remain in the status of «small business», with existing staff of more
              than 500 people;
            </li>
            <li>
              The customer gets rid of the need to spend time on the process of hiring and firing;
            </li>
            <li>
              Customers accountants get rid of time-consuming reports and paperwork;
            </li>
          </ul>
          <p>
            This trend progress through years and will grow even more. Search engines optimize
            mobile index, the percentage of searches and purchases from mobile devices is growing
            exponentially. These are the arguments for mobile application development for business.
            What applications need the business now? Sleek-designed. Social – we all love to
            share everything on Facebook and Twitter. Compatible with the smartwatch or fitness
            bracelet - wearable devices become a permanent accessory for everyone. If you want to
            know more, get in touch. Successful mobile app starts with a strategy and understanding
            of its functions and tasks. Mobile app development is a time-consuming and creative
            process at the same time.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
ServicesOutstaffing.propTypes = {
  url: PropTypes.object,
};
ServicesOutstaffing.defaultProps = {
  url: {},
};

export default ServicesOutstaffing;
