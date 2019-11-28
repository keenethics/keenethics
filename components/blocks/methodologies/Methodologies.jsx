import React from 'react';

import data from './data';

import MethotologiesItem from './MethodologiesItem';

const Methodologies = () => (
  <div className="block methodologies">
    {data.map((methodology) => (
      <MethotologiesItem
        key={methodology.key}
        methodology={methodology}
      />
    ))}
  </div>
);

export default Methodologies;
