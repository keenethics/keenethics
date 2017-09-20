import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techApps } from '../main.config';

const TechAppsAcc = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="app"
        points={techApps()}
      />
      <div className="content-block">
        <div className="content">
          <h2>Accelerated Mobile Pages</h2>
          <p>
            We are pretty sure that you know the fact that 40% of users click off after 3 seconds if
            the website did not launch. No wonder the performance of your mobile site is so
            important.
          </p>
          <p>
            There are a lot of ways to achieve those magnificent page speed results and improve the
            user experience. On of the most efficient is called Accelerated Mobile Pages (AMP).
          </p>
          <p>
            So what is AMP and who is AMP for? Accelerated Mobile Page is a project from Google and
            Twitter designed to make really fast mobile pages. It&apos;s basically a stripped-down
            form of HTML, a ‘diet’ HTML.
          </p>
          <p>
            Google AMP is a new open framework built entirely out of existing web technologies,
            which allows websites to build light-weight webpages. Essentially a framework for
            creating mobile web pages, AMP pages are built with 3 core components:
          </p>
          <ul>
            <li>AMP HTML is HTML with some restrictions for reliable performance;</li>
            <li>The AMP JS library ensures the fast rendering of AMP HTML pages;</li>
            <li>The Google AMP Cache can be used to serve cached AMP HTML pages.</li>
          </ul>
          <p>
            Therefore, it is better (and safer) to choose software developers, that have strong
            experience in the stack of technologies listed above.
          </p>
          <p>
            Who uses AMP? In the list of domains publishing AMP pages you will find E-commerce
            projects (Wego, Womp mobile, Milestone), publishers (The Washington Post, Nobrocker,
            Relay Media), advertisers (Teads.tv, plista) and others.
          </p>
          <h3>Accelerated Mobile Pages Pros and Cons</h3>
          <p>
            As mentioned, Google AMP helps to make your web pages very fast and load instantly. You
            do not need to look for custom solutions for different platforms: iOS, Android,
            WinPhone, BlackBerry etc.
          </p>
          <p>
            What are the Google AMP cons? You will have to maintain at least two versions of any
            article page: The original version of your article page that users will typically see,
            and the AMP page version. But it is still an easy thing to do.
          </p>
          <p>
            Our customers often ask what is AMP for SEO and is AMP SEO-friendly. AMP have two
            benefits for SEO. One is it will have a “Fast” label designation on search engine
            results pages, and the other is that it will be a ranking factor. So yes, for SEO AMP is
            good.
          </p>
          <p>
            On the Keenethics spaceship, our Front-End and Back-End developers know how to use all
            required technologies, so they can complete and AMP project in no time. You can always
            ask for Accelerated mobile pages example directly or check our portfolio.
          </p>
          <p>
            Contact us and get a tech advice on how to make your product even faster and more
            user-friendly.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechAppsAcc.propTypes = {
  url: PropTypes.object,
};
TechAppsAcc.defaultProps = {
  url: {},
};

export default TechAppsAcc;
