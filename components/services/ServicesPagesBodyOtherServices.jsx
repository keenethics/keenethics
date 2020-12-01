import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import cn from 'classnames';
import main from '../../navigation/main.json';

const platesContent = [
  {
    text: 'Web Development',
    href: 'services-web-development',
  },
  {
    text: 'Mobile Development',
    href: 'services-mobile-development',
  },
  {
    text: 'Minimum Viable Product',
    href: 'approach-minimum-viable-product',
  },
  {
    text: 'Progressive Web Apps',
    href: 'tech-apps-progressive-web-apps',
  },
  {
    text: 'Dedicated Development Team',
    href: 'services-dedicated-development-team',
  },
  {
    text: 'Cloud App Development',
    href: 'services-cloud-application-development',
  },
  {
    text: 'Chatbots & Artificial Intelligence',
    href: 'services-chatbots-artificial-intelligence',
  },
  {
    text: 'Internet of Things',
    href: 'services-internet-of-things',
  },
];

const ServicesPagesBodyOtherServices = ({
  router,
  title = 'Other Serivces',
}) => {
  const { pathname } = router;
  return (
    <section className="service-page-body-other-services-wrapp">
      <div className="service-page-body-other-services">
        <div className="service-page-body-other-services-title">
          <span>{title}</span>
        </div>
        <div className="service-page-body-other-services-items">
          <ul className="service-page-body-other-services-items-list">
            {platesContent.map((service) => (
              <li
                className={cn(
                  'service-page-body-other-services-items-list-item',
                  {
                    active: pathname === service.href,
                  },
                )}
              >
                <Link href={service.href}>
                  <a>{service.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default withRouter(ServicesPagesBodyOtherServices);

ServicesPagesBodyOtherServices.propTypes = {
  title: PropTypes.string,
  router: PropTypes.object,
};
ServicesPagesBodyOtherServices.defaultProps = {
  title: 'Other Serivces',
};
