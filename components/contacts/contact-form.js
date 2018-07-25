/* global fetch */

import 'whatwg-fetch';
import React from 'react';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  state = ({
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
  })
  onSubmit = (e) => {
    e.preventDefault();
    const { callback } = this.props;

    callback({ isPending: true });

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

      callback(state);
    });
  }
  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: {
        value,
        error: '',
      },
    });
  }
  render = () => {
    const {
      firstname,
      lastname,
      email,
      phone,
      message,
    } = this.state;
    const { isPending, status } = this.props;
    return (
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
          {status && <div className="form-status">{status}</div>}
          <button
            type="submit"
            className={isPending ? 'button button-send pending' : 'button button-send'}
          >
            <img src="/static/images/svg/send.svg" alt="send" />
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  isPending: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ContactForm;
