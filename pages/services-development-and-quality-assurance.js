import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import '../styles/content/development-and-quality-assurance.scss';

const DevelopmentAndQualityAssurance = () => {
  const whatDoWeOfferIcons = [
    {
      icon: '/static/services/development-and-quality-assurance/web-dev.svg',
      title: 'Custom Web App Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/cloud.svg',
      title: 'Cloud Application Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/phone.svg',
      title: 'Mobile App Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/iot.svg',
      title: 'Internet of Things Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/pwa.svg',
      title: 'Progressive Web App Development',
    },
    {
      icon: '/static/services/development-and-quality-assurance/chatbot.svg',
      title: 'AI and Chatbot Development',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: (
        <>
          The high-quality software product is a great way for you to optimize a
          certain process or to earn some additional profit, which in turn will
          let your business grow. We are here to help you develop this
          high-quality product. Through thorough development and continuous
          software Quality Assurance services, our team makes sure that the app
          fully meets your needs and works exactly as expected.
        </>
      ),
    },
    {
      title: 'Building value',
      desc: (
        <>
          KeenEthics does not chase profits. Our business mission sounds as
          follows: “We strive for a tech world devoted to the social good”. This
          is the business value that we strive to promote. If you share our
          vision and our desire to make the world a better place, we welcome you
          into a partnership and cooperation with us!
        </>
      ),
    },
    {
      title: 'Launching in a matter of weeks',
      desc: (
        <>
          We appreciate your time and respect your interests and needs. If you
          want to start the development in a week, our Engagement Manager along
          with developers and a PM will help you meet the deadline. Our team
          will make sure that such a swiftness does not affect quality.
          Development and Software Quality Assurance testing services can be
          both fast and effective.
        </>
      ),
    },
    {
      title: 'Bringing tech expertise',
      desc: (
        <>
          The hiring process at KeenEthics is challenging — as a software
          development and software testing company, we strive to work with
          people who know what they do and who share our business values. All
          our team members have sound technical expertise, considerable working
          experience, and a relevant academic degree. Our developers and QA
          services specialists, together with designers, PMs, and BAs, comprise
          a professional team.
        </>
      ),
    },
    {
      title: 'Protecting your data',
      desc: (
        <>
          Regardless of what kind of software you plan to develop, data security
          should be your primary concern. Users will not forgive you if you let
          their private information be compromised even once. Our skillful
          developers make sure that their code is not susceptible to data
          breaches. After that, Quality Assurance specialists conduct security
          testing and double-check it.
        </>
      ),
    },
  ];

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Software Development and Quality Assurance Services
          </h1>
          <p className="text-center text-italic">
            Creating a perfect final product with thorough development and
            expert Quality Assurance services
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900 }}>$623.3 billion</h2>
          <p className="text-center">
            is the projected size of the global software market in 2021,
            according to&nbsp;
            <a
              href="https://www.statista.com/statistics/963597/software-revenue-worldwide/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Statista.
            </a>
          </p>
        </section>
        <section>
          <h2>What is development and Quality Assurance?</h2>
          <p>
            KeenEthics is a full-cycle company. After we thoroughly research
            your project idea, finalize the designs, and process project
            requirements, the fundamental phase of the cycle begins. Software
            engineers start working on writing the project code, and they work
            hand-in-hand with QA specialists, who are testing this code.
          </p>
          <p>
            The software development process involves back-end (server-side)
            development and front-end (client-side) development. Software
            Quality Assurance testing services are conducted manually or
            automatically. Outsourced software testing services can be of
            different types depending on its purpose. The result of the
            development and testing process is a software product, which we
            present to the partner.
          </p>
        </section>

        <section>
          <h2>What is our experience?</h2>
          <p>
            ThThese are some of the applications and websites that our design
            company as a UI design agency has developed:
          </p>

          <div>
            <p className="text-bold text-center">WorldLabs</p>
            <p>
              WordLabs is a web platform for entrepreneurs to jumpstart their
              innovative business ideas and find like-minded peers.
              Entrepreneurs can meet peers, collaborators, investors, and
              employees. Organizations can find business ideas to support. The
              society overall gets a chance to advance the tech & business
              community. The ultimate mission of WorldLabs is to break down
              barriers to societal and technological progress and to give
              startuppers and business owners the power to elevate ideas. We are
              involved in this project as a development and software testing
              services company, and it is one of the projects we are proud of
              the most.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-web-development">Web</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>
                    <Link href="/tech-front-end-react">React,</Link>
                  </span>
                  <span>and</span>
                  <span>
                    <Link href="/services-web-development-meteor">Meteor</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Kanban
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 10 developers and QA specialists, 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['WorldLabs'].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">OneRemission</p>
            <p>
              OneRemission is a mobile app aimed at making the lives of cancer
              survivors, fighters, and supporters easier, safer, and more
              enjoyable. It is one of the major apps in the field of Integrative
              Oncology with a comprehensive knowledge base of post-cancer
              nutrition, exercise, sleep, and stress management practices. It is
              not a regular chatbot-based app — it is a lifesaver for people who
              survived cancer. Since the app features a lot of sensitive data
              and personal information, the security of it is a major concern.
              This is why QA testing was of immense importance.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-web-development">Web</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>
                    <Link href="/tech-front-end-react">Wit.ai,</Link>
                  </span>
                  <span>BotPress,</span>
                  <span>WebSocket</span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Agile
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 2 developers, 1 QA, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['OneRemission'].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">SelfLeaders</p>
            <p>
              SelfLeaders is a Swedish company helping its customers drive
              personal development and create a sound corporate culture. It
              provides a set of tools for both self-advancement and professional
              training of employees. In particular, we built the tool called
              “Values Tree”, which helps people understand their individual and
              corporate values better. As always, high-quality development and
              software Quality Assurance testing services were important, and we
              were happy to help our partners with it.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-mobile-development-android">Android</Link>
                &nbsp;and&nbsp;
                <Link href="/services-mobile-development-apple">iOS</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span>
                    <Link href="/services-web-development-meteor">Meteor,</Link>
                  </span>
                  <span>
                    <Link href="/tech-api-integration-graphql">GraphQL,</Link>
                  </span>
                  <span>and</span>
                  <span>
                    <Link href="/tech-front-end-react">React</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 4 developers, 1 QA, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['SelfLeaders'].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">My Grass Growth</p>
            <p>
              My Grass Growth is a web agricultural forecasting tool. Using a
              set of user data and specific formulas, the app prepares forecasts
              on grazing and mowing paddocks and feeding herds. This way, the
              farmer does not have to go around their huge paddocks and monitor
              the growth of grass — this function is perfectly performed by My
              Grass Growth. The app is relatively simple in terms of UI, but
              instead, it offers a powerful tool for analytics. Respectively,
              the complex algorithm required a great deal of QA software testing
              services.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-web-development">Web</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span>Blaze,</span>
                  <span>
                    <Link href="/services-web-development-meteor">Meteor,</Link>
                  </span>
                  <span>Mollie</span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Kanban
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 2 developers, 1 QA, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['My Grass Growth'].includes(title))}
            />
          </div>
        </section>

        <section>
          <h2>What do we offer?</h2>
          <h3 className="text-center">Development Services</h3>
          <ul className="mobile-development-list">
            {whatDoWeOfferIcons.map(({ icon, title, href }) => (
              <li className="mobile-development-item" key={icon}>
                <figure>
                  <img style={{ height: '70px' }} src={icon} alt={title} />
                  <figcaption className="mobile-development-figcaption">
                    {href ? <a href={href}>{title}</a> : title}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-center">Quality Assurance Services</h3>
          <div className="qa-services-list">
            <div className="qa-services-item">
              <b>Automated Testing & Manual Testing</b>
              <br />
              Both manual and automation testing execute test cases and validate
              the software. While manual testing is conducted by a human tester,
              automated testing is conducted with the help of written code
              scripts. Usually, manual software testing services take longer
              than QA automation testing services
            </div>
            <div className="qa-services-item">
              <b>Exploratory Testing</b>
              <br />
              This type of software Quality Assurance testing services is
              conducted without predetermined test cases. Instead, the tester
              checks the system on the go by investigating the system. This type
              of testing can be conducted only manually as it relies on
              cognitive thinking. It helps to understand the user better.
            </div>
            <div className="qa-services-item">
              <b>Compatibility Testing</b>
              <br />
              Compatibility testing is aimed to check whether a software product
              can run properly on any device. In this type of software quality
              testing services, QA specialists check the compatibility of a
              product with different OSs and their versions, different hardware,
              software, devices, platforms, networks, and browsers.
            </div>
            <div className="qa-services-item">
              <b>Functional Testing</b>
              <br />
              Each software component has functional requirements, and the idea
              of functional testing is to check whether these requirements are
              followed. This type of testing is focused not on the process but
              on the results of the function execution.
            </div>
            <div className="qa-services-item">
              <b>UI/UX Testing</b>
              <br />
              This type is focused on analyzing the efficiency of UI and UX
              design. The goal of it is to find the best way for a quality
              software product and its components to interact with the target
              audience. UX testing is a considerable part of the business
              analysis process.
            </div>
            <div className="qa-services-item">
              <b>Regression Testing</b>
              <br />
              Regression testing is aimed to check whether after a certain
              change the software product works as well as it did before. It is
              a full or partial re-execution of test cases aimed to make sure
              that some changes did not affect the existing functionality.
            </div>
            <div className="qa-services-item">
              <b>Unit Testing</b>
              <br />
              The object of unit testing is a single component of a software
              product rather than the product in general. A unit is the smallest
              part of the software that can be tested. It has a single output
              and aims to make sure that this unit performs as it is expected
              to. Unit testing is closely related to software integration
              testing services.
            </div>
            <div className="qa-services-item">
              <b>API Testing</b>
              <br />
              API (application programming interface) testing is conducted at
              the business logic layer. It tests how the application interacts
              with different APIs. The errors that API software testing services
              can identify are unused flags, security issues, performance
              issues, or reliability issues.
            </div>
            <div className="qa-services-item">
              <b>Performance Testing</b>
              <br />
              The idea of performance testing is to estimate the stability and
              responsiveness of the app. This type of software QA services shows
              why a software product may lag or fail, where the bottleneck in
              the system is, and what is the heaviest data load that the system
              can handle.
            </div>
          </div>
        </section>
        <section>
          <div className="project-content-more">
            <h2>How do we do it?</h2>
            <ul className="technologies-list">
              <li className="technologies-item">
                <a
                  title="NodeJs"
                  href="/services-web-development-node"
                  target="_blank"
                >
                  <img
                    src="/static/services/development-and-quality-assurance/node-js.png"
                    alt="Node.js"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a
                  title="Angular"
                  href="/tech-front-end-angular"
                  target="_blank"
                >
                  <img
                    src="/static/services/development-and-quality-assurance/angular.png"
                    alt="Angular"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a title="React" href="/tech-front-end-react" target="_blank">
                  <img
                    src="/static/services/development-and-quality-assurance/react.png"
                    alt="React"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a
                  title="Aurelia"
                  href="/tech-front-end-aurelia"
                  target="_blank"
                >
                  <img
                    src="/static/services/development-and-quality-assurance/aurelia.png"
                    alt="Aurelia"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a title="Vue" href="/tech-front-end-vue" target="_blank">
                  <img
                    src="/static/services/development-and-quality-assurance/logo.png"
                    alt="Vue"
                  />
                </a>
              </li>
            </ul>
            <ul className="technologies-list">
              <li className="technologies-item">
                <a
                  title="Express"
                  href="/tech-back-end-express"
                  target="_blank"
                >
                  <img
                    src="/static/services/development-and-quality-assurance/express.png"
                    alt="Express"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a title="Electron" href="/tech-apps-electron" target="_blank">
                  <img
                    src="/static/services/development-and-quality-assurance/electron.png"
                    alt="Electron"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a title="PhoneGap" href="/tech-apps-phonegap" target="_blank">
                  <img
                    src="/static/services/development-and-quality-assurance/phonegap.png"
                    alt="PhoneGap"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a
                  href="/blog/react-vs-svelte-how-to-build-messaging-components"
                  target="_blank"
                  title="Svelte"
                >
                  <img
                    src="/static/services/development-and-quality-assurance/svelte.png"
                    alt="Svelte"
                  />
                </a>
              </li>
              <li className="technologies-item">
                <a
                  title="Meteor"
                  href="/services-web-development-meteor"
                  target="_blank"
                >
                  <img
                    src="/static/services/development-and-quality-assurance/meteor.png"
                    alt="Meteor"
                  />
                </a>
              </li>
            </ul>
          </div>
          <CallToActionButton title="LEARN MORE" href="/contacts" />
        </section>
        <section>
          <h2>Why choose KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <LetsStart />
      </div>
    </Layout>
  );
};

export default DevelopmentAndQualityAssurance;
