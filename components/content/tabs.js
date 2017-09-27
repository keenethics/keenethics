import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

const PageTabsElement = ({ href, name, icon }) => (
  <Link href={href}>
    <a className="content-tabs-item">
      <img width="40" height="40" src={`/static/images/svg/${icon}.svg`} alt={icon} />
      <span className="content-tabs-item-name">{name}</span>
    </a>
  </Link>
);

PageTabsElement.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
};

PageTabsElement.defaultProps = {
  href: '',
  name: '',
  icon: '',
};
const listOfTabs = points => (
  points.map((element, i) => (
    <div key={i}>
      <PageTabsElement
        item={element}
        key={element.name}
        href={element.href}
        name={element.name}
        tabsDescription={element.tabsDescription || ''}
        icon={element.icon}
      />
    </div>
  ),
));
const PageTabs = ({ points }) => {
  const sliderSetting = {
    dots: points.length > 6,
    arrows: points.length > 6,
    infinite: true,
    adaptiveHeight: false,
    speed: 100,
    slidesToShow: points.length > 6 ? 6 : points.length,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: points.length > 4 ? 4 : points.length,
          slidesToScroll: 1,
          dots: points.length > 4,
          arrows: points.length > 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: points.length > 3 ? 3 : points.length,
          slidesToScroll: 1,
          dots: points.length > 3,
          arrows: points.length > 3,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: points.length > 3 ? 3 : points.length,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          draggable: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          draggable: true,
        },
      },
    ],
  };

  return (
    <div className="content-tabs">
      <div className="content-tabs-inner">
        <Slider {...sliderSetting}>{listOfTabs(points)}</Slider>
      </div>
    </div>
  );
};

PageTabs.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object),
  withDescription: PropTypes.bool,
};

PageTabs.defaultProps = {
  points: [],
  withDescription: false,
};

export default PageTabs;
