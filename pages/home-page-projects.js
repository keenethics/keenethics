import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './portfolio';

const Projects = ({ section, isMobile }) => {
  const topTitle = (
    <h1 className="home-section-title">
      Our Projects
    </h1>
  );
  return (
    <div className="section fp-auto-height" id={section}>
      <div className="fw-section">
        <Portfolio
          isFullPage
          pageTitle="/"
          topTitle={topTitle}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

Projects.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired,
};

export default Projects;
