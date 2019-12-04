import React from 'react';
import PropTypes from 'prop-types';

const StoryItem = ({
  title, engineers, partners, items,
}) => (
  <div className="story-item">
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

StoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  engineers: PropTypes.string.isRequired,
  partners: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoryItem;
