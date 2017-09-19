import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndAurelia = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="fe"
        points={techFrontEnd}
      />
      <div className="content-block">
        <div className="content">
          <h2>Aurelia Development Services</h2>
          <p>
            Let’s start from what is Aurelia framework and in what cases there is sense to use it.
            Shortly speaking, Aurelia is a free open-source JavaScript frontend framework for
            mobile, desktop and web product development.
          </p>
          <p>
            Aurelia.js development is ideal for those next-generation apps and has a lot of features
            that really make a difference:
          </p>
          <ul>
            <li>Extensible HTML;</li>
            <li>Modern Architecture;</li>
            <li>Broad Language Support;</li>
            <li>Two-Way Databinding;</li>
            <li>MV* with Conventions;</li>
            <li>Routing & UI Composition;</li>
            <li>Easy to test.</li>
          </ul>
          <p>
            Aurelia framework is backed by Blue Spire, a company with a ten-year history dedicated
            to advancing web app development by creating powerful libraries, frameworks, and tools.
            Also, Aurelia is supported by a strong and fast-growing community of developers making
            it more powerful.
          </p>
          <p>
            One of the key features of Aurelia JavaScript Framework is that it allows focusing on
            business logic, not on the framework itself. Our Keenethics astronauts find Aurelia JS
            framework concise and simple, powerful and flexible. These benefits became possible
            because Aurelia was composed of smaller, focused modules. This makes building custom
            solutions easier and faster.
          </p>
          <h3>Hire Aurelia.js developers</h3>
          <p>
            Some middle-sized and large businesses are looking for Aurelia developers for hire on
            local markets but those who want to cut their development budgets and save some
            resources consider outsourcing.
          </p>
          <p>
            Choosing the right framework can be a difficult decision to make. There are way too many
            information and contradictory facts. There is a battle between Aurelia.js vs. Angular 2
            developers, React and Vue.js developers, native and hybrid development fans. That is the
            main reason why we suggest to you to contact Tech Consultants and receive a professional
            advice.
          </p>
          <p>
            On our Keenethics spaceship, we provide high-end web development services with the
            following benefits:
          </p>
          <ul>
            <li>Pro-level Teams;</li>
            <li>Flexible Hiring Models;</li>
            <li>Fully Transparent Processes;</li>
          </ul>
          <p>
            So if you are looking for highly-skilled dedicated development teams who are good at all
            the JavaScript frameworks, including development in Aurelia, Keenethics spaceship is the
            right company for you.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechFrontEndAurelia.propTypes = {
  url: PropTypes.object,
};
TechFrontEndAurelia.defaultProps = {
  url: {},
};

export default TechFrontEndAurelia;
