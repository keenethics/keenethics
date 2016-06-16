import React from 'react';
import ListMediaServices from './listMediaServices';

export default class SlideInfo extends React.Component {
  render() {
    return (
      <div className="slide slide-info" id="slide-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span className="-color-black">What if you have a</span>
                <span className="-color-red">keen idea?</span>
              </h3>
            </div>
          </div>
          <ListMediaServices />
        </div>
      </div>
    );
  }
}
