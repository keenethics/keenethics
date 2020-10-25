import Link from 'next/link';

import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import LetsStart from '../components/about-us/LetsStart';
import { getPostsList } from '../lib/contentful';

import { works, homePageWorks } from '../main.config';
import ServicesPagesHeader from '../components/services/ServicesPagesHeader';
import ServicesPagesBodyTotalServiceCost from '../components/services/ServicesPagesBodyTotalServiceCost';
import ServicePagesBodyWhatIsService from '../components/services/ServicesPagesBodyWhatIsService';
import Portfolio from './portfolio';
import ServicesPagesWhatDoWeOffer from '../components/services/ServicesPapgesWhatDoWeOffer';
import OurMethods from '../components/blocks/our-methods/OurMethods';
import ServicesPagesBodyWhyKeenEthics from '../components/services/ServicesPagesBodyWhyKeenEthics';
import ServicesPagesBodyOtherServices from '../components/services/ServicesPagesBodyOtherServices';

const whatIsWebDevelopment = [
  {
    icon: '/static/services/perfectly-scalable.svg',
    alt: 'Empowering growth',
    description: (
      <p>
        <b>Empowering growth</b>
        <br />
        The story of our experience with indoor positioning service began when
        one of our top developers earned a PhD degree in indoor positioning and
        IoT technologies. A few years later, we have many projects in our
        portfolio and a lot of experience to share. We will be happy to help you
        implement indoor positioning technology and let your business grow.
      </p>
    ),
  },
  {
    icon: '/static/services/any-device-or-browser.png',
    alt: 'Building value',
    description: (
      <p>
        <b>Building value</b>
        <br />
        KeenEthics is a company that revolves around its unique ethical strategy
        — we believe that the tech world can work in favor of the social good.
        As a part of that, there is an interview series on our blog called
        {' '}
        <a href="/blog?chosen=Tech4Good" target="_blank">
          “The Leaders of Tech4Good”.
        </a>
        {' '}
        Also, we strive for transparent and honest relationships with our
        employees, clients, and partners. This is what makes us different.
      </p>
    ),
  },
  {
    icon: '/static/services/working-impeccably.svg',
    alt: 'Launching in a matter of weeks',
    description: (
      <p>
        <b>Launching in a matter of weeks</b>
        <br />
        Sometimes, all the bureaucratic processes take too much time — the team
        burns out before the development itself begins. We have been looking for
        the solution — and hopefully, we have found one. Our expert Partner
        Engagement manager is working hand-in-hand with you to launch project
        development in the shortest possible terms.
      </p>
    ),
  },
  {
    icon: '/static/services/fastest-technology.svg',
    alt: 'Bringing tech expertise',
    description: (
      <p>
        <b>Bringing tech expertise</b>
        <br />
        Aside from indoor positioning expertise, we specialize in web and mobile
        development. We will develop a custom web or mobile solution, which will
        make your indoor positioning system complete. Also, there is a Business
        Analyst in our team who specializes in the implementation of indoor
        positioning systems IPS — the one who came up with the idea for Asama.
      </p>
    ),
  },
  {
    icon: '/static/services/radial-chart.svg',
    alt: 'Protecting your data',
    description: (
      <p>
        <b>Protecting your data</b>
        <br />
        AData security is one of the major concerns associated with software
        development, particularly with indoor positioning and IoT technology.
        Using different testing approaches, pair programming, and external code
        review, our developers and QA specialists, together with security
        experts, make sure that the app is error-free and resistant to malicious
        attacks.
      </p>
    ),
  },
];

const whatDoWeOfferIcons = [
  {
    header: 'User-friendly',
    icon: '/static/services/indoor-positioning/indoor-positioning-img-1.png',
    title:
      'Web platforms are more convenient for complex tasks than mobile applications.',
  },
  {
    header: 'Simply developed',
    icon: '/static/services/indoor-positioning/indoor-positioning-img-2.png',
    title:
      'Web apps are easier to develop and maintain since they are not platform-specific.',
  },
  {
    header: 'Resource-efficient',
    icon: '/static/services/indoor-positioning/indoor-positioning-img-3.png',
    title:
      'Although web platforms cannot function offline, there is no need to download and install them. It saves the user time, effort, and storage space.',
  },
  {
    header: 'Multi-platform',
    icon: '/static/services/indoor-positioning/indoor-positioning-img-4.png',
    title:
      'Unlike mobile applications, which are tied to a certain platform, web platforms are universal and can be accessed from any device or browser.',
  },
  {
    header: 'Swiftly deployed',
    icon: '/static/services/indoor-positioning/indoor-positioning-img-5.png',
    title:
      'We highly value our pool of talents and make sure that each person feels not as an employee but as a team member. We deeply care about our corporate culture and make sure that every person enjoys the time they spend among their colleagues.',
  },
  {
    header: 'Optimal',
    icon: '/static/services/indoor-positioning/indoor-positioning-img-6.png',
    title:
      'If you want to combine the advantages of both web and mobile software, you are welcome to develop a progressive web app.',
  },
];

