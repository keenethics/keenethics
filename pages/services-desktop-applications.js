import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

const ServicesDesktopApplications = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image="desktop" />
    <div className="content-block">
      <h1>Desktop Application Development Services</h1>
      <p>
        So what is desktop application development and how to know if it is the right solution
        for your business?
      </p>
      <p>
        In a nutshell, there are a few main advantages of creating desktop applications with
        the help of web technologies. Firstly, it gives the possibility to customize the UI
        and you are not limited by any platform. Secondly, the app becomes portable and
        easy to use, regardless of the device. Web application needs to be installed only once,
        on a server that is connected to the internet and can be accessed by a browser.
      </p>
      <p>
        Sometimes finding an experienced team of windows desktop application development
        professionals can be challenging, especially if you want to hire a provider, not an
        in-house team that can burn your budget.
      </p>
      <h2>Expert Desktop App Developers</h2>
      <p>
        We suggest to take a look at developers that work with the best programming language
        for software development and have a solid expertise or alike projects in their
        portfolio. For example, for developing desktop apps astronauts at Keenethics prefer
        to use the Electron framework, which was developed by GitHub.
        Electron helps to create Cross-Platform apps using HTML, CSS, and JavaScript.
        According to some researches, it’s one of the most common used and best programming
        language for windows applications you can pick. The basic core is open-source and
        free to use. Analytics define desktop programming using web technologies as one of
        the most profitable for business needs.
      </p>
      <p>
        Notice, that a good developer also needs to have experience in using windows
        desktop application development tools and related software. For example, with the
        help of rapid application development software our programmers will create your
        project slightly faster, so you can see the result ass soon as possible.
      </p>
      <p>
        On the Keenethics spaceship astronauts use the most efficient desktop application
        development tools to bring projects to life. If you have any desktop application ideas
        that you still hesitate to launch, contact us!
      </p>
    </div>
  </Layout>
);

ServicesDesktopApplications.propTypes = {
  url: PropTypes.object,
};
ServicesDesktopApplications.defaultProps = {
  url: {},
};

export default ServicesDesktopApplications;
