import React from 'react';
import Link from 'next/link';
import RocketIcon from '../components/approach-minimum-viable-product/RocketIcon';
import GlassIcon from '../components/approach-minimum-viable-product/GlassIcon';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';

import { works } from '../main.config';

import Works from '../components/portfolio/works';

const workbookingDescription = works.find((work) => work.title === 'WorkBooking');
const oneRemissionDescription = works.find((work) => work.title === 'OneRemission');
const bankerAdvisorDescription = works.find((work) => work.title === 'BankerAdvisor');

const ApproachMinimumValProduct = () => (
  <Layout>
    <ContentNavigation />
    <div className="content-block approach-minimum-viable-product-page">
      <div className="page-header">
        <h1>MVP Development Services</h1>

        <p className="italic">
          Using a resource-efficient approach to test the viability of your business idea
        </p>
        <CallToActionButton title="Book a call"/>
        <h2 className="text-bold"> By 6 times </h2>
        <p className="negative-margin-top">
          less time it takes to develop a minimum viable product than to develop a full app.
        </p>
      </div>

      <h1>What is MVP development services?</h1>

      <p>
        The minimum viable product is a product with a minimum necessary set of features, which is developed in a short 
        period of time. The idea of MVP software development is to test the viability of your product idea — to see if the 
        market needs it, if the users like it, and how you can improve it. This lets you make sure that your product will be 
        competitive before you actually start investing in full-scaled software product development. Along with proof of 
        concept development,&nbsp;
        <Link href="/blog/1517766794846-what-is-prototype-and-how-to-eat-it-in-a-right-way">
          <a>
            prototyping
          </a>
        </Link>
        , and&nbsp;
        <Link href="/blog/1521631041972-the-importance-of-mockups">
          <a>
            mockup development
          </a>
        </Link>
        , the minimum viable product is an important stage of the product discovery process. 
      </p>

      <h1>What is our experience with MVP development?</h1>
      <div className="case-studies">
        <h3 className="text-center">OneRemission</h3>
        <p className="text-center"><i>A chatbot making the lives of cancer survivors easier</i></p>
        <p>
          The idea of this iOS app is to simplify and improve the quality of cancer survivors’ lives. The minimum viable product 
          development showed that it will be the first chatbot-based mobile app in the field of Integrative Oncology. The goal 
          of it is impressive —  to educate people who successfully fought cancer and those who take care of them about how 
          to prevent disease recurrence. We are proud to have been involved in such a socially significant project.
        </p>
        <div>
          <p>
            <b>Platform</b>
            :&nbsp;
            <Link href="/services-mobile-development-apple">
              <a>iOS</a>
            </Link>
          </p>
          <p>
            <b>Technologies</b>
            : MongoDB,&nbsp;
            <Link href="/services-web-development-node">
              <a>Node.js</a>
            </Link>
            , Wit.ai, BotPress, WebSocket
          </p>
          <p>
            <b>Methodology</b>
            : Kanban
          </p>
          <p>
            <b>Team</b>
            : 2 developers and 1 PM
          </p>
        </div>
        <Works works={[oneRemissionDescription]} />
        <h3 className="text-center">Banker Advisor</h3>
        <p className="text-center"><i>An investment banking tool helping you make the right financial decisions</i></p>
        <p>
          Banker Advisor is a platform where users can choose a provider of financial services that suits them the most. When 
          you think about going on a trip or looking for a restaurant to eat at, you go to TripAdvisor. Banker Advisor founder was 
          wondering, why there was no such service for the investment and banking industry? We helped him test his idea with 
          MVP web development and turn it into a great well-thought-out web solution.
        </p>
        <div>
          <p>
            <b>Platform</b>
            :&nbsp;
            <Link href="/services-web-development">
              <a>Web</a>
            </Link>
          </p>
          <p>
            <b>Technologies</b>
            : Keystonejs,&nbsp;
            <Link href="/tech-front-end-react">
              <a>React</a>
            </Link>
            , Redux,&nbsp;
            <Link href="/tech-back-end-express">
              <a>Express</a>
            </Link>
            ,&nbsp;
            <Link href="/services-web-development-node">
              <a>Node.js</a>
            </Link>
            ,SCSS, MongoDB, Mongoose, AWS (SES, SNS, S3, EC2)
          </p>
          <p>
            <b>Methodology</b>
            : Kanban
          </p>
          <p>
            <b>Team</b>
            : 5 developers, 1 QA, and 1 PM
          </p>
        </div>
        <Works works={[bankerAdvisorDescription]} />
        <h3 className="text-center">WorkBooking</h3>
        <p className="text-center"><i>A web platform bringing HR routine to a new level</i></p>
        <p>
          WorkBooking is a platform for job search and headhunting. It brings together employers who look for employees and 
          professionals who look for a job. Suitable both for commercial businesses and for NGOs, it can be accessed on any 
          device. To win over the Austrian market, the platform has been augmented with convenient tools for searching and 
          scheduling. We understood that we needed those features after we ran MVP app development.
        </p>
        <div>
          <b>Platform</b>
          :&nbsp;
          <Link href="/services-web-development">
            <a>Web</a>
          </Link>
          <p>
            <b>Technologies</b>
            :&nbsp;
            <Link href="/tech-back-end-meteor">
              <a>Meteor</a>
            </Link>
            ,&nbsp;
            <Link href="/tech-front-end-react">
              <a>React</a>
            </Link>
            , and MongoDB
          </p>
          <p>
            <b>Methodology</b>
            : Scrum
          </p>
          <p>
            <b>Team</b>
            : 3 full-stack developers, 1 QA specialist, and 1 PM
          </p>
        </div>
        <Works works={[workbookingDescription]} />
      </div>

      <h1>What MVP Development Services Do We Offer?</h1>
      <div className="development-services">
        <div>
          <RocketIcon className="icon" />
          <p>MVP as a Part of Discovery Stage</p>
        </div>
        <div>
          <GlassIcon className="icon" />
          <p>MVP Exclusively</p>
        </div>
      </div>
      <p>
        Ideally, MVP development services start with product discovery and go through prototyping before we 
        start developing the MVP itself. However, if you have already completed the discovery and prototyping stages yourself or 
        with a different agency, we will gladly continue from where you left.
      </p>

      <h1>Why choose MVP?</h1>
      <div className="why-mvp-section">
        <img
          src="static/images/mvp1.png"
          alt=""
        />
        <div className="description">
          <h3>Decisive</h3>
          <p>
            A minimum viable product is a chance to test the viability of your business idea and to decide whether it is worth 
            implementing. At the same time, the MVP approach minimizes the business risk you may face while developing 
            your idea. So, MVP helps you decide if your idea is worth a shot.
          </p>
        </div>
      </div>
      <div className="why-mvp-section">
        <img
          src="static/images/mvp2.png"
          alt=""
        />
        <div className="description">
          <h3>Resource-efficient</h3>
          <p>
          The minimum viable product development takes about 6 times less time and resources than the development of a 
          full app. Thus, it saves you a lot of effort and time. If your idea is not viable, you do not lose a lot. If your idea is 
          viable, you will have enough resources to launch the development.
          </p>
        </div>
      </div>
      <div className="why-mvp-section">
        <img
          src="static/images/mvp3.png"
          alt=""
        />
        <div className="description">
          <h3>Persuasive</h3>
          <p>
            Since a minimum viable product is fast and easy to develop, you will get a chance to demonstrate your product to 
            the investors and sponsors sooner. This will help you persuade stakeholders to support your project and to secure 
            another round of investment.
          </p>
        </div>
      </div>
      <div className="why-mvp-section">
        <img
          src="static/images/mvp4.png"
          alt=""
        />
        <div className="description">
          <h3>Insightful</h3>
          <p>
            An MVP development company lets you understand the needs and interests of your users better. A minimum 
            viable product offers a unique insight into the market you strive to enter. You can adjust your idea to serve the best 
            interests of your target audience and to withstand the competition.
          </p>
        </div>
      </div>
      <CallToActionButton />

      <h1>Why KeenEthics?</h1>

      <div className="why-keenethics-section">
        <h3>
          <span>1</span>
          {' '}
          Empowering growth
        </h3>
        <p>
          We put our best effort into developing a great product with minimum time and cost risks — this is how we empower 
          your business growth.
        </p>
        <h3>
          <span>2</span>
          {' '}
          Building value
        </h3>
        <p>
          We understand how important your idea is, and we will do our best to let it flourish by being honest with you and 
          applying an ethical approach to collaboration.
        </p>
        <h3>
          <span>3</span>
          {' '}
          Launching in a matter of weeks
        </h3>
        <p>
          The partner engagement process can take as little as a week or two if organized properly, and you will be able to 
          enter the project development stage in the shortest terms.
        </p>
        <h3>
          <span>4</span>
          {' '}
          Bringing tech expertise
        </h3>
        <p>
          Our MVP development company understands the challenges you face and the needs you have, and we will help you 
          translate your idea into the essential set of features and suggest the most effective technology stack.
        </p>
        <h3>
          <span>5</span>
          {' '}
          Protecting your data
        </h3>
        <p>
          Along with the Non-Disclosure Agreement offered to you, we will use secure communication channels and servers 
          for nobody to access the data unwarranted.
        </p>
      </div>
    </div>
    <LetsStart/>
  </Layout>
);

export default ApproachMinimumValProduct;
