import Link from 'next/link';

import React from 'react';

const SeeProjects = () => (
  <div className="see-projects">
    <div className="see-projects--text">
      For more projects in these and other industries, check out our projects
    </div>
    <div className="see-projects--button">
      <Link href="/portfolio" prefetch={false}>
        <a className="button">See Projects</a>
      </Link>
    </div>
  </div>
);

export default SeeProjects;
