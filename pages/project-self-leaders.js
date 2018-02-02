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
	    
	    <div className="row self-intro border-box">
	      <div className="col-2">
		<div className="self-intro-title-container">
		  <div className="self-logo-title">SelfLeaders</div>
		  <div className="self-subtitle"><span>Personal Growth Tool</span></div>
		  <div className="self-body"><span>SelfLeaders is a Swedish company that helps their customers create strong cultures where co workers are engaged, drive development and take care of themselves and each other.</span></div>
		</div>
		<div className="self-quotes">
		  <div></div>
		  <div className="self-title title"><span>We call it self-leadership.</span></div>
		</div>
	      </div>
	      <div className="col-2 self-intro-image"></div>
	    </div>

	    <div className="row reverse self-tutorial border-box">
	      <div className="col-2 self-tutorial-image">
		<hr className="self-hr"/>
		<div></div>
	      </div>
	      <div className="col-2 border-box self-tutorial-body">
		<div className="self-digit">
		  <span>01</span>
		  <span></span>
		</div>
		<div className="self-title">
		  <span>How It Works</span>
		</div>
		<div className="self-body"><span>Understanding personal values is the key to understanding your own motivation. Ever since the start of SelfLeaders in 2009, this method has been central in our approach to working with individual and organizational transformation. <br/><br/>

SelfLeaders delivers trainings to businesses, NGOs and the public sector with the aim to help them to become truly value-based. SelfLeaders workshops would be impossible without application which we made. This application is a tool for facilitators and participants of workshops. Tool’s functionality helps to conduct workshop with interact
ing materials, videos, presentations, etc.</span></div>
	      </div>
	    </div>

	    <div className="row self-tech">
	      <div className="col-2 border-box self-tech-content">
		<div className="self-tech-content-left">
		  <div className="slash-title">
		    <span></span>
		    <span>Technology</span>
		  </div>
		</div>
		<div className="self-tech-content-right">
		  <span>Meteor</span>
		  <span>GraphQL</span>
		  <span>React</span>
		  <span>Blaze</span>
		</div>
	      </div>
	      <div className="col-2 self-tech-image"></div>
	    </div>

	    <div className="row self-impressed">
	      <div className="col-1 border-box self-impressed-col">
		<div className="self-quotes">
		  <div></div>
		  <div className="self-title">
		   <span>I am really impressed with the different tools and tips that we also got to bring with us, extremely useful.</span>
		  </div>
		</div>
		<div className="self-sse">Participant, SSE Executive Education</div>
	      </div>
	    </div>

	    <div className="row self-screen">
	      <div className="col-1"></div>
	    </div>

	    <div className="row reverse border-box self-achivements">
	      <div className="col-2 self-achivements-image">
		<hr className="self-hr"/>
		<div></div>
	      </div>
	      <div className="col-2 border-box self-achivements-content">
		<div className="title-container">
		  <div className="self-digit">
		    <span>02</span>
		    <span></span>
		  </div>
		  <div className="self-title"><span>Achievements</span></div>
		</div>
		<div className="content-container">
		  <div className="self-body">
		    <span></span>
		    <span>Implemented a lot of new core functionality</span>
		  </div>
		  <div className="self-body">
		    <span></span>
		    <span>Replaced Blaze with React in application</span>
		  </div>
		  <div className="self-body">
		    <span></span>
		    <span>Use Apollo/GraphQL instead of Meteor DDP pub/sub</span>
		  </div>
		  <div className="self-body">
		    <span></span>
		    <span>Merged two client's applications (WIP)</span>
		  </div>
		  <div className="self-body">
		    <span></span>
		    <span>Implement new design</span>
		  </div>
		  <div className="self-body">
		    <span></span>
		    <span>Full application refactoring</span>
		  </div>
		</div>
	      </div>
	    </div>

	    <div className="row self-managed">
	      <div className="col-2 border-box self-managed-content">
		<div className="slash-title">
		  <span></span>
		  <span>How we managed it</span>
		</div>
		<div className="border-box self-managed-chapter">
		  <div className="self-subtitle"><span>We grow fast!</span></div>
		  <div className="border-box self-body">
		    <span>We have started development with only one full stacker and after 3 months, we expanded to three decent developers, QA and a Project Manager to handle the project flow.</span>
		  </div>
		</div>
		<div className="border-box self-managed-chapter">
		  <div className="self-subtitle"><span>We love agility!</span></div>
		  <div className="border-box self-body">
		    <span>Self Leaders is the best example of the agile methodology successfully running on the project. Scrum attributes with all their features were integrated into the project development process.</span>
		  </div>
		</div>
	      </div>
	      <div className="col-2 self-managed-image"></div>
	    </div>

	    <div className="row self-development">
	      <div className="col-1 self-development-header border-box">
		<div className="self-development-header-line"><hr className="self-hr"/></div>
		<div className="self-development-header-title">
		  <div className="self-digit">
		    <span>03</span>
		    <span></span>
		  </div>
		  <div className="self-title"><span>Development</span></div>
		</div>
	      </div>
	      <div className="col-1 border-box self-development-images-container">
		<div className="col-3-1 border-box">
		  <div className="self-development-image image-1"></div>
		  <div className="self-body bordere-box">
		    We follow a well-known sprint cycle to ship increments on a bi-weekly basis. <br/><br/>
