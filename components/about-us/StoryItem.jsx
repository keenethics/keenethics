import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const StoryItem = ({
  title, engineers, partners, items, visible,
}) => (
  <div className={classNames('story-item', { visible })}>
    <h3>{title}</h3>
    <div className="stats">
      <div className="stat">
        <em>{engineers}</em>
        <span>
          software engineers
        </span>
      </div>
      <div className="stat">
        <em>{partners}</em>
        <span>
          long-term partners
        </span>
      </div>
    </div>
    <ul className="notes">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

StoryItem.defaultProps = {
  visible: false,
};

StoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  engineers: PropTypes.string.isRequired,
  partners: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  visible: PropTypes.bool,
};

export default StoryItem;
