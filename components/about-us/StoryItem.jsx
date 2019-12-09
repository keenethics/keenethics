import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const StoryItemDescription = ({ text, links }) => {
  const linkRegex = /%(.*?)%/ig;
  const parts = text.split(linkRegex);

  return (
    <li>
      {
        parts.map((part) => {
          if (links[part]) {
            return (
              <a key={part} href={links[part]}>{part}</a>
            );
          }
          return part;
        })
      }
    </li>
  );
};

StoryItemDescription.propTypes = {
  text: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired,
};

const StoryItem = ({
  year, title, engineers, partners, items, visible, links,
}) => (
  <div className={classNames('story-item', { visible })}>
    <div className="story-item-heading">
      <em>{year}</em>
      <h3>
        {title}
      </h3>
    </div>
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
        <StoryItemDescription text={item} links={links} key={i} />
      ))}
    </ul>
  </div>
);

StoryItem.defaultProps = {
  visible: false,
  links: {},
};

StoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  engineers: PropTypes.string.isRequired,
  partners: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  visible: PropTypes.bool,
  links: PropTypes.object,
  year: PropTypes.string.isRequired,
};

export default StoryItem;
