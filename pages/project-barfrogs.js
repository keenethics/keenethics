import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#1b9c19';

const ProjectBarfrogs = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary full-width" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">BarFrogs</h2>
              <h3 className="duration"><span>Duration:</span> 5 months, 1 developer</h3>
              <p className="description">
                Find the Place to Hang out with Bar Frogs
              </p>
              <div className="tags">
                <div className="tag">Express</div>
                <div className="tag">React</div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Bar Frogs are the mobile and web apps that help the users find the bar or event
              they have been looking for and enable an easy search for better compliments in a bar.
            </p>
            <p>
              Just let the app know that you want to sing tonight, and pick the best
              karaoke bar from the list - simple as that.
            </p>
            <div className="title">The Idea behind Bar Frogs</div>
            <p>
              Bar Frogs was meant to become the go-to app for the users which they would
              consult every time they wanted to find the most suitable place to hang out.
              This app gathers the experience and develops the recommendations
              based on the personal preferences of the user.
            </p>
            <p>
              There are a couple of reasons why using Bar Frogs app is better than checking
              out the events on Facebook or using Google Maps. Both platforms are convenient
              and user-friendly, but in order to find something either in Google or on Facebook,
              the user needs to put it in the search query. Bar Frogs app functions a bit
              differently
              and the main benefit that it provides is the customization. The user chooses
              what he or
              she wants to do, and the app offers the suggestions that match the preferences.
            </p>
            <p>
            The thing that Goodge and Facebook don’t have is the automatic integration of Bar Page
            with its events, which shows the users the most relevant details about the location.
            </p>
            <div className="title">The Challenge</div>
            <p>
              The app offers a great functionality, but it needed a compelling interface so that the
              users would find it convenient and thus came back to the Bar Frogs time and again.
              Therefore, the team worked hard to develop a clean, convenient, and gorgeous-looking
              interface that would captivate the user at first sight
            </p>
            <p>
              The interface of the app is not overwhelmed with unnecessary details, so the user
              gets to encounter the essential information only. The instructive approach to the
              Bar Frogs content is one more great thing about the app. The user sees the relevant
              infographics and pictures. The compelling visualization ensures that the user spends
              less time concentrating on the interface, which makes the search more engaging and
              saves a lot of user’s time by making it possible to find the best-suited place with
              the minimum amount of clicks.
            </p>
            <p>
              Bar Frogs website incorporates not only the search platform but also a large media
              platform sharing the info about food, events, and places in Boston. Thanks to this
              feature, the users may stay on Bar Frogs longer than just for the time of the search.
            </p>
            <div className="title">Bar Frogs App</div>
            <p>
              The development of the mobile application after creating a website was the next step
              towards engaging more users since. This is an inevitable change that every service
              of this kind must opt for if they wish to stay in the market for a long time.
            </p>
            <p>
              Bar Frogs is the application that has an obvious value for the bar clients. However,
              it is also very useful for the bar managers as they can set the accounts for their
              company, watch the statistics, and therefore make their business more effective.
            </p>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectBarfrogs.propTypes = {
  url: PropTypes.object,
};
ProjectBarfrogs.defaultProps = {
  url: {},
};

export default ProjectBarfrogs;
