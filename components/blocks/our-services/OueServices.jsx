import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import useScrollToAnchor from '../../../helpers/useScrollToAnchor';

const platesContent = [
  {
    icon: 'icon-web.svg',
    text: 'Web Development',
    href: 'services-web-development',
  },
  {
    icon: 'icon-mobile.svg',
    text: 'Mobile Development',
    href: 'services-mobile-development',
  },
  {
    icon: 'icon-mvp.svg',
    text: 'Minimum Viable Product',
    href: 'approach-minimum-viable-product',
  },
  {
    icon: 'icon-pwa.svg',
    text: 'Progressive Web Apps',
    href: 'tech-apps-progressive-web-apps',
  },
  {
    icon: 'icon-team.svg',
    text: 'Dedicated Development Team',
    href: 'services-dedicated-development-team',
  },
  {
    icon: 'icon-cloud.svg',
    text: 'Cloud App Development',
    href: 'services-cloud-application-development',
  },
  {
    icon: 'icon-ai.svg',
    text: 'Chatbots & Artificial Intelligence',
    href: 'services-chatbots-artificial-intelligence',
  },
  {
    icon: 'icon-iot.svg',
    text: 'Internet of Things',
    href: 'services-internet-of-things',
  },

];

const OurServices = ({ show }) => {
  const section = 'services';
  const ref = useScrollToAnchor(section);

  return (
    <div className="block block-our-services" id={section} ref={ref}>
      <header className="block--header">
        <div className="block--header-title">
          Our services
        </div>
        <div className="block--header-description">
          You can rely on us to cover any product development need you have.
          We are sure to contribute to the success of your solution no matter what the task.
        </div>
      </header>
      <div className="block--content our-services">
        <div className={classnames('home-section-plates', {
          'fade-in-timed-out': show,
        })}
        >
          {platesContent.map((el) => (
            <Link key={el.text} href={el.href} prefetch={false}>
              <div className="home-section-plates-item">
                <LazyLoadImage
                  className="plate-img"
                  src={`/static/images/svg/home/services/${el.icon}`}
                  alt="service icon"
                />
                <p className="plate-text">{el.text}</p>
              </div>
            </Link>
          ))}
          <div className="plates-grid horizontal" />
          <div className="plates-grid start" />
          <div className="plates-grid mid" />
          <div className="plates-grid end" />
        </div>
      </div>
    </div>
  );
};

OurServices.propTypes = {
  show: PropTypes.bool,
};

OurServices.defaultProps = {
  show: false,
};

export default trackWindowScroll(OurServices);
