import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import './services-education-software-development.scss';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';
import OfferList from '../components/content/OfferList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';

const ServicesBusinessAnalysis = () => {
  const whatIsBusinessAnalysis = [
    {
      icon: '/static/services/piggy-bank.png',
      alt: 'piggy bank',
      description:
  <>
    <b>Reduces expenses.</b>
    &nbsp;Timely and effective business analysis helps you reduce the cost
    of project development. It minimizes the number of requirement changes
    that are going to occur. platforms are more convenient for complex tasks
    than mobile applications.
  </>,
    },
    {
      icon: '/static/services/stopwatch.png',
      alt: 'stopwatch',
      description:
  <>
    <b>Speeds up development.</b>
    &nbsp;Business analysis helps to make the project development be
    completed sooner. The research phase is a time investment that pays off.
  </>,
    },
    {
      icon: '/static/services/users.png',
      alt: 'users',
      description:
  <>
    <b>Improves cooperation.</b>
    &nbsp;Business analysis training lets you achieve a high level of
    understanding in the team. Clear requirements and documentation will
    ensure that all team members are on the same plate.
  </>,
    },
    {
      icon: '/static/services/thumb-up.png',
      alt: 'stopwatch',
      description:
  <>
    <b>Boosts sales.</b>
    &nbsp;A thoroughly researched idea is going to translate into a
    competitive product. Your prospective clients will appreciate that
    their needs are heard.
  </>,
    },
    {
      icon: '/static/services/security.png',
      alt: 'stopwatch',
      description:
  <>
    <b>Enhances quality.</b>
    &nbsp;Business analysis consulting services help you minimize the risks.
    With a well-thought-out development strategy, you will not forget about
    technology challenges, data security measures, or legal liabilities.
  </>,
    },
    {
      icon: '/static/services/profit.png',
      alt: 'stopwatch',
      description:
  <>
    <b>Facilitates retrospective.</b>
    &nbsp;Detailed project documentation is essential for effective analysis
    and reporting after the project completion. Comparing results with forecasts,
    you will understand what went well or wrong.
  </>,
    },
  ];

  const whatDoWeOffer = [
    {
      icon: '/static/services/prototyping2.png',
      alt: 'Technology research',
      title: 'Technology research',
    },
    {
      icon: '/static/services/notes.png',
      alt: 'Industry and market research',
      title: 'Industry and market research',
    },
    {
      icon: '/static/services/web-design.png',
      alt: 'Prototyping',
      title: 'Prototyping',
    },
    {
      icon: '/static/services/prototype.png',
      alt: 'Technical documentation',
      title: 'Technical documentation',
    },
    {
      icon: '/static/services/prototyping.png',
      alt: 'PoC development',
      title: 'PoC development',
    },
    {
      icon: '/static/services/idea.png',
      alt: 'MVP development',
      title: 'MVP development',
    },
  ];

  const webDevelopmentWorks = works.filter(
    ({ title }) => ['ParkQX', 'WorkBooking', 'Banker Advisor'].includes(title),
  );

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc:
  <>
    Sound research prior to the development of your project is essential.
    It will let you make sure that your product is going to be in demand. For your development
    efforts and costs not to go in vain, we conduct comprehensive business analysis.
    By choosing the right business analysis techniques, we empower the growth of your business.
  </>,
    },
    {
      title: 'Building value',
      desc:
  <>
    Our cooperation can be based according to Time & Material or Fixed Price approach, depending
    on which you find to be more suitable. The pricing policy we offer will be equally suitable
    for a start-up and for a large corporation. IT business analysis services and software solutions
    we offer are cost-efficient.&nbsp;
    <a href="/contacts?activeform=estimate" target="_blank">Let us estimate your project</a>
  </>,
    },
    {
      title: 'Launching in a matter of weeks',
      desc:
  <>
    Business systems analysis may take too long if organized ineffectively. We strive to conduct the
    discovery stage quickly without compromising the quality of results. This is what our
    professional Engagement Manager is here for! They will make sure that business analysis is
    completed and transitions into the development stage quite swiftly.
  </>,
    },
    {
      title: 'Bringing tech expertise',
      desc:
  <>
    Our Business Analyst engages UI/UX designers, senior software developers, and solution
    architects in the research process. While we organize this business process in a time
    and cost-efficient manner, we do not forget about the quality of the results. Our
    professionals are experts in what they do. They will provide
    you with business analysis training if you ask. See our&nbsp;
    <a href="/portfolio" target="_blank">case studies</a>
    &nbsp;to make sure!
  </>,
    },
    {
      title: 'Protecting your data',
      desc:
  <>
    We do everything to ensure the security of your&nbsp;
    <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank">information and data</a>
    &nbsp;at all stages of project development, including business analysis services.
    Together with general data safety measures, we take some industry-specific and
    technology-specific steps. You can read more about these at our blog!
  </>,
    },
  ];

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Business Analysis
          </h1>
          <p className="text-center text-italic">
            Reducing development expenses and boosting sales through sound project research
          </p>
          <CallToActionButton />
        </section>
        <section>
          <h2>What Is Business Analysis?</h2>
          <p>
            Business Analysis is a business process of laying the foundation of your project.
            At this point, you should understand how to improve your project idea or whether
            to terminate it whatsoever.
          </p>
          <p>
            For your project to be successful and profitable, it needs to offer an outstanding
            solution to a pressing problem. You have to find out who is your target audience
            and understand their needs and interests. Also, you should analyze the existing
            competition and try out different marketing channels. The most important of business
            analysis activities, you must convey a unique value-based message.
          </p>
          <p>
            Business Analysis may also include building prototypes, the development of PoC,
            and a minimum viable product. All of these will help you develop a perfect final
            product in a time-efficient and cost-efficient manner.
          </p>
        </section>
        <section>
          <h2>Why Business Analysis?</h2>
          <FeaturesList list={whatIsBusinessAnalysis} />
          <CallToActionButton
            title="HIRE BUSINESS ANALYST"
            href="/contacts"
          />
        </section>
        <section>
          <OfferList list={whatDoWeOffer} />
        </section>
        <section>
          <h2>How We Do It?</h2>
          <p>
            To be successful, your product should solve a problem. The business analysis
            that we offer consists of five major stages and business analysis techniques.
          </p>
          <ul className="challenges-list">
            <li className="challenges-item">
              <p className="text-bold">1. Studying target audience, product selection criteria, and JTBD</p>
            </li>
            <li className="challenges-item">
              <p className="text-bold">Risks:</p>
              <ul>
                <li>There is no problem. What will you solve?</li>
                <li>There is a problem but people are not ready to solve it.</li>
                <li>Product selection criteria are not identified properly.</li>
              </ul>
            </li>
            <li className="challenges-item">
              <p className="text-bold">2. Researching market niche and main competitors</p>
            </li>
            <li className="challenges-item">
              <p className="text-bold">Risks:</p>
              <ul>
                <li>There are a lot of similar products, Does the market need another one?</li>
                <li>There are no competitors. Does anyone need such a product?</li>
                <li>The main competitor is not identified/identified wrong.</li>
              </ul>
            </li>
            <li className="challenges-item">
              <p className="text-bold">3. Defining innovativeness and betterness of your product</p>
            </li>
            <li className="challenges-item">
              <p className="text-bold">Risks:</p>
              <ul>
                <li>
                  Your product is neither innovative nor better than all the other ones.
                  How will you overrun your main competitor?
                </li>
                <li>Your competitors can easily copy your solution. How do you prevent it?</li>
              </ul>
            </li>
            <li className="challenges-item">
              <p className="text-bold">4. Outlining potential clients, marketing channels, and messages</p>
            </li>
            <li className="challenges-item">
              <p className="text-bold">Risks:</p>
              <ul>
                <li>The potential target audience is too small to cover development expenses.</li>
                <li>Marketing channels are not effective, the cost per client is too high.</li>
                <li>Messages are unclear or irrelevant to the audience.</li>
              </ul>
            </li>
            <li className="challenges-item">
              <p className="text-bold">
                5. Developing&nbsp;
                <a href="/approach-minimum-viable-product" target="_blank">minimum viable product</a>
              </p>
            </li>
            <li className="challenges-item">
              <p className="text-bold">Risks:</p>
              <ul>
                <li>MVP cannot be developed quickly and inexpensively.</li>
                <li>MVP is low-quality so it fails to attract the clients.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>
            These are some of applications and websites we have provided business
            analysis services for:
          </p>
          <Works works={webDevelopmentWorks} />
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

export default ServicesBusinessAnalysis;
