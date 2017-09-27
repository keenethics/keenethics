import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndReactNative = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image="fe" points={techFrontEnd()} />
    <div className="content-block">
      <h1>React Native Developers</h1>
      <p>
        React became one of the most popular JavaScript frameworks used for websites and web
        applications. Created and firstly used on Facebook, and later - Instagram, React library
        is being supported by a large community of skilled developers all over the world.
      </p>
      <p>
        But today, user experience for mobile is even more important than you might think. This
        fact, combined with the success of the React framework, forced developers to go beyond
        desktop platforms. This is how React Native came on.
      </p>
      <p>
        With the help of React Native developers can create powerful Hybrid Apps for iOS,
        Android, and Windows. Since then, many businesses decided to hire React Native
        Developers and make their products available for all mobile platforms at once. In some
        way, hybrid applications are, at core, websites packaged into a native wrapper. For
        example, our astronauts have delivered React Native for iOS development services. It
        helped our customer to save the budget and avoid overpaying. As another example, React
        Native for Android development saved not only the budget but also the time to deliver
        the app.
      </p>
      <p>
        Short, key benefits of Hybrid App Development are:
      </p>
      <ul>
        <li>Portability (one code base);</li>
        <li>Access to various hardware/software capabilities;</li>
        <li>Faster speed to market;</li>
        <li>More budget-friendly.</li>
      </ul>
      <p>
        There is a way to receive even more benefits by looking for React Native development
        services abroad and hiring an offshore company as a partner.
      </p>
      <h2>Hire React Native Developers</h2>
      <p>
        In terms of quality and costs, Eastern Europe is the most prominent outsourcing
        destination. On our Keenethics spaceship, React Native Developers have all required
        skills and experience to develop high-class cross-platform products. We can deliver
        Hybrid Web App Development Services for Finance, Banking, Logistic, Healthcare and many
        other industries.
      </p>
      <p>
        Nobody has time for bad user experiences, including your customers and employees. Hire a
        React Native development team to give them the best experience they can get. Feel free
        to contact us for further information!
      </p>
    </div>
  </Layout>
);

TechFrontEndReactNative.propTypes = {
  url: PropTypes.object,
};
TechFrontEndReactNative.defaultProps = {
  url: {},
};

export default TechFrontEndReactNative;
