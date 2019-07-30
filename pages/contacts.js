import { withRouter } from 'next/router';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import EstimateForm from '../components/contacts/estimate-form';
import ContactForm from '../components/contacts/contact-form';
import Notify from '../components/notify/notify';

let ContactUsContext;
const { Provider, Consumer } = (ContactUsContext = React.createContext());

const Contacts = ({ router }) => {
  const { query } = router;

  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState('');
  const [activeContactForm, setActiveContactForm] = useState(query.activeForm !== 'estimate');
  const [notifyIsVisible, setNotifyIsVisible] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState(null);

  function onClick({ target }) {
    setActiveContactForm(target.name === 'contact-form-btn');
  }

  return (
    <Layout>
      {notifyIsVisible && (
        <Notify
          notifyMessage={notifyMessage}
          setNotifyIsVisible={setNotifyIsVisible}
          setNotifyMessage={setNotifyMessage}
        />
      )}
      <div className="contacts-page">
        <div className="contacts-socket">
          <div className="title-page">
            <h1 className="title">Contact Us</h1>
          </div>
          <div
            className={`contact-us-form-wrapper ${
              activeContactForm ? 'contacts-block' : 'estimate-block-background'
            }`}
            itemScope
            itemType="http://schema.org/Organization"
          >
            <address>
              <ul className="contacts-list">
                <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <a
                    href="https://goo.gl/maps/eaAU8qqLZoo"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    <img
                      width="15"
                      src="/static/images/svg/con-map.svg"
                      alt="location"
                      className="ico"
                    />
                    <div itemProp="streetAddress">Kulparkivska St, 59</div>
                    <span>
                      <span itemProp="addressLocality" style={{ display: 'inline' }}>
                        Lviv
                      </span>
                      ,&nbsp;
                      <span itemProp="addressRegion" style={{ display: 'inline' }}>
                        Ukraine
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+380968147266">
                    <img
                      width="15"
                      src="/static/images/svg/con-tel.svg"
                      alt="Call"
                      className="ico"
                    />
                    <div itemProp="telephone">+38 (096) 814 72 66</div>
                    <span>Give Us a Call</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:business@keenethics.com">
                    <img
                      width="15"
                      src="/static/images/svg/con-mail.svg"
                      alt="email"
                      className="ico"
                    />
                    <div>business@keenethics.com</div>
                    <span>Drop Us a Letter</span>
                  </a>
                </li>
              </ul>
            </address>
            <div className="active-form-wrapper">
              <div className="btn-group">
                <button
                  onClick={onClick}
                  name="contact-form-btn"
                  className={classnames('button contacts-form-btn contact-form-btn', {
                    disabled: !activeContactForm,
                  })}
                  type="button"
                >
                  Say Hello
                </button>
                <button
                  onClick={onClick}
                  name="estimate-form-btn"
                  className={classnames('button contacts-form-btn estimate-form-btn', {
                    disabled: activeContactForm,
                  })}
                  type="button"
                >
                  Estimate your project
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
                }}
              >
                {activeContactForm ? (
                  <ContactForm />
                ) : (
                  <EstimateForm
                    isPending={isPending}
                    status={status}
                    // updateState={state => this.setState(state)}
                  />
                )}
              </Provider>
            </div>
          </div>
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
