import React from 'react';
import PropTypes from 'prop-types';

export default function notyfy({ title, updateState }) {
  setTimeout(() => {
    updateState({ notifyIsVisible: false });
  }, 2000);

  return (
    <div className="notify">
      {title}
    </div>
  );
}
notyfy.propTypes = {
  title: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};
