import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import cn from 'classnames';
import main from '../../navigation/main.json';

const ServicesPagesBodyOtherServices = ({ router, title = 'Other Serivces' }) => {
  const { pathname } = router;
  const allServices = main.find(({ name }) => name === 'Services');
  return (
    <section className="service-page-body-other-services-wrapp">
      <div className="service-page-body-other-services">
        <div className="service-page-body-other-services-title">
          <span>{title}</span>
        </div>
        <div className="service-page-body-other-services-items">
          <ul className="service-page-body-other-services-items-list">
            {allServices.points.map((service) => (
              <li className={cn('service-page-body-other-services-items-list-item', {
                active: pathname === service.href,
              })}
              >
                <Link href={service.href}>
                  <a>{service.name}</a>
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
