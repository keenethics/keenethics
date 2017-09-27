import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

const ApproachHighQuality = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image={'lean'} />
    <div className="content-block">
      <h1>High quality software</h1>
      <p>
        Backend development - is the process of programming the site and
        filling it with functional. Creating a core site, site development
        platform, filling it with basic functionality and creation of the
        administrative area - this is the backend development. Website
        backend development process is a web programming, the purpose of
        which is to implement server-side of site, integrate database
        connect it with user`s (front-end) side. Backend development also
        includes software setup on a server.
      </p>
      <p>
        The frontend sends information and commands from the user to the
        website backend, and that in turn makes their processing. In short,
        front-end is created for the users and back-end for admins.
      </p>
      <p>
        Notice, that a good developer also needs to have experience in
        using windows desktop application development tools and related
        software. For example, with the help of rapid application
        development software our programmers will create your project
        slightly faster, so you can see the result ass soon as possible.
      </p>
      <p>
        Today, agile is one of the most trendy and widely used terms in
        project management, so we are pretty sure that you must have heard
        it. So what is agile and agile project and service management? What
        does it mean to be agile?
      </p>
    </div>
  </Layout>
);

ApproachHighQuality.propTypes = {
  url: PropTypes.object,
};
ApproachHighQuality.defaultProps = {
  url: {},
};

export default ApproachHighQuality;
