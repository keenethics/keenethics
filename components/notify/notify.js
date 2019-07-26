import React from 'react';
import PropTypes from 'prop-types';

export default function notyfy({
  successTitle,
  updateState,
  notifyErrorMessage,
}) {
  setTimeout(() => {
    updateState({ notifyIsVisible: false, notifyErrorMessage: null });
  }, 2000);

  return (
    <div className="notify" style={notifyErrorMessage ? { background: 'rgba(255, 0, 51, .7)', color: '#fff' } : null}>
      {notifyErrorMessage || successTitle}
    </div>
  );
}
notyfy.propTypes = {
  successTitle: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  notifyErrorMessage: PropTypes.string.isRequired,
};
