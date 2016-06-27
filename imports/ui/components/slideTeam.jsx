import React from 'react';

import Separator from './separator.jsx';

export default class SlideTeam extends React.Component {

  renderEmployeesList() {
    return this.props.employees.map((value, index) => (
      <li className="list-media--item col-xs-12 col-sm-4 col-md-3 col-lg-2"
        itemScope itemType="http://schema.org/Person" key={index}
      >
        <div className="list-media--media">
          <img className="list-media--overlay" src="images/astronaut-helmet.svg"
            alt="Astonaut Helmet"
          />
          <div className="list-media--img -round"
            style={{ backgroundImage: `url(${value.imgPath})` }}
          >
          </div>
        </div>
        <div className="list-media--headline" itemProp="name">
          {value.name}
        </div>
        <div className="list-media--subline" itemProp="jobTitle title">
          {value.title}
        </div>
          <Separator />
        <div className="list-media--text" itemProp="makesOffer knows">
          {value.desc}
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="slide slide-team" id="slide-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span className="-color-black">Our </span>
                <span className="-color-red">keen team.</span>
              </h3>
            </div>
          </div>
          <ul className="list-media row">
            {this.renderEmployeesList()}
          </ul>
        </div>
      </div>
    );
  }
}

SlideTeam.propTypes = {
  employees: React.PropTypes.array.isRequired,
};
