import { withRouter } from 'next/router';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import EstimateForm from '../components/contacts/estimate-form';
import ContactForm from '../components/contacts/contact-form';
import Notify from '../components/notify/notify';
import SocialButton from '../components/social-buttons/main';

const Address = () => (
  <React.Fragment>
    <h1>
      Get
      <br />
      in touch
    </h1>
    <p>Let's discuss yout idea</p>
    <address>
      <ul className="contacts-list">
        <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <a
            href="https://goo.gl/maps/eaAU8qqLZoo"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <div className="flag-country-wrapper">
              <img src="/static/images/flag_ukraine.png" alt="Flag" className="ico flag" />
              <span className="country" itemProp="addressRegion">
                Ukraine
              </span>
            </div>
          </a>
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
      </ul>
    </address>
  </React.Fragment>
);

const wishlistPanel = wishlist => (
  <React.Fragment>
    <h1>
      Your
      <br />
      wishlist
    </h1>
    <p>
      Here will be your chosen
      <br />
      parameters.
    </p>
    <hr className="hr-top" />
    <div className="wish-list">
      {wishlist.map(item => (
        <span key={item} className="wish-item">
          {item}
        </span>
      ))}
    </div>
  </React.Fragment>
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

let ContactUsContext;
const { Provider, Consumer } = (ContactUsContext = React.createContext());

const Contacts = ({ router }) => {
  const { query } = router;

  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState('');
  const [activeContactForm, setActiveContactForm] = useState(query.activeForm !== 'estimate');
  const [notifyIsVisible, setNotifyIsVisible] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  function onClick({ target }) {
    setActiveContactForm(target.name === 'contact-form-btn');
  }

  return (
    <Layout>
      {/* {notifyIsVisible && (
        <Notify
          notifyMessage={notifyMessage}
          setNotifyIsVisible={setNotifyIsVisible}
          setNotifyMessage={setNotifyMessage}
        />
      )} */}
      <div className="contacts-page">
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
              <div
                className={classnames('contact-us-form-info-side', {
                  'contacts-panel': activeContactForm,
                })}
              >
                {activeContactForm ? <Address /> : wishlistPanel(wishlist)}
                <hr />
                <div className="social-icons">
                  <SocialButton />
                </div>
              </div>
              <div className="active-form-wrapper">
                <div className="btn-group">
                  <button
                    onClick={onClick}
                    name="contact-form-btn"
                    className={classnames('button contacts-form-btn no-shadow contact-form-btn', {
                      disabled: !activeContactForm,
                    })}
                    type="button"
                  >
                    Get in touch
                  </button>
                  <button
                    onClick={onClick}
                    name="estimate-form-btn"
                    className={classnames(
                      'button contacts-form-btn btn-estimate no-shadow estimate-form-btn',
                      {
                        disabled: activeContactForm,
                      },
                    )}
                    type="button"
                  >
                    Free estimate
                  </button>
                </div>
                <Provider
                  value={{
                    isPending,
                    setIsPending,
                    status,
                    setStatus,
                    setNotifyIsVisible,
                    notifyMessage,
                    setNotifyMessage,
                    setWishlist,
                  }}
                >
                  {activeContactForm ? <ContactForm /> : <EstimateForm />}
                </Provider>
              </div>
            </div>
          )}
        </div>
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

export default withRouter(Contacts);

export { ContactUsContext };
