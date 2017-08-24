import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

import { config } from '../../main.config';

const Navigation = ({ url }) => {
  const { navigation } = config;
  const project = {
    prev: {},
    current: {},
    next: {},
  };

  const { points } = navigation.find(e => e.name === 'Portfolio');

  points.forEach((n, i) => {
    const index = n.href === url.pathname ? i : -1;

    if (index > -1) {
      project.current = points[index];

      if (points[index + 1]) {
        project.next = points[index + 1];
      } else {
        project.next = points[0];
      }

      if (points[index - 1]) {
        project.prev = points[index - 1];
      } else {
        project.prev = points[points.length - 1];
      }
    }
  });

  return (
    <div className="project-navigation">
      <div className="project-navigation-inner">
        <Link href={project.prev.href}>
          <a className="project-navigation-prev">
            {project.prev.name}
          </a>
        </Link>
        <Link href={project.next.href}>
          <a className="project-navigation-next">
            {project.next.name}
          </a>
        </Link>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  url: PropTypes.object,
};
Navigation.defaultProps = {
  url: {},
};

export default Navigation;
