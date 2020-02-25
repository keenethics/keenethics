import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

const MethodologiesItem = ({
  methodology,
}) => (
  <Link href={methodology.url} prefetch={false}>
    <a className="methodologies--item">
      <span className="methodologies--item-value">
        {methodology.value}
      </span>
      <span className="methodologies--item-line" />
    </a>
  </Link>
);

MethodologiesItem.propTypes = {
  methodology: PropTypes.shape({
    value: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MethodologiesItem;
