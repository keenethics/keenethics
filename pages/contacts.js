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
      isPending: false,
      status: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
            <div className="contacts-block" itemscope itemtype="http://schema.org/Organization">
              <ul className="contacts-stars"><li /><li /><li /><li /></ul>
              <div className="contacts-mail" />
              <ul className="contacts-list">
                <li itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                  <a href="https://goo.gl/maps/yYJjPymkW7w" rel="noopener noreferrer" target="_blank">
                    <img width="15" src="/static/images/svg/con-map.svg" alt="" className="ico" />
                    <div itemprop="streetAddress">3 Lytvynenka Street</div>
                    <span><span itemprop="addressLocality" style={{ display: 'inline' }}>Lviv</span>, <span itemprop="addressRegion" style={{ display: 'inline' }}>Ukraine</span></span>
                  </a>
                </li>
                <li>
                  <a href="tel:+380968147266">
                    <img width="15" src="/static/images/svg/con-tel.svg" alt="" className="ico" />
                    <div itemprop="telephone">+38 (096) 814 72 66</div>
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
              </div>
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
