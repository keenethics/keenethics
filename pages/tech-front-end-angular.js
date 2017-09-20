import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndAngular = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="fe"
        points={techFrontEnd()}
      />
      <div className="content-block">
        <div className="content">
          <h2>AngularJS Developers</h2>
          <p>
            AngularJS in a JavaScript-based open-source framework. But what is angularjs good for
            and where is its place in the list of technologies? Developers pick angularjs
            development for building front-end web, mobile web, native mobile and native desktop
            applications.
          </p>
          <p>
            Angular JS not only helps to increase apps speed and performance but also, gives control
            over scalability and helps to meet huge data requirements.
          </p>
          <p>
            As an angularjs development environment can be used integrated development environments
            for JavaScript. Thanks to this, engineers are free to chose their favorite one for
            angular development process.
          </p>
          <p>
            With the help of angularjs development tools the required work can be done better and
            slightly faster. Many templates, libraries and a wide range of components give the
            developer an opportunity to avoid distraction and concentrate on the process.
          </p>
          <h3>Hire AngularJS Developers</h3>
          <p>
            We believe that establishing effective communication is important for business
            relationship. It is especially important for those who decide to outsource development.
            Hiring an offshore angularjs development company is a beneficial choice. This decision
            will help you save money without additional risks. All you need to do is to hire an
            experienced team of professionals. When picking your partner from the list of angularjs
            development companies pay attention to company&apos;s related experience and, if it’s
            possible, look for some feedbacks.
          </p>
          <p>
            On the Kennethics spaceship we have completed dozens of projects, from small 2-week
            projects to more complex applications. Some of them contain efficient angularjs examples
            and reflect our experience. Also, we can give you an angularjs web service example we
            have developed for our clients.
          </p>
          <p>
            Notice, that we strongly recommend to our clients to start new projects on Angular2, the
            updated and more powerful version of Angular. Angular still can be used to support old
            projects. But on our opinion, if the project is successful, it is reasonable to move it
            to Angular2.
          </p>
          <p>
            Our astronauts use only official and realized angularjs tools and avoid suspicious
            software. In the end, you will receive a high-quality application, build exactly to meet
            your business expectations. Contact us anytime if you want to get more information.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechFrontEndAngular.propTypes = {
  url: PropTypes.object,
};
TechFrontEndAngular.defaultProps = {
  url: {},
};

export default TechFrontEndAngular;
