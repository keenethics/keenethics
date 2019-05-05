import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techApps } from '../main.config';

const TechAppsPhone = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      image="app"
      points={techApps()}
    />
    <div className="content-block">
      <h1>PhoneGap App Development Services</h1>
      <p>
        Native iOS and native Android development services are time-consuming and usually cost a
        lot. Of course, if you need to reach a specially selected audience and researches show
        that this audience uses iPhones, building a native iOS App makes sense. But if you
        hesitate and are not sure which platform to choose, hire PhoneGap Developers to build a
        multi-platform mobile solution using an open-source framework Adobe PhoneGap.
      </p>
      <p>
        So what is Adobe PhoneGap and what benefits does it give? Adobe PhoneGap is Adobe&apos;s
        distribution of Apache Cordova, with some extra capabilities added by Adobe. Adobe
        PhoneGap platform enables developers to create an app that runs on a variety of mobile
        devices. Just imagine, you will not have to worry about all those different smartphones
        and tablets on the market. Your users will easily find whatever they need regardless of
        the platform and the device they prefer.
      </p>
      <p>
        The developer accomplishes the goal by writing the user interface portion of their
        application with Web technologies such as HTML, CSS, and JavaScript. Also, the developer
        gets access to APIs and app stores. PhoneGap’s development tools then bundle the HTML,
        CSS, and JavaScript files into platform-specific deployment packages.
      </p>
      <p>
        Today, PhoneGap App Developers can support a wide variety of platforms:
      </p>
      <ul>
        <li>iOS;</li>
        <li>Android;</li>
        <li>Windows Phone;</li>
        <li>BlackBerry;</li>
        <li>WebOS.</li>
      </ul>
      <p>
        PhoneGap comes complete with plugins to support device capabilities such as the
        following: accelerometer, camera, contacts, file system, media playback and recording,
        network availability. If these capabilities are not enough, PhoneGap Developers can
        extend the App with plugins that enable to access more device features, including
        barcode scanning, Bluetooth, push notifications, text to speech, calendars, Facebook
        Connect and others.
      </p>
      <h2>Hire PhoneGap App Developers</h2>
      <p>
        If you are looking forward to saving your budget, consider an idea of outsourcing
        PhoneGap Development services to a software provider. Hiring an offshore software
        development vendor will allow you to hire PhoneGap App Developers for more reasonable
        than on your local market rates.
      </p>
      <p>
        For example, on our Keenethics spaceship, we have experience delivering high-end
        cross-platform PhoneGap Apps for different businesses all around the world. Apps for
        Finance & Banking, Healthcare, Education, Transportation and other industries you can
        find in our case studies. You can feel free to ask us any questions about our projects.
      </p>
      <p>
        Contact us anytime and hire a team of experienced PhoneGap App developers to build an
        awesome App for your business in no time.
      </p>
    </div>
  </Layout>
);

TechAppsPhone.propTypes = {
  url: PropTypes.object,
};
TechAppsPhone.defaultProps = {
  url: {},
};

export default TechAppsPhone;
