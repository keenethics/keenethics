import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

import { works } from '../../main.config';

const Navigation = ({ url }) => {
  const { navigation } = works;
  const project = {
    prev: {},
    current: {},
    next: {},
  };

  works.forEach((work, i) => {
    const index = work.href === url.pathname.substring(1) ? i : -1;

    if (index > -1) {
      project.current = works[index];

      if (works[index + 1]) {
        project.next = works[index + 1];
      } else {
        project.next = works[0];
      }

      if (works[index - 1]) {
        project.prev = works[index - 1];
      } else {
        project.prev = works[works.length - 1];
      }
    }
  });

  return (
    <div className="project-navigation">
      <div className="project-navigation-inner">
        {project.prev.href && <Link href={project.prev.href}>
          <a className="project-navigation-prev">
            {project.prev.title}
          </a>
        </Link>}
        {project.next.href && <Link href={project.next.href}>
          <a className="project-navigation-next">
            {project.next.title}
          </a>
                              </Link>}
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
