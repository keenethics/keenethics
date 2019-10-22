import { withRouter } from 'next/router';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { MaxS, PaulW } from '../static/contacts/contacts-data';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import EstimateForm from '../components/contacts/estimate-form';
import ContactForm from '../components/contacts/contact-form';
import SocialButton from '../components/social-buttons/main';
import Person from '../components/person';
import { ContactsProvider } from '../components/context/contacts-context';

const Address = ({ className, setSelectedCountry, selectedCountry }) => (
  <address className={className}>
    <ul className="contacts-list">
      <li
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
        className={(selectedCountry === 'UA' || !selectedCountry) ? 'arrow-left-triangle' : ''}
      >
        <button
          type="button"
          className="container-btn"
          onClick={() => {
            setSelectedCountry('UA');
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
            href="https://goo.gl/maps/eaAU8qqLZoo"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <span itemProp="addressLocality">Lviv</span>
            ,&nbsp;
            <span itemProp="streetAddress">Kulparkivska St, 59</span>
          </a>
          <a href="tel:+380968147266">
            <span className="telephone" itemProp="telephone">
              +38 (096) 814 72 66
            </span>
          </a>
        </div>
      </li>
      <li
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
        className={selectedCountry === 'NL' ? 'arrow-left-triangle' : ''}
      >
        <button
          type="button"
          className="container-btn"
          onClick={() => {
            setSelectedCountry('NL');
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
            href="https://goo.gl/maps/JRXdtT7aaRE5b2Hd6"
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
          <a href="tel:+31202620944">
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
          className="container-btn"
          onClick={() => {
            setSelectedCountry('UA');
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
          <a href="tel:+19292141392">
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
        {''}
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

const Contacts = ({ router }) => {
  const { query } = router;

  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState('');
  const [activeContactForm, setActiveContactForm] = useState(
    query.activeForm !== 'estimate',
  );
  const [notifyMessage, setNotifyMessage] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  function onClick({ target }) {
    setActiveContactForm(target.name === 'contact-form-btn');
  }

  const person = selectedCountry === 'NL' ? PaulW : MaxS;
  return (
    <Layout>
      <div className="contacts-page">
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
                  Free estimate
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
                    Free estimate
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
          <Address className="display-block-sm-max" setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
        </div>
        {activeContactForm && (
          <div className="social-icons display-block-sm-max">
            <SocialButton />
          </div>
        )}
        <Background />
      </div>
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
  setSelectedCountry: null,
  selectedCountry: '',
};

AddressPanel.propTypes = {
  setSelectedCountry: PropTypes.func,
  selectedCountry: PropTypes.string,
};
AddressPanel.defaultProps = {
  setSelectedCountry: null,
  selectedCountry: '',
};

MobileWishlist.propTypes = {
  wishlist: PropTypes.array,
};
MobileWishlist.defaultProps = {
  wishlist: [],
};

export default withRouter(Contacts);
