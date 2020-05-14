/* eslint-disable jsx-a11y/control-has-associated-label */

import { withRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';

import { IreneK, PaulW, JeanA } from '../public/static/contacts/contacts-data';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import EstimateForm from '../components/contacts/estimate-form';
import ContactForm from '../components/contacts/contact-form';
import SocialButton from '../components/social-buttons/main';
import Person from '../components/person';
import { ContactsProvider } from '../components/context/contacts-context';
import mobileScrollIntoView from '../helpers/scroll-effects';

function initializeReactGA() {
  ReactGA.initialize(process.env.GA_KEY);
}
initializeReactGA();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

const Address = ({ className, setSelectedCountry, selectedCountry }) => (
  <address className={className}>
    <ul className="contacts-list">
      <li
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <button
          type="button"
          className={classnames({
            'container-btn': true,
            'arrow-left-triangle': selectedCountry === 'UA' || !selectedCountry,
          })}
          onClick={() => {
            setSelectedCountry('UA');
            mobileScrollIntoView('contacts-page');
          }}
        >
          <div className="flag-country-wrapper">
            <span className="flag-country-wrapper-flag">
              <img
                src="/static/images/flag_ukraine.png"
                alt="Flag"
                className="ico flag"
              />
            </span>
            <span className="country" itemProp="addressRegion">
              Ukraine
            </span>
          </div>
        </button>
        <div className="address-telephone-wrapper">
          <a
            href="https://goo.gl/maps/bwz3k5aHf8oGyAzx8"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <span itemProp="addressLocality">Lviv</span>
            ,&nbsp;
            <span itemProp="streetAddress">Kulparkivska St, 59</span>
          </a>
          <a href="tel:+380947106105" target="_blank" rel="noopener noreferrer">
            <span className="telephone" itemProp="telephone">
              +38 (094) 710 61 05
            </span>
          </a>
        </div>
      </li>
      <li
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <button
          type="button"
          className={classnames({
            'container-btn': true,
            'arrow-left-triangle': selectedCountry === 'NL',
          })}
          onClick={() => {
            setSelectedCountry('NL');
            mobileScrollIntoView('contacts-page');
          }}
        >
          <div className="flag-country-wrapper">
            <span className="flag-country-wrapper-flag">
              <img
                src="/static/images/flag_netherlands.png"
                alt="Flag"
                className="ico flag"
              />
            </span>
            <span className="country" itemProp="addressRegion">
              Netherlands
            </span>
          </div>
        </button>
        <div className="additional-info-wrapper">
          <a href="https://nl.keenethics.com/">
            <span className="text-underline">Go to the website</span>
          </a>
        </div>
        <div className="address-telephone-wrapper">
          <a
            href="https://goo.gl/maps/d4wXL4X3QiqfnLSWA"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <span itemProp="addressLocality">Oss</span>
            ,&nbsp;
            <span itemProp="streetAddress">
              Oude litherweg 2,
              {' '}
              <br className="display-block-sm" />
              {' '}
              5346 RT
            </span>
          </a>
          <a href="tel:+31202620944" target="_blank" rel="noopener noreferrer">
            <span className="telephone" itemProp="telephone">
              +31 20 262 0944
            </span>
          </a>
        </div>
      </li>
      <li
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <button
          type="button"
          className={classnames({
            'container-btn': true,
            'arrow-left-triangle': selectedCountry === 'US',
          })}
          onClick={() => {
            setSelectedCountry('US');
            mobileScrollIntoView('contacts-page');
          }}
        >
          <div className="flag-country-wrapper">
            <span className="flag-country-wrapper-flag">
              <img
                src="/static/images/united-states.svg"
                alt="Flag"
                className="ico flag"
              />
            </span>
            <span className="country" itemProp="addressRegion">
              USA
            </span>
          </div>
        </button>
        <div className="address-telephone-wrapper">
          <a
            href="https://goo.gl/maps/tg3pYa3wed1QFYH67"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <span itemProp="addressLocality">New York,&nbsp;</span>
            <span itemProp="streetAddress">
              1412 Broadway,&nbsp;
              <br className="display-block-sm" />
              21st floor, 2200
              <br />
              NY 10018
            </span>
          </a>
          <a href="tel:+19292141392" target="_blank" rel="noopener noreferrer">
            <span className="telephone" itemProp="telephone">
              +1 (929) 214 1392
            </span>
          </a>
        </div>
      </li>
    </ul>
  </address>
);

const AddressPanel = ({ setSelectedCountry, selectedCountry }) => (
  <>
    <h1>
      Get
      <br />
      in touch
    </h1>
    <p>Let&apos;s discuss your idea</p>
    <Address setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
  </>
);

const MobileWishlist = ({ wishlist }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="mobile-counter display-flex-sm-max">
      <h1>
        Your
        {' '}
        <br />
        wishlist
      </h1>
      <button
        type="button"
        className="counter"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {wishlist.length}
      </button>
      <button
        type="button"
        className={classnames('expand-icon', { down: isCollapsed })}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        &nbsp;
      </button>
      <div className={`wish-list ${isCollapsed ? 'collapsed' : ''}`}>
        {wishlist.map((item) => (
          <span key={Math.random()} className="wish-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const wishlistPanel = (wishlist) => (
  <>
    <MobileWishlist wishlist={wishlist} />
    <h1 className="display-block-sm">
      Your
      {' '}
      <br className="display-block-sm" />
      wishlist
    </h1>
    <p className="display-block-sm">
      These are the parameters
      {' '}
      <br className="display-block-sm" />
      you have selected.
    </p>
    <hr className="hr-top display-block-sm" />
    <div className="wish-list display-block-sm">
      {wishlist.map((item) => (
        <span key={Math.random()} className="wish-item">
          {item}
        </span>
      ))}
    </div>
  </>
);

const ThankYou = () => (
  <div className="thanks">
    <h1 className="thanks-header">
      Thank you
      <br />
      for the request!
    </h1>
    <h2 className="thanks-subheader">
      We will get back to you within
      <br />
      1-2 business days
    </h2>
    <a href="/blog" className="button button-send">
      Read our blog
    </a>
  </div>
);
const shouldShowForm = (query, formName) => {
  const activeForm = get(query, 'activeForm', get(query, 'activeform', null));
  return activeForm === formName;
};

const Contacts = ({ router }) => {
  const { query } = router;
  const FORM_NAMES = {
    estimate: 'estimate',
  };

  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState('');
  const [activeContactForm, setActiveContactForm] = useState(!shouldShowForm(query,
    FORM_NAMES.estimate));
  const [notifyMessage, setNotifyMessage] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [file, setFile] = useState({
    value: null,
    error: false,
  });

  function onClick({ target }) {
    setActiveContactForm(target.name === 'contact-form-btn');
  }

  useEffect(() => {
    const getLoction = async () => {
      const res = await fetch('http://ip-api.com/json');
      const json = await res.json();
      const location = json.countryCode || {};

      setSelectedCountry(location);
    };

    getLoction();
  }, []);

  useEffect(() => {
    setActiveContactForm(!shouldShowForm(query, FORM_NAMES.estimate));
  }, [query]);

  let person;
  if (selectedCountry === 'NL') person = PaulW;
  else if (selectedCountry === 'US') person = JeanA;
  else person = IreneK;
  return (
    <Layout noFooter>
      <div className="contacts-page" id="contacts-page">
        {Person({
          onClick: () => setActiveContactForm(true),
          ...person,
          wrapperClassnames: 'display-inline-flex-sm-max',
        })}
        <div className="contacts-socket">
          {notifyMessage === 'Message sent' ? (
            <ThankYou />
          ) : (
            <div
              className={`contact-us-form ${
                activeContactForm ? 'contacts-block' : 'estimate-block'
              }`}
              itemScope
              itemType="http://schema.org/Organization"
            >
              <div className="btn-group display-flex-sm-max mb-23px">
                <button
                  onClick={onClick}
                  name="contact-form-btn"
                  className={classnames(
                    'button contacts-form-btn no-shadow contact-form-btn text-capitalize',
                    {
                      disabled: !activeContactForm,
                    },
                  )}
                  type="button"
                >
                  Get in touch
                </button>
                <button
                  onClick={onClick}
                  name="estimate-form-btn"
                  className={classnames(
                    'button contacts-form-btn btn-estimate no-shadow estimate-form-btn text-capitalize',
                    {
                      disabled: activeContactForm,
                    },
                  )}
                  type="button"
                >
                  Project estimate
                </button>
              </div>
              <div
                className={classnames('contact-us-form-info-side', {
                  'contacts-panel': activeContactForm,
                })}
              >
                {activeContactForm ? (
                  <AddressPanel
                    setSelectedCountry={setSelectedCountry}
                    selectedCountry={selectedCountry}
                  />
                ) : wishlistPanel(wishlist)}
                <hr className="display-block-sm" />
                <div className="social-icons display-block-sm">
                  <SocialButton />
                </div>
              </div>
              <div className="active-form-wrapper">
                <div className="btn-group display-flex-sm">
                  <button
                    onClick={onClick}
                    name="contact-form-btn"
                    className={classnames(
                      'button contacts-form-btn no-shadow contact-form-btn text-capitalize',
                      {
                        disabled: !activeContactForm,
                      },
                    )}
                    type="button"
                  >
                    Get in touch
                  </button>
                  <button
                    onClick={onClick}
                    name="estimate-form-btn"
                    className={classnames(
                      'button contacts-form-btn btn-estimate no-shadow estimate-form-btn text-capitalize',
                      {
                        disabled: activeContactForm,
                      },
                    )}
                    type="button"
                  >
                    Project estimate
                  </button>
                </div>
                <ContactsProvider
                  value={{
                    isPending,
                    setIsPending,
                    status,
                    setStatus,
                    notifyMessage,
                    setNotifyMessage,
                    setWishlist,
                    selectedCountry,
                    file,
                    setFile,
                  }}
                >
                  <div
                    className={`form-container ${
                      !activeContactForm ? 'form-container-hidden' : ''
                    }`}
                  >
                    <ContactForm />
                  </div>
                  <div
                    className={`form-container d-flex flex-grow ${
                      activeContactForm ? 'form-container-hidden' : ''
                    }`}
                  >
                    <EstimateForm />
                  </div>
                </ContactsProvider>
              </div>
            </div>
          )}
          <Address
            className={classnames({
              'display-block-sm-max': true,
              'display-block-hide': notifyMessage === 'Message sent',
            })}
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
        </div>
        {activeContactForm && (
          <div className={classnames({
            'social-icons': true,
            'display-block-sm-max': true,
            'display-block-hide': notifyMessage === 'Message sent',
          })}
          >
            <SocialButton />
          </div>
        )}
        <Background />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KeenEthics",
              "url": "https://keenethics.com",
              "logo": "https://keenethics.com/static/images/svg/logo.svg",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+38 (096) 814 72 66",
                "contactType": "sales",
                "areaServed": "UA",
                "availableLanguage": "Ukrainian"
              },{
                "@type": "ContactPoint",
                "telephone": "+31 20 262 0944",
                "contactType": "sales",
                "areaServed": "NL",
                "availableLanguage": "Dutch"
              },{
                "@type": "ContactPoint",
                "telephone": "+1 (929) 214 1392",
                "contactType": "sales",
                "areaServed": "US",
                "availableLanguage": "en"
              }],
              "sameAs": [
                "https://www.facebook.com/keenethics.development",
                "https://twitter.com/keen_ethics",
                "https://www.instagram.com/keen_ethics",
                "https://www.youtube.com/channel/UCRO9xu-d9sYAjNu0mOABQSQ",
                "https://www.linkedin.com/company/keen-ethics",
                "https://github.com/keenethics"
              ]
            }
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "KeenEthics",
              "image": "https://keenethics.com/static/images/svg/logo.svg",
              "url": "https://keenethics.com",
              "telephone": "+38 (096) 814 72 66",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kulparkivska St, 59",
                "addressLocality": "Lviv",
                "postalCode": "79000",
                "addressCountry": "UA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.82696869999999,
                "longitude": 23.990278200000034
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
            }
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "KeenEthics",
              "image": "https://keenethics.com/static/images/svg/logo.svg",
              "url": "https://keenethics.com",
              "telephone": "+31 20 262 0944",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Oude litherweg 2,",
                "addressLocality": "Oss",
                "postalCode": "5346 RT",
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.771189,
                "longitude": 5.514320999999995
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
            }
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "KeenEthics",
              "image": "https://keenethics.com/static/images/svg/logo.svg",
              "url": "https://keenethics.com",
              "telephone": "+1 (929) 214 1392",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1412 Broadway, 21st floor",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "2200",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7536222,
                "longitude": -73.98654920000001
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
            }
          `,
        }}
      />
    </Layout>
  );
};

Contacts.propTypes = {
  router: PropTypes.object,
};
Contacts.defaultProps = {
  router: {},
};

Address.propTypes = {
  className: PropTypes.string,
  setSelectedCountry: PropTypes.func,
  selectedCountry: PropTypes.string,
};
Address.defaultProps = {
  className: '',
  setSelectedCountry: () => ({}),
  selectedCountry: '',
};

AddressPanel.propTypes = {
  setSelectedCountry: PropTypes.func,
  selectedCountry: PropTypes.string,
};
AddressPanel.defaultProps = {
  setSelectedCountry: () => ({}),
  selectedCountry: '',
};

MobileWishlist.propTypes = {
  wishlist: PropTypes.array,
};
MobileWishlist.defaultProps = {
  wishlist: [],
};

export default withRouter(Contacts);
