import React from 'react';
import Portfolio from './portfolio';

const Projects = () => (
  <div className="block block-projects">
    <header className="block--header">
      <div className="block--header-title">
        Our Projects
      </div>
    </header>
    <div className="block--content">
      <Portfolio
        isFullPage
        pageTitle="/"
        topTitle=" "
      />
    </div>
  </div>
);

export default Projects;
