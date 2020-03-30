import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RocketHeader from './RocketHeader';
import TextHeader from './TextHeader';

const NewsletterSubscriptionForm = ({ useRocketHeader, successCallback, subscriptionText }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleClick() {
    const emailRegexp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);

    const isError = !value || !emailRegexp.test(value.toLowerCase());
    setError(isError);

    if (isError) return;
    setSuccess(true);
    setValue('');
    if (successCallback) successCallback();
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
  let subHeaderText = '';
  if (!error && !success) {
    subHeaderText = subscriptionText;
  } else if (success) {
    subHeaderText = 'You have successfully subscribed to our digest!';
  } else {
    subHeaderText = 'Oops, there has been a mistake. Please, try again.';
  }
  const Header = useRocketHeader ? RocketHeader : TextHeader;
  return (
    <div className="subscribe-panel">
      <Header success={success} error={error} />
      <p className="subscribe-panel-text">
        {subHeaderText}
      </p>
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

NewsletterSubscriptionForm.propTypes = {
  useRocketHeader: PropTypes.bool,
  successCallback: PropTypes.func,
  subscriptionText: PropTypes.node,
};

NewsletterSubscriptionForm.defaultProps = {
  useRocketHeader: false,
  successCallback: () => {},
  subscriptionText:
  <>
    Get the latest insights from the world of Tech4Good.
    Each month – one interview with an inspiring leader of Tech4Good,
    3 articles on business, and 3 articles on tech.
    <br />
    Subscribe to our monthly newsletter and join the ethical movement.
  </>,
};

export default NewsletterSubscriptionForm;
