import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/content/OfferList.scss';

const OfferList = (props) => (
  <div className="offers-list">
    {
      props.list.map(({ icon, alt, title }) => (
        <div className="offers-list-item">
          <img className="offers-list-item-img" src={icon} alt={alt} />
          <p className="offers-list-item-p">{title}</p>
        </div>
      ))
    }
  </div>
);

OfferList.propTypes = {
  list: PropTypes.object,
};

OfferList.defaultProps = {
  list: [],
};

export default OfferList;
