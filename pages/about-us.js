import React from 'react';

import Layout from '../components/layout/main';

// eslint-disable-next-line react/prefer-stateless-function
class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <section className="page_wrapper">
          <div className="page__header">
            <h1 className="page__title">
              we solve
              <br />
              your&nbsp;
              <em>business challenges</em>
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
        </section>
      </Layout>
    );
  }
}

export default AboutUs;
