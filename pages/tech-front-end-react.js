/* eslint-disable */
import React from "react";
import Link from "next/link";

import Layout from "../components/layout/main";
import ContentNavigation from "../components/content/navigation";
import CallToActionButton from "../components/content/CallToActionButton";
import LetsStart from '../components/about-us/LetsStart';
import WhyKeenethicsList from "../components/content/WhyKeenethicsList";
import FeaturesList from "../components/content/FeaturesList";
import Works from "../components/portfolio/works";

import { techFrontEnd, works } from "../main.config";

const whyReactJs = [
  {
    description: "Quick launch.",
    additionalText:
      "A React.js development company can launch a project in a short time as the framework takes only a few minutes to set up.",
  },
  {
    description: "Responsive design.",
    additionalText:
      "React is the most convenient framework for creating interactive and intuitive designs. Reactjs app development is the optimal decision for fetching and recording dynamically changing data.",
  },
  {
    description: "Reusable design components.",
    additionalText:
      "A React.js development company can develop applications for different platforms almost simultaneously and two times faster.",
  },
  {
    description: "Easy integration.",
    additionalText:
      "With no extra effort, React can be integrated with other libraries and frameworks, such as jQuery, Angular, Backbone, or Vue. The code written with React is more predictable and easier to read and debug.",
  },
  {
    description: "Suitable for any project.",
    additionalText:
      "A Reactjs developer can make any idea work: both create a complex web or mobile app from scratch or integrate some new features into an existing software product.",
  },
  {
    description: "Comprehensive documentation.",
    additionalText: `The React community is large and steadily growing. For this reason, there is a comprehensive documentation of this framework and a lot of readily available solutions for ReactJS development .
      `,
  },
];

const servicesList = [
  {
    icon:
      "/static/services/node-js/node-js-web-and-application-development.png",
    title: "Web and mobile ReactJS app development",
  },
  {
    icon: "/static/services/node-js/node-js-applications.png",
    title: "React applications maintenance and support",
  },
  {
    icon: "/static/services/node-js/ui-ux-development-for-node-js.png",
    title: "UI/UX development for React",
  },
  {
    icon: "/static/services/node-js/node-js-data-management.png",
    title: "React data management",
  },
  {
    icon:
      "/static/services/node-js/custom-node-js-software-development-solutions.png",
    title: "Custom React software development solutions",
  },
  {
    icon: "/static/services/node-js/node-js-migrating.png",
    title: "React.js migrating",
  },
];

const whyKeenethics = [
  {
    title: "Empowering growth",
    desc:
      "You can request Reactjs development services and robust solutions in multiple industries, including education, e-commerce, healthcare, finance, business services, fashion, food, real estate, and logistics. Our Reactjs developers have not just technical expertise but also industry-specific skills and knowledge.",
  },
  {
    title: "Building value",
    desc: (
      <>
        We are ethical towards our employees, partners, and customers. You can
        be sure that we communicate and cooperate with the principles of honesty
        and transparency in mind because{" "}
        <Link href="/blog/1551175200000-our-ethical-dimension">
          <a target="_blank">ethics</a>
        </Link>{" "}
        is more than just a part of our corporate name.
      </>
    ),
  },
  {
    title: "Launching in a matter of weeks",
    desc: (
      <>
        Let us promptly turn your idea into a perfect final software product. As
        a full-cycle React.js development company, we offer Reactjs services
        including discovery and research, design and development, testing and
        debugging, deployment, maintenance, and support.
      </>
    ),
  },
  {
    title: "Bringing tech expertise",
    desc: (
      <>
        Our team has a great deal of expertise in React development, and we are
        willing to share it with you. React is the JS library we use the most.
        Almost half of{" "}
        <Link href="/portfolio">
          <a target="_blank">projects</a>
        </Link>{" "}
        we have developed are React-based.
      </>
    ),
  },
  {
    title: "Protecting your data",
    desc: (
      <>
        You can be sure that we closely follow all the data security regulations
        and NDA requirements, Also, we want our pricing strategy to be fair and
        transparent. When you hire React.js developers, we want your software
        development experience to be pleasant and trouble-free. For this reason,
        we employ a pricing strategy of your choosing, should it be a fixed
        price or a{" "}
        <Link href="/blog/1554420300000-estimates">
          <a target="_blank">Time-and-Material</a>
        </Link>{" "}
        approach.
      </>
    ),
  },
];

