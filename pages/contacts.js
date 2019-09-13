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

const Address = ({ className }) => (
  <address className={className}>
    <ul className="contacts-list">
      <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <a
          href="https://goo.gl/maps/eaAU8qqLZoo"
          rel="noopener noreferrer nofollow"
          target="_blank" 
        >
          <div className="flag-country-wrapper">
            <span className="flag-country-wrapper-flag">
              <img src="/static/images/flag_ukraine.png" alt="Flag" className="ico flag" />
            </span>
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
      <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <a
          href="https://goo.gl/maps/JRXdtT7aaRE5b2Hd6"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <div className="flag-country-wrapper">
            <span className="flag-country-wrapper-flag">
              <img src="/static/images/flag_netherlands.png" alt="Flag" className="ico flag" />
            </span>
            <span className="country" itemProp="addressRegion">
              The Netherlands
            </span>
          </div>
        </a>
        <div className="additional-info-wrapper">
          <a href="https://nl.keenethics.com/">
            <span className="text-underline">
            Go to the website
            </span>
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
            <span itemProp="streetAddress">Oude litherweg 2, 5346 RT</span>
          </a>
          <a href="tel:+19292141392">
            <span className="telephone" itemProp="telephone">
            +1 929 214 1392
            </span>
          </a>
        </div>
      </li>
    </ul>
  </address>
);

const AddressPanel = () => (
  <React.Fragment>
    <h1>
      Get
      <br />
      in touch
    </h1>
    <p>Let's discuss your idea</p>
    <Address />
  </React.Fragment>
);

const MobileWishlist = ({ wishlist }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <React.Fragment>
      <div className="mobile-counter display-flex-md-max">
        <h1>
          Your
          {' '}
          <br />
          wishlist
        </h1>
        <button type="button" className="counter" onClick={() => setIsExpanded(!isExpanded)}>
          {wishlist.length}
        </button>
        <button
          type="button"
          className={classnames('expand-icon', { down: !isExpanded })}
          onClick={() => setIsExpanded(!isExpanded)}
        />
        {isExpanded && (
          <div className="wish-list">
            {wishlist.map(item => (
              <span key={item} className="wish-item">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

const wishlistPanel = wishlist => (
  <React.Fragment>
    <MobileWishlist wishlist={wishlist} />
    <h1 className="display-block-md">
      Your
      {' '}
      <br className="display-block-md" />
      wishlist
    </h1>
    <p className="display-block-md">
      These are the parameters
      {' '}
      <br className="display-block-md" />
      you have selected.
    </p>
    <hr className="hr-top display-block-md" />
    <div className="wish-list display-block-md">
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
        <div className="contact-person display-flex-md-max">
          <a
            className="text-decoration-none"
            onClick={() => setActiveContactForm(true)}
            href="javascript:void(0)"
          >
            <img src="static/images/max_savonin.png" alt="Contact person" />
          </a>
          <div>
            <a
              className="text-decoration-none"
              onClick={() => setActiveContactForm(true)}
              href="javascript:void(0)"
            >
              <span className="name">Talk to Max Savonin</span>
              <span className="position">CEO at KeenEthics</span>
            </a>
          </div>
        </div>
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
              <div className="btn-group display-flex-md-max mb-23px">
                <button
                  onClick={onClick}
                  name="contact-form-btn"
                  className={classnames('button contacts-form-btn no-shadow contact-form-btn text-capitalize', {
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
                {activeContactForm ? <AddressPanel /> : wishlistPanel(wishlist)}
                <hr className="display-block-md" />
                <div className="social-icons display-block-md">
                  <SocialButton />
                </div>
              </div>
              <div className="active-form-wrapper">
                <div className="btn-group display-flex-md">
                  <button
                    onClick={onClick}
                    name="contact-form-btn"
                    className={classnames('button contacts-form-btn no-shadow contact-form-btn text-capitalize', {
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
                  <div className={`form-container ${!activeContactForm ? 'form-container-hidden' : ''}`}><ContactForm /></div>
                  <div className={`form-container ${activeContactForm ? 'form-container-hidden' : ''}`}><EstimateForm /></div>
                </Provider>
              </div>
            </div>
          )}
          <Address className="display-block-md-max" />
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
