import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { servicesWebDevelopmentTabs } from '../main.config';

const ServicesWebDevelopmentE = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image={'web_development'}
        points={servicesWebDevelopmentTabs}
      />
      <div className="content-block">
        <div className="content">
          <h2>Ecommerce web development services</h2>
          <p>
            Developing ecommerce websites and platforms is one of the most popular services
            nowadays. So what is ecommerce development and when do you need to hire a team of
            developers? The most common used and understandable e-commerce definition describes it
            as a process of buying and selling online. Therefore, if you want to deliver your
            products or services to a big online market, you will need to involve professionals.
          </p>
          <p>
            Let us take a look at e-commerce advantages and disadvantages for a business. We picked
            only the main pros because there are slightly more:
          </p>
          <ul>
            <li>access to a huge audience;</li>
            <li>ability to communicate directly with your customers and partners;</li>
            <li>gathering statistics and understanding your clients becomes easier.</li>
          </ul>
          <p>
            Your ecommerce website will work 24/7, giving you an opportunity to think about the
            strategy and creative processes.
          </p>
          <h3>Ecommerce website development cost</h3>
          <p>
            Looking for offshore ecommerce development services is a safe way to keep the project
            budget smart. Of course, there are dozens of content around the internet and an
            ecommerce website development tutorial is a common helper, especially for small
            businesses. But we suggest you to avoid template ideas and order a powerful custom tool.
            So how to make a ecommerce website that will suit your business needs?
          </p>
          <p>
            Our astronauts create unique thought out UI/UX design and clean front end and back end
            code. We can integrate your website with social medias, payment proceeding systems and
            other required services. We use only cutting-edge technologies and certificated software
            to receive the highest quality.
          </p>
          <p>
            On our Keenethics spaceship ecommerce website development cost is reasonable and
            affordable for every business. As a young company, we understand our partners and strive
            to find the most efficient solutions keeping the budget within reason.
          </p>
          <p>
            An ecommerce website development process takes time if you want to get a good result.
            Estimates usually depend on the project&apos;s complexity. Depending on types of
            e-commerce together we will decide which one to chose. Contact us to find the best
            solution for your business.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
ServicesWebDevelopmentE.propTypes = {
  url: PropTypes.object,
};
ServicesWebDevelopmentE.defaultProps = {
  url: {},
};

export default ServicesWebDevelopmentE;