const TechFrontEndReact = () => (
  <Layout>
    <ContentNavigation image="fe" points={techFrontEnd()} />
    <div className="content-block">
      <section>
        <h1 className="text-center">React JS Development Company</h1>
        <p className="text-center text-italic">
          Offering React JS development services for the development of
          responsive user interfaces and management of dynamically changing data
        </p>
        <CallToActionButton />
      </section>
      <section>
        <h2>What is React JS?</h2>
        <p>
          React is a JavaScript library for building the most visually appealing
          and responsive user interfaces. It can be used to build simple but
          elegant one-page websites or basic mobile applications. At the same
          time, it allows us to build major applications and platforms, which
          can operate with large and dynamically changing data without the need
          to incorporate other libraries or constantly reload the web page.{" "}
        </p>
        <p>
          ReactJS development is simple but efficient. The code written with
          React is quick and easy to test and debug. You can hire React.js
          developers to create a scalable and adaptive application or a
          platform, which will never fail your business nor your users.{" "}
        </p>
        <p>
          Our highly-skilled professionals offer ReactJS development services of
          the highest quality. With us, ReactJS app development becomes even
          easier.
        </p>
      </section>
      <section>
        <h2>What is our experience with React?</h2>
        <p>
          These are some of the projects that we have worked on as a ReactJS
          development company.
        </p>
        <div>
          <p className="text-bold text-center">Banker Advisor</p>
          <p>
            Banker Advisor helps users to find their way around financial
            services, commercial banks, investment banking, and investment
            management. The idea is pretty similar to TripAdvisor. The user
            finds a company that offers some kind of services, checks its
            profile, and reads through trusted client reviews. To write such a
            dynamic web platform, the client made a decision to hire ReactJS
            developers. Hopefully, he never regretted his choice.
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
          <p className="text-bold text-center">WorldLabs</p>
          <p>
            WordLabs is a business incubation web platform, which aims to
            elevate innovative ideas. The goal of it is to help individual
            entrepreneurs, organizations, and society in general. In particular,
            beginning entrepreneurs may meet their peers, investors, and
            employees here. Organizations can select a business idea to take it
            under their wing. The society overall receives an advanced
            technology and business community. Initially, we were hired as a
            ReactJS development company, but we are happy that, over the years,
            our cooperation grew into something bigger — a genuine partnership
            between two companies.
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
            <div style={{ marginBottom: "5px" }}>
              <b>Methodology</b>: Kanban
            </div>
            <div style={{ marginBottom: "5px" }}>
              <b>Team</b>: 10 developers and QA specialists, 1 PM
            </div>
          </div>
          <Works
            works={works.filter(({ title }) => ["WorldLabs"].includes(title))}
          />
        </div>
      </section>
      <section>
        <h2>Why choose React JS?</h2>
        <img
          style={{ margin: "25px auto 35px auto" }}
          src="/static/services/tech-front-end-react/why-react-js.jpg"
          alt="Why React JS?"
        />
        <FeaturesList list={whyReactJs} titleBold />
        <CallToActionButton
          title="ESTIMATE YOUR PROJECT"
          href="/contacts?activeform=estimate"
        />
      </section>

      <section>
        <h2>What do we offer?</h2>
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
        <h2>Why choose KeenEthics?</h2>

        <WhyKeenethicsList list={whyKeenethics} />
      </section>
    </div>
    <LetsStart/>
  </Layout>
);

export default TechFrontEndReact;
