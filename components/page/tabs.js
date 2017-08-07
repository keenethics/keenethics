import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const PageTabsElement = ({ href, name, tabsDescription, icon }) => (
  <li>
    <Link href={href}>
      <a>
        <div className="inner">
          {tabsDescription
            ? <div className="ico">
              <div className="tbl">
                <div className="cell">
                  <img
                    width="53"
                    src={`/static/images/svg/${icon}.svg`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            : <div className="tbl">
              <div className="cell">
                <img
                  width="53"
                  src={`/static/images/svg/${icon}.svg`}
                  alt=""
                />
              </div>
            </div>}
          {!tabsDescription ||
            <span>
              <span className="ttl">
                {name}
              </span>
              <span className="ttl-s">
                {tabsDescription}
              </span>
            </span>}
        </div>
        {!tabsDescription
          ? <div className="icon-name">
            {name}
          </div>
          : null}
      </a>
    </Link>
  </li>
);

PageTabsElement.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  tabsDescription: PropTypes.string,
  icon: PropTypes.string,
};

PageTabsElement.defaultProps = {
  href: '',
  name: '',
  tabsDescription: '',
  icon: '',
};
const sliderSetting = {
  dots: true,
  infinite: false,
  adaptiveHeight: false,
  arrows: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const PageTabs = ({ points, withDescription }) =>
  <div className="icon-wrap">
    <ul className={withDescription ? 'icon-row icon-d-row' : 'icon-row'}>
      <Slider {...sliderSetting}>
        {points.map((element, i)=>
          <div key={i}>
            <PageTabsElement
              item={element}
              key={element.name}
              href={element.href}
              name={element.name}
              tabsDescription={element.tabsDescription || ''}
              icon={element.icon}
            />
          </div>,
        )}
      </Slider>
    </ul>
  </div>;

PageTabs.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object),
  withDescription: PropTypes.bool,
};

PageTabs.defaultProps = {
  points: [],
  withDescription: false,
};

export default PageTabs;
