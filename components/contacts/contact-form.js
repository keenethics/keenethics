import 'whatwg-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const handleStatusResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

class ContactForm extends React.Component {
  state = {
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
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { updateState } = this.props;

    updateState({ isPending: true });

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then(handleStatusResponse)
      .then(response => response.json()).then((json) => {
        const state = {
          isPending: false,
          status: json.status.toString(),
        };

        if (json && json.errorField) {
          Object.assign(state, json.errorField);
        }

        this.setState(json.errorField);

        updateState(state);
      })
      .catch(err => console.error(err));
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
            <div className="input-wrap">
              <input
                className={classnames({ error: firstname.error })}
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
            <div className="input-wrap">
              <input
                className={classnames({ error: lastname.error })}
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
            <div className="input-wrap">
              <div className="input-email">
                <input
                  className={classnames({ error: email.error })}
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
            <div className="input-wrap">
              <div className="input-phone">
                <input
                  className={classnames({ error: phone.error })}
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
          <div className="input-wrap input-wrap-ta">
            <textarea
              className={classnames({ error: message.error })}
              name="message"
              placeholder="Message"
              className="messege-textarea"
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
  updateState: PropTypes.func.isRequired,
};

export default ContactForm;
