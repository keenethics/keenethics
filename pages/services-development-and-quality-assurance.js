import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import '../styles/content/development-and-quality-assurance.scss';

const ServicesInternetOfThings = () => {
  const whatDoWeOfferIcons = [
    {
      icon: '/static/services/development-and-quality-assurance/web-dev.png',
      title: 'Custom Web App Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/cloud.png',
      title: 'Cloud Application Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/phone.png',
      title: 'Mobile App Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/iot.png',
      title: 'Internet of Things Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/icon-pwa.svg',
      title: 'Progressive Web App Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/chatbot.png',
      title: 'AI and Chatbot Development',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'The high-quality software product is a great way for you to optimize a certain process or to earn some additional profit, which in turn will let your business grow. We are here to help you develop this high-quality product. Through thorough development and continuous QA testing services, our team makes sure that the app fully meets your needs and works exactly as expected.',
    },
    {
      title: 'Building value',
      desc: 'KeenEthics does not chase profits. Our business mission sounds as follows: “We strive for a tech world devoted to the social good”. This is the business value that we strive to promote. If you share our vision and our desire to make the world a better place, we welcome you into a partnership and cooperation with us!',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'We appreciate your time and respect your interests and needs. If you want to start the development in a week, our Engagement Manager along with developers and a PM will help you meet the deadline. Our team will make sure that such a swiftness does not affect quality. Development and Software Quality Assurance testing services can be both fast and effective.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'The hiring process at KeenEthics is challenging – we strive to work with people who know what they do and who share our business values. All our team members have sound technical expertise, considerable working experience, and an academic degree. Our developers and QA services specialists, together will designers, PMs, and BAs, comprise a professional team.',
    },
    {
      title: 'Protecting your data',
      desc: 'Regardless of what kind of software you plan to develop, data security should be your primary concern. Users will not forgive you if you let their private information be compromised even once. Our skillful developers make sure that their code is not susceptible to data breaches. After that, Quality Assurance specialists conduct performance testing and double-check it.',
    },
  ];

  const webDevelopmentWorks = works.filter(
    ({ title }) => ['Banker Advisor', 'WorkBooking', 'OneRemission'].includes(title),
  );

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
          Development and Quality Assurance Services
          </h1>
          <p className="text-center text-italic">
            Creating a perfect final product with thorough development and expert Quality
            Assurance services
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900 }}>$507.2 billion</h2>
          <p className="text-center">
            is the projected size of the global software market in 2021, according to&nbsp;
            <a href="https://www.marketsandmarkets.com/Market-Reports/cloud-computing-market-234.html" target="_blank" rel="noopener noreferrer nofollow">Statista</a>
            .
          </p>
        </section>
        <section>
          <h2>What Is Development and Quality Assurance?</h2>
          <p>
            After we thoroughly research the project idea, finalize the design, and process
            project requirements, the fundamental phase begins. Software developers start
            working on writing the project code. They work hand-in-hand with QA specialists,
            who are testing this code.
          </p>
          <p>
            The software development process involves back-end (server-side) development and
            front-end (client-side) development. Software Quality Assurance testing services
            are conducted manually or automatically. Testing can be of a different type depending
            on its purpose. The result of the development and testing process is a software
            product, which we present to the partner.
          </p>
        </section>
        <section>
          <h2>What Do We Offer?</h2>
          <h3 className="text-center">Development Services</h3>
          <ul className="mobile-development-list">
            {
              whatDoWeOfferIcons.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img style={{ height: '70px' }} src={icon} alt={title} />
                    <figcaption className="mobile-development-figcaption">
                      {
                        href ? <a href={href}>{title}</a> : title
                      }
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h3 className="text-center">Quality Assurance Services</h3>
          <div className="qa-services-list">
            <div className="qa-services-item">
              <b>Automated & Manual Testing</b>
              <br />
              Both types of testing execute test cases and validate the software. While manual
              testing is conducted by a human tester, automated testing is conducted with the
              help of written code scripts. Usually, manual testing takes longer than QA
              automation testing services.
            </div>
            <div className="qa-services-item">
              <b>Exploratory Testing</b>
              <br />
              This type of software Quality Assurance testing services is conducted without
              predetermined test cases. Instead, the tester checks the system on the go by
              investigating the system. This type of testing can be conducted only manually
              as it relies on cognitive thinking.
            </div>
            <div className="qa-services-item">
              <b>Compatibility Testing</b>
              <br />
              Compatibility testing is aimed to check whether a software product can run
              properly on any device. QA specialists check the compatibility of a product
              with different OSs and their versions, different hardware, software, devices,
              platforms, networks, and browsers.
            </div>
            <div className="qa-services-item">
              <b>Functional Testing</b>
              <br />
              Each software component has functional requirements, and the idea of functional
              testing is to check whether these requirements are followed. This type of testing
              is focused not on the process but on the results of the function execution.
            </div>
            <div className="qa-services-item">
              <b>UI/UX Testing</b>
              <br />
              This type is focused on analyzing the efficiency of UI and UX design. The goal
              of it is to find the best way for a software product and its components to interact
              with the target audience. UX testing is a considerable part of the business analysis
              process.
            </div>
            <div className="qa-services-item">
              <b>Regression Testing</b>
              <br />
              Regression testing is aimed to check whether after a certain change the software
              product works as well as it did before. It is a full or partial re-execution of
              test cases aimed
              to make sure that some changes did not affect the existing functionality.
            </div>
            <div className="qa-services-item">
              <b>Unit Testing</b>
              <br />
              The object of unit testing is a single component of a software product rather than the
              product in general. A unit is the smallest part of the software that can be tested. It
              has a single output, and testing makes sure that this unit performs as it is expected
              to.
            </div>
            <div className="qa-services-item">
              <b>API Testing</b>
              <br />
              API (application programming interface) testing is conducted at the business logic
              layer.
              It tests how the application interacts with API. The errors that API testing can
              identify
              are unused flags, security issues, performance issues, or reliability issues.
            </div>
            <div className="qa-services-item">
              <b>Performance Testing</b>
              <br />
              The idea of performance testing is to estimate the stability and responsiveness of
              the app.
              This type of software QA services shows why a software product may lag or fail,
              where the
              bottleneck in the system is, and what is the heaviest data load that the system
              can handle.
            </div>
          </div>
        </section>
        <section>
          <div className="project-content-more">
            <h2>How Do We Do It?</h2>
            <p className="technologies-links">
              <span><a href="/services-web-development-node" target="_blank">Node.js</a></span>
              ,
              <span><a href="/tech-front-end-angular" target="_blank">Angular</a></span>
              ,
              <span><a href="/tech-front-end-react" target="_blank">React</a></span>
              ,
              <span><a href="/tech-apps-react-native" target="_blank">React Native</a></span>
              ,
              <span><a href="/tech-front-end-aurelia" target="_blank">Aurelia</a></span>
              ,
              <span><a href="/tech-front-end-vue" target="_blank">Vue</a></span>
              ,
              <span><a href="/tech-back-end-express" target="_blank">Express</a></span>
              ,
              <span><a href="/tech-apps-electron" target="_blank">Electron</a></span>
              ,
              <span><a href="/tech-apps-phonegap" target="_blank">PhoneGap</a></span>
              ,
              <span><a href="/blog/react-vs-svelte-how-to-build-messaging-components" target="_blank">Svelte</a></span>
              ,
              <span><a href="/services-web-development-meteor" target="_blank">Meteor</a></span>
              .
            </p>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/node-js.png" alt="Node.js" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/angular.png" alt="Angular" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/react.png" alt="React" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/aurelia.png" alt="Aurelia" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/logo.png" alt="Vue" />
              </li>
            </ul>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/express.png" alt="Exspress" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/electron.png" alt="Electron" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/phonegap.png" alt="PhoneGap" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/svelte.png" alt="Svelte" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/development-and-quality-assurance/meteor.png" alt="Meteor" />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>
            These are some web and mobile apps we have provided development and
            software Quality Assurance testing services to:
          </p>
          <Works works={webDevelopmentWorks} rounded />
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <CallToActionButton
          title="Contact us"
          href="/contacts"
        />
      </div>
    </Layout>
  );
};

export default ServicesInternetOfThings;
