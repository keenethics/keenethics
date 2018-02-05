import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Navigation from '../components/project/navigation';

const ProjectPree = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
	  <div className="container">

	    
	    <div className="row">
	      <div className="col-2">
		<div className="border-box pree-logo bg-grey">
		  <div className="logo-rows">
		   
		    <div>
		      <img src="/static/images/project/pree-logo.png" />
		      PREE
		    </div>
		  </div>
		  <div className="logo-rows logo-title pree pree pree-title-gray">
		    Stop losing your staff
		  </div>
		</div>
	      </div>
	      <div className="col-2 pree-logo-image">
	      </div>
	    </div>
	    
	    <div className="row reverse border-box pree-purpose">
	      <div className="col-2">
		<div className="pree-phone-container">
		  <img src="/static/images/project/pree-purpose-phone.png" />
		</div>
	      </div>
	      <div className="col-2">
		<div className="pree-purpose-right border-box">
		  <div className="pree pree-title">What is the purpose of the app?</div>
		  <div className="pree pree-body">
		    Suppose you often lose your keys and afterwards you spend a lot of time looking for them. How would a developed PREE app solve this problem? We have a PREE device which is attached to your key/car/bag etc. <br/><br/>

The PREE devices are being produced according to iBeacon protocol. We developed app which allows its users to attach the PREE device to their account and establishes the Bluetooth connection between your smartphone (Android or iOS) and PREE device.  <br/><br/>

According to the received signal the app notifies user when he or she loses connection or is back in the reach of some PREE device.
		  </div>
		</div>
	      </div>
	    </div>
	    
	    <div className="row reverse">
	      <div className="col-2 pree-tasks-image"></div>
	      <div className="col-2 bg-grey">
		<div className="pree-tasks-content border-box">
		  <div className="pree pree-title">Our Task</div>
		  <div className="pree pree-body">
		    Our task was to develop and release mobile app for Android and iOS platforms which has to communicate with BLE devices and give its users location information of their stuff.  
		  </div>

		  <div className="pree pree-title">UI / UX</div>
		  <div className="pree pree-body">
		    The most important thing in PREE app is to provide the ability to quickly access and control their PREE devices. That’s why after user registration, the BLE starts scanning of PREE devices and attaches  trackers to user’s account. <br/><br/>

