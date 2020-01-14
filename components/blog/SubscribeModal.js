import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CloseIcon from './CloseIcon';
import SubscribeNewsletterForm from '../subscribe-for-updates';

const SubscribeModal = ({ isOpen, close }) => {
  const [isUserSuccessfullySubscribed, setIsUserSuccessfullySubscribed] = useState(false);
  return (
    <div className={`subscribe-panel-container${isOpen ? ' show' : ''}`}>
      <button className="invisible-button subscribe-panel-close" onClick={close}>
        <CloseIcon/>
      </button>
      <SubscribeNewsletterForm
        useRocketHeader
        successCallback={() => setIsUserSuccessfullySubscribed(true)}
      />
      {
        isUserSuccessfullySubscribed
        ? <button className="btn subscribe-panel-thanks-button" onClick={close}>Back</button>
        : <button className="invisible-button subscribe-panel-thanks-button" onClick={close}>No, thanks</button>
      }
    </div>
  );
}
SubscribeModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
};
SubscribeModal.defaultProps = {
  isOpen: false,
}

export default SubscribeModal;