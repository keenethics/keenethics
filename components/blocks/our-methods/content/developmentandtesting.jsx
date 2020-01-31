import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  children,
}) => (
  <>
    <p>
      Through continuous testing, we make sure the code we develop is clean, effective, and free of
      bugs. We test your product using multiple rounds of testing including automated and manual
      testing as well as functional, performance, and UI/UX testing.
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
