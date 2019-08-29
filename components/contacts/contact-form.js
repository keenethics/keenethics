import 'whatwg-fetch';
import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ContactUsContext } from '../../pages/contacts';

const handleStatusResponse = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const ContactForm = () => {
  const { isPending, setIsPending, setStatus, setNotifyIsVisible, setNotifyMessage } = useContext(
    ContactUsContext,
  );

  const [firstname, setFirstname] = useState({
    value: '',
    error: false,
  });
  const [email, setEmail] = useState({
    value: '',
    error: false,
  });
  const [message, setMessage] = useState({
    value: '',
    error: false,
  });

  const setInitialState = () => {
    setFirstname({ value: '', error: false });
    setEmail({ value: '', error: false });
    setMessage({ value: '', error: false });
  };

  const onSubmit = e => {
    e.preventDefault();

    setIsPending(true);

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        email,
        message,
        lastname: { value: 'mockedLastname', error: '' },
        phone: { value: '123456789', error: '' },
      }),
    })
      .then(handleStatusResponse)
      .then(response => response.json())
      .then(json => {
        if (json && json.errorField) {
          setNotifyMessage(json.status.toString());
        }

        setIsPending(false);
        setStatus(json.status.toString());
        setNotifyIsVisible(true);

        if (json.status.toString() === 'Message sent') {
          setInitialState();
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="contacts-form">
      <form onSubmit={onSubmit}>
        <div className="contact-person display-flex-md">
          <img src="static/images/max_savonin.png" alt="Contact person" />
          <div>
            <span className="name">Talk to Max Savonin</span>
            <span className="position">CEO at KeenEthics</span>
          </div>
        </div>
        <div className="input-cols">
          <div className="input-wrap">
            <input
              className={classnames({ error: firstname.error })}
              name="firstname"
              id="firstname"
              type="text"
              onChange={event => {
                setFirstname({
                  value: event.target.value,
                  error: '',
                });
              }}
              required
              value={firstname.value}
            />
            <span className="highlight" />
            <label htmlFor="firstname">First Name</label>
          </div>
        </div>
        <div className="input-cols">
          <div className="input-wrap">
            <div className="input-email">
              <input
                className={classnames({ error: email.error })}
                name="email"
                id="email"
                type="email"
                onChange={event => {
                  setEmail({
                    value: event.target.value,
                    error: '',
                  });
                }}
                required
                value={email.value}
              />
              <span className="highlight" />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
        </div>
        <div className="input-wrap input-wrap-ta">
          <textarea
            required
            className={classnames({
              'message-textarea': true,
              error: message.error,
            })}
            name="message"
            placeholder="Message"
            onChange={event => {
              setMessage({
                value: event.target.value,
                error: '',
              });
            }}
            value={message.value}
          />
        </div>
        <div className="submit-btn">
          <button
            type="submit"
            className={isPending ? 'button button-send pending' : 'button button-send'}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
