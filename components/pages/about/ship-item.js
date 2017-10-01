import React from 'react';
import PropTypes from 'prop-types';

export default class ShipItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver() {
    this.setState({
      showPopup: true,
    });
  }
  onMouseOut() {
    this.setState({
      showPopup: false,
    });
  }
  render() {
    const { ship, worker } = this.props;
    const { showPopup } = this.state;

    return (
      <div className="ship-wrapper" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <div className={`ship ${ship.key}`}>
          <div className="ship-image">
            <img src={`/static/images/ships/${ship.key}.svg`} alt="" />
          </div>
          <div className={showPopup ? 'ship-content-wrapper show' : 'ship-content-wrapper'}>
            <div className="ship-content">
              <div className="ship-content-user-avatar">
                <img src={`/static/images/team/${worker.avatar}`} alt="" />
              </div>
              <div className="ship-content-user-name">{worker.name}</div>
              <div className="ship-content-user-position">{worker.position}</div>
              <div className="ship-content-user-description">{worker.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShipItem.propTypes = {
  ship: PropTypes.object,
  worker: PropTypes.object,
};
ShipItem.defaultProps = {
  ship: {},
  worker: {},
};