The main page - list of devices is available from almost all pages. This UX feature allows easy and fast access to settings of PREE devices. 

		  </div>
		</div>
	      </div>
	    </div>

	    <div className="row pree-tutorial border-box">
	      <div className="col-2">
		<div className="pree-tutorial-content">
		  <div className="pree pree-title">
		    Realized UX <br/>
		    doesn’t have pages 
		    of deep nesting 
		    which allows us 
		    to have the fast access 
		    to all PREE devices.
		  </div>
		</div>
	      </div>
	      <div className="col-2 bg-grey pree-tutorial-image border-box">
		<img src="/static/images/project/pree-tutorial-image.png"/>
	      </div>
	    </div>

	    <div className="row pree-technology flex-wrap border-box">
	      <div className="col-1 pree pree-title">
		Development challenges
	      </div>
	      <div className="row pree-technology-row">
		<div className="pree-technology-stack">
		  Technology stack for backend:
		</div>
		<div className="pree-technology-stack-data flex-row">
		  <div>
		    <div>Nodejs</div>
		    <div>Express</div>
		    <div>Mongo</div>
		  </div>
		</div>
	      </div>
	      
	      <div className="row pree-technology-row">
		<div className="pree-technology-stack stakc-android-ios">
		  Technology stack for Android and IOS:
		</div>
		<div className="pree-technology-stack-data flex-row">
		  <div>
		    <div>Ionic</div>
		    <div>Cordova</div>
		    <div>BLE</div>
		    <div>Google Maps</div>
		    <div>Geolocation</div>
		  </div>
		</div>
	      </div>
	      <div className="row pree-technology-row row-left pree pree-body block">
		The whole implementation of the app is possible thank to the open source cordova ble plugin - <a href="https://github.com/don/cordova-plugin-ble-central" target="_blank">https://github.com/don/cordova-plugin-ble-central</a>
	      </div>
	      
	      <div className="row pree-technology-row row-right pree pree-body">
		This plugin allows to scan, connect, read/write information from a ble device - in our case PREE device. We use this plugin for scanning PREE devices, getting power of received signal for every devices, setting bluetooth pair connection for every attached device. Also we used Google maps and Geolocation for storing and showing actual location for attached PREE device. All this stuff is required for main feature - notify user when you lose connect or back to range for some PREE device. 
	      </div>
	    </div>

	    <div className="row reverse pree-problem border-box">
	      <div className="col-2 bg-gray pree-problem-content border-box">
		<div className="title">
		  <div className="left-title pree pree-title">Problems</div>
		  <div className="right-title">
		    <img src="/static/images/project/1.svg" />
		  </div>
		</div>
		<div className="title">
		  <div className="left-title black-text pree pree-title">Connection</div>
		</div>
		<div className="title pree pree-body">
		  There are a lot of manufactures of Android devices and that’s why the bluetooth behavior is different with each of them. Sometimes the connection between Android smartphone and PREE device is established from seventh attempt. It  takes a lot of customer time and we made the decision - keep scanning the BLE devices and try to reconnect after every unsuccessful connect. Also we implemented the scanning and connecting to operate in background mode.  This leads to power consumption increase, but it seems that right now we have found a golden mean for Android platform - between strong connect, reliable data and acceptable energy consumption. 
		</div>
	      </div>
	      <div className="col-2 pree-problem-image">
	      </div>
	    </div>

	    <div className="row pree-scanning">
	      <div className="col-4-1 bg-blue ">
	      </div>
	      <div className="col-4-3 pree-scanning-content bg-grey border-box">
		<div className="title">
		  <div className="right-title">
		    <img src="/static/images/project/2.svg" />
		  </div>
		</div>
		<div className="title">
		  <div className="left-title black-text pree pree-title">Scanning on IOS</div>
		</div>
		<div className="title pree-scanning-text pree pree-body">
		  On iOS platform connecting to BLE  works out better than on Android platform (iBeacon is developed by Apple). In iOS the main app flow is implemented through scanning of PREE devices and tries to connect to them. And it works fast and reliable.  The price of that bluetooth functionality is  more power consuming. Also in iOS it’s not easy for bluetooth to scan in background mode. Firstly in order to upload it to the appsotore you have to explain to them why you need it. Secondly  the scanning in background mode leads to an increase in the power consumption of iPhone. That’s why we made the decision - avoid using ble scanning in background mode on iOS platform. The bluetooth connection works reliably -  it allows to read some information from PREE device and bluetooth periphery which helps to calculate the approximated distance. 
		</div>
	      </div>
	    </div>

	    <div className="row reverse pree-achivement border-box">
	      <div className="col-2 pree-achivement-content">
		<div className="pree pree-title">
		  Achivement
		</div>
		<div className="pree pree-body">
		 <br/><br/>Developed app which can scan/connect/read/write for PREE ble devices (iBeacon)
		 <br/><br/>Developed feature which notifies user when he lose connection or back to range with his PREE device.
		 <br/><br/>Developed feature which store is the last to know location of your PREE device and rewrite it when you are back in range.
		 <br/><br/>Developed feature showing all the above mentioned locations on map for every device and on general map.
		 <br/><br/>Developed feature showing approximate distance to you PREE device. 
		 <br/><br/>Developed two modes for PREE device - ‘close by’ (strict) and ‘normal’ (no strict) which depends on distance to your PREE device.
		 <br/><br/>Developed feature which notifies your family member when PREE device is lost.  
		</div>
		<div className="pree pree-title-gray achivement-link">Visit website</div>
		<div className="pree pree-title"><a href="http://preetrack.com" target="_blank">preetrack.com</a></div>
	      </div>
	      
	      <div className="col-2 pree-achivement-image">
	      </div>
	    </div>

	     <div className="row pree-download">
	       <div className="col-1 pree-download-content">
		 <div className="pree pree-title-gray">Download App for free:</div>
		 <div className="pree-download-stores">
		   <img src="/static/images/project/app-store.png" />
		   <img src="/static/images/project/google-play.png" />
		 </div>
	       </div>
	     </div>

	     <div className="row pree-thanks">
	       <div className="col-2 pree-thanks-image">
	       </div>
	       <div className="col-2 pree-thanks-content">
		 <div className="pree-thanks-logo-container">
		   <img src="/static/images/project/pree-small-logo.png" />
		 </div>
		 <div className="pree pree-title pree-thanks-text"> Thank you for watching! </div>
	       </div>
	     </div>

	     
	  </div>
	</div>
	<Navigation url={url} />
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
