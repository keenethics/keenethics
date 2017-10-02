import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesOutstaffing } from '../main.config';

const ServicesOutstaffingTechnical = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      url={url}
      image={'outstaffing_tc'}
      points={servicesOutstaffing()}
    />
    <div className="content-block">
      <h1>Technical consultancy</h1>
      <p>
        There can be a lot of reasons for companies to hire Technical Consultants. If you faced
        a challenging project, have a specific business goal or want to build a startup, and
        your in-house staff does not have enough expertise to deliver it, in 95% you will need
        to look for professionals in the required field.
      </p>
      <p>
        So who is a technical advisor and how he can help you? A technical consultant is a
        person who is an expert in a particular field of knowledge. He is hired to provide
        detailed information and advice to people working in that field.
      </p>
      <p>
        How and when to use technical consultants? In short, companies hire a consultant for 1)
        expertise, 2) objectivity, 3) credibility, 4) leadership, and 5) time. The key reason
        for hiring IT consultants is to provide a needed skill, that in many cases the company
        does not wish to permanently acquire.
      </p>
      <p>
        On our opinion, hiring an IT Consultant is an efficient solution, if you want to
        implement a new system, replace an existing one, customize software and so on. For
        instance, our astronaut will help you think through your options, facilitate
        implementation, and work with your team to make sure everyone is up and running with
        your new technology solution.
      </p>
      <h2>Hire IT Consultants</h2>
      <p>
        For a lot of businesses, especially small and middle-sized, choosing tech consultants on
        the local market can bring no results, there may be no skilled enough professionals,
        their rates overcome your budget and etc. Therefore, outsourcing development, support
        and/or consulting to contractors often becomes a question of cost-effectiveness.
      </p>
      <p>
        Another reason why companies outsource IT Consulting is that they want to receive a
        fresh look on their current or future project and find if there are any weak points.
        Also, this type of consultancy is a must, when you are going to launch a product or a
        service on a new market.
      </p>
      <p>
        On the Keenethics spaceship, we can provide technical consultancy services in areas of:
      </p>
      <ul>
        <li>E-commerce;</li>
        <li>Web Development;</li>
        <li>Building Chatbots;</li>
        <li>Hybrid and Progressive App Development;</li>
        <li>Mobile Development and other services.</li>
      </ul>
      <p>
        Our astronauts have strong experience using a lot of tools and technologies for the
        Front End (React.js, Redux.js, Angular.js and so on), Back End (Express.js, Meteor.js
        and other frameworks), Databases (MongoDB, MySQL, Postgres), and building powerful Apps
        (Cordova, Phonegap, Electron).
      </p>
      <p>
        You can select any of our areas of expertise listed above and hire a skilled Technical
        Advisor to give you or your team a hand or contact us if you have questions left.
      </p>
    </div>
  </Layout>
);

ServicesOutstaffingTechnical.propTypes = {
  url: PropTypes.object,
};
ServicesOutstaffingTechnical.defaultProps = {
  url: {},
};

export default ServicesOutstaffingTechnical;
