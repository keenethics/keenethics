import React, { useState } from 'react';

import data from './data';

import Navigation from './Navigation';
import Content from './Content';

const { navigation, items } = data;

const OurMethods = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="our-methods">
      <Navigation
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        items={items}
        maxItems={navigation.maxItems}
      />
      <Content
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default OurMethods;
