import { withRouter } from 'next/router';

import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/main';
import LetsStart from './home-page-lets-start';

const CookiePolicy = ({ router }) => (
  <Layout currentURL={router.current}>
    <div className="page__wrapper p-b-0">
      <div className="page__header">
        <h1 className="page__title">Cookie Policy</h1>
      </div>
      <div className="content-block">
        <h3>What Are Cookies</h3>
        <p>
          As is common practice with almost all professional websites,
          this site uses cookies, which are tiny files that are downloaded
          to your computer to improve your experience.
          This page describes what information they gather, how we use it and why we sometimes
          need to store these cookies. We will also share how you can prevent these cookies from
          being stored however this may downgrade or &#39;break&#39; certain elements
          of the site’s functionality.
          <br />
          For more general information on cookies see the Wikipedia article on HTTP Cookies.
        </p>
        <h3>How We Use Cookies</h3>
        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately, in most cases,
          there are no industry standard options for disabling cookies without completely
          disabling the functionality and features they add to this site. It is recommended
          that you leave on all cookies if you are not sure whether you need them or not in
          case they are used to provide a service that you use.
        </p>
        <h3>Disabling Cookies</h3>
        <p>
          You can prevent the setting of cookies by adjusting the settings on your browser
          (see your browser Help for how to do this). Be aware that disabling cookies
          may affect the functionality of this and many other websites that you visit.
          Disabling cookies will usually result in disabling certain functionality and
          features of this site. Therefore it is recommended that you do not disable cookies.
        </p>
        <h3>The Cookies We Set</h3>
        <ul>
          <li>
            Email newsletters related cookies
            {' '}
            <br />
            This site offers newsletter or email subscription services
            and cookies may be used to remember if you are already registered
            and whether to show certain notifications which might only be
            valid for subscribed or unsubscribed users.
          </li>
          <li>
            Forms related cookies
            {' '}
            <br />
            When you submit data through a form such as those found on the contact pages
            or comment forms cookies may be set to remember your user details
            for future correspondence.
          </li>
          <li>
            Site preferences cookies
            {' '}
            <br />
            In order to provide you with a great experience on this site, we provide
            the functionality to set your preferences for how this site runs when
            you use it. In order to remember your preferences, we need to set
            cookies so that this information can be called whenever you interact
            with a page that is affected by your preferences.
          </li>
        </ul>
        <h3>Third-Party Cookies</h3>
        <p>
          In some special cases, we also use cookies provided by trusted third parties.
          The following section details which third party cookies
          you might encounter through this site.
        </p>
        <ul>
          <li>
            This site uses Google Analytics which is one of the most widespread and
            trusted analytics solutions on the web for helping us to understand
            how you use the site and ways that we can improve your experience.
            These cookies may track things such as how long you spend on the site
            and the pages that you visit so we can continue to produce engaging content.
          </li>
          <li>
            For more information on Google Analytics cookies,
            see the official Google Analytics page.
          </li>
          <li>
            Third-party analytics are used to track and measure usage of this site so that we can
            continue to produce engaging content. These cookies may track things such as how long
            you spend on the site or pages you visit which helps us to understand how we can
            improve the site for you.
          </li>
          <li>
            As we sell products it&#39;s important for us to understand statistics about how many
            of the visitors to our site actually make a purchase and as such this is the
            kind of data that these cookies will track. This is important to you as it means
            that we can accurately make business predictions that allow us to monitor our
            advertising and product costs to ensure the best possible price.
          </li>
        </ul>

        <h3>More Information</h3>
        <p>
          Hopefully, that has clarified things for you and as was previously mentioned if there
          is something that you arent sure whether you need or not it&#39;s usually safer to
          leave cookies enabled in case it does interact with one of the features
          you use on our site.
        </p>
      </div>
      <LetsStart />
    </div>
  </Layout>
);

CookiePolicy.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(CookiePolicy);
