import React, { useState } from 'react';

import Link from 'next/link';

import Head from '../components/layout/head';
import Partners from '../components/blocks/partners/Partners';
import PhotoGallery from '../components/photo-gallery/PhotoGallery';

const teamData = [
  {
    name: 'Oksana Pleten',
    position: 'Head of UX/UI Department',
    picture: 'static/images/referral-program/oksana-pleten.jpg',
    listTitle: 'The UX/UI Designer',
    listText: 'analyzes your business requirements and user needs to develop an exceptional User Experience and an elegant User Interface.',
  }, {
    name: 'Oksana Pleten',
    position: 'The Solution Architect',
    picture: 'static/images/referral-program/oksana-pleten.jpg',
    listTitle: 'The Solution Architect',
    listText: 'analyzes project specifications and design requirements and assesses them from a developer’s point of view. This specialist deals with the technical implementation of the project idea.',
  }, {
    name: 'Oksana Pleten',
    position: 'The Project Manager',
    picture: 'static/images/referral-program/oksana-pleten.jpg',
    listTitle: 'The Project Manager',
    listText: 'organizes the whole UX discovery process and draws out the most valuable knowledge and insights to maximize the outcome.',
  }, {
    name: 'Oksana Pleten',
    position: 'Business Analytic',
    picture: 'static/images/referral-program/oksana-pleten.jpg',
    listTitle: 'Business Analytic',
    listText: "explores project ideas, gathers requirements from all stakeholders, and researches the market including interviews with a target audience. The analyst's main responsibility is to build a solution that will bring you value.",
  },
];

