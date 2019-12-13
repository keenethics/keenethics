import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  children,
}) => (
  <>
    <p>
      Software grows outdated, technical errors occur, and the project idea undergoes changes. We
      provide you with continuous maintenance and support to keep your product updated, relevant,
      and perfectly functioning.
    </p>

    {children}
  </>
);

Description.propTypes = {
  children: PropTypes.node,
};

Description.defaultProps = {
  children: '',
};

export default Description;
