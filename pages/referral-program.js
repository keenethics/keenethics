import React, { useState } from 'react';

import Link from 'next/link';

import Head from '../components/layout/head';
import Partners from '../components/blocks/partners/Partners';
import PhotoListGallery from '../components/photo-list-gallery';
import GalleryWithMenu from '../components/gallery-with-menu';

import {
  teamData,
  fundamentalGoals,
  weOfferYou,
  youReceive,
  UXDiscoveryDeliverables,
} from '../data/referral-program';

const ReferralProgram = () => {
  const [projectStage, setProjectStage] = useState('startup');
  const [showDetails, setShowDetails] = useState(false);

  const renderWelcomeBlock = () => (
    <div className="welcome-block" id="top">
      <div className="welcome-block-left">
        <div className="logo">
          <Link href="/#main">
            <a className="navigation-logo" href="https://keenethics.com/" target="_blank" rel="noopener noreferrer">
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
            <a role="presentation" className="button" onClick={() => setShowDetails(!showDetails)}>View Details</a>
          </div>
        </div>
      </div>

      <a href="#top" className="scroll-top-top">
        <img src="/static/images/svg/scroll-to-top.svg" alt="scroll to top" />
      </a>

    </div>
  );

  const renderProjectStageDetailsBlock = () => (
    <div className={`project-stage-details ${showDetails ? 'show' : 'hide'}`}>
      <div className={`startup-details ${projectStage === 'startup' ? 'show' : 'hide'}`}>
        <h3>Free UX Discovery</h3>
        <PhotoListGallery
          title="Project Team:"
          data={teamData}
          name="team-list"
          direction="list-gallery"
        />
        <PhotoListGallery
          title="Fundamental Goals:"
          data={fundamentalGoals}
          name="fundamental-goal"
          direction="gallery-list"
        />
        <div className="ux-discovery-deliverables-container">
          <h5>UX Discovery Deliverables</h5>
          <GalleryWithMenu data={UXDiscoveryDeliverables} />
        </div>
      </div>
      <div className={`existing-project-details ${projectStage === 'existProject' ? 'show' : 'hide'}`}>
        <h3>Free Quality Assurance</h3>
        <PhotoListGallery
          title="We offer you:"
          data={weOfferYou}
          name="we-offer"
          direction="list-gallery"
          galleryClassName="no-top-margin"
        />
        <PhotoListGallery
          title="You receive:"
          data={youReceive}
          name="you-receive"
          direction="gallery-list"
          galleryClassName="no-top-margin"
        />
      </div>
      <div className="lets-talk">
        Does the offer look good?
        <a role="presentation" className="button orange-btn">Let&#39;s talk</a>
      </div>
    </div>
  );

  return (
    <>
      <Head />

      <section className="page__wrapper page__referral-program content">
        {renderWelcomeBlock()}
        {renderProjectStageBlock()}
        {renderProjectStageDetailsBlock()}
        <Partners />
      </section>
    </>
  );
};


export default ReferralProgram;
