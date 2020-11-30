import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';
import { works, techFrontEnd } from '../main.config';
import Works from '../components/portfolio/works';
import FeaturesList from '../components/content/FeaturesList';

const whyAureliaList = [
  {
    icon: '/static/technologies/react-native/user.png',
    alt: 'Easy to learn',
    description: (
      <>
        <b>Easy to learn</b>
        <br />
        With some knowledge of JavaScript and HTML, you can start working with
        Aurelia pretty soon. Learning a few essential things, you will be able
        to develop even the most complex app.
      </>
    ),
  },
  {
    icon: '/static/technologies/meteor/users.png',
    alt: 'popular',
    description: (
      <>
        <b>Popular</b>
        <br />
        Such business giants as
        {' '}
        <Link href="https://careers.microsoft.com/us/en">
          <a rel="nofollow noreferrer" target="_blakn">
            Microsoft
          </a>
        </Link>
        , Momondo, and KFC use Aurelia to power their websites. Moreover, the
        Aurelia framework is open sourced and supported by a large dedicated
        community.
      </>
    ),
  },
  {
    icon: '/static/technologies/react-native/profit.png',
    alt: 'Performant',
    description: (
      <>
        <b>Performant</b>
        <br />
        Aurelia offers consistent user experience and remarkable performance
        regardless of the complexity of your app. It is reactive and effectively
        batching DOM updates.
      </>
    ),
  },
  {
    icon: '/static/technologies/react-native/dimension.png',
    alt: 'Extensible',
    description: (
      <>
        <b>Extensible</b>
        <br />
        Aurelia is not a mere framework but a comprehensive ecosystem for
        software developers. It features a lot of official plugins and tools
        that facilitate the development experience.
      </>
    ),
  },
  {
    icon: '/static/technologies/react-native/like.png',
    alt: 'trusted technologies',
    description: (
      <>
        <b>Convenient</b>
        <br />
        Coding with Aurelia is simple because conventions let you focus not on
        the framework but on the code and the business logic of your app.
        Testing is also made easier with Aurelia’s unobtrusive approach.
      </>
    ),
  },
  {
    icon: '/static/technologies/react-native/geography.png',
    alt: 'Universal technology',
    description: (
      <>
        <b>Universal </b>
        <br />
        With Aurelia, you can develop the front end of all kinds of apps – web,
        mobile, and desktop. Being simple but powerful, Aurelia can be used to
        build applications of any size and complexity.
      </>
    ),
  },
];

const servicesList = [
  {
    icon:
      '/static/services/node-js/node-js-web-and-application-development.png',
    title: 'Aurelia app development',
  },
  {
    icon: '/static/services/node-js/node-js-applications.png',
    title: 'Aurelia applications maintenance and support',
  },
  {
    icon: '/static/services/node-js/ui-ux-development-for-node-js.png',
    title: 'UI/UX development for Aurelia',
  },
  {
    icon: '/static/services/node-js/node-js-data-management.png',
    title: 'Aurelia data management',
  },
  {
    icon:
      '/static/services/node-js/custom-node-js-software-development-solutions.png',
    title: 'Custom Aurelia software development solutions',
  },
  {
    icon: '/static/services/node-js/node-js-migrating.png',
    title: 'Aurelia migrating',
  },
];

