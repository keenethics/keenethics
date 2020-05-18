import React from 'react';
import PropTypes from 'prop-types';

export default function notyfy({ notifyMessage, setNotifyIsVisible, setNotifyMessage }) {
  setTimeout(() => {
    setNotifyMessage(null);
    setNotifyIsVisible(false);
  }, 4000);

  return (
    <div
      className="notify"
      style={
        notifyMessage !== 'Message sent'
          ? { background: 'rgba(255, 0, 51, .85)', color: '#fff' }
          : null
      }
    >
      {notifyMessage === 'Message sent'
        ? 'I will get back to you withing 23 hours'
        : notifyMessage}
    </div>
  );
}
notyfy.propTypes = {
  setNotifyIsVisible: PropTypes.func.isRequired,
  setNotifyMessage: PropTypes.func.isRequired,
  notifyMessage: PropTypes.string.isRequired,
};
