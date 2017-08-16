import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techBackEnd } from '../main.config';

const TechBackEndExpress = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="be"
        points={techBackEnd}
      />
      <div className="content-block">
        <div className="content">
          <h2>Express JS Developers</h2>
          <p>
            Launching a Web or Mobile App is simple. But if you want to get more than an average
            result and receive an App that will stand out on the market, a stack of technologies is
            required. Here we will try to explain how Express JS development can improve the quality
            of your App.
          </p>
          <p>
            According to the official website, Express is a minimal and flexible Node.js web
            application framework that provides a robust set of features for web and mobile
            applications. It is the de facto standard server framework for Node.js. Such as many
            other frameworks, ExpressJS is a free open-source software. You will not have to add
            extra-costs to your budget.
          </p>
          <p>
            So what is ExpressJS good for and when do you need to hire a team of Express JS
            Developers? Mostly, ExpressJS framework is being used for creating cutting-edge Web
            Applications and APIs for various Desktop and Mobile platforms.
          </p>
          <p>
            For an Expressjs development team, creating a robust API using Expressjs is quick and
            easy. Furthermore, ExpressJS examples show good performance. Express provides a thin
            layer of fundamental web application features, without obscuring Node.js features that
            developers use.
          </p>
          <p>
            Many other frameworks, often they help to complete specific tasks, are based on Express:
          </p>
          <ul>
            <li>Feathers;</li>
            <li>ItemsAPI;</li>
            <li>KeystoneJS;</li>
            <li>LoopBack;</li>
            <li>Kraken and others.</li>
          </ul>
          <p>
            This fact proves that the ExpressJS framework is flexible and powerful enough for
            achieving a range of ambitious goals.
          </p>
          <h3>Hire ExpressJS Developers</h3>
          <p>
            If you are not planning to hire or grow your in-house development team, look for a
            trustworthy Express JS development company abroad and involve a dedicated development
            team in your project. Data shows, that Eastern Europe is now one of the most prominent
            outsourcing destinations. Offshore Expressjs development companies usually offer lower
            rates without any lack of quality. Company’s managers take care about day-to-day
            operations and office routine, so you can save time and spend it on strategic planning.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechBackEndExpress.propTypes = {
  url: PropTypes.object,
};
TechBackEndExpress.defaultProps = {
  url: {},
};

export default TechBackEndExpress;
