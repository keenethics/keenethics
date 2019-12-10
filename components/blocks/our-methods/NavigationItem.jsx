import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = ({
  index,
  item,
  activeIndex,
  setActiveIndex,
  maxItems,
}) => {
  const clickHandler = (e) => {
    e.preventDefault();

    setActiveIndex(index);
  };

  const getOpacity = () => {
    if (activeIndex === index) return 1;

    const diff = Math.abs(index - activeIndex);

    return (maxItems - diff) * 0.15;
  };

  const getCountLabel = () => {
    if (index < 10) return `0${index + 1}`;

    return index + 1;
  };

  return (
    <div
      className={`our-methods--navigation-item${activeIndex === index ? ' active' : ''}`}
      style={{
        opacity: getOpacity(),
      }}
    >
      <a href="#" onClick={clickHandler}>
        <span className="our-methods--navigation-item-count">
          {getCountLabel()}
        </span>
        {item.value}
      </a>
    </div>
  );
};

NavigationItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
    component: PropTypes.elementType,
  }).isRequired,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func.isRequired,
  maxItems: PropTypes.number,
};

NavigationItem.defaultProps = {
  activeIndex: 0,
  maxItems: 5,
};

export default NavigationItem;
