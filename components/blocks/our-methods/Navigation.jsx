import React from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem';

const Navigation = ({
  activeIndex,
  setActiveIndex,
  items,
  maxItems,
}) => {
  const increaseIndex = (e) => {
    e.preventDefault();

    const nextIndex = activeIndex + 1;

    if (nextIndex > items.length - 1) {
      setActiveIndex(0);

      return;
    }

    setActiveIndex(nextIndex);
  };

  const decreaseIndex = (e) => {
    e.preventDefault();

    const nextIndex = activeIndex - 1;

    if (nextIndex === -1) {
      setActiveIndex(items.length - 1);

      return;
    }

    setActiveIndex(nextIndex);
  };

  return (
    <div className="our-methods--navigation">
      <div className="our-methods--navigation-inner">
        <a
          href="#"
          onClick={decreaseIndex}
          className="our-methods--navigation-link-prev"
        >
          Prev
        </a>
        {items.map((item, i) => (
          <NavigationItem
            key={item.key}
            index={i}
            item={item}
            isActive={activeIndex === i}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            maxItems={maxItems}
          />
        ))}
        <a
          href="#"
          onClick={increaseIndex}
          className="our-methods--navigation-link-next"
        >
          Next
        </a>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
      component: PropTypes.elementType,
    }),
  ),
  maxItems: PropTypes.number,
};

Navigation.defaultProps = {
  items: [],
  maxItems: 5,
};

export default Navigation;
