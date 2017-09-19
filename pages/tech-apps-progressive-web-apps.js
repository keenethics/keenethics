import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techApps } from '../main.config';

const TechAppsProg = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="app"
        points={techApps}
      />
      <div className="content-block">
        <div className="content">
          <h2>Progressive Web App Development Services</h2>
          <p>
            Let us start from the beginning. So what are progressive web apps and why are they
            becoming so popular? Unlike traditional applications, progressive web apps (PWA) are a
            hybrid of regular websites and mobile applications. This model attempts to combine
            features offered by most modern browsers with the benefits of mobile experience.
          </p>
          <p>
            According to Google Developers website, a Progressive Web App uses modern web
            capabilities to deliver an app-like user experience.
          </p>
          <p>
            What is the key benefit of launching progressive web apps? With a help of a Progressive
            Web App, you can reach more users beyond the App Store for iOS users and the Google Play
            for Android users. In other words, you receive access to a large market of users and,
            therefore, an opportunity to grow engagement and increase conversions. But there is more
            to say. Top progressive web apps features are more than that. Long story short:
          </p>
          <ul>
            <li>
              Progressive apps work for every user, no matter which browser or mobile platform he
              prefers;
            </li>
            <li>There is no complex installation process;</li>
            <li>
              Desktop, mobile, tablet – it does not matter. Progressive web apps are responsive;
            </li>
            <li>
              With a help of a service worker, they load instantly, regardless of the network state;
            </li>
            <li>
              You know that 53% of users will leave a site if it takes longer than 3 seconds to
              load. And once loaded, users expect them to be fast, no scrolling or slow-to-respond
              interfaces. Notice, that progressive web app developers know how to make your app
              fast.
            </li>
            <li>
              Served via HTTPS to prevent snooping and to ensure content has not been tampered with.
              In other words, progressive web apps are safe.
            </li>
          </ul>
          <p>
            Ordering Progressive App Development Services is a great idea if you want to cover a big
            market and do not see the reason to spend your budget on iOS App Development, Android
            App Development, and Website Development Services. And this is another undeniable plus
            of developing progressive web apps instead of native ones.
          </p>
          <h3>Hire Progressive Web App Developers</h3>
          <p>
            If you want to build a progressive web app, hire an experienced software development
            provider. Often local market players have high rates, so many companies, especially from
            the USA and European Countries, consider offshore and nearshore vendors. You can find
            both giant software development providers and middle-sized or small companies, so take a
            look at the company&apos;s field of expertise.
          </p>
          <p>
            On our Keenethics spaceship, progressive web app development is one of the main
            services. You can find some progressive web apps examples in our portfolio to make sure
            that our astronauts have all required knowledge and a solid experience to build
            high-class products. Contact us anytime and deliver an amazing experience to your users.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechAppsProg.propTypes = {
  url: PropTypes.object,
};
TechAppsProg.defaultProps = {
  url: {},
};

export default TechAppsProg;
