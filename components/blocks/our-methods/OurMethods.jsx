import React, { useState } from 'react';

import data from './data';

import Navigation from './Navigation';
import Content from './Content';

const { navigation, items } = data;

const OurMethods = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="block block-our-methods section">
      <header className="block--header">
        <div className="block--header-title">
          Our methods
        </div>
        <div className="block--header-description">
          We guide businesses through every stage of software development while
          delivering effective and elegantly designed solutions to improve your daily
          business processes.
        </div>
      </header>
      <div className="our-methods">
        <Navigation
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          increaseIndex={increaseIndex}
          decreaseIndex={decreaseIndex}
          items={items}
          maxItems={navigation.maxItems}
        />
        <Content
          activeIndex={activeIndex}
          increaseIndex={increaseIndex}
          decreaseIndex={decreaseIndex}
          title={items[activeIndex].value}
          itemsLength={items.length}
        />
      </div>
    </div>
  );
};

export default OurMethods;
