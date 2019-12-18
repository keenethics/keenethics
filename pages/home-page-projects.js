import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './portfolio';

const Projects = ({ section, isMobile }) => (
  <div className="block block-projects" id={section}>
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
        isMobile={isMobile}
      />
    </div>
  </div>
);

Projects.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired,
};

export default Projects;
