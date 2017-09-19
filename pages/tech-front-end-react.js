import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndReact = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="fe"
        points={techFrontEnd}
      />
      <div className="content-block">
        <div className="content">
          <h2>React JS Developers</h2>
          <p>
            React was first deployed on Facebook&apos;s newsfeed and later on Instagram. Today,
            React is one of the most often used open-source JavaScript libraries for building user
            interfaces. But do you really need React JS developers on your project? Or using the
            basic front-end technology stack will be enough?
          </p>
          <p>
            The decision depends on your project. React is the most efficient way to build big, fast
            Web apps with JavaScript. React JS presents shape solutions to some of the front-end
            programming issues. React JS development is scalable, flexible, and powerful. When using
            only JavaScript can take a lot of time, using React makes the process go significantly
            faster. With a help of a fast-growing developer community, developers can implement a
            wide range of ideas and deliver cutting-edge products.
          </p>
          <p>
            But what if you want to build a website and mobile app? React Native enables native iOS,
            Android and UWP development with React. On our spaceship, we have experience creating
            cross-platform products and apps for different businesses.
          </p>
          <p>
            React JS makes the code more predictable and easier to debug. It is very important in a
            long perspective, especially if you are working on a startup.
          </p>
          <h3>Hire React JS Developers</h3>
          <p>
            When searching for a React JS development company, consider Ukraine as a possible
            outsourcing destination. Ukrainian offshore React JS development companies have plenty
            strengths:
          </p>
          <ul>
            <li>Access to an extensive talent pool;</li>
            <li>Strong educational background;</li>
            <li>Active tech community;</li>
            <li>Reasonable, often lower rates;</li>
            <li>The desire to deliver high-quality products that can compete.</li>
          </ul>
          <p>
            On our Keenethics spaceship, you can hire experienced React JS developers for projects
            of any complexity. Our astronauts can develop landing pages, online stores, corporate
            websites, E-Commerce solutions and much more.
          </p>
          <p>
            We have the potential to extend your business operations and offer new opportunities by
            providing high-class React JS development services for balanced prices. Contact us for
            further information or questions anytime!
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechFrontEndReact.propTypes = {
  url: PropTypes.object,
};
TechFrontEndReact.defaultProps = {
  url: {},
};

export default TechFrontEndReact;
