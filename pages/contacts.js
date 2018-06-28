/* global fetch */

import 'whatwg-fetch';

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';

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
      stage: {
        value: '',
        error: false,
      },
      services: {
        value: '',
        error: false,
      },
      isPending: false,
      status: '',
      activeContactForm: false,
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
            <div className={this.state.activeContactForm ? 'contacts-block' : 'contacts-block estimate-block-background'} itemScope itemType="http://schema.org/Organization">
              <ul className="contacts-stars"><li /><li /><li /><li /></ul>
              {this.state.activeContactForm ? <div className="contacts-mail" /> : <div className="contacts-file" />}
              <button onClick={this.onClick} name="contact-form-btn" className={this.state.activeContactForm ? 'contacts-form-btn contact-form-btn' : 'contacts-form-btn contact-form-btn disabled'}>Say Hello</button>
              <button onClick={this.onClick} name="estimate-form-btn" className={!this.state.activeContactForm ? 'contacts-form-btn estimate-form-btn' : 'contacts-form-btn estimate-form-btn disabled'}>Estimate your project</button>
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
              { this.state.activeContactForm ?
                <div className="contacts-form">
                  <form onSubmit={this.onSubmit}>
                    <div className="contacts-title">Say hello</div>
                    <div className="input-cols">
                      <div className="input-wrap input-wrap-2">
                        <input
                          className={firstname.error ? 'error' : null}
                          name="firstname"
                          placeholder="First Name"
                          type="text"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="input-wrap input-wrap-2">
                        <input
                          className={lastname.error ? 'error' : null}
                          name="lastname"
                          placeholder="Last Name"
                          type="text"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="input-cols">
                      <div className="input-wrap input-wrap-2 input-wrap-l">
                        <input
                          className={email.error ? 'error' : null}
                          name="email"
                          placeholder="Your Email"
                          type="mail"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="input-wrap input-wrap-2 input-wrap-l">
                        <input
                          className={phone.error ? 'error' : null}
                          name="phone"
                          placeholder="Your Phone"
                          type="tel"
                          onChange={this.onChange}
                        />
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
                </div> :
                <div className="estimate-form">
                  <form onSubmit={this.onSubmit} className="estimate-form-inputs">
                    <div className="contacts-title estimate-title">let us Estimate your project</div>
                    <div className="question-title"><span className="question-number">01</span> Stage</div>
                    <div className="estimate-input-cols">
                      <div className="input-radio-wrap">
                        <input
                          name="stage"
                          type="radio"
                          value="new"
                          id="new"
                          onChange={this.onChange}
                        />
                        <label htmlFor="new" className="label-for-radio-btn">
                          <p className="radio-lable-title">New app</p>
                            to be built from scratch
                        </label>
                      </div>
                      <div className="input-radio-wrap">
                        <input
                          name="stage"
                          type="radio"
                          value="existing"
                          id="existing"
                          onChange={this.onChange}
                          checked
                        />
                        <label htmlFor="existing" className="label-for-radio-btn">
                          <p className="radio-lable-title">Existing app</p>
                          continue development
                        </label>
                      </div>
                    </div>
                    <div className="question-title"><span className="question-number">02</span> What services are you interested in?</div>
                    <div className="estimate-input-cols">
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="web"
                          id="web"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="web" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>Web app</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="ios"
                          id="ios"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="ios" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>IOS app</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="linux"
                          id="linux"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="linux" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>Linux app</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="server-side"
                          id="ssd"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="ssd" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>Server-side development</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="windows"
                          id="windows"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="windows" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>Windows app</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="qa"
                          id="qa"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="qa" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>QA testing</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="android"
                          id="android"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="android" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>Android app</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="macos"
                          id="macos"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="macos" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>MacOS app</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="design"
                          id="design"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="design" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>Design</span>
                        </label>
                      </div>
                      <div className="input-checkbox-wrap">
                        <input
                          name="services"
                          type="checkbox"
                          value="other"
                          id="other"
                          onChange={this.onChange}
                          className="check"
                        />
                        <label htmlFor="other" className="label-for-checkbox-btn">
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1" />
                            </svg>
                          </span> <span>Other</span>
                        </label>
                      </div>
                    </div>
                    <div className="question-title"><span className="question-number qn-check">03</span>
                      <input
                        name="pm"
                        type="checkbox"
                        value="pm"
                        id="pm"
                        onChange={this.onChange}
                        className="check"
                      />
                      <label htmlFor="pm" className="label-for-checkbox-btn">
                        <span className="pm-check">
                          <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                          </svg>
                        </span>
                        <span className="question-checkbox-title">Do you require PM/Product manager to save your time for tasks' description,
                          tasks' assignment and tasks' assignment prioritizing?
                        </span>
                      </label>
                    </div>
                    <div className="question-title"><span className="question-number">04</span> Expected budget</div>
                    <div className="estimate-input-cols">
                      <div className="input-select-wrap">
                        <select className="input-select">
                          <option value="not-sure">I`m not sure</option>
                          <option value="<10000">Under $10000</option>
                          <option value="10000<30000">$10000-$30000</option>
                          <option value=">30000">$30000 and above</option>
                        </select>
                      </div>
                    </div>
                    <div className="question-title"><span className="question-number">05</span> Timeframe</div>
                    <div className="estimate-input-cols">
                      <div className="input-select-wrap">
                        <select className="input-select">
                          <option value="<1">Less than 1 month </option>
                          <option value="1-3">1 to 3 months</option>
                          <option value="3-6">3 to 6 months</option>
                          <option value=">6">Above 6 months</option>
                        </select>
                      </div>
                    </div>
                    <div className="question-title"><span className="question-number">06</span> Start</div>
                    <div className="estimate-input-cols">
                      <div className="input-select-wrap">
                        <select className="input-select">
                          <option value="asap">ASAP</option>
                          <option value="iacod">in a couple of days</option>
                          <option value="iaw">in a week</option>
                          <option value="iacow">in a couple of weeks</option>
                          <option value="iamol">in a month or later</option>
                        </select>
                      </div>
                    </div>
                    <div className="input-cols">
                      <div className="input-wrap input-wrap-2">
                        <input
                          className={firstname.error ? 'error' : null}
                          name="firstname"
                          placeholder="First Name"
                          type="text"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="input-wrap input-wrap-2 input-wrap-l">
                        <input
                          className={phone.error ? 'error' : null}
                          name="phone"
                          placeholder="Your Phone"
                          type="tel"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="input-cols">
                      <div className="input-wrap input-wrap-2 input-wrap-l">
                        <input
                          className={email.error ? 'error' : null}
                          name="email"
                          placeholder="Your Email"
                          type="mail"
                          onChange={this.onChange}
                        />
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
                </div>}
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
