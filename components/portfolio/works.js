import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListItem from '../content/ListItem';

const Works = ({ works, rounded }) => (
  <div className="portfolio-works">
    <div className={classNames('page__list', { '-rounded': rounded })}>
      {works.map((work) => (
        <ListItem work={work} rounded={rounded} key={work.title} />
      ))}
    </div>
  </div>
);

Works.propTypes = {
  works: PropTypes.array,
  rounded: PropTypes.bool,
};
Works.defaultProps = {
  works: [],
  rounded: false,
};

export default Works;
