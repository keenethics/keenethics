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
    value,
    icon,
  } = items[activeIndex];

  return (
    <div className="our-methods--content">
      <div className="our-methods--content-icon">
        <div className="our-methods--content-icon-link prev">
          <span>01</span>
        </div>
        <div className="our-methods--content-icon-inner">
          <img
            className="our-methods--content-icon-image"
            src={`/static/main-blocks/our-methods/${icon}.svg`}
            alt={value}
          />
          <div
            className="our-methods--content-icon-circle"
            style={{
              transform: `rotate(${activeIndex * 72}deg)`,
            }}
          />
        </div>
        <div className="our-methods--content-icon-link next">
          <span>03</span>
        </div>
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
