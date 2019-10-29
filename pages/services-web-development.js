/* eslint-disable */
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
      description: 'Web platforms are more convenient for complex tasks than mobile applications.',
    },
    {
      icon: '/static/services/any-device-or-browser.png',
      alt: 'any device or browser',
      description: 'Unlike mobile applications, which are tied to a certain platform, web platforms are universal and can be accessed from any device or browser.',
    },
    {
      icon: '/static/services/working-impeccably.svg',
      alt: 'easier to develop',
      description: 'Web apps are easier to develop and maintain since they are not platform-specific.',
    },
    {
      icon: '/static/services/fastest-technology.svg',
      alt: 'does not require approval',
      description: 'The deployment of a web platform is almost instant as it does not require approval from App Store or Google Play.',
    },
    {
      icon: '/static/services/radial-chart.svg',
      alt: 'radial chart',
      description: 'Although web platforms cannot function offline, there is no need to download and install them. It saves the user time, effort, and storage space.',
    },
    {
      icon: '/static/services/phonelink.png',
      alt: 'phone',
      description: <p>If you want to combine the advantages of both web and mobile software, you are welcome to <a href="/tech-apps-progressive-web-apps" target="_blank">develop a progressive web app</a>.</p>,
    },
  ];

  const whatDoWeOfferIcons = [
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
          <h1 className="text-center">Web Development Services</h1>
          <p className="text-center text-italic">Developing high-quality and fault-tolerant web platforms for the Internet and private networks</p>
          <CallToActionButton href="/contacts" />
        </section>
        <section>
          <h2>What Is Web Development?</h2>
          <p>The Internet has turned into a universal environment where people communicate, rest, and work. Each web platform is a particular ecosystem with its own population, opportunities, and threats. However, hiring a professional and skillful team of web developers is the best way to ensure that the users of your website are safe and satisfied with their web experience. Some say that web development is going obsolete as mobile devices conquer the world. However, there are some strengths that make web development a decent competitor to mobile tech.</p>
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
          <h2>Why KeenEthics?</h2>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth</h3>
          <p>“One size fits all” is neither professional nor effective. We understand that your business is unique, with its special features, interests, and needs. Our PMs and business analysts are here for you to collect, analyze, and implement all your requirements. Also, we have software engineers who, besides their general technical expertise, are knowledgeable and skilled in specific industries, ranging from <a href="/services-education-software-development" target="_blank">education software development services</a> to ecommerce.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value</h3>
          <p>We cooperate according to both Time & Material and Fixed Price approach, whichever you find to be more suitable. Our pricing policy is equally suitable for small businesses and start-ups and for large corporations because, while providing cost-efficient solutions, we do not compromise quality. If you are not convinced, <a href="https://clutch.co/profile/keenethics#review-184570" target="_blank" rel="noopener noreferrer nofollow">see what our long-term partner has to say</a> or <a href="/contacts?activeForm=estimate" target="_blank">let us estimate your project</a>!</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks</h3>
          <p>Our professional Project Managers are ready and willing to organize project development according to your requests and to <a href="/blog/how-to-choose-your-optimal-development-methodology" target="_blank">choose the optimal development methodology</a> together with you. They will make sure that you are constantly involved in the development process if you want to, or they will provide you with a perfect final product if you do not have time to communicate continuously. If you want to manage the project yourself, our developers would gladly play according to your rules.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise</h3>
          <p>Our UI/UX designers develop elegant and responsive interfaces, which are visually appealing and intuitively clear. In turn, our proficient developers create robust and fault-tolerant solutions, and QA specialists make sure that the web platform is bug-free and functions perfectly. Check our <a href="/portfolio" target="_blank">case studies</a> to make sure!</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data</h3>
          <p>We understand that <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank">information and data</a> are the most valuable assets in the 21st century. Therefore, we ensure the physical safety of our servers and proper encryption of online data. We also sign non-disclosure agreements with our partners and employees to prevent any leaks of information about our clients or operations.</p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>These are some of the applications and websites that we have developed:</p>
          <Works works={webDevelopmentWorks} />
        </section>
        <section>
          <h2>Now, let’s discuss your business idea!</h2>
          <CallToActionButton title="CONTACT US" href="/contacts" />
        </section>
      </div>
    </Layout>
  )
};

export default ServicesWebDevelopment;
