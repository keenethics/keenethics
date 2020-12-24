import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import '../styles/content/services-maintenance-and-support.scss';

const MaintenanceAndSupport = () => {
  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'Business growth stems from growing profits, and implementing a software product is a good way to achieve it. By introducing a high-quality software product, you can optimize a certain business process or earn some additional revenue from monetizing it. Through continuous maintenance and support, we will make sure that it achieves its goal.',
    },
    {
      title: 'Building value',
      desc: 'KeenEthics is not profit-driven, we are value-driven. We aspire to create a perfectly functioning software product. If during a one-month-long warranty period you face any technical errors that occur because of our fault, we promise to fix them as soon as possible. Our team highly values your trust and partnership!',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'When you partner up with us and wish to start developing your project in the shortest terms, our Engagement Manager will help you do it. However, it does not mean that such promptness will somehow affect the software product quality. We provide continuous website maintenance and support services as a guarantee.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'Our developers are highly skilled. Most of them are W3Schools certified or have 10+ years of experience. We are devoted to continuous improvement, so we provide regular knowledge and experience-sharing events. We conduct regular pair programming and code review to make sure that all our developers are dedicated to what they do.',
    },
    {
      title: 'Protecting your data',
      desc: 'When you engage in software development, data security has to be your foremost concern. KeenEthics developers and QA specialists make sure that the code is not susceptible to data breaches. As frameworks and libraries grow outdated, we update the security measures to make sure that data security is continuous and unyielding.',
    },
  ];

  const webDevelopmentWorks = works.filter(
    ({ title }) => ['SelfLeaders', 'BankerAdvisor', 'WorldLabs'].includes(title),
  );

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Software Maintenance and Support
          </h1>
          <p className="text-center text-italic">
            Keeping your product updated, relevant, and perfectly functioning
          </p>
          <CallToActionButton />
        </section>
        <section>
          <h2>What Is Maintenance and Support?</h2>
          <p>
            The software products grow outdated, technical errors occur, and project ideas
            undergo changes. We understand how important it is for you to keep your product
            updated, relevant, and perfectly functioning. So, we would be happy to provide
            you with continuous software maintenance and support services.
          </p>
          <p>
            Here at KeenEthics, we put a great deal of effort into forecasting business and
            technical risks before and during the development phase. Yet, even the most
            comprehensive risk management strategy cannot guarantee the absolute stability
            and fault tolerance of your software product. The industry is constantly changing,
            and so do the risks. Support and maintenance services – this is how you address
            these risks in the most timely manner.
          </p>
        </section>
        <section>
          <h2>Why Maintenance and Support?</h2>
          <div className="maintenance-and-support-list">
            <div className="maintenance-and-support-item">
              <div>
                <img style={{ width: '50px' }} src="/static/services/maintenance-and-support/internet.png" alt="Internet" />
                <b>The industry is changing.</b>
              </div>
              <p>
                Business and market never stop developing, and your app needs to be adapted
                to these changes. Otherwise, you cannot keep up with competitors and industry
                trends.
              </p>
            </div>
            <div className="maintenance-and-support-item">
              <div>
                <img style={{ width: '50px' }} src="/static/services/maintenance-and-support/settings.png" alt="Settings" />
                <b>Technology is changing.</b>
              </div>
              <p>
                Business and market never stop developing, and your app needs to be adapted
                to these changes. Otherwise, you cannot keep up with competitors and industry
                trends.
              </p>
            </div>
            <div className="maintenance-and-support-item">
              <div>
                <img style={{ width: '50px' }} src="/static/services/maintenance-and-support/suitcase.png" alt="Suitcase" />
                <b>Your business is changing.</b>
              </div>
              <p>
                Business and market never stop developing, and your app needs to be adapted
                to these changes. Otherwise, you cannot keep up with competitors and industry
                trends.
              </p>
            </div>
          </div>
          <CallToActionButton />
        </section>
        <section>
          <h2>What Do We Offer?</h2>
          <p className="text-center text-italic">We offer a warranty for each software product that we develop.</p>
          <p>
            The day your project is delivered, the&nbsp;
            <b>one-month-long warranty period</b>
            &nbsp;begins.
            We oblige ourselves to fix all software defects during the warranty period on
            a condition that the following terms are met:
          </p>
          <p>
            1. There is documented or visual evidence of system failure or fault.
            <br />
            2. There is evidence that the failure occurred due to a development fault.
            <br />
            3. The software was used properly.
            <br />
            4. There was no unwarranted interference with the software package on the part of
            the client.
            <br />
            5. The subject of the client’s complaint is covered in the requirements specification.
          </p>
          <p>
            To learn more about our Defects Liability and Contract Close-Out Period,
            please contact us to receive a document with detailed information and instructions.
          </p>
          <CallToActionButton />
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>
            These are some apps and websites that we provide application maintenance
            and support services with:
          </p>
          <Works works={webDevelopmentWorks} />
        </section>
      </div>
      <LetsStart/>
    </Layout>
  );
};

export default MaintenanceAndSupport;
