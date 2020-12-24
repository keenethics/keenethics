import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import '../styles/content/services-software-deployment-and-implementation.scss';

const SoftwareDeploymentAndImplementation = () => {
  const whySoftwareDeployment = [
    {
      icon: '/static/services/services-software-deployment-and-implementation/geography.png',
      alt: 'geography',
      description:
  <>
    <b>Gets your product out to the market</b>
    <br />
    If you do not deploy your software product to the web or an app store, the entire
    software design and development process becomes useless. Having come so far, why
    would you hide your product from the target audience?
  </>,
    },
    {
      icon: '/static/services/services-software-deployment-and-implementation/shield.png',
      alt: 'Shield',
      description:
  <>
    <b>Secures your users</b>
    <br />
    A diligent and thorough software deployment process makes the final product more
    secure. By running safety checks and hardening infrastructure, software engineers
    make sure that neither an app nor its users are susceptible to a cyber attack.
  </>,
    },
    {
      icon: '/static/services/services-software-deployment-and-implementation/like.png',
      alt: 'Like',
      description:
  <>
    <b>Enables real-life tests</b>
    <br />
    Having brought your software product to your target audience, you can finally
    see how it is doing in real-life settings. Do your users like your product? Are
    there any errors, difficulties, or bottlenecks? What can you add or improve?
  </>,
    },
    {
      icon: '/static/services/services-software-deployment-and-implementation/dollar-symbol.png',
      alt: 'Dollar Symbol',
      description:
  <>
    <b>Brings profit</b>
    <br />
    Regardless of what product you develop, the purpose of it is to save money by solving
    some tasks or to bring profit by marketing it. Software deployment is the way for you
    to finally profit from it by bringing it to the market.
  </>,
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/services/services-software-deployment-and-implementation/servers.png',
      title: 'Deployment on our servers',
    },
    {
      icon: '/static/services/services-software-deployment-and-implementation/servers2.png',
      title: 'Deployment on your servers',
    },
    {
      icon: '/static/services/services-software-deployment-and-implementation/servers3.png',
      title: 'Continuous deployment',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'By developing and deploying a high-quality software product, we help your business grow. As planned, this product will let you automate some business processes or earn some extra revenue. Either way, it will increase your profits. The more profit you have, the faster your company grows.',
    },
    {
      title: 'Building value',
      desc: 'The business mission of KeenEthics is: “We strive for a tech world devoted to the social good”. This is the essential business value that our company works hard to promote. If you share our views and wishes to make the world a better place for everyone, we will be delighted to partner up!',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'The sooner we launch your software product – the sooner your business starts to grow. While the development process cannot be rushed, the engagement and planning process can and should be optimized. Contact our professional Partner Engagement Manager, and she will ensure the prompt launch of your project.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'All our team members are full-stack, JS-oriented, and highly skilled. Most of them have the W3Schools certification, 10+ years of experience, or an academic degree. Along with technical expertise, our team offers industry-specific expertise, ranging from education and healthcare to e-commerce and agriculture.',
    },
    {
      title: 'Protecting your data',
      desc: 'Data security and user privacy should be your primary concern at all times. Users do not give a second chance to the app if it compromised their private information at least once. Our team will make sure that the code is not susceptible to data breaches and technical errors.',
    },
  ];

  const softwareDeploymentWorks = works.filter(
    ({ title }) => ['OneRemission', 'SelfLeaders', 'BankerAdvisor'].includes(title),
  );

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Software Deployment and Implementation Services
          </h1>
          <p className="text-center text-italic">
            Making your software product finally bring profit
          </p>
          <CallToActionButton />
        </section>
        <section>
          <h2>What Is Software Deployment Services?</h2>
          <p>
            Software deployment is very close to the end of the software development life
            cycle. After your software product has been studied, planned, designed, developed,
            and tested, you need to make it available for the market. This is where software
            deployment services come into play. Software deployment consists of installing,
            configuring, testing, and optimizing the performance of your software product.
          </p>
          <p>
            Requesting software development services can be compared to buying a table.
            Software deployment is the process of delivering this table to your house and
            assembling it together. In the case of the table, you might be able to deal
            with it yourself. Yet, a software product, should it be a web platform or a mobile
            app, is a much more complicated system to handle. Professional software deployment
            services help you make sure that your product is installed properly and securely.
          </p>
        </section>
        <section>
          <div className="software-deployment-services">
            <div className="software-deployment-services-item">
              <h2>How to Deploy a Web App?</h2>
              <p>
                At first, the software product is deployed to the development environment.
                Here, software engineers can run and test the functionality. Then, the web
                app is deployed to the staging environment, which is also referred to as
                preproduction. Here, the product closely resembles the final version but is
                more economical in terms of resource usage and can be shown to test users.
                As soon as the product is tested, optimized, and ready to be launched, it is
                deployed to the production environment. Here, it will use real-life data and
                will be accessible to the target audience. If the software deployment procedure
                is thoroughly followed, the entire website will not go down, your users will
                not face any errors, and you will not lose your customers.
              </p>
            </div>
            <div className="software-deployment-services-item">
              <h2>How to Deploy a Mobile App?</h2>
              <p>
                After a mobile app is developed, it is deployed to the testing environment,
                such as TestFlight for iOS or HockeyApp for Android. Once the app is tested,
                errors are fixed, and performance is improved, it is deployed to the AppStore
                or Google Play. Before submitting it to the store, the development team needs
                to make sure that the app is tested and functioning properly. The app information
                and metadata has to be complete and accurate, and the submitter’s contact
                information needs to be up-to-date. Backend services should be enabled, and all
                the non-obvious features should be explained. Besides, both Android and iOS have
                a unique set of technical and ethical requirements that developers need to follow.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Why Software Deployment Services?</h2>
          <FeaturesList list={whySoftwareDeployment} />
          <CallToActionButton
            title="Contact us"
            href="/contacts"
          />
        </section>
        <section>
          <h2>What Do We Offer?</h2>
          <ul className="mobile-development-list">
            {
              whatDoWeOfferIcons.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img style={{ width: '70px' }} src={icon} alt={title} />
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
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>
            These are some of the applications and websites that we have provided
            software deployment services with:
          </p>
          <Works works={softwareDeploymentWorks} />
        </section>
      </div>
      <LetsStart/>
    </Layout>
  );
};

export default SoftwareDeploymentAndImplementation;
