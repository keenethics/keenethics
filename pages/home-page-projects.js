import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './portfolio';


const Projects = ({ minimize }) => (
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
        isMobile={minimize}
      />
    </div>
  </div>
);

Projects.propTypes = {
  minimize: PropTypes.bool.isRequired,
};

export default Projects;
