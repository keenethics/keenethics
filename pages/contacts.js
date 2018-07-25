/* global fetch */

import 'whatwg-fetch';

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import EstimateForm from '../components/contacts/estimate-form';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: {
        value: '',
        error: false,
      },
      lastname: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
      phone: {
        value: '',
        error: false,
      },
      message: {
        value: '',
        error: false,
      },
      isPending: false,
      status: '',
      activeContactForm: true,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      isPending: true,
    });

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then(response => response.json()).then((json) => {
      const state = {
        isPending: false,
        status: json.status.toString(),
      };

      if (json && json.errorField) {
        Object.assign(state, json.errorField);
      }

      this.setState(state);
    });
  }
  onChange({ target }) {
    this.setState({
      [target.name]: {
        value: target.value,
        error: '',
      },
    });
  }
  onClick({ target }) {
    this.setState({ activeContactForm: target.name === 'contact-form-btn' });
  }
  render() {
    const { url } = this.props;
    const {
      activeContactForm,
      isPending,
      status,
      firstname,
      lastname,
      email,
      phone,
      message,
    } = this.state;

    return (
      <Layout currentURL={url}>
        <div className="contacts-page">
          <div className="contacts-socket">
            <div className="title-page">
              <h1 className="title">Contact Us</h1>
            </div>
            <div className={activeContactForm ? 'contacts-block' : 'contacts-block estimate-block-background'} itemScope itemType="http://schema.org/Organization">
              <ul className="contacts-stars"><li /><li /><li /><li /></ul>
              {activeContactForm ? <div className="contacts-mail" /> : <div className="contacts-file" />}
              <button onClick={this.onClick} name="contact-form-btn" className={activeContactForm ? 'contacts-form-btn contact-form-btn' : 'contacts-form-btn contact-form-btn disabled'}>Say Hello</button>
              <button onClick={this.onClick} name="estimate-form-btn" className={!activeContactForm ? 'contacts-form-btn estimate-form-btn' : 'contacts-form-btn estimate-form-btn disabled'}>Estimate your project</button>
              <ul className="contacts-list">
                <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <a href="https://goo.gl/maps/yYJjPymkW7w" rel="noopener noreferrer" target="_blank">
                    <img width="15" src="/static/images/svg/con-map.svg" alt="" className="ico" />
                    <div itemProp="streetAddress">3 Lytvynenka Street</div>
                    <span><span itemProp="addressLocality" style={{ display: 'inline' }}>Lviv</span>, <span itemProp="addressRegion" style={{ display: 'inline' }}>Ukraine</span></span>
                  </a>
                </li>
                <li>
                  <a href="tel:+380968147266">
                    <img width="15" src="/static/images/svg/con-tel.svg" alt="" className="ico" />
                    <div itemProp="telephone">+38 (096) 814 72 66</div>
                    <span>Give Us a Call</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:founders@keenethics.com">
                    <img width="15" src="/static/images/svg/con-mail.svg" alt="" className="ico" />
                    <div>founders@keenethics.com</div>
                    <span>Drop Us a Letter</span>
                  </a>
                </li>
              </ul>
              { this.state.activeContactForm ? (
                <div className="contacts-form">
                  <form onSubmit={this.onSubmit}>
                    <div className="contacts-title">Say hello</div>
                    <div className="input-cols">
                      <div className="input-wrap input-wrap-2">
                        <input
                          className={firstname.error ? 'error' : null}
                          name="firstname"
                          id="firstname"
                          type="text"
                          onChange={this.onChange}
                          required
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label htmlFor="firstname">First Name</label>
                      </div>
                      <div className="input-wrap input-wrap-2">
                        <input
                          className={lastname.error ? 'error' : null}
                          name="lastname"
                          id="lastname"
                          type="text"
                          onChange={this.onChange}
                          required
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label htmlFor="lastname">Last Name</label>
                      </div>
                    </div>
                    <div className="input-cols">
                      <div className="input-wrap input-wrap-2 input-wrap-l">
                        <div className="input-email">
                          <input
                            className={email.error ? 'error' : null}
                            name="email"
                            id="email"
                            type="mail"
                            onChange={this.onChange}
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="input-wrap input-wrap-2 input-wrap-l">
                        <div className="input-phone">
                          <input
                            className={phone.error ? 'error' : null}
                            name="phone"
                            id="phone"
                            type="tel"
                            onChange={this.onChange}
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label htmlFor="phone">Your Phone</label>
                        </div>
                      </div>
                    </div>
                    <div className="input-wrap input-wrap-2 input-wrap-ta">
                      <textarea
                        className={message.error ? 'error' : null}
                        name="message"
                        placeholder="Message"
                        onChange={this.onChange}
                      />
                    </div>
                    {status ? (
                      <div className="form-status">{status}</div>
                    ) : null}
                    <button
                      type="submit"
                      className={isPending ? 'button button-send pending' : 'button button-send'}
                    >
                      <img src="/static/images/svg/send.svg" alt="send" />
                    </button>
                  </form>
                </div>
              ) : (
                <EstimateForm
                  isPending={isPending}
                  status={status}
                  callback={state => this.setState(state)}
                />
              )}
            </div>
          </div>
          <Background />
        </div>
      </Layout>
    );
  }
}

Contacts.propTypes = {
  url: PropTypes.object,
};

Contacts.defaultProps = {
  url: {},
};
