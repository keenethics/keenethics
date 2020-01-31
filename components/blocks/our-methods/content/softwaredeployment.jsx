import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  children,
}) => (
  <>
    <p>
      Before deploying software, we make sure that
      it fully complies with legal, ethical, and data
      security guidelines. We publish it only after we
      double-check that it is free of bugs and fully
      meets the expectations of our partner.
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
