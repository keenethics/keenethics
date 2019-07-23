import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../components/layout/main';
import SocialButton from '../components/social-buttons/main';

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

JsonLd.propTypes = {
  data: PropTypes.object.isRequired,
};

const companyData = {
  '@context': 'http://www.schema.org',
  '@type': 'Organization',
  name: 'KeenEthics',
  url: 'https://keenethics.com/',
  description: 'Custom Software Development Company',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kulparkivska St, 59',
    addressLocality: 'Lviv',
    postalCode: '79000',
    addressCountry: 'Ukraine',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+38 (096) 814 72 66',
    contactType: 'Sales Representative',
  },
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <JsonLd data={companyData} />
        <div className="home-page">
          <div className="home-page-content">
            <div className="home-page-content-link">
              <a
                href="https://www.upwork.com/agencies/~0106b5437592391f94"
                className="link link-upwork"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Top rated Upwork agency
              </a>
            </div>
            <div className="home-page-content-link">
              <a
                href="https://clutch.co/profile/keenethics"
                className="link link-clutch"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                5-stars rated company at Clutch
              </a>
            </div>
            <h1>
              Keen &amp; Ethical
              <br />
              Software
              <br />
              Development
            </h1>
            <h2>
              You have a keen idea
              <span className="dash" />
              we have a keen approach
            </h2>
            <Link href="/contacts?activeForm=estimate">
              <a className="button contacts-goal">Free estimate</a>
            </Link>
            <div className="home-page-content-contact" itemScope itemType="http://schema.org/Organization">
              <div className="contact-item" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <div className="contact-item-icon">
                  <img src="/static/images/svg/icon-map.svg" alt="point" />
                </div>
                <div>
                  <a href="https://goo.gl/maps/eaAU8qqLZoo" rel="noopener noreferrer nofollow" target="_blank">
                    <span itemProp="streetAddress">Kulparkivska St, 59</span>
                  </a>
                  <i>
                    <span itemProp="addressLocality">Lviv</span>
  ,
                    {' '}
                    <span itemProp="addressRegion">Ukraine</span>
                  </i>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <img src="/static/images/svg/icon-mail.svg" alt="mail" />
                </div>
                <div>
                  <a href="mailto:business@keenethics.com">business@keenethics.com</a>
                  <i>
                    Drop Us a Letter or
                    {' '}
                    <a href="skype:maxsav28?chat" className="skype-link">Call</a>
                  </i>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <img src="/static/images/svg/icon-tel.svg" alt="phone" />
                </div>
                <div>
                  <a href="tel:+380968147266"><span itemProp="telephone">+38 (096) 814 72 66</span></a>
                  <i>Give Us a Call</i>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 9 6">
                    <rect fill="#21468B" width="9" height="6" />
                    <rect fill="#FFF" width="9" height="4" />
                    <rect fill="#AE1C28" width="9" height="2" />
                  </svg>
                </div>
                <div>
                  <a href="https://nl.keenethics.com" target="_blank" rel="noopener noreferrer">nl.keenethics.com</a>
                  <i>Switch to Dutch version</i>
                </div>
              </div>
            </div>
          </div>
          <div className="social-icons home-page-social">
            <SocialButton />
          </div>
          <div className="home-page-background">
            <div className="home-page-background-inner">
              <div className="planet" />
              <div className="orbits">
                <div className="orbit" />
                <div className="orbit" />
                <div className="orbit" />
                <div className="orbit" />
              </div>
              <div className="stars">
                <div className="star-1" />
                <div className="star-2" />
                <div className="star-3" />
                <div className="star-4" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
