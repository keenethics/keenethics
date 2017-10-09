import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techApps } from '../main.config';

const TechAppsCordova = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      url={url}
      image="app"
      points={techApps()}
    />
    <div className="content-block">
      <h1>Cordova Development Services</h1>
      <p>
        Choosing between native and non-native app development services takes a lot of time: we
        all understand what native Android and native iOS apps are, but not everybody knows how
        multi-platform apps work. The question is why more and more businesses decide to build
        hybrid mobile apps instead of native ones?
      </p>
      <p>
        Cross-platform mobile apps help businesses to reach a larger audience. You are not
        limited to only Android or only iOS users and you can go upon the Google Play Market and
        the App Store. One code works for all platforms and that crazy variety of devices.
      </p>
      <p>
        On our Keenethics spaceship, for building powerful cross-platform mobile apps we use
        Apache Cordova. So what is Apache Cordova and why do we use it? Apache Cordova (formerly
        PhoneGap) is a mobile application development framework. It enables software programmers
        to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of
        relying on platform-specific APIs.
      </p>
      <p>
        So which one to choose: PhoneGap or Cordova to build a hybrid app? Simply speaking,
        Cordova is the open-source project that is the basis of PhoneGap. We can think of it as
        the engine that drives PhoneGap. In most cases, the names may be used interchangeably.
      </p>
      <p>
        Today, Apache Cordova development can be provided for a wide list of operating systems:
      </p>
      <ul>
        <li>Apple iOS;</li>
        <li>BlackBerry;</li>
        <li>Firefox OS;</li>
        <li>Google Android;</li>
        <li>Microsoft Windows Phone (7 and 8);</li>
        <li>Nokia Symbian OS;</li>
        <li>Tizen (SDK 2.x);</li>
        <li>Ubuntu Touch.</li>
      </ul>
      <p>
        Our Apache Cordova Developers can extend it with native plug-ins, allowing to add more
        functionalities. These plugins allow access to the device&apos;s accelerometer, camera,
        compass, file system, microphone, and more.
      </p>
      <h2>Hire Apache Cordova Developers</h2>
      <p>
        Nowadays, Cordova Development Services are required on the market. Apache Cordova is
        included in many commercial software products. Oracle and Salesforce use Cordova in
        their mobile development platforms. IBM MobileFirst includes a distribution of Cordova.
        Also, the list of contributors includes BlackBerry, Google, Intel, Microsoft, Mozilla,
        and others.
      </p>
      <p>
        If you want to keep your budget smart and avoid overpaying, hire Apache Cordova
        Developers on the offshore market. We suggest to you to pay attention to the
        company&apos;s case studies, areas of expertise and, if possible, references.
      </p>
      <p>
        Creating multi-platform solutions is one of the main activities on our Keenethics
        spaceship. Our astronauts have solid experience building cross-platform Cordova apps for
        a variety of industries and business needs. Tell us more about your project, so we can
        offer the most efficient solution.
      </p>
    </div>
  </Layout>
);

TechAppsCordova.propTypes = {
  url: PropTypes.object,
};
TechAppsCordova.defaultProps = {
  url: {},
};

export default TechAppsCordova;
