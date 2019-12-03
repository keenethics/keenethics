import React from 'react';

import Layout from '../components/layout/main';
import OurStory from '../components/about-us/OurStory';

// eslint-disable-next-line react/prefer-stateless-function
class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <section className="page__wrapper page__about-us">
          <div className="page__header">
            <h1 className="page__title">
              we solve&nbsp;
              <br className="desktop-plus" />
              your
              <br className="tablet" />
              <em>
                business&nbsp;
                <br className="mobile-only" />
                challenges
              </em>
              <br />
              with proper code
            </h1>
            <div className="separator" />
            <h5>
              KeenEthics is a full-cycle software development partner based in Lviv, Ukraine,
              and locally represented in Oss, the Netherlands.
            </h5>
            <p>
             Since 2015, we have been creating innovative software products solving business
             challenges in the most timely manner. Our clients receive high-quality web
             and mobile development services, along with tech consultancy and support.
             You can also rely on our expertise in PWA and AMP development, team augmentation,
             business analytics, and UI/UX design.
            </p>
          </div>
          <OurStory />
        </section>
      </Layout>
    );
  }
}

export default AboutUs;
