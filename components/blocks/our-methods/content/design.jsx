import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  children,
}) => (
  <>
    <p>
      Through empathy, we create data-driven, user-centered, highly responsive, and elegant designs.
      To ensure the best UI and UX, we work on:
      <ul>
        <li>&ndash; User and competitor research;</li>
        <li>&ndash; User personas, flows, and journey maps;</li>
        <li>&ndash; Low-fidelity and high-fidelity wireframes;</li>
        <li>&ndash; Interactive design prototypes and mockups.</li>
      </ul>
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
