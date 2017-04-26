import React from 'react';

export default class SlideJoinTeam extends React.Component {

  renderEmployeesList() {
    return this.props.positions.map((value, index) => (
      <li className="list-media--item col-xs-12 col-sm-4 col-md-3 col-lg-2"
        itemScope itemType="http://schema.org/Person" key={index}
      >
        <div className="list-media--media">
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
        <div className="list-media--text" itemProp="makesOffer knows">
          {value.desc}
        </div>
      </li>
    ));
  }


  render() {
    return (
      <div className="slide slide-team" id="slide-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title title-upwork -text-center">
                <span className="-color-black">Join Keen</span>
                <span className="-color-red"> team.</span>
              </h3>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 open-position">Welcome to our
                amazing space station, which is currently looking for specialists! If you are eager
                to join our team of professionals, we would be more than happy to contact you!</div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul className="list-media row open-position">
                    {this.renderEmployeesList()}
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 upwork-content">
                <a href="https://www.work.ua/jobs/by-company/738548/#open-jobs" target="_blank">Positions' description</a> on <a href="https://www.work.ua/" target="_blank">Work.ua</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SlideJoinTeam.propTypes = {
  positions: React.PropTypes.array.isRequired,
};
