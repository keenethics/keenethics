import React from 'react';

import FormContacts from './formContacts.jsx';
import ListSocial from './listSocial.jsx';

export default class SlideContacts extends React.Component {
  render() {
    return(
      <div className="slide slide-contacts" id="slide-6">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h3 className=" slide-contacts--title title -text-center">
                <span>Contact</span>
                <span className="-color-red">us.</span>
              </h3>
            </div>
          </div>
            <ListSocial />
          <div className="row">
            <div className="col-xs-12">
              <div className="slide-contacts--info -text-center">
                <a href="mailto:founders@keenethics.com?subject=feedback">
                  <span>founders@keenethics.com</span>
                  <span className="slide-contacts--arrow arrow"></span>
                </a>
                <a href="https://www.google.com/maps/place/вул.+Литвиненка,+3,+Львів,+Львівська+область,+Україна" target="_blank">
                  <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <span itemprop="streetAddress">3 Lytvynenka Street St.</span>
                    <span itemprop="addressLocality">Lviv</span>,
                    <span itemprop="addressCountry">Ukraine</span>
                  </span>
                  <span className="slide-contacts--arrow arrow"></span>
                </a>
                <a href="tel:+380322535535">
                  <span>+380 (32) 2 535 535</span>
                  <span className="slide-contacts--arrow arrow"></span>
                </a> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-offset-4 col-sm-4">
              <FormContacts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
