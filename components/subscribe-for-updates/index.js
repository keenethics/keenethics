import React, { useState } from 'react';
import classnames from 'classnames';

export default () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleClick() {
    const regexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
  }

  function handleChange(event) {
    setValue(event.target.value);

    if (error) setError(false);
    if (success) setSuccess(false);
  }

  return (
    <div className="subscribe-panel">
      <h4>Don't miss updates from us!</h4>
      <p>Subscribe to our bimonthly newsletter.</p>
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
