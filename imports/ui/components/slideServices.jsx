import React from 'react';
import Services from './services';

export default class SlideServices extends React.Component {
  getTechnologies() {
    return [
      { name: 'node.js' },
      { name: 'meteor.js' },
      { name: 'Angular' },
      { name: 'React' },
      { name: 'MEAN' },
    ];
  }

  render() {
    return (
      <div className="slide slide-services" id="slide-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span>Then we have a</span>
                <span className="-color-red">keen approach.</span>
              </h3>
            </div>
          </div>
        </div>
        <Services technologies={this.getTechnologies()} />
      </div>
    );
  }
}
