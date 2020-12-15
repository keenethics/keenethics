/* eslint-disable */
import React from "react";
import Link from "next/link";

import Layout from "../components/layout/main";
import ContentNavigation from "../components/content/navigation";

import { servicesWebDevelopmentTabs, works } from "../main.config";

import "./services-web-development-node.scss";

import Works from "../components/portfolio/works";
import LetsStart from '../components/about-us/LetsStart';
import WhyKeenethicsList from "../components/content/WhyKeenethicsList";
import CallToActionButton from "../components/content/CallToActionButton";
import FeaturesList from "../components/content/FeaturesList";

const ServicesWebDevelopmentNode = () => {
  const whyNodejsSection = [
    {
      icon: "/static/services/two-way-communication.svg",
      alt: "two way communication",
      description: (
        <p>
          Node Js is the optimal technology for creating real-time web apps
          because WebSockets provide <b>open two-way communication</b> channels.
        </p>
      ),
    },
    {
      icon: "/static/services/perform-better.svg",
      alt: "perform better",
      description: (
        <p>
          Its Input/Output operations are event-driven and non-blocking, which
          makes the app lighter and lets it <b>perform better</b>.
        </p>
      ),
    },
    {
      icon: "/static/services/fastest-technology.svg",
      alt: "fastest technology",
      description: (
        <p>
          Node JS uses the V8 JavaScript engine, which makes it{" "}
          <b>the fastest technology</b> for the website and application
          development.
        </p>
      ),
    },
    {
      icon: "/static/services/compatible-with-multiple-platforms.svg",
      alt: "compatible with multiple platforms",
      description: (
        <p>
          It is <b>compatible with multiple platforms</b> and can easily
          integrate with the latest technologies, such as Angular or React.
        </p>
      ),
    },
    {
      icon: "/static/services/perfectly-scalable.svg",
      alt: "perfectly scalable",
      description: (
        <p>
          It is built on the event loop principle, which makes it{" "}
          <b>perfectly scalable</b>.
        </p>
      ),
    },
    {
      icon: "/static/services/handle-the-heavy-traffic.svg",
      alt: "handle the heavy traffic",
      description: (
        <p>
          It can <b>handle the heavy traffic</b> of users and data.
        </p>
      ),
    },
    {
      icon: "/static/services/business-and-finance.svg",
      alt: "business and finance",
      description: (
        <p>
          Such applications are <b>less expensive</b> to test and host than
          similar apps written in any other environment.
        </p>
      ),
    },
    {
      icon: "/static/services/extensive-repository.svg",
      alt: "extensive repository",
      description: (
        <p>
          It has an <b>extensive repository</b> of good-to-go modules as it is
          an open-source technology.
        </p>
      ),
    },
    {
      icon: "/static/services/developer-community-is-large.svg",
      alt: "developer community is large",
      description: (
        <p>
          The Node.js <b>developer community is large</b> and constantly
          growing.
        </p>
      ),
    },
    {
      icon: "/static/services/easy-and-convenient.svg",
      alt: "easy and convenient",
      description: (
        <p>
          Node.js application development is <b>easy and convenient</b> for
          developers as long as this environment enables them to write
          JavaScript both for the server and the client and to transport data
          between them.
        </p>
      ),
    },
    {
      icon: "/static/services/cloud.svg",
      alt: "cloud",
      description: (
        <p>
          It is actively used not only in web and mobile development but also in{" "}
          <b>cloud and IoT solutions</b>.
        </p>
      ),
    },
  ];

  const whatDoWeOfferIcons = [
    {
      iconTitle: "node-js-web-and-application-development",
      description: "Node.js web and mobile app development",
    },
    {
      iconTitle: "node-js-data-management",
      description: "Node.js data management",
    },
    {
      iconTitle: "custom-node-js-software-development-solutions",
      description: "Custom Node.js software development solutions",
    },
    {
      iconTitle: "node-js-migrating",
      description: "Node.js migrating",
    },
    {
      iconTitle: "node-js-consulting",
      description: "Node.js consulting",
    },
    {
      iconTitle: "ui-ux-development-for-node-js",
      description: "UI/UX development for Node.js maintenance and support",
    },
    {
      iconTitle: "node-js-applications",
      description: "Node.js applications",
    },
  ];

  const whyKeenethics = [
    {
      title: "Empowering growth",
      desc: (
        <>
          As an experienced Node.js development company, we can build a variety
          of server tools and applications, Node.js chatbots, complex websites,
          real-time applications, and more — whatever will help your company
          grow. At the same time, we offer a reasonable pricing policy and the
          opportunity to choose a paying model you prefer, should it be a fixed
          price or a “Time & Materials” approach.
        </>
      ),
    },
    {
      title: "Building value",
      desc: (
        <>
          We offer you full-cycle cooperation, and we will be glad to take your
          project from an idea to a perfectly functioning software product. We
          will also encourage you to be monitoring the project and communicating
          with our team continuously. If you share our{" "}
          <Link href="/about-us">
            <a target="_blank">business values,</a>
          </Link>{" "}
          we will gladly welcome you into a trusted and long-lasting
          partnership!
        </>
      ),
    },
    {
      title: "Launching in a matter of weeks",
      desc: (
        <>
          Business owners often complain that software development projects take
          too much time to begin. We have tuned up our partner engagement
          process to minimize the time spent on project onboarding, to skip the
          unnecessary bureaucracy, and to launch the development process.
        </>
      ),
    },
    {
      title: "Bringing tech expertise",
      desc: (
        <>
          The quality of the final product should be the first priority of a
          Node.js development company. With us, you can be sure that the
          solution is robust and the code is clean. We assess all the risks and
          pay close attention to quality assurance. Hire Node.js developers from
          KeenEthics to build a robust and high-quality project.
        </>
      ),
    },
    {
      title: "Protecting your data",
      desc: (
        <>
          We perfectly follow data security regulations and the requirements of
          the NDA you choose to sign. Also, we realize that information safety
          is the number one priority for back end development. For this reason,
          our Node.js developers will pay close attention to the reliability and
          security of your project.
        </>
      ),
    },
  ];

  return (
    <Layout>
      <ContentNavigation
        image="web_development"
        points={servicesWebDevelopmentTabs()}
      />
      <div className="content-block">
        <section>
          <h1 className="text-center">Node.js Development Services</h1>
          <p className="text-center text-italic">
            The optimal environment for sustainable, scalable, and
            resource-efficient apps
          </p>
          <CallToActionButton />
        </section>

        <section>
          <h2>What is Node.js?</h2>
          <p>
            Node.js is a free, open-source, cross-platform, runtime environment
            for JavaScript. It allows executing code outside a browser, which
            enables us to develop a sustainable, scalable, and
            resource-efficient application.
          </p>
          <p>
            The Node.js community has developed several server frameworks in
            order to accelerate the development process of apps and websites.
            Among such frameworks, there are Express.js, Meteor, Derby, and
            others. Thanks to a broad range of frameworks and libraries
            available, Node.js web development and Node.js application
            development have become the most efficient solution for various
            business goals. In fact, such popular websites as{" "}
            <a href="//www.paypal.com/ua/home">PayPal</a>,{" "}
            <a href="//www.wsj.com/">The Wall Street Journal</a>,{" "}
            <a href="//www.ibm.com/ua-uk/">IBM</a>,{" "}
            <a
              href="//www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            , <a href="//www.microsoft.com/uk-ua/">Microsoft</a>,{" "}
            <a
              href="//www.netflix.com/ua/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Netflix
            </a>
            , <a href="//www.walmart.com/">Walmart</a>,{" "}
            <a
              href="//www.yahoo.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Yahoo!
            </a>{" "}
            are powered by Node.js.
          </p>
        </section>

        <section>
          <h2>What is our experience in UI/UX design?</h2>
          <p>
            ThThese are some of the applications and websites that our design
            company as a UI design agency has developed:
          </p>
          <div>
            <p className="text-bold text-center">Banker Advisor</p>
            <p>
              Banker Advisor is a TripAdvisor for financial services users. It
              is a web platform that lets people find, compare, and read trusted
              reviews about commercial banks and investment management
              companies. The back end of this web solution is written with the
              help of Node JS. This website is a great example of a project,
              which codebase is written in a single programming language —
              JavaScript.
            </p>
            <div>
              <div style={{ marginBottom: "5px" }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-web-development">Web</Link>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Technologies</b>:
                <span className="technologies-links">
                  <span>Keystone js</span>,
                  <span>
                    <Link href="/tech-front-end-react">React,</Link>
                  </span>
                  <span>Redux,</span>
                  <span>
                    <Link href="/tech-back-end-express">Express,</Link>
                  </span>
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>Mongoose,</span>
                  <span>AWS (SES, SNS, S3, EC2)</span>
                </span>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Methodology</b>: Kanban
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Team</b>: 5 developers, 1 QA, 1 UI/UX designer, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) =>
                ["BankerAdvisor"].includes(title)
              )}
            />
          </div>

          <div>
            <p className="text-bold text-center">PREE</p>
            <p>
              PREE is an Internet of Things solution, the goal of which is to
              help people not to lose their precious belongings. This system
              consists of BLE beacons, which clients attach to the things they
              do not want to lose, and a mobile solution, which people use to
              locate their things. The example of PREE proves that Node JS is a
              suitable solution for IoT development.
            </p>
            <div>
              <div style={{ marginBottom: "5px" }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-mobile-development-android">Android</Link>
                &nbsp;and&nbsp;
                <Link href="/services-mobile-development-apple">iOS</Link>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Technologies</b>:
                <span className="technologies-links">
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>
                    <Link href="/tech-back-end-express">Express,</Link>
                  </span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>
                    <Link href="/tech-apps-cordova">Cordova,</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Methodology</b>: Kanban
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Team</b>: 1 UI UX designer, 2 full-stack developers, 1 QA
                specialist, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ["Pree"].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">ParkQX</p>
            <p>
              ParkQX is a mobile solution to a problem that all modern cities
              are notorious for. People often cannot find a spot to park their
              vehicle, and ParkQX aims to help them. Drivers can open the app,
              locate the nearest available spot, book it, and pay for it via
              app. At the same time, parking spot owners get a chance to earn
              some extra revenue while they do not use it by lending their spot
              to those who need it right now.
            </p>
            <div>
              <div style={{ marginBottom: "5px" }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-mobile-development-android">Android</Link>
                &nbsp;and&nbsp;
                <Link href="/services-mobile-development-apple">iOS</Link>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Technologies</b>:
                <span className="technologies-links">
                  <span>Redux</span>
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>Firebase,</span>
                  <span>Twilio</span>
                  <span>and</span>
                  <span>
                    <Link href="/tech-apps-react-native">React Native.</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Methodology</b>: Scrum
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Team</b>: 1 UI UX designer, 2 full-stack developers, 1 QA
                specialist, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ["ParkQX"].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">OneRemission</p>
            <p>
              OneRemission is a project with an amazing goal — to help cancer
              survivors and their closed ones enjoy a full life, take care of
              their weakened health, and prevent cancer relapse. We are very
              proud to have been involved in such a project, and we are proud to
              know the person who came up with this idea. OneRemission is a
              chatbot-based solution with a great future ahead of it!
            </p>
            <div>
              <div style={{ marginBottom: "5px" }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-mobile-development-apple">iOS</Link>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Technologies</b>:
                <span className="technologies-links">
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>Wit.ai,</span>
                  <span>BotPress,</span>
                  <span>WebSocket</span>
                </span>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Methodology</b>: Kanban
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Team</b>: 2 developers and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) =>
                ["OneRemission"].includes(title)
              )}
            />
          </div>
        </section>

        <section>
          <h2>Why choose Node.js?</h2>
          <FeaturesList list={whyNodejsSection} />
          <CallToActionButton title="Request a proof of concept" />
        </section>

        <section>
          <h2>What do we offer?</h2>
          <p>
            Node.js development company should be able to provide you with a
            cross-platform application or a website, which can be easily scaled
            as your business grows. If you need to receive not just a regular
            website but a powerful tool for your business, which will stand out
            in the market, you will need to find a highly qualified Node.js
            development company.
          </p>
          <p>
            We are glad and proud to offer our services. As a Node.js
            development company, we provide:
          </p>
          <ul className="web-development-node-list">
            {whatDoWeOfferIcons.map(({ iconTitle, description }, key) => (
              <li key={key} className="web-development-node-item">
                <figure>
                  <img
                    src={`/static/services/node-js/${iconTitle}.png`}
                    alt={description}
                  />
                  <figcaption className="web-development-node-figcaption">
                    {description}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Why choose KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
      </div>
      <LetsStart />
    </Layout>
  );
};

export default ServicesWebDevelopmentNode;
