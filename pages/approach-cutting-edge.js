import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

const ApproachCuttingEdge = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation url={url} image={'cut'} />
      <div className="content-block">
        <div className="content">
          <h2>Cutting Edge Technologies</h2>
          <p>
            This trend progress through years and will grow even more. Search engines optimize
            mobile index, the percentage of searches and purchases from mobile devices is growing
            exponentially. These are the arguments for mobile application development for business.
          </p>
          <p>
            According to statistics, people check their smartphone almost 300 times a day. Teens
            snap lock button even more often. We touch our phones almost every minute, check for
            new notifications and messages.
          </p>

          <p>
            What applications need the business now? Sleek-designed. Social – we all love to share
            everything on Facebook and Twitter. Compatible with the smartwatch or fitness bracelet
            - wearable devices become a permanent accessory for everyone. If you want to know more,
            get in touch. Successful mobile app starts with a strategy and understanding of its
            functions and tasks. Mobile app development is a time-consuming and creative process at
            the same time.
          </p>
          <p>
            Notice, that a good developer also needs to have experience in using windows desktop
            application development tools and related software. For example, with the help of rapid
            application development software our programmers will create your project slightly
            faster, so you can see the result ass soon as possible.
          </p>
          <p>
            Today, agile is one of the most trendy and widely used terms in project management, so
            we are pretty sure that you must have heard it. So what is agile and agile project and
            service management? What does it mean to be agile?
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

ApproachCuttingEdge.propTypes = {
  url: PropTypes.object,
};

ApproachCuttingEdge.defaultProps = {
  url: {},
};

export default ApproachCuttingEdge;
