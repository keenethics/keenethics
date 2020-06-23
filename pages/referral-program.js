import React from 'react';

import Link from 'next/link';

import Head from '../components/layout/head';

const ReferralProgram = () => (
  <>
    <Head />

    <section className="page__wrapper page__referral-program">
      <div className="welcome-block">
        <div className="welcome-block-left">
          <div className="logo">
            <Link href="/#main">
              <a role="presentation" className="navigation-logo">
                <img src="/static/images/logo.svg" alt="Keenethics" />
              </a>
            </Link>
          </div>
          <div className="welcome-block-left-content">
            <h1>Welcome to Our Referral Program</h1>
            <div className="text">
              <img src="/static/images/svg/quotes.svg" className="quotes left" alt="quotes" />
              I am happy to see you were directed by one of our satisfied customers.
              KeenEthics is your ethical software development partner with a special referral offer.
              You can read about the offer below or book a meeting with me,
              and I will introduce you to the benefits of working with us personally.
              <img src="/static/images/svg/quotes.svg" className="quotes right" alt="quotes" />
            </div>
            <div className="contact-data">
              <div className="seo-name">
                Max Savonin
                <p>CEO of KeenEthics</p>
              </div>
              <div>
                <Link href="#">
                  <a className="button orange-btn">Book a meeting</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="horizontal-line" />
          <div className="contacts">
            <a href="tel:+38 (094) 710 61 05">
              <p><img src="/static/images/svg/icon-tel.svg" alt="tel" /></p>
              +38 (094) 710 61 05
            </a>
            <a href="mailto:max.savonin@keenethics.com">
              <p><img src="/static/images/svg/icon-mail.svg" alt="tel" /></p>
              max.savonin@keenethics.com
            </a>
            <a href="skype:maxsav28">
              <p><img src="/static/images/svg/skype.svg" alt="tel" /></p>
              maxsav28
            </a>
          </div>
        </div>
        <div className="welcome-block-right" />
      </div>

      <div className="project-stage">
        <h2>At what stage is your project?</h2>
        <div className="stages" />
      </div>
    </section>
  </>
);


export default ReferralProgram;
