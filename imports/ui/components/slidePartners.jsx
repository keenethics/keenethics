import React from 'react';

import ListPartners from './listPartners';

export default class SlidePartners extends React.Component {
  render() {
    return (
      <div className="slide slide-partners" id="slide-6">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span className="-color-black">Keen </span>
                <span className="-color-red">partners.</span>
              </h3>
            </div>
          </div>
            <ListPartners />
        </div>
      </div>
    );
  }
}
