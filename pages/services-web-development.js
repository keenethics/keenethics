import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import './services-education-software-development.scss';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';

import PageTabs from '../components/content/tabs';

import { servicesWebDevelopmentTabs, works } from '../main.config';

const ServicesWebDevelopment = () => {
  const whatIsWebDevelopment = [
    {
      icon: '/static/services/perfectly-scalable.svg',
      alt: 'perfectly scalable',
      description:
  <p>
    <b>User-friendly</b>
    <br />
    Web platforms are more convenient for complex tasks than mobile applications.
  </p>,
    },
    {
      icon: '/static/services/any-device-or-browser.png',
      alt: 'any device or browser',
      description:
  <p>
    <b>Multi-platform</b>
    <br />
    Unlike mobile applications, which are tied to a certain platform, web platforms
    are universal and can be accessed from any device or browser.
  </p>,
    },
    {
      icon: '/static/services/working-impeccably.svg',
      alt: 'easier to develop',
      description:
  <p>
    <b>Simply developed</b>
    <br />
    Web apps are easier for a web app development company to develop and maintain
    since they are not platform-specific.
  </p>,
    },
    {
      icon: '/static/services/fastest-technology.svg',
      alt: 'does not require approval',
      description:
  <p>
    <b>Swiftly deployed</b>
    <br />
    The deployment of a web platform is almost instant as it does not require
    approval from App Store or Google Play.
  </p>,
    },
    {
      icon: '/static/services/radial-chart.svg',
      alt: 'radial chart',
      description:
  <p>
    <b>Resource-efficient</b>
    <br />
    Although web platforms cannot function offline, there is no need to download and
    install them. It saves the user time, effort, and storage space.
  </p>,
    },
    {
      icon: '/static/services/phonelink.png',
      alt: 'phone',
      description:
  <p>
    <b>Optimal</b>
    <br />
    If you want to combine the advantages of both web and mobile software, you are welcome to&nbsp;
    <a href="/tech-apps-progressive-web-apps" target="_blank">develop a progressive web app</a>
    .
  </p>,
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/services/node-js/custom-node-js-software-development-solutions.png',
      title: 'Business Research and Analysis',
    },
    {
      icon: '/static/services/node-js/ui-ux-development-for-node-js.png',
      title: 'UI/UX Design',
    },
    {
      icon: '/static/services/node-js/node-js-data-management.png',
      title: 'Continuous Support',
    },
    {
      icon: '/static/services/node-js/node-js-web-and-application-development.png',
      title: 'Web Software Development & QA',
    },
    {
      icon: '/static/services/node-js/node-js-applications.png',
      title: 'Tech Consulting',
    },
  ];

  const webDevelopmentWorks = works.filter(({ title }) => ['The Check Network', 'Banker Advisor', 'Paceup'].includes(title));

  return (
    <Layout>
      <ContentNavigation image="web_development" />
      <PageTabs points={servicesWebDevelopmentTabs()} />
      <div className="content-block">
        <section>
          <h1 className="text-center">Custom Web Application Development</h1>
          <p className="text-center text-italic">Developing high-quality and fault-tolerant web platforms for the Internet and private networks</p>
          <CallToActionButton href="/contacts" />
        </section>
        <section>
          <h2>What Is Web Development?</h2>
          <p>
            The Internet has turned into a universal environment for people to communicate, rest,
            and work. Each web platform is a particular ecosystem with its own population,
            opportunities, and threats. Hire a professional and skillful team of web application
            developers. This is the best way to ensure that the users of your website are safe and
            satisfied with their web experience.
          </p>
          <p>
            Some say that custom web application development is going obsolete as mobile devices
            conquer the world. Yet, there are some strengths that make web development a decent
            competitor to mobile tech.
          </p>
          <h2>Why Custom Web Application Development Services?</h2>
          <FeaturesList list={whatIsWebDevelopment} />
          <CallToActionButton title="Request a proof of concept" />
        </section>
        <section>
          <h2>What Do We Offer?</h2>
          <ul className="mobile-development-list">
            {
              whatDoWeOfferIcons.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="mobile-development-figcaption">
                      {
                        href ? <Link href={href}>{title}</Link> : title
                      }
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h2>How We Do It?</h2>
          <p>
            When providing custom web application development services, we strive to satisfy
            every need of our partner. We position ourselves as a full-stack development company,
            and each software developer at KeenEthics is equally skilled in back end and front end.
          </p>
          <h2 className="subtitle-web-dev">
            --
            <br />
            Our team of expert designers, developers, QA specialists, and Project Managers will
            turn your project idea into a perfect final product.
            <br />
            --
          </h2>
          <p className="technologies-links">
            These are the technologies that help us do it:
            <span><a href="/services-web-development-node" target="_blank">Node.js</a></span>
            ,
            <span><a href="/tech-front-end-angular" target="_blank">Angular</a></span>
            ,
            <span><a href="/tech-front-end-react" target="_blank">React</a></span>
            ,
            <span><a href="/tech-front-end-aurelia" target="_blank">Aurelia</a></span>
            ,
            <span><a href="/tech-front-end-vue" target="_blank">Vue</a></span>
            ,
            <span><a href="/tech-back-end-express" target="_blank">Express</a></span>
            ,
            <span><a href="https://github.com/keenethics/svelte-notifications" target="_blank" rel="noopener noreferrer nofollow">Svelte</a></span>
            ,
            <span><a href="/services-web-development-meteor" target="_blank">Meteor</a></span>
            .
          </p>
          <div className="project-content-more">
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/services/web-dev/angular.svg" alt="Angular" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/react.png" alt="React" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/aurelia.png" alt="Aurelia" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/vue.png" alt="Vue" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/meteor.png" alt="Meteor" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/svelte.png" alt="Svelte" />
              </li>
            </ul>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/services/web-dev/node-js.png" alt="Node.js" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/express.png" alt="Express.js" />
              </li>
            </ul>
          </div>
          <p>
            The database technology that we integrate are&nbsp;
            <a href="/tech-data-base-mongo" target="_blank">MongoDB</a>
            &nbsp;and&nbsp;
            <a href="/tech-data-base-mysql" target="_blank">MySQL</a>
            .
          </p>
          <div className="project-content-more">
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/services/web-dev/mongodb.png" alt="MySQL" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/mysql.jpg" alt="Express.js" />
              </li>
            </ul>
          </div>
          <p>
            The API integration technologies we use are&nbsp;
            <a href="/tech-api-integration-rest" target="_blank">REST</a>
            &nbsp;and&nbsp;
            <a href="/tech-api-integration-graphql" target="_blank">GraphQL</a>
            .
          </p>
          <div className="project-content-more">
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/services/web-dev/rest.png" alt="REST" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/web-dev/graphql.png" alt="GraphQL" />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span>
            &nbsp;Empowering growth
          </h3>
          <p>
            “One size fits all” is neither professional nor effective. We understand that
            your business is unique, with its special features, interests, and needs. Our PMs
            and business analysts are here for you to collect, analyze, and implement all your
            requirements. Also, we have software engineers who, besides their general technical
            expertise, are knowledgeable and skilled in specific industries, ranging from&nbsp;
            <a href="/services-education-software-development" target="_blank">education software development services</a>
            &nbsp;to ecommerce.
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span>
            &nbsp;Building value
          </h3>
          <p>
            Our web application development company cooperates according to both Time & Material
            and Fixed Price approach, whichever you find to be more suitable. The pricing of our
            web app development services is equally suitable for small businesses and start-ups
            and for large corporations because, while providing cost-efficient solutions, we do
            not compromise quality. If you are not convinced,&nbsp;
            <a href="https://clutch.co/profile/keenethics#review-184570" target="_blank" rel="noopener noreferrer nofollow">see what our long-term partner has to say</a>
            &nbsp;or&nbsp;
            <a href="/contacts?activeForm=estimate" target="_blank">let us estimate your project</a>
            !
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span>
            &nbsp;Launching in a matter of weeks
          </h3>
          <p>
            Our professional Project Managers are ready and willing to organize custom web app
            development according to your requests and to&nbsp;
            <a href="/blog/how-to-choose-your-optimal-development-methodology" target="_blank">choose the optimal development methodology</a>
            &nbsp;together with you. They will make sure that you are constantly involved in the
            process of custom web application development services if you want to. If you do not
            have time to communicate continuously, they will provide you with a perfect final
            product. If you want to manage the project yourself, our web application developers
            will gladly play according to your rules.
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span>
            &nbsp;Bringing tech expertise
          </h3>
          <p>
            Our UI/UX designers develop elegant and responsive interfaces, which are visually
            appealing and intuitively clear. In turn, our proficient developers create robust
            and fault-tolerant solutions, and QA specialists make sure that the web platform
            is bug-free and functions perfectly. Check our&nbsp;
            <a href="/portfolio" target="_blank">case studies</a>
            &nbsp;to see the quality of our web app development services!
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span>
            &nbsp;Protecting your data
          </h3>
          <p>
            We understand that&nbsp;
            <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank">information and data</a>
            &nbsp;are the most valuable assets in the 21st century. Therefore, we ensure the
            physical safety of our servers and proper encryption of online data. We also sign
            non-disclosure agreements with our partners and employees to prevent any leaks of
            information about our clients or operations.
          </p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>
            These are some of the applications and websites that we have developed as a
            web application development company:
          </p>
          <Works works={webDevelopmentWorks} rounded />
        </section>
        <section>
          <h2>Now, let’s discuss your business idea!</h2>
          <CallToActionButton title="CONTACT US" href="/contacts" />
        </section>
      </div>
    </Layout>
  );
};

export default ServicesWebDevelopment;
