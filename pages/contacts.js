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
      pm: {
        value: '',
        error: false,
      },
      budget: {
        value: 'I`m not sure',
        error: false,
      },
      timeframe: {
        value: 'I`m not sure',
        error: false,
      },
      start: {
        value: 'ASAP',
        error: false,
      },
      name: {
        value: '',
        error: false,
      },
      phoneEstimate: {
        value: '',
        error: false,
      },
      emailEstimate: {
        value: '',
        error: false,
      },
      messageEstimate: {
        value: '',
        error: false,
      },
      isPending: false,
      status: '',
      activeContactForm: true,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
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
  onSubmit2(e) {
    e.preventDefault();

    this.setState({
      isPending: true,
    });

    fetch('/estimate', {
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
  onChange2({ target }) {
    const { services } = this.form;

    const checkboxArray = [].slice.call(services);
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);

    target.name === 'services' ? this.setState({ services: { value: checkedCheckboxesValues } }) :
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
      emailEstimate,
      name,
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
              { this.state.activeContactForm ?
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
                      <div className="input-wrap input-wrap-2 input-wrap-l">
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
                  <form onSubmit={this.onSubmit2} className="estimate-form-inputs" ref={form => this.form = form}>
                    <div className="contacts-title estimate-title">let us Estimate your project</div>
                    <div className="question-title"><span className="question-number">01</span> Stage</div>
                    <div className="estimate-input-cols">
                      <div className="input-radio-wrap">
                        <input
                          name="stage"
                          type="radio"
                          value="New app"
                          id="new"
                          onChange={this.onChange2}
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
                          value="Existing app"
                          id="existing"
                          onChange={this.onChange2}
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
                          value="Web app"
                          id="web"
                          onChange={this.onChange2}
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
                          value="IOS app"
                          id="ios"
                          onChange={this.onChange2}
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
                          value="Linux app"
                          id="linux"
                          onChange={this.onChange2}
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
                          value="Server-side development"
                          id="ssd"
                          onChange={this.onChange2}
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
                          value="Windows app"
                          id="windows"
                          onChange={this.onChange2}
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
                          value="QA testing"
                          id="qa"
                          onChange={this.onChange2}
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
                          value="Android app"
                          id="android"
                          onChange={this.onChange2}
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
                          value="MacOS app"
                          id="macos"
                          onChange={this.onChange2}
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
                          value="Design"
                          id="design"
                          onChange={this.onChange2}
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
                          value="Other"
                          id="other"
                          onChange={this.onChange2}
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
                        value="PM/Product manager is required"
                        id="pm"
                        onChange={this.onChange2}
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
                        <select name="budget" className="input-select" onChange={this.onChange}>
                          <option value="I`m not sure">I`m not sure</option>
                          <option value="Under $10000">Under $10000</option>
                          <option value="$10000-$30000">$10000-$30000</option>
                          <option value="$30000 and above">$30000 and above</option>
                        </select>
                      </div>
                    </div>
                    <div className="question-title"><span className="question-number">05</span> Timeframe</div>
                    <div className="estimate-input-cols">
                      <div className="input-select-wrap">
                        <select name="timeframe" className="input-select" onChange={this.onChange2}>
                          <option value="I`m not sure">I`m not sure</option>
                          <option value="Less than 1 month">Less than 1 month</option>
                          <option value="1 to 3 months">1 to 3 months</option>
                          <option value="3 to 6 months">3 to 6 months</option>
                          <option value="Above 6 months">Above 6 months</option>
                        </select>
                      </div>
                    </div>
                    <div className="question-title"><span className="question-number">06</span> Start</div>
                    <div className="estimate-input-cols">
                      <div className="input-select-wrap">
                        <select name="start" className="input-select" onChange={this.onChange2}>
                          <option value="ASAP">ASAP</option>
                          <option value="in a couple of days">in a couple of days</option>
                          <option value="in a week">in a week</option>
                          <option value="in a couple of weeks">in a couple of weeks</option>
                          <option value="in a month or later">in a month or later</option>
                        </select>
                      </div>
                    </div>
                    <div className="input-cols">
                      <div className="input-contacts">
                        <input
                          className={name.error ? 'error' : null}
                          name="name"
                          id="name"
                          type="text"
                          onChange={this.onChange2}
                          required
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label htmlFor="name">Name:</label>
                      </div>
                      <div className="input-contacts">
                        <input
                          name="phoneEstimate"
                          id="phoneEstimate"
                          type="tel"
                          onChange={this.onChange2}
                          required
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label htmlFor="phoneEstimate">Phone:</label>
                      </div>
                    </div>
                    <div className="input-cols">
                      <div className="input-contacts input-email">
                        <input
                          className={emailEstimate.error ? 'error' : null}
                          name="emailEstimate"
                          type="mail"
                          onChange={this.onChange2}
                          required
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label htmlFor="emailEstimate">Email:</label>
                      </div>
                    </div>
                    <div className="input-cols">
                      <div className="input-textarea">
                      <div className="input-textarea-title">Message:</div>
                        <textarea
                          name="messageEstimate"
                          placeholder="Write short description of your project or tell us your questions. Feel free to leave this blank and submit now - we will contact you and guide you through the process."
                          onChange={this.onChange2}
                        />
                      </div>
                    </div>
                    <div className="form-footer">
                      <img src="/static/images/touch-screen.png" className="touch-screen" alt="touch-screen" />
                      <p className="form-footer-text">
                        Fill out additional information about your project and <span>get up to 50%</span> discount
                        for project specification’s elaboration - <a href="#">follow link</a>
                      </p>
                    </div>
                    {status ? (
                      <div className="form-status">{status}</div>
                  ) : null}
                    <div className="submit-btn">
                      <button
                        type="submit"
                        className={isPending ? 'button button-send pending' : 'button button-send'}
                      >
                        <img src="/static/images/svg/send.svg" alt="send" />
                      </button>
                    </div>
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
