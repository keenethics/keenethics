/* global fetch */

import 'whatwg-fetch';

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

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
    const { isPending, status, firstname, lastname, email, phone, message } = this.state;

    return (
      <Layout currentURL={url}>
        <div className="content-wrap content-wrap-bg">
          <div className="orbit-wrap inner">
            <ul className="orbit"><li /><li /><li /><li /></ul>
            <div className="orbit-star orbit-star-1"><span /></div>
            <div className="orbit-star orbit-star-2"><span /></div>
            <div className="orbit-star orbit-star-3"><span /></div>
            <div className="orbit-star orbit-star-4"><span /></div>
          </div>
          <div className="stars-wrap">
            <div className="stars-1" />
            <div className="stars-2" />
            <div className="stars-3" />
            <div className="stars-4" />
          </div>
          <div className="contacts-socket">
            <div className="title-page">
              <div className="title">Contact Us</div>
              <div className="title-s">We’ll answer in a moment!</div>
            </div>
            <div className="contacts-block">
              <ul className="contacts-stars"><li /><li /><li /><li /></ul>
              <div className="contacts-mail" />
              <ul className="contacts-list">
                <li>
                  <a href="">
                    <img width="15" src="/static/images/svg/con-map.svg" alt="" className="ico" />
                    <div>3 Lytvynenka Street</div>
                    <span>Lviv, Ukraine</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img width="15" src="/static/images/svg/con-tel.svg" alt="" className="ico" />
                    <div>{'+380 (32) 2 535 535'}</div>
                    <span>Give Us a Call</span>
                  </a>
                </li>
                <li>
                  <a href="">
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
                    <img src="/static/images/svg/send.svg" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
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
