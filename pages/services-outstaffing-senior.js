import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesOutstaffing } from '../main.config';

const ServicesOutstaffingSenior = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation
      url={url}
      image="outstaffing_s"
      points={servicesOutstaffing()}
    />
    <div className="content-block">
      <h1>Hire Senior Developer</h1>
      <p>
        For big promising projects and startups, the technical part of the deal is important to
        succeed. Short-sighted decisions and bad implementation can make the whole project fail.
        That is why hiring a Lead Developer to manage technical issues is required.
      </p>
      <p>
        Also, there are other reasons why you should hire a senior developer for your project:
      </p>
      <ul>
        <li>You need a tech visionary;</li>
        <li>You want your existing team to grow;</li>
        <li>You need a solution now.</li>
      </ul>
      <p>
        Experience matters. A senior developer can solve more issues at the same time and he
        identifies the weak points earlier. Moreover, hiring a senior developer makes your team
        stronger and gives growth opportunities for your existing team.
      </p>
      <p>
        Hiring a remote senior developer will make your project more cost-efficient. Since
        offshore software development vendors are not settled in countries with the most
        expensive cost of living, lower rates do not mean lower quality. You can receive more
        for the same price. We suggest to you to consider Eastern Europe as a reliable
        outsourcing destination. For example, hiring the senior developer here can cost you like
        hiring a Middle or even a Junior Developer on your local market.
      </p>
      <h2>Hiring Senior Developers</h2>
      <p>
        On the Keenethics spaceship, we have solid experience delivering high-class Desktop
        Applications and Mobile solutions for our customers all around the globe. We have done
        projects for Finance and Banking, Healthcare, Communications and Marketing and other
        industries. Our Senior Node.js Developers have experience building chatbots, real-time
        applications, tracking systems for the Transportation industry. Our Senior Meteor
        Developer developed high-loaded websites and online shops. Our Senior Mongo DB
        Developers have passed the official Mongo DB certification and can proof that they have
        all the required knowledge to support complex systems.
      </p>
      <p>
        On the Keenethics spaceship, for building mobile applications we involve highly-skilled
        Senior Mobile Apps Developers, Middle and Junior Developers (from 2 to 5+ years of
        experience), talented Delivery Managers and fastidious QA teams.
      </p>
      <p>
        For the iOS development and the Android development we involve a Lead Engineer and a few
        Senior Developers with years of experience behind. They have that unique viewpoint, that
        shapes the app’s quality and makes it meet standards, no matter in which programming
        language it is written: Swift, Objective-C or Java.
      </p>
      <p>
        To hire a strong team of Senior Developers to deliver your cool idea, contact us
        anytime!
      </p>
    </div>
  </Layout>
);

ServicesOutstaffingSenior.propTypes = {
  url: PropTypes.object,
};
ServicesOutstaffingSenior.defaultProps = {
  url: {},
};

export default ServicesOutstaffingSenior;
