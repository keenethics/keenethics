import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndNext = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="fe"
        points={techFrontEnd}
      />
      <div className="content-block">
        <div className="content">
          <h2>Next.js Development Services</h2>
          <p>
            To create a powerful web app, a wide range of frontend and backend technologies is being
            used. The concrete choice depends on a variety of factors, starting from main business
            goals and ending up with the budget and time limits. Recently, building server-rendered
            React apps with Next.js is one of our most-requested services.
          </p>
          <p>
            The Next.js framework is a new addition to the React open-source ecosystem. Next is a
            framework for universal server-rendered React applications that makes the process of
            building these types of applications much faster, and easier. With Next.js development,
            it is easier to focus on the business logic, not on the framework itself.
          </p>
          <p>
            For developers, Next framework offers:
          </p>
          <ul>
            <li>no configuration or additional setup;</li>
            <li>easy component and global style with Glamor library;</li>
            <li>
              automatic transpilation and bundling (with your own Webpack configurations and Babel);
            </li>
            <li>hot code reloading;</li>
            <li>route prefetching.</li>
          </ul>
          <p>
            Also, the Next.js framework is able to implement with Express or any other Node.js HTTP
            server.
          </p>
          <p>
            We suggest to you to contact our astronauts or talk to a Tech Consultant and receive a
            professional advice on the most efficient stack of technologies for bringing your
            project.
          </p>
          <h3>Hire Next.js Developers</h3>
          <p>
            One of the most effective and safe ways to keep the software development budget within
            reason is to outsource a part of the project or the whole project to a software
            development service provider. Many businesses consider East-European countries like
            Ukraine to establish long-term cooperation. Good location (2-hour flight from key
            European capitals), reasonable rates and highly-educated developers make Ukrainian
            market one of the most prominent in the region.
          </p>
          <p>
            On our Keenethics spaceship, we have experience delivering high-end web apps, sites and
            other web-based solutions for different industries and business purposes. Our astronauts
            work with a solid stack of frameworks, including Next.js framework, React, Redux,
            Vue.js, Aurelia, and others. Therefore, we can complete projects of different
            complexity.
          </p>
          <p>
            If you are looking forward to hiring a Dedicated Team and build an App using Next.js
            framework, contact our astronauts.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechFrontEndNext.propTypes = {
  url: PropTypes.object,
};
TechFrontEndNext.defaultProps = {
  url: {},
};

export default TechFrontEndNext;
