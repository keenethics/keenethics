import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { servicesMobileDevelopment } from '../main.config';

const ServicesWebDevelopmentAndroid = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image={'android'}
        points={servicesMobileDevelopment}
      />
      <div className="content-block">
        <div className="content">
          <h2>Android Mobile App Development</h2>
          <p>
            On of the most efficient ways to achieve new business goals is to find a mobile software
            development team and build your own app to strengthen brand’s position. Till more and
            more users will choose smartphones for entertainment, solving their needs and online
            surfing mobile application development will be a must-have for a business.
          </p>
          <p>
            For mobile application development android is a platform worth to start from as it has
            the biggest number of users around the world.
          </p>
          <h3>Professional android application development</h3>
          <p>
            Looking for android application development services abroad takes longer time, but it is
            worth doing. For example, to launch mobile application development Los Angeles or New
            York are cities that often come to mind. But consider that hiring an offshore android
            app development company can help you to optimize the budget and keep the product quality
            on a high level.
          </p>
          <p>
            When picking an android application development company pay attention to their
            portfolio, areas of expertise, and approach to partnership. Are they agile? Can they
            build an MVP? All that matters as it gives value.
          </p>
          <p>
            We believe that professional android application development starts from an individual
            and his passion for programming and achieving new goals. An experienced android
            application developer at Keenethics spaceship uses up-to-date technologies and software.
            We use the official development environment Android Studio that helps to create apps on
            every type of Android device.
          </p>
          <p>
            To improve android application development skills our astronauts visit professional
            trainings and meetups. It helps to make android application development process on our
            spaceship to go faster and with greater results. Also, our android app developer knows
            which decision will make the product stand over the market and satisfy users needs.
          </p>
          <p>
            Android mobile app will give you more access to current clients and a possibility to
            attract new ones by offering them a unique experience, so do not lose it.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

ServicesWebDevelopmentAndroid.propTypes = {
  url: PropTypes.object,
};

ServicesWebDevelopmentAndroid.defaultProps = {
  url: {},
};

export default ServicesWebDevelopmentAndroid;
