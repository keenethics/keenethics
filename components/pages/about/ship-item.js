import React from 'react';
import PropTypes from 'prop-types';

export default class ShipItem extends React.Component {
  onMouseOver = () => {
    this.props.changeId(this.props.id);
  }
  onMouseOut = () => {
    this.props.changeId('');
  }
  render() {
    const {
      worker, id, activeId, isFirstItem,
    } = this.props;

    return (
      <div
        className="ship-wrapper"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onFocus={this.onMouseOver}
        onBlur={this.onMouseOut}
      >
        <div className={`ship ${worker.key}`}>
          <div className="ship-image">
            <img src={`/static/images/ships/${worker.key}.svg`} alt="ship" />
          </div>
          <div className={id === activeId || (isFirstItem && activeId === 'first') ? 'ship-content-wrapper show' : 'ship-content-wrapper'}>
            <div className="ship-content">
              <div className="ship-content-user-avatar">
                <img src={`/static/images/team/${worker.avatar}`} alt="avatar" />
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
  worker: PropTypes.object,
  isFirstItem: PropTypes.bool,
  changeId: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  activeId: PropTypes.string.isRequired,
};
ShipItem.defaultProps = {
  worker: {},
  isFirstItem: false,
};
