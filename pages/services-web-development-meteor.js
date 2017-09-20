import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { servicesWebDevelopmentTabs } from '../main.config';

const ServicesWebDevelopmentMeteor = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image={'web_development'}
        points={servicesWebDevelopmentTabs()}
      />
      <div className="content-block">
        <div className="content">
          <h2>Meteor.js Development Services</h2>
          <p>
            When you have decided to launch a cross-platform application or a website, you need to
            find experienced professionals to do the tech side. When choosing a partner, pay
            attention to the stack of technologies they use (the bigger – the better does not always
            work here) and, of course, check some delivered projects.
          </p>
          <p>
            Astronauts on our spaceship have strong expertise in building Angular, Node.js and
            cross-platform Meteor.js web applications for a variety of industries. Depending on your
            requirements, our astronauts will suggest what technology Meteor.js vs Angular will suit
            the best. Here we will explain what is Meteor.js for and does your project really
            need it.
          </p>
          <p>
            Meteor keeps its place as one of the most powerful open-source JavaScript web frameworks
            written using Node.js and covers all stages of the software development process. Today
            MeteorJS development services include rapid prototyping and cross-platform (Android,
            iOS, Web) development. Latest versions are also used for the back end development,
            database and business logic management.
          </p>
          <p>
            Key benefits of using Meteor JS framework:
          </p>
          <ul>
            <li>Efficiency. Now it does not take ages for developers to write the code.</li>
            <li>High Security. Thanks to a large community the framework is being well tested.</li>
            <li>Costs. Meteor JS is a free open-source product.</li>
          </ul>
          <p>
            Meteor integrates with MongoDB and uses the Distributed Data Protocol and a
            publish–subscribe pattern to automatically propagate data changes to clients without
            requiring the developer to write any synchronization code. That is why Meteor.js is
            being used for developing real-time applications for Mazda, IKEA, Honeywell.
          </p>
          <h3>Hire Meteor.js Developers</h3>
          <p>
            If you look for Meteor.js Development Service on the local market, you will probably
            notice, that this service can be a budget-burning one. No wonder businesses from small
            to large search for reliable and honest partners abroad. Hiring an offshore Meteor.js
            development company can streamline the project budget and decrease the day-to-day
            management routine.
          </p>
          <p>
            Today, Eastern Europe is one of the most prominent outsourcing destinations. The
            competition is quite strong, so each Meteor.js development vendor strives to deliver
            excellent products. In example, on our Keenethics spaceship, except of the product
            itself, you will receive a chance to pick the software development process methodology,
            the pricing model, select developers for your own Dedicated Development Team and so on.
          </p>
          <p>
            The pricing policy on our spaceship is flexible and depends on the project&apos;s
            complexity and time limits. We can use the Fixed Price or the Time and Materials (T&M)
            model as well. Usually, for the most of our partners and customers, the T&M model is
            preferable because in this case they pay-for-what-they-use and get an opportunity to
            implement changes almost at any stage of the project.
          </p>
          <p>
            As a Meteor Official Partner, we strive to deliver only well-thought products. Contact
            us anytime and we will build a competitive application for your business.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
ServicesWebDevelopmentMeteor.propTypes = {
  url: PropTypes.object,
};
ServicesWebDevelopmentMeteor.defaultProps = {
  url: {},
};

export default ServicesWebDevelopmentMeteor;
