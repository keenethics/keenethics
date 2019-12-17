import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

import data from './data';

const { items } = data;

const Content = ({
  activeIndex,
  increaseIndex,
  decreaseIndex,
  title,
  itemsLength,
}) => {
  const {
    component: Component,
    href,
    value,
    icon,
  } = items[activeIndex];

  const getStyledNumber = (isPrev) => {
    let index = null;

    if (isPrev) {
      if (activeIndex === 0) {
        index = itemsLength;
      } else {
        index = activeIndex;
      }
    }

    if (!isPrev) {
      if (activeIndex + 1 === itemsLength) {
        index = 1;
      } else {
        index = activeIndex + 2;
      }
    }

    if (index < 10) return `0${index}`;

    return index;
  };

  return (
    <div className="our-methods--content">
      <div className="our-methods--content-icon">
        <div
          className="our-methods--content-icon-link prev"
          onClick={decreaseIndex}
          role="presentation"
        >
          <span>{getStyledNumber(true)}</span>
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
        <div
          className="our-methods--content-icon-link next"
          onClick={increaseIndex}
          role="presentation"
        >
          <span>{getStyledNumber()}</span>
        </div>
      </div>
      <div className="our-methods--content-description">
        <div className="our-methods--content-description-title">
          <span>
            {`${activeIndex >= 10 ? '' : '0'}${activeIndex + 1}`}
          </span>
          {title}
        </div>
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
  increaseIndex: PropTypes.func.isRequired,
  decreaseIndex: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  itemsLength: PropTypes.number.isRequired,
};

export default Content;
