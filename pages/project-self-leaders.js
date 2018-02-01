import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#261353';

const ProjectPlutio = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
	  <div className="container">
	    
	    <div className="row self-intro">
	      <div className="col-2">
		<div className="self-intro-title-container">
		  <div className="self-logo-title">SelfLeaders</div>
		  <div className="self-subtitle">Personal Growth Tool</div>
		  <div className="self-body">SelfLeaders is a Swedish company that helps their customers create strong cultures where co workers are engaged, drive development and take care of themselves and each other.</div>
		</div>
		<div className="self-quotes">
		  <div>``</div>
		  <div className="self-title title"><span>We call it self-leadership.</span></div>
		</div>
	      </div>
	      <div className="col-2 self-intro-image bg-cover"></div>
	    </div>

	    <div className="row reverse self-tutorial">
	      <div className="col-2">
		<div className="self-digit">
		  <span>01</span>
		  <span>/</span>
		</div>

		<div className="self-title">
		  How It Works
		</div>
	      </div>
	      <div className="col-2"></div>
	    </div>

	    <div className="row">
	      <div className="col-2"></div>
	      <div className="col-2"></div>
	    </div>

	    <div className="row">
	      <div className="col-1"></div>
	    </div>

	    <div className="row reverse">
	      <div className="col-2"></div>
	      <div className="col-2"></div>
	    </div>

	    <div className="row">
	      <div className="col-2"></div>
	      <div className="col-2"></div>
	    </div>

	    <div className="row">
	      <div className="col-3-1"></div>
	      <div className="col-3-1"></div>
	      <div className="col-3-1"></div>
	    </div>

	    <div className="row">
	      <div className="col-1"></div>
	    </div>

	    <div className="row">
	      <div className="col-1"></div>
	    </div>
	    
	  </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectPlutio.propTypes = {
  url: PropTypes.object,
};
ProjectPlutio.defaultProps = {
  url: {},
};

export default ProjectPlutio;
