import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SubscribeForUpdates = ({ HeaderComponent, SloganComponent }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleClick() {
    const regexp = new RegExp(
      '/^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/i',
    );

    const isError = !value || !regexp.test(value.toLowerCase());
    setError(isError);

    if (isError) return;
    setSuccess(true);
    setValue('');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/blog/subscribe', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(
      JSON.stringify({
        email: { value },
      }),
    );

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  function handleChange(event) {
    setValue(event.target.value);

    if (error) setError(false);
    if (success) setSuccess(false);
  }

  const Header = () =>
    (HeaderComponent ? (
      <HeaderComponent />
    ) : (
      <h4>Don&apos;t miss updates from us!</h4>
    ));
  const Slogan = () =>
    (SloganComponent ? (
      <SloganComponent />
    ) : (
      <p>Subscribe to our bimonthly newsletter.</p>
    ));

  return (
    <div className="subscribe-panel">
      {success ? (
        <h4 className="green-text-flash">Thank you for subscribing!</h4>
      ) : (
        <Header />
      )}
      {success ? <p>&nbsp;</p> : <Slogan />}
      <div className="subscribe-panel-input-group">
        <input
          onChange={handleChange}
          value={value}
          type="email"
          placeholder="example@gmail.com"
          className={classnames({
            error,
            success,
          })}
        />
        <button onClick={handleClick} type="button" className="btn no-shadow">
          Subscribe
        </button>
      </div>
    </div>
  );
};

SubscribeForUpdates.propTypes = {
  HeaderComponent: PropTypes.object.isRequired,
  SloganComponent: PropTypes.object.isRequired,
};

export default SubscribeForUpdates;
