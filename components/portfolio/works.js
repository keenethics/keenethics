import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../content/ListItem';

const Works = ({ works }) => (
  <div className="portfolio-works">
    <div className="page__list">
      {works.map((work) => (
        <ListItem work={work} />
      ))}
    </div>
  </div>
);

Works.propTypes = {
  works: PropTypes.array,
};
Works.defaultProps = {
  works: [],
};

export default Works;
