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
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">SelfLeaders</h2>
              <p className="description">
                Personal Growth Tool
              </p>
              <div className="tags">
                <div className="tag">Fintech</div>
                <div className="tag">E-Commerce</div>
                <div className="tag">Education</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/self-leaders.png" alt="SelfLeaders" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p className="center">
              SelfLeaders is a Swedish company that helps their customers create strong cultures where co
              workers are engaged, drive development and take care of themselves and each other.
            </p>
            <div className="title">How it works</div>
            <p>
              Understanding personal values is the key to understanding your own motivation. Ever since
              the start of SelfLeaders in 2009, this method has been central in our approach to working
              with individual and organizational transformation.
            </p>
            <p>SelfLeaders delivers trainings to businesses, NGOs and the public sector with the aim to
              help them to become truly value-based. SelfLeaders workshops would be impossible without
              application which we made. This application is a tool for facilitators and participants of
              workshops. Tool’s functionality helps to conduct workshop with interacting materials, videos,
              presentations, etc.
            </p>
            <img
              src="/static/images/project/self-leaders-prew-1.jpg"
              alt="Self Leaders"
              className="image-gaps"
            />
            <div className="title">Technology</div>
            <div className="tags tags--big">
              <div className="tag">Meteor</div>
              <div className="tag">GraphQL</div>
              <div className="tag">React</div>
              <div className="tag">Blaze</div>
            </div>
            <img
              src="/static/images/project/self-leaders-prew-2.jpg"
              alt="Self Leaders"
              className="image-gaps"
            />
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Implemented a lot of new core functionality;
                </li>
                <li>
                  Replaced Blaze with React in most of app;
                </li>
                <li>
                  Use Apollo/GraphQL instead of Meteor DDP pub/sub;
                </li>
                <li>
                  Merge two client&apos;s applications (WIP);
                </li>
                <li>
                  Implement new design;
                </li>
                <li>
                  Full app refactoring;
                </li>
                <li>
                  Over course of the past 10 months the company has grown, acquired new clients,
                  went international and signed a contract with Spotify for a workshop of 300
                  people.
                </li>
              </ul>
            </div>
            <div className="title">How we managed it</div>
            <div className="grid sl-grid">
              <div className="col-1-2">
                <div>
                  <p>
                    <span className="semi-bold">We grow fast!</span>
                    We have started development with only one full stacker and after 3 months, we expanded to three decent developers, QA and a Project Manager to handle the project flow.
                  </p>
                </div>
              </div>
              <div className="col-1-2">
                <div className="pree-grid-text">
                  <p>
                    <span className="semi-bold">We love agility!</span>
                      Self Leaders is the best example of the agile methodology successfully running on the project. Scrum attributes with all their features were integrated into the project development process.
                  </p>
                </div>
              </div>
            </div>
            <div className="title">Development</div>
            <div className="grid sl-grid">
              <div className="col-1-3">
                <div className="grid-img-wrap">
                  <img
                    src="/static/images/project/self-leaders-development-icon-sprint-cycle.png"
                    alt="Sprint Cycle"
                  />
                </div>
                <div>
                  <p>
                    We follow a well-known sprint cycle to ship increments on a bi-weekly basis. We implemented two-week sprint in order to have more frequent demos, more frequent retrospectives.
                  </p>
                </div>
              </div>
              <div className="col-1-3">
                <div className="grid-img-wrap">
                  <img
                    src="/static/images/project/self-leaders-development-icon-scrum-poker.png"
                    alt="Scrum Poker"
                  />
                </div>
                <div className="pree-grid-text">
                  <p>
                    We use gamified technique called “Scrum Poker” which helps to create a productive and fun work environment at sprint planning.
                  </p>
                </div>
              </div>
              <div className="col-1-3">
                <div className="grid-img-wrap">
                  <img
                    src="/static/images/project/self-leaders-development-icon-team.png"
                    alt="Team"
                  />
                </div>
                <div className="pree-grid-text">
                  <p>
                    We see retrospective as an opportunity for the team to inspect and create a plan for improvements to be enacted during the next sprint.
                  </p>
                </div>
              </div>
            </div>
            <div className="title">Flow</div>
            <p>
              Developer moves task which he/she works on.
            </p>
            <p>
              Task is completed by developer. Pull request created. Task is reviewed by teammate.
            </p>
            <p>
              Task is pushed to staging. Task is ready for testing.
            </p>
            <p>
              Task is considered as a bug-free, and labels as Done.
            </p>
            <p>
              QA reveals some bugs and moves Task back to Sprint.
            </p>
            <img
              src="/static/images/project/self-leaders-prew-3.jpg"
              alt="Self Leaders"
              className="image-gaps"
            />
            {/* <div className="project-feedback">
              <h3>Client’s Feedback</h3>
              <p>
                I am really impressed with the different tools and tips that we also got to bring with us, extremely useful.
              </p>
            </div> */}
            <a
              href="http://selfleaders.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
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
