import React from 'react';
import PropTypes from 'prop-types';

const Author = ({
  isVisible,
  avatar,
  name,
  from,
  position,
}) => (
  <div className={`partners--author${isVisible ? ' visible' : ''}`}>
    <div className="partners--author-image">
      <img src={`/static/main-blocks/partners/${avatar}.png`} alt={name} />
    </div>
    <div className="partners--author-about">
      <div className="partners--author-title">
        {name}
        {from ? <span>{`from ${from}`}</span> : null}
      </div>
      <div className="partners--author-position">
        {position}
      </div>
    </div>
  </div>
);

Author.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  from: PropTypes.string,
  position: PropTypes.string.isRequired,
};

Author.defaultProps = {
  from: '',
};

export default Author;
