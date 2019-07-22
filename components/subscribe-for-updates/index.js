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
  }

  function handleChange(event) {
    setValue(event.target.value);

    if (error) setError(false);
    if (success) setSuccess(false);
  }

  return (
    <div className="subscribe-panel">
      <img src="/static/images/mailbox_icon.png" alt="Mailbox icon" />
      <h4>Don't miss updates from us!</h4>
      <div className="subscribe-panel-input-group">
        <input
          onChange={handleChange}
          value={value}
          type="email"
          className={classnames({
            error,
            success,
          })}
        />
        <button onClick={handleClick} type="button" className="btn sharp-corners no-shadow">
          Subscribe now
        </button>
      </div>
    </div>
  );
};