const whyKeenEthicsList = [
  {
    title: 'Empowering growth',
    desc: (
      <>
        We understand how important a high-quality application is for your
        business growth. By offering reliable and resource-efficient Aurelia
        development services, we help you get an app of the highest quality. As
        a convenient and customizable framework, Aurelia lets us implement any
        features and functions you desire. This way, the app brings the maximum
        benefit to your business.
      </>
    ),
  },
  {
    title: 'Building value',
    desc: (
      <>
        We strive to make all our partnerships transparent and friendly. Only an
        honest and dedicated approach can help us build outstanding software
        solutions. This unique ethical attitude is the principal value that we
        offer. Alongside this, we work hard to accomplish our mission – to make
        the tech world devoted to the social good. Do you want to join us in
        this initiative?
      </>
    ),
  },
  {
    title: 'Launching in a matter of weeks',
    desc: (
      <>
        The software development process takes time, and you cannot really
        shorten it without losing in terms of price or quality. Yet, what can be
        optimized is the partner engagement and project onboarding process. Our
        expert Partner Engagement Manager will hear out your ideas and needs,
        document them, and forward them to the development team. The project
        will be ready to start really soon.
      </>
    ),
  },
  {
    title: 'Bringing tech expertise',
    desc: (
      <>
        KeenEthics employs only full-stack JavaScript software engineers. Some
        of our professionals have over ten years of development experience, and
        some have W3Schools certification. The quality improvement measures we
        implement include code reviews, pair programming sessions, and
        experience-sharing events. We will gladly share our technical expertise
        for the sake of your project success.
      </>
    ),
  },
  {
    title: 'Protecting your data',
    desc: (
      <>
        Regardless of which development framework you choose, you should make
        sure that your app is not susceptible to technical errors or
        cyber-attacks. Along with technical data safety measures, there are
        legal information security measures that the development team ought to
        follow. When partnering up with KeenEthics, you can be sure that all the
        requirements are met.
      </>
    ),
  },
];

const aureliaWorks = works.filter(({ title }) => ['OneRemission', 'Pree', 'SelfLeaders'].includes(title));

const TechFrontEndAurelia = () => (
  <Layout>
    <ContentNavigation image="fe" points={techFrontEnd()} />
    <div className="content-block">
      <section>
        <h1 className="text-center">Aurelia Development Services</h1>
        <p className="text-center text-italic">
          Using a simple but powerful platform for building performant web,
          desktop, and mobile projects
        </p>
        <CallToActionButton />
        <h2 style={{ fontSize: '40px', fontWeight: 900 }}>2,372</h2>
        <p className="text-center">
          websites are built with Aurelia, according to&nbsp;
          <a
            href="https://www.similartech.com/technologies/aurelia"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            SimilarTech.
          </a>
        </p>
      </section>
      <section>
        <h2>What is development and Quality Assurance?</h2>
        <p>
          Aurelia is a powerful platform for building web, desktop, and mobile
          applications. It is not a monolithic framework but a collection of
          open sourced feature-oriented JavaScript modules. These modules are
          written with JavaScript and TypeScript. Each of them can be used
          separately when developing any JS project. However, altogether, these
          modules offer a powerful app performance and a convenient development
          experience.
        </p>
        <p>
          Aurelia offers an extensive set of plugins and tools, rich component
          model, dynamic UI composition, and routing. This platform is
          characterized by impressive rendering speed and efficient memory
          usage. Most importantly, it is the only JS framework that gets out of
          your way – it lets you write your code in plain JavaScript or
          TypeScript without imposing any extra requirements. This way, you can
          easily build an outstanding front-end experience of any web, mobile,
          or desktop app you can think of.
        </p>
      </section>
      <section>
        <h2>Why React Native App Development?</h2>
        <FeaturesList list={whyAureliaList} />
      </section>

      <CallToActionButton title="LEARN MORE" href="/contacts" />

      <section>
        <h2>What React Native Development Services Do We Offer?</h2>
        <ul className="mobile-development-list">
          {servicesList.map(({ icon, title, href }) => (
            <li className="mobile-development-item" key={title}>
              <figure>
                <img src={icon} alt={title} />
                <figcaption className="mobile-development-figcaption">
                  {href ? <Link href={href}>{title}</Link> : title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Why KeenEthics?</h2>
        <WhyKeenethicsList list={whyKeenEthicsList} />
      </section>

      <section>
        <h2>Portfolio</h2>
        <p>These are some web and mobile apps that we have developed:</p>
        <Works works={aureliaWorks} />
      </section>
    </div>
    <LetsStart />
  </Layout>
);

export default TechFrontEndAurelia;