const ReferralProgram = () => {
  const [projectStage, setProjectStage] = useState('startup');
  const [showDetails, setShowDetails] = useState(true);
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const renderWelcomeBlock = () => (
    <div className="welcome-block">
      <div className="welcome-block-left">
        <div className="logo">
          <Link href="/#main">
            <a role="presentation" className="navigation-logo">
              <img src="/static/images/logo.svg" alt="Keenethics" />
            </a>
          </Link>
        </div>
        <div className="welcome-block-left-content">
          <h1>Welcome to Our Referral Program</h1>
          <div className="text">
            <img src="/static/images/svg/quotes.svg" className="quotes left" alt="quotes" />
            I am happy to see you were directed by one of our satisfied customers.
            KeenEthics is your ethical software development partner with a special referral offer.
            You can read about the offer below or book a meeting with me,
            and I will introduce you to the benefits of working with us personally.
            <img src="/static/images/svg/quotes.svg" className="quotes right" alt="quotes" />
          </div>
          <div className="contact-data">
            <div className="seo-name">
              Max Savonin
              <p>CEO of KeenEthics</p>
            </div>
            <div>
              <Link href="">
                <a className="button orange-btn">Book a meeting</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="horizontal-line" />
        <div className="contacts">
          <a href="tel:+38 (094) 710 61 05">
            <p><img src="/static/images/svg/icon-tel.svg" alt="tel" /></p>
            +38 (094) 710 61 05
          </a>
          <a href="mailto:max.savonin@keenethics.com">
            <p><img src="/static/images/svg/icon-mail.svg" alt="tel" /></p>
            max.savonin@keenethics.com
          </a>
          <a href="skype:maxsav28">
            <p><img src="/static/images/svg/skype.svg" alt="tel" /></p>
            maxsav28
          </a>
        </div>
      </div>
      <div className="welcome-block-right" />
    </div>
  );

  const renderProjectStageBlock = () => (
    <div className="project-stage">
      <h2>At what stage is your project?</h2>
      <div className="stages">

        <div className="tabs">
          <input type="radio" name="tabs" id="startup" defaultChecked onClick={() => { setProjectStage('startup'); setShowDetails(false); }} />
          <label htmlFor="startup">
            <div>
              <img src="/static/images/svg/startup_icon.svg" alt="A Startup Idea" />
              <span className="ellipse">
                <svg viewBox="0 0 32 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 64C27.7977 64 23.6365 63.1723 19.7541 61.5641C15.8717 59.956 12.3441 57.5989 9.37258 54.6274C6.40111 51.6559 4.04401 48.1283 2.43586 44.2459C0.827705 40.3634 0 36.2023 0 32C0 27.7977 0.827705 23.6365 2.43586 19.7541C4.04401 15.8717 6.40111 12.3441 9.37259 9.37258C12.3441 6.40111 15.8717 4.044 19.7541 2.43585C23.6366 0.827704 27.7977 -3.67377e-07 32 0V3.2C28.2179 3.2 24.4729 3.94493 20.9787 5.39227C17.4845 6.8396 14.3097 8.961 11.6353 11.6353C8.961 14.3097 6.83961 17.4845 5.39227 20.9787C3.94493 24.4729 3.2 28.2179 3.2 32C3.2 35.7821 3.94493 39.5271 5.39227 43.0213C6.8396 46.5155 8.961 49.6903 11.6353 52.3647C14.3097 55.039 17.4845 57.1604 20.9787 58.6077C24.4729 60.0551 28.2179 60.8 32 60.8V64Z" />
                </svg>
              </span>
            </div>
            <p>A Startup Idea</p>
          </label>

          <input type="radio" name="tabs" id="exist" onClick={() => { setProjectStage('existProject'); setShowDetails(false); }} />
          <label htmlFor="exist">
            <div>
              <img src="/static/images/svg/project_icon.svg" alt="An Existing Product" />
              <span className="ellipse">
                <svg viewBox="0 0 32 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 64C27.7977 64 23.6365 63.1723 19.7541 61.5641C15.8717 59.956 12.3441 57.5989 9.37258 54.6274C6.40111 51.6559 4.04401 48.1283 2.43586 44.2459C0.827705 40.3634 0 36.2023 0 32C0 27.7977 0.827705 23.6365 2.43586 19.7541C4.04401 15.8717 6.40111 12.3441 9.37259 9.37258C12.3441 6.40111 15.8717 4.044 19.7541 2.43585C23.6366 0.827704 27.7977 -3.67377e-07 32 0V3.2C28.2179 3.2 24.4729 3.94493 20.9787 5.39227C17.4845 6.8396 14.3097 8.961 11.6353 11.6353C8.961 14.3097 6.83961 17.4845 5.39227 20.9787C3.94493 24.4729 3.2 28.2179 3.2 32C3.2 35.7821 3.94493 39.5271 5.39227 43.0213C6.8396 46.5155 8.961 49.6903 11.6353 52.3647C14.3097 55.039 17.4845 57.1604 20.9787 58.6077C24.4729 60.0551 28.2179 60.8 32 60.8V64Z" />
                </svg>

              </span>
            </div>
            <p>An Existing Product</p>
          </label>

          <div className="tab">
            <div className="startup-content">
              <h3>You receive a free UX Discovery</h3>
              Go through the Intensive discovery stage before diving
              into software development only if and only if you like the results.
            </div>
            <div className="exist-content">
              <h3>You receive 2 weeks of free Quality Assurance</h3>
              We offer you to choose one outstanding QA talent among many resumes of testers.
            </div>
          </div>
        </div>
        <div className="details-btn-holder">
          <div>
            <img src="/static/images/svg/arrow-down-3.svg" alt="details" />
            <Link href="" onClick={() => setShowDetails(!showDetails)}>
              <a className="button">View Details</a>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );

  const renderProjectStageDetailsBlock = () => (
    <div className={`project-stage-details ${showDetails ? 'show' : 'hide'}`}>
      <div className={`startup-details ${projectStage === 'startup' ? 'show' : 'hide'}`}>
        <h3>Free UX Discovery</h3>
        <div className="details-content">
          <div className="project-team">
            <h5>Project Team:</h5>
            <div className="list">
              {teamData.map(({ listTitle, listText }, index) => (
                <>
                  <input
                    type="radio"
                    name="team-list"
                    id={`team-member-${index}`}
                    checked={activeTeamMember === index ? 'checked' : ''}
                  />
                  <label htmlFor="designer">
                    <Link onClick={() => setActiveTeamMember(index)}>
                      <span>{listTitle}</span>
                      {' '}
                      {listText}
                    </Link>
                  </label>
                </>
              ))}
            </div>
          </div>
          <div className="project-team-gallery">
            {activeTeamMember}
            <PhotoGallery data={teamData} nextStep={activeTeamMember} />
          </div>
        </div>
      </div>
      <div className={`existing-project-details ${projectStage === 'existProject' ? 'show' : 'hide'}`}>Free Quality Assurance</div>
    </div>
  );

  return (
    <>
      <Head />

      <section className="page__wrapper page__referral-program">
        {renderWelcomeBlock()}
        {renderProjectStageBlock()}
        {renderProjectStageDetailsBlock()}
        <Partners />
      </section>
    </>
  );
};


export default ReferralProgram;