We implemented two-week sprint in order to have more frequent demos, more frequent retrospectives.
		  </div>
		</div>
		<div className="col-3-1 border-box">
		  <div className="self-development-image image-2"></div>
		  <div className="self-body bordere-box">
		    We use gamified technique called “Scrum Poker” which helps to create a productive and fun work environment at sprint planning.
		  </div>
		</div>
		<div className="col-3-1 border-box">
		  <div className="self-development-image image-3"></div>
		  <div className="self-body bordere-box">
		    We see retrospective as an opportunity for the team to inspect and create a plan for improvements to be enacted during the next sprint.
		  </div>
		</div>
	      </div>
	    </div>

	    <div className="row self-flow">
	       <div className="col-1 self-flow-header border-box">
		<div className="self-flow-header-line"><hr className="self-hr"/></div>
		<div className="self-flow-header-title">
		  <div className="self-digit">
		    <span>04</span>
		    <span></span>
		  </div>
		  <div className="self-title"><span>Flow</span></div>
		</div>
	       </div>
	       <div className="col-1 border-box self-flow-body-mobile">
		 <div className="self-body border-box"><span>Developer moves task which he/she works on.</span></div>
		 <div className="self-body border-box"><span>Task is pushed to staging. Task is ready for testing.</span></div>
		 <div className="self-body border-box"><span>Task is considered as a bug-free, and labels as Done.</span></div>
		 <div className="self-body border-box"><span>Task is completed by developer. Pull request created. Task is reviewed by teammate.</span></div>
		 <div className="self-body border-box"><span>QA reveals some bugs and moves Task back to Sprint.</span></div>
	       </div>
	       <div className="col-1 border-box self-flow-body-web">
		 <div className="self-flow-web-1">
		   <div></div>
		   <div className="self-body">Developer moves task which he/she works on.</div>
		   <div className="self-flow-web-middle"></div>
		   <div className="self-body">Task is pushed to staging. Task is ready for testing.</div>
		   <div></div>
		 </div>
		 <div className="self-flow-web-2">
		   <div className="self-body">Task is considered as a bug-free, and labels as Done.</div>
		 </div>
		 <div className="self-flow-web-3">
		   <div className="self-body">Task is considered as a bug-free, and labels as Done.</div>
		 </div>
		 <div className="self-flow-web-4">
		   <div className="self-body">QA reveals some bugs and moves Task back to Sprint.</div>
		 </div>
	       </div>
	    </div>

	    <div className="row self-mockup">
	      <div className="col-1"></div>
	    </div>

	    <div className="row self-footer">
	      <div className="col-1 border-box">
		<div></div>
	      </div>
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
