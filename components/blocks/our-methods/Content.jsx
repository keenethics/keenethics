import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

import data from './data';

const { items } = data;

const Content = ({
  activeIndex,
}) => {
  const {
    component: Component,
    href,
  } = items[activeIndex];

  return (
    <div className="our-methods--content">
      <div className="our-methods--content-icon">
        <div className="our-methods--content-icon-circle" />
      </div>
      <div className="our-methods--content-description">
        <Component>
          <Link href={href}>
            <a>Learn more</a>
          </Link>
        </Component>
      </div>
    </div>
  );
};

Content.propTypes = {
  activeIndex: PropTypes.number.isRequired,
};

export default Content;
