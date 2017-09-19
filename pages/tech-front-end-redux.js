import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndRedux = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="fe"
        points={techFrontEnd}
      />
      <div className="content-block">
        <div className="content">
          <h2>Redux Developers</h2>
          <p>
            When you have decided to give customers a better experience and create a mobile app,
            notice that you will have to choose between a few opportunities.
          </p>
          <p>
            For developing an app for an iOS platform you will need to hire Objective-C or Swift
            developers. Java developers are needed for programming Android Apps and so on. These are
            called native applications. But there is an opportunity to receive all at once by hiring
            a Hybrid App Development team.
          </p>
          <p>
            Today, React is the major JavaScript library, used for creating Hybrid Mobile Apps for
            all popular platforms, including iOS, Android, and Windows Phone. React library is used
            on Facebook and Instagram, so it has a large community of developers.
          </p>
          <p>
            To build high-class hybrid mobile apps, Redux Development Services are also required.
            What is Redux and why do programmers use it? In general, Redux for JavaScript Developers
            is a library primarily used together with React for building user interfaces.
          </p>
          <p>
            Redux itself is an open-source JavaScript library designed for managing application
            state. Simply speaking, React Redux Developers use Redux as a predictable state
            container for JavaScript apps. Redux helps apps to behave consistently, run in different
            environments (client, server, and native), and makes them easy to test.
          </p>
          <h3>Hire Redux Developers</h3>
          <p>
            Depending on the project, Redux Development can cost a lot. Hiring independent top
            freelance Redux Developers can take time and there can be some issues with managing
            day-to-day operations and tasks. The decision to hire Redux Developers from an offshore
            company often becomes the most efficient one.
          </p>
          <p>
            On the Keenethics spaceship, we use only the official software and hardware, the latest
            Redux Devtools and other related technologies. Our astronauts can use Redux together
            with React, or with any other library. We can write Redux apps with Angular, Ember,
            jQuery, or vanilla JavaScript. Our location helps us to keep our prices smart and
            deliver high-class products at the same time.
          </p>
          <p>
            Contact us anytime and hire a skilled team of Redux JS Developers to give your current,
            and potential users the best cross-platform mobile experience.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechFrontEndRedux.propTypes = {
  url: PropTypes.object,
};
TechFrontEndRedux.defaultProps = {
  url: {},
};

export default TechFrontEndRedux;