const webDevelopmentWorks = works.filter(({ title }) => ['The Check Network', 'BankerAdvisor', 'Paceup'].includes(title));

class ServicesWebDevelopment extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      isTablet: false,
      isTabletL: false,
    };

    this.listener = null;
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.listener = window.addEventListener('resize', ({ target }) => {
        if (target) {
          this.setState({
            isTabletL: target.innerWidth <= 1024 && target.innerWidth > 768,
            isTablet: target.innerWidth <= 768 && target.innerWidth > 480,
            isMobile: target.innerWidth <= 480,
          });
        }
      });

      this.setState({
        isTabletL: window.innerWidth <= 1024 && window.innerWidth > 768,
        isTablet: window.innerWidth <= 768 && window.innerWidth > 480,
        isMobile: window.innerWidth <= 480,
      });
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined' && this.listener) {
      window.removeEventListener(this.listener);
    }
  }

  render() {
    const { isMobile, isTablet, isTabletL } = this.state;
    const serviceCostText = (
      <p>
        is the projected indoor location market size in 2022, according to
        {' '}
        <Link href="https://www.marketsandmarkets.com/Market-Reports/indoor-location-market-989.html">
          <a>Markets and Markets.</a>
        </Link>
      </p>
    );
    const whatisParagraphs = [
      'Indoor positioning is a technology, which uses a network of devices to locate people or objects in such places where GPS and other satellite technologies cannot do it properly. For instance, GPS technologies are not precise enough to locate people inside large buildings, such as airports, malls, or warehouses. And this is where indoor positioning comes into play. This technology offers a few ways for locating people and objects with one-meter accuracy. One of such ways is based on iBeacon — the technology developed by Apple, which employs BLE transmitters.',
      'ndoor positioning system is an IoT solution, which lets businesses efficiently locate their employees or customers and use this information for business development purposes. For example, indoor positioning in retail can help businesses advertise their products to the customers passing by their store. At the same time, indoor positioning in airports can help passengers find their way around the building and receive timely flight information. Meanwhile, indoor positioning in warehouses can help employers control their employees. The opportunities are indeed endless when you start thinking about it.',
    ];
    return (
      <Layout>
        <main className="service-page-body-background-color">
          <ServicesPagesHeader />
          <ServicesPagesBodyTotalServiceCost
            priceText="$ 40.99 billion"
            text={serviceCostText}
          />
          <ServicePagesBodyWhatIsService
            paragraphs={whatisParagraphs}
            title="What Is Web Development?"
          />

          <section className="service-page-porfolio-section">
            <div className="service-page-porfolio-section-title">
              <h3>Projects</h3>
            </div>
            <Portfolio
              isMobile={isTabletL || isTablet || isMobile}
              postIds={homePageWorks}
              pageTitle="/"
              topTitle=" "
            />
          </section>
          <ServicesPagesWhatDoWeOffer offers={whatDoWeOfferIcons} />
          <OurMethods />
          <section className="service-page-see-more-projects-wrapp">
            <div className="service-page-see-more-projects">
              <h3>
                For more projects in these and other industries, check out our
                Case Studies.
              </h3>
              <CallToActionButton
                clazz="see-more-projects"
                title="See Projects"
              />
            </div>
          </section>
          <ServicesPagesBodyWhyKeenEthics
            title="Why choose KeenEthics?"
            whyKeenList={whatIsWebDevelopment}
          />
          <LetsStart />
          <section className="service-page-choose-other-services-wrapp">
            <div className="service-page-choose-other-services">
              <ServicesPagesBodyOtherServices title="You may also be interested in following services" />
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export default ServicesWebDevelopment;
