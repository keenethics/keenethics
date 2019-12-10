import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  children,
}) => (
  <>
    <p>
      Both started their careers in the IT industry but were not satisfied with the
      environment. Keenethics was set up to do better. Both started their careers in the IT
      industry but were not satisfied with the environment. Keenethics was set up to do better.
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
