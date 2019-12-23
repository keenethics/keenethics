import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';

const ServicesInternetOfThings = () => {
  const whatIsBusinessAnalysis = [
    {
      icon: '/static/services/cloud-app-dev/dimension.png',
      alt: 'dimension',
      description:
  <>
    <b>Scalable</b>
    <br />
    The Internet of Things system can be scaled up or down when needed. It is a network
    of interconnected modules, so some nodes can be taken away and new nodes can be added.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-data-transfer-100.png',
      alt: 'Data Transfer',
      description:
  <>
    <b>Consistent</b>
    <br />
    A properly developed IoT solution shows stable performance. In the well-designed IoT
    system, data flows are not interrupted, and the product functions consistently.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-combo-chart-100.png',
      alt: 'Combo Chart',
      description:
  <>
    <b>Future-proof</b>
    <br />
    The IoT market niche is growing at a rapid pace, and it is promised a bright future.
    You can see it yourself if you consider how fitness trackers and smart speakers conquer the
    hearts of regular users.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-user-100.png',
      alt: 'User',
      description:
  <>
    <b>User-friendly</b>
    <br />
    IoT solutions greatly simplify the lives of average users. Smart homes, smart speakers,
    and wearable devices – these are designed to make our life easier and more enjoyable.
  </>,
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/services/internet-of-things/heart.png',
      title: 'Custom IoT solutions for healthcare',
    },
    {
      icon: '/static/services/internet-of-things/mortarboard.png',
      title: 'IoT software for e-commerce',
    },
    {
      icon: '/static/services/internet-of-things/shopping-bags.png',
      title: 'EdTech IoT solutions',
    },
    {
      icon: '/static/services/internet-of-things/briefcase.png',
      title: 'IoT business administration apps',
    },
    {
      icon: '/static/services/internet-of-things/house.png',
      title: 'Smart home systems development',
    },
  ];

  const developmentServices = [
    {
      icon: '/static/services/internet-of-things/img.png',
      title: 'Custom IoT solutions for healthcare',
    },
    {
      icon: '/static/services/internet-of-things/code.png',
      title: 'IoT software for e-commerce',
    },
    {
      icon: '/static/services/internet-of-things/arrow.png',
      title: 'EdTech IoT solutions',
    },
    {
      icon: '/static/services/internet-of-things/rocket.png',
      title: 'IoT business administration apps',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'Employing an IoT solution or entering the IoT market will jump-start your business. We understand how important it is to you and how valuable this opportunity is. Thus, the IoT development services that we offer are of the highest quality. Together with our effective and reliable IoT solution, your business will grow.',
    },
    {
      title: 'Building value',
      desc: 'We are not interested in selling our Internet of Things development services to you. We are interested in building a long-lasting and honest partnership. While we keep the cost of our IoT development services low, we do not compromise the quality of the IoT solution you will receive. Your satisfaction and trust are our highest priority!',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'We have worked hard to optimize the partner engagement process. Now, we are able to start working on the project as soon as you will be ready. Our professional Project Managers will organize project development according to your interests and needs. If you plan to manage the project on your own, our developers will gladly cooperate.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'Our IoT developers are experts in what they do. Yet, programming is not the only stage of project implementation. If you need help with business analysis or UI/UX design, our professionals will be happy to help you. In turn, Quality Assurance specialists will ensure that your IoT solution is reliable and secure.',
    },
    {
      title: 'Protecting your data',
      desc:
  <>
    Security is the first and foremost concern associated with IoT application development services.
    KeenEthics takes all the technical and legal measures to ensure the data safety of your business
    and your users. We do not want any private information to be leaked or compromised, and we do
    everything possible to prevent it from happening. We stay&nbsp;
    <a href="/post-preview/1543388400000-your-data-is-safe-in-ukraine">on guard of your data</a>
    .
  </>,
    },
  ];

  const webDevelopmentWorks = works.filter(
    ({ title }) => ['Pree'].includes(title),
  );

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Internet of Things (IoT) Services
          </h1>
          <p className="text-center text-italic">
            Building effective, reliable, and secure IoT solutions, which will
            jump-start your business
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900 }}>$1 612 billion</h2>
          <p className="text-center">
            is the projected size of the global IoT market in 2025, according to&nbsp;
            <a href="https://www.statista.com/statistics/976313/global-iot-market-size/" target="_blank" rel="noopener noreferrer nofollow">Statista</a>
            .
          </p>
        </section>
        <section>
          <h2>What Is Internet of Things?</h2>
          <p>
            Internet of Things revolutionizes the way people do business and organize
            their everyday life. Smart home systems spare you a huge share of house chores,
            smart speakers become the best person to talk to, and fitness trackers replace
            regular medical checks. IoT solutions are used for employee monitoring,
            resource tracking, and customer relationship management.
          </p>
          <p>
            An IoT solution consists of a hardware device and a software program, which
            are connected via the Internet. KeenEthics IoT specialists make sure that
            both components are effective, reliable, and secure.
          </p>
        </section>
        <section>
          <h2>Why Internet of Things?</h2>
          <FeaturesList list={whatIsBusinessAnalysis} />
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
          <p>
            When it comes to an IoT project, it is not exclusively about development. Most
            probably, you plan to create something that has never been created before. To make
            sure that your effort does not go in vain, you have to conduct profound product
            research, create an elegant design, and ensure continuous support. Here are the
            services that you may need along with IoT mobile app development services:
          </p>
          <ul className="mobile-development-list">
            {
              developmentServices.map(({ icon, title, href }) => (
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
          <div className="project-content-more">
            <h2>How Do We Do It?</h2>
            <p>
              Here go the technologies that we use for Internet of Things application
              development services.
            </p>
            <p>
              Backend:&nbsp;
              <a href="/services-web-development-node">Node.js</a>
              ,&nbsp;
              <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer nofollow">Nest.js</a>
              ,&nbsp;
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer nofollow">PostgreSQL</a>
            </p>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/services/internet-of-things/nodejs.png" alt="Node.js" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/internet-of-things/nest.png" alt="Nest.js" />
              </li>
              <li className="technologies-item">
                <img src="/static/services/internet-of-things/postgresql.png" alt="PostgreSQL" />
              </li>
            </ul>
            <p>
              Hardware: C, C++,
              <a href="https://www.espressif.com/en/products/hardware/esp32/overview" target="_blank" rel="noopener noreferrer nofollow">ESP32</a>
            </p>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img style={{ maxHeight: '100px' }} src="/static/services/internet-of-things/images.png" alt="C" />
              </li>
              <li className="technologies-item">
                <img style={{ maxHeight: '100px' }} src="/static/services/internet-of-things/cpluspluslogo.png" alt="C++" />
              </li>
              <li className="technologies-item">
                <img style={{ maxHeight: '100px' }} src="/static/services/internet-of-things/esp32.png" alt="ESP32" />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Our IoT Solutions</h2>
          <img style={{ marginBottom: '20px' }} src="/static/services/internet-of-things/asama-logo.png" alt="Asama logo" />
          <p>
            <a href="https://asama.tech/eng" target="_blank" rel="noopener noreferrer nofollow">Asama</a>
            &nbsp;is an IoT employee tracking solution developed by KeenEthics. This system consists
            of fitness trackers, BLE beacons, artificial intelligence, and mobile app. It works
            in any industry where employers need to monitor movement or routes of employees,
            from industrial plants and constructions to restaurants and delivery services. This
            solution helps you as a manager or a business owner make sure that the employees are
            working actively throughout the day, not sleeping or wandering around, arriving on
            time, and leaving on time. KeenEthics specialists will install and configure the
            system of beacons, set up trackers and the mobile app, and instruct managers on how
            to use Asama.
          </p>
        </section>
        <section>
          <img src="/static/services/internet-of-things/asama-items.png" alt="Asama Items" />
          <CallToActionButton
            title="learn more"
            href="/contacts"
          />
          <p>
            Another company we have provided Internet of Things development services with is PREE.
            See the case study to learn more about it.
          </p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>These are some of the cloud applications that we have developed:</p>
          <Works works={webDevelopmentWorks} rounded />
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

export default ServicesInternetOfThings;
