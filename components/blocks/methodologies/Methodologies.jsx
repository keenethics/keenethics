import React from 'react';

import data from './data';

import MethotologiesItem from './MethodologiesItem';

const Methodologies = () => (
  <div className="block block-methodologies">
    <div className="methodologies">
      {data.map((methodology) => (
        <MethotologiesItem
          key={methodology.key}
          methodology={methodology}
        />
      ))}
    </div>
  </div>
);

export default Methodologies;
