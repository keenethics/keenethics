import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

const ApproachAgileProject = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image={'agile'} />
    <div className="content-block">
      <h1>Agile Project Management Services</h1>
      <p>
        Today, agile is one of the most trendy and widely used terms in project management, so
        we are pretty sure that you must have heard it. So what is agile and agile project and
        service management? What does it mean to be agile?
      </p>
      <p>
        Agile is not a methodology, neither a tool or a guideline. Agile rather shows
        company&apos;s approach and its values. The Agile Manifesto is brilliantly short:
      </p>
      <ul>
        <li>Individuals and interactions over processes and tools;</li>
        <li>Working software over comprehensive documentation;</li>
        <li>Customer collaboration over contract negotiation;</li>
        <li>Responding to change over following a plan.</li>
      </ul>
      <p>
        Each of the agile project management companies believes and follows these simple values
        and principles. Of course, Keenethics is one of these companies.
      </p>
      <h2>Agile project management advisory service</h2>
      <p>
        Working with a company offering agile project business services pty ltd gives you
        important and meaningful benefits. An agile team will focus on your business goals,
        striving to deliver the best custom product. On the Keenethics spaceship, astronauts are
        always ready for changes, so if you decide to implement some small features or remove
        the old ones, we will see how we can satisfy such a need without the unnecessary fuss
        and paperwork.
      </p>
      <p>
        Implementing Scrum, the most popular Agile methodology helps us to stay flexible and
        deliver projects on time. Scrum gives you more control over the process and makes the
        software development transparent and opened. Here you decide what is the most important
        for you and your users.
      </p>
      <p>
        As an agile-oriented company, we offer agile project management services to every
        client. We believe it is the best way to organize the software development process, make
        it clear and effective. Also, on our spaceship, you can receive agile project management
        advisory service to make your project go faster.
      </p>
      <p>
        If you need more information, you can find agile project and service management pdf or
        visit official websites like Agile Alliance.
      </p>
      <p>
        Feel free to contact us if you have any questions left!
      </p>
    </div>
  </Layout>
);

ApproachAgileProject.propTypes = {
  url: PropTypes.object,
};
ApproachAgileProject.defaultProps = {
  url: {},
};

export default ApproachAgileProject;
