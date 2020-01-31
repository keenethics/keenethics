import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  children,
}) => (
  <>
    <p>
      The goal of business analysis is to test the project idea. We gather, agree upon, and organize
      project requirements in a working plan. The end result of the business analysis stage will be
      either a proof of concept or development of a minimum viable product.
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
