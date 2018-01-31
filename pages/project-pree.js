import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

const ProjectPree = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
	  <div className="container">   
	    <div className="row">
	      <div className="col-2">
		<div className="pree-logo bg-grey">
		  <div className="logo-rows">
		    <img src="/static/images/project/pree-logo.png" />
		  </div>
		  <div className="logo-rows logo-title pree-title">
		    Stop losing your staff
		  </div>
		</div>
	      </div>
	      <div className="col-2 pree-logo-image">
	      </div>
	    </div>
	    
	    <div className="row pree-purpose">
	      <div className="col-2">
		<div className="pree-phone-container">
		  <img src="/static/images/project/pree-purpose-phone.png" />
		</div>
	      </div>
	      <div className="col-2">
		<div className="pree-purpose-right">
		  <div className="pree-title">What is the purpose of the app?</div>
		  <div className="pree-body">
		    Suppose you often lose your keys and afterwards you spend a lot of time looking for them. How would a developed PREE app solve this problem? We have a PREE device which is attached to your key/car/bag etc. <br/><br/>

The PREE devices are being produced according to iBeacon protocol. We developed app which allows its users to attach the PREE device to their account and establishes the Bluetooth connection between your smartphone (Android or iOS) and PREE device.  <br/><br/>

According to the received signal the app notifies user when he or she loses connection or is back in the reach of some PREE device.
		  </div>
		</div>
	      </div>
	    </div>
	    
	    <div className="row">
	      <div className="col-2 pree-tasks-image"></div>
	      <div className="col-2 bg-grey">
		<div className="pree-tasks-content">
		  <div className="pree-title">Our Task</div>
		  <div className="pree-body">
		    Our task was to develop and release mobile app for Android and iOS platforms which has to communicate with BLE devices and give its users location information of their stuff.  
		  </div>

		  <div className="pree-title">UI / UX</div>
		  <div className="pree-body">
		    The most important thing in PREE app is to provide the ability to quickly access and control their PREE devices. That’s why after user registration, the BLE starts scanning of PREE devices and attaches  trackers to user’s account. <br/><br/>

The main page - list of devices is available from almost all pages. This UX feature allows easy and fast access to settings of PREE devices. 

		  </div>
		</div>
	      </div>
	    </div>

	    <div className="row pree-tutorial">
	      <div className="col-2">
		<div className="pree-tutorial-content">
		  <div className="pree-title">
		    Realized UX <br/>
		    doesn’t have pages 
		    of deep nesting 
		    which allows us 
		    to have the fast access 
		    to all PREE devices.
		  </div>
		</div>
	      </div>
	      <div className="col-2 bg-grey pree-tutorial-image">
		<img src="/static/images/project/pree-tutorial-image.png"/>
	      </div>
	    </div>

	    <div className="row pree-technology">
	      <div className="col-1 pree-title">
		Development challenges
	      </div>
	      <div className="row pree-technology-row">
		<div className="col-4-1 pree-technology-stack">
		  Technology stack for backend:
		</div>
		<div className="col-4-3 pree-technology-stack-data">
		  <div>Nodejs</div>
		  <div>Express</div>
		  <div>Mongo</div>
		</div>
	      </div>
	      
	    </div>
	    
	  </div>
	</div>
      </div>
    </div>
  </Layout>
);
ProjectPree.propTypes = {
  url: PropTypes.object,
};
ProjectPree.defaultProps = {
  url: {},
};

export default ProjectPree;
