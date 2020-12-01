import React from 'react';
import cn from 'classnames';

const ServicesPagesWhatDoWeOffer = ({ offers }) => (
  <section id="advantages" className="service-page-what-do-we-offer-wrapp">
    <h3 className="service-page-what-do-we-offer-header">Advantages of Web Development</h3>
    <div className="service-page-what-do-we-offer">
      <div className="service-page-what-do-we-offer-list">
        {
            offers.map(({ title, header, icon }, idx) => (
              <div className={cn('service-page-what-do-we-offer-list-item', {
                'row-reverse': idx % 2 === 1,
              })}
              >
                <div className="service-page-what-do-we-offer-list-item-left">
                  <div className="service-page-what-do-we-offer-list-item-left-title">
                    <h4>{header}</h4>
                  </div>
                  <div className="service-page-what-do-we-offer-list-item-left-red-underline" />
                  <div className="service-page-what-do-we-offer-list-item-left-text">
                    <p>{title}</p>
                  </div>
                </div>
                <div className="service-page-what-do-we-offer-list-item-right">
                  <img src={icon} alt={`${header} title`} />
                </div>
              </div>
            ))
          }
      </div>
    </div>
  </section>
);

export default ServicesPagesWhatDoWeOffer;
