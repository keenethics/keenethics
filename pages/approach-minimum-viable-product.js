import React from 'react';
import Link from 'next/link';
import RocketIcon from '../components/approach-minimum-viable-product/RocketIcon';
import GlassIcon from '../components/approach-minimum-viable-product/GlassIcon';
import Layout from '../components/layout/main';
import LetsStart from './home-page-lets-start';
import ContentNavigation from '../components/content/navigation';

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
        <Link href="/contacts">
          <a className="button button-send learn-more">Learn more</a>
        </Link>
        <h2 className="text-bold"> 6 times faster </h2>
        <p className="negative-margin-top">
          it is to develop an MVP than a full app.
        </p>
      </div>

      <h1>What Is MVP Development Services?</h1>

      <p>
        The minimum viable product is a product with a minimum necessary set of features,
        which is developed in a short period of time. The idea of MVP software development
        is to test the viability of your product idea – to see if the market needs it,
        if the users like it, and show you can improve it. This lets you make sure that
        your product will be competitive before you actually start investing in full-scaled
        software product development. Along with proof of concept,&nbsp;
        <Link href="/blog/1517766794846-what-is-prototype-and-how-to-eat-it-in-a-right-way">
          <a>prototype</a>
        </Link>
        ,
        and&nbsp;
        <Link href="/blog/1521631041972-the-importance-of-mockups">
          <a>mockup</a>
        </Link>
        ,
        the minimum viable product is an important stage of the product discovery process.
      </p>

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
        Ideally, we start with product discovery and go through prototyping
        before we start developing MVP. However, if you have already completed
        the discovery and prototyping stages yourself or with a different agency,
        we will gladly continue from where you stopped.
      </p>
      <h1>Why MVP?</h1>
      <div className="why-mvp-section">
        <img
          src="static/images/mvp1.png"
          alt=""
        />
        <div className="description">
          <h3>Decisive</h3>
          <p>
            A minimum viable product is a chance to test the viability of your business
            idea and to decide whether it is worth implementing with a minimum business risk.
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
            The minimum viable product development takes about 6 times less time and costs
            than the development of a full app and saves you a lot of effort.
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
            As MVP is faster to develop, you will be able to demonstrate your product
            to the investors and sponsors sooner.
            This will guarantee you another round of investment.
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
            An MVP development company lets you understand the needs and
            interests of your users better. MVP offers a unique insight
            into the market you strive to enter.
          </p>
        </div>
      </div>
      <div className="learn-more-button-container">
        <Link href="/contacts">
          <a className="button button-send learn-more">Learn more</a>
        </Link>
      </div>

      <h1>Why KeenEthics?</h1>

      <div className="why-keenethics-section">
        <h3>
          <span>1</span>
          {' '}
          Empowering growth
        </h3>
        <p>
          There is a sense to develop a minimum viable product
          only if the result is of a high quality and the MVP
          development process itself is fast and cost-efficient.
          Otherwise, MVP may turn out to be just a waste of money.
          We will not let that happen to you. Instead, we will put
          our best effort into developing a great product with minimum
          time and cost risks. This is how we empower your business growth.
        </p>
        <h3>
          <span>2</span>
          {' '}
          Building value
        </h3>
        <p>
          The ethics is our mission, not just a part of our name. We want to
          be honest with you. If the MVP proves that your product is not
          viable, we will not try to convince you to develop a full app.
          Instead, we can offer&nbsp;
          <Link href="/services-business-analysis">
            <a>business analysis services</a>
          </Link>
          , which will
          help you advance your idea. We understand how important your
          idea is, and we will do our best to let it blossom.
        </p>
        <h3>
          <span>3</span>
          {' '}
          Launching in a matter of weeks
        </h3>
        <p>
          Time-efficiency is one of the primary reasons you have opted in
          favor of MVP development services. Why to lose time on preparing
          the project launch? The partner engagement process can take as
          little as a week or two if organized properly. Our expert Partner
          Engagement Manager will help you enter the project development
          stage in the shortest terms.
        </p>
        <h3>
          <span>4</span>
          {' '}
          Bringing tech expertise
        </h3>
        <p>
          We have almost five years of experience of working with startup
          projects. In fact, we launched a few startups inside our company.
          Our MVP development company understands the challenges you face
          and the needs you have. We will help you translate your idea into
          the essential set of features, advise on a development approach,
          and suggest the most effective technology stack.
        </p>
        <h3>
          <span>5</span>
          {' '}
          Protecting your data
        </h3>
        <p>
          The last thing you want when trying to bring your innovative idea
          to life is to have it stolen. Our team uses secure communication
          channels and servers for nobody to access the data unwarrantably.
          Also, before we start cooperating, we offer you to sign a
          Non-Disclosure Agreement for you to be sure that we do not
          publicize your project idea.
        </p>
      </div>
      <h1>Case Studies</h1>
      <div className="case-studies">
        <h3>OneRemission</h3>
        <p>
          The idea of this iOS app is to simplify and improve the quality
          of cancer survivors’ lives. The minimum viable product development
          showed that it will be the first chatbot-based mobile app in the
          field of Integrative Oncology. The goal of it is impressive –  to
          educate people who successfully fought cancer and those who take
          care of them about how to avoid the disease from reoccurring. We are
          proud to have been involved in such a socially significant project.
          Today, the project often receives positive reviews.
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
        <h3>Banker Advisor</h3>
        <p>
          Banker Advisor is a platform where users can choose a provider of
          financial services that suits them the most. When you think about
          going on a trip or looking for a restaurant to eat at, you go to
          TripAdvisor. Banker Advisor founder was wondering, why there was
          no such service for the investment and banking industry? We helped
          him test his idea and turn it into a great well-thought-out web solution.
          This platform offers a full picture of the financial institutions in a
          certain location in a certain industry sector.
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
        <h3>WorkBooking</h3>
        <p>
          WorkBooking is a platform for job search and headhunting.
          It brings together employers who look for employees and
          professionals who look for a job. Suitable both for commercial
          businesses and for NGOs, it can be accessed on any device.
          To win over the Austrian market, the platform has been augmented
          with convenient tools for searching and scheduling. We understood
          that we needed those features after we tested the MVP.
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
      <h1>Now, let’s discuss your business idea!</h1>

      <LetsStart className="lets-start-section" />
    </div>
  </Layout>
);

export default ApproachMinimumValProduct;
