import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techBackEnd } from '../main.config';

const TechBackEndMeteor = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation
        url={url}
        image="be"
        points={techBackEnd}
      />
      <div className="content-block">
        <div className="content">
          <h2>Meteor.JS Development</h2>
          <p>
            Some of our clients are interested in the development processes and they want to know
            what is happening behind the scenes of their apps. One of the questions is what is
            Meteor js and why do we use it?
          </p>
          <p>
            In a few words, Meteor is a technology that helps developers to build JavaScript
            cross-platform applications faster without the lack of quality. Meteor can be used for
            web, mobile, and desktop projects of different complexity.
          </p>
          <p>
            We would like to notice that Meteor is an open source platform, so you will not have
            to spend additional resources on the development software and tools.
          </p>
          <h3>Back-end Web Development</h3>
          <p>
            So what is Meteor and what are the benefits of using it in the development? Our
            astronauts chose Meteor as one of the most popular and often used technologies that
            help to optimize the back end development process. In the terms of business, it means
            that we can build a product faster with less code.
          </p>
          <p>
            Also, the Meteor js review shows that Meteor easily integrates with Angular, React,
            Mongo DB, Cordova ant other technologies and services. In our portfolio, there is
            react Meteor example so you can see how it works. Also, we have a Meteor react todos
            integration example.
          </p>
          <p>
            For launching your first Meteor application we suggest hiring an experienced team of
            developers. Since Meteor is a full-stack platform with its help you can implement
            changes in the front end, back end and databases.
          </p>
          <p>
            Hiring developers without any experience but with lower rates looks more beneficial at
            first. But keep in mind that in the end the development process can take more time,
            therefore, the final price can be the same. Or, even worse, you can receive an app
            with bad architecture and code that is hard to support.
          </p>
          <p>
            Our Meteor JS astronauts have all skills and knowledge to build a high-quality app. On
            the Keenethics spaceship, we have Meteor js examples used in a variety of projects. If
            you still are not sure if your project requires such type of technology feel free to
            contact us.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechBackEndMeteor.propTypes = {
  url: PropTypes.object,
};
TechBackEndMeteor.defaultProps = {
  url: {},
};

export default TechBackEndMeteor;
