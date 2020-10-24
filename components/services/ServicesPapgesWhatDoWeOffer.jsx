import React from 'react';

const ServicesPagesWhatDoWeOffer = ({ offers }) => (
  <section className="service-page-what-do-we-offer-wrapp">
    <h3 className="service-page-what-do-we-offer-header">Advantages of Web Development</h3>
    <div className="service-page-what-do-we-offer">
      <div className="service-page-what-do-we-offer-list">
        {
            offers.map((item) => (
              <div className="service-page-what-do-we-offer-list-item">
                <div className="service-page-what-do-we-offer-list-item-left">
                  <div className="service-page-what-do-we-offer-list-item-left-title">
                    <h4>Hello</h4>
                  </div>
                  <div className="service-page-what-do-we-offer-list-item-left-red-underline" />
                  <div className="service-page-what-do-we-offer-list-item-left-text">
                    <p>web asd hrt the article was very interesting</p>
                  </div>
                </div>
                <div className="service-page-what-do-we-offer-list-item-right">
                  <img src="/static/services-header/service-page-web-development-header.png" alt="img" />
                </div>
              </div>
            ))
          }
      </div>
    </div>
  </section>
);

export default ServicesPagesWhatDoWeOffer;
