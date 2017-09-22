import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import PageTabs from '../components/content/tabs';

import { servicesWebDevelopmentTabs } from '../main.config';

const ServicesWebDevelopment = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image="web_development" />
    <PageTabs points={servicesWebDevelopmentTabs} />
    <div className="content-block">
      <h1>Web Development Services</h1>
      <p>
        If you want to go online and build a website or an app, you will definitely need to find
        a web development provider. Usually app and website development is taken as a process of
        creating a unique design for your product, front end and back end coding.
      </p>
      <p>
        When looking for a professional web development USA appears as a good place to start
        from. Hiring one of the top web development companies can burn the budget, so many
        small, middle-sized and large businesses prefer to find a provider with reasonable
        rates. Luckily you can hire an offshore web design development company and get a worthy
        product for the same money.
      </p>
      <h2>Professional web company</h2>
      <p>
        We believe that a professional web development company not just completes the defined
        work on time but also gives value. Transparent processes, on-time communication and
        readiness to answer questions are also important.
      </p>
      <p>
        As a full cycle professional web company we offer a wide range of services, so you can
        land here and get the whole project done in one place. Wireframing, prototyping, web
        design web development and other services are available on our spaceship.
      </p>
      <p>
        As a web development company we do the coding part. At Keenethics, we use professional
        web development software and tools. The basic stack of technologies includes Angular,
        React, JavaScript and etc. for the front and Meteor, Express and others for the back
        end. We use only respected databases like MySQL, Mongo, Postgres. For apps we pick
        Electron, Phonegap and so on. We can integrate your product with other services and
        payment systems. So at Keenethics, you can order an e commerce web development service.
      </p>
      <p>
        We pay attention to both back end and front end, so your website or an app will look
        good and work good. It will be easy to support and maintain in the future.
      </p>
      <p>
        As a web design company we offer efficient UI/UX design. And as a business development
        company we strive to build a tool that will help you to achieve new ambitious goals on
        the market.
      </p>
    </div>
  </Layout>
);

ServicesWebDevelopment.propTypes = {
  url: PropTypes.object,
};
ServicesWebDevelopment.defaultProps = {
  url: {},
};

export default ServicesWebDevelopment;
