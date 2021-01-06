import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import '../styles/services/services-financial-software-development.scss'

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import OfferList from '../components/content/OfferList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

const ServicesFinancialSoftwareDevelopment = () => {
  const servicesList = [
    {
      icon: '/static/services/services-financial-software-development/service-icon_1.png',
      title: 'Online Banking Websites',
      alt: 'Online Banking Websites'
    },
    {
      icon: '/static/services/services-financial-software-development/service-icon_2.png',
      title: 'Payment System Integration',
      alt: 'Payment System Integration'
    },
    {
      icon: '/static/services/services-financial-software-development/service-icon_3.png',
      title: 'Mobile Banking Solutions',
      alt: 'Mobile Banking Solutions'
    },
    {
      icon: '/static/services/services-financial-software-development/service-icon_4.png',
      title: 'Financial Security and Compliance Services',
      alt: 'Financial Security and Compliance Services'
    }
  ];

  const keenethicsList = [
    {
      title: "Empowering growth",
      desc: "At KeenEthics, we aim to help our partners succeed in their business endeavor. By communicating closely with the client and offering them high-quality software solutions, we bring them one step closer to business growth and success."
    },
    {
      title: "Building value",
      desc: "The essential values we offer are transparency and honesty — we strive to ensure trustful and friendly relationships with our partners. We also share the values you nurture in your organizations and invite you to join us in our social responsibility endeavor."
    },
    {
      title: "Launching in a matter of weeks",
      desc: "Time is a sensitive matter in software development. To achieve efficiency, we have optimized our partner engagement process to transition to the development phase in a couple of weeks. Yet, if you would like to spend more time briefing and onboarding, let’s do it."
    },
    {
      title: "Bringing tech expertise",
      desc: "Our specialists are armed with many years of technical experience and a strong desire to offer the best financial software development services to the client. A meticulous approach to quality and readiness to hear out your wishes — this is how our developers build exactly the solutions that you need."
    },
    {
      title: "Protecting your data",
      desc: "Data security is not something you can afford to compromise. To minimize safety risks for you and your users, we make sure that the software solution is invincible to technical errors, protected from cyber attacks, and compliant with laws and industry standards."
    },
  ]
  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">Banking and Financial Software Development Services</h1>
          <p className="text-center text-italic">Fostering innovation and bringing the world of banking and financial services one step closer to people</p>
          <CallToActionButton title="LEARN MORE" href="/contacts" />
        </section>

        <section>
          <h2>Finance and Banking Industry</h2>
          <p>
            The mysteries of the finance and banking industry have always been difficult to understand for people
            not directly involved in it. Bankers discuss their business affairs as if folding them into an envelope of
            secrets, while others look at the finance industry as if it was a rocket science.
          </p>
          <p>
            Here at KeenEthics, we aim to bring the world of banking and financial services one step closer to
            people. We develop intuitive and effective UI/UX design for web and mobile financial software
            solutions. Without compromising security, quality, or industry standards, we build elegant and
            user-friendly financial services software.
          </p>
          <p>
            If you need a reliable and lucrative banking software solution — we are here to help. We offer you
            high-quality FinTech software development — investment, trading, personal finance management, and
            banking software services.
          </p>
        </section>

        <section>
          <h2>Challenges in Finance and Banking Software Development</h2>
          <ul className="challenges-list">
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face" />
                CHALLENGES YOU FACE
              </h3>
              <b>Data security</b>
              <p>
                The number one concern of banking customers
                is the security of their personal and financial
                information.
                <br />
                <b>How can you protect your customers and their data?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face" />
                SOLUTIONS WE OFFER
              </h3>
              <p>
                You should ensure the technical security
                of your software solution to make it
                invincible to errors or cyber attacks. Also,
                guarantee compliance with industry
                standards and legal requirements.
              </p>
            </li>

            <li className="challenges-item">
              <b>User experience</b>
              <p>
                Banking software solutions are difficult by
                definition. The functionality is complicated as
                the industry requires.
                <br />
                <b>How do you make the lives of your users a bit easier?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                You can improve the experience of your
                users through effective UI and UX design.
                Our professionals will help you build an elegant and easy-to-use FinTech
                solution, should it be web or mobile.
              </p>
            </li>

            <li className="challenges-item">
              <b>Integration</b>
              <p>
                FinTech solutions rarely exist on their own —
                they often must be integrated with ecommerce,
                travel, elearning, and other websites.
                <br />
                <b>How do you ensure seamless and reliable integration?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                Integration is achieved through research
                and quality excellence. Our engineers
                work-in-hand with BAs to make sure that
                the application is compatible with all
                the necessary APIs and services.
              </p>
            </li>

            <li className="challenges-item">
              <b>Stability</b>
              <p>
                The architecture of a banking app should be
                stable and reliable for it not to go down under
                any circumstances.
                <br />
                <b>How do you ensure the stability of a FinTech solution?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                Our developers help you choose the
                more reliable and secure tech stack.
                Through careful architecture planning
                and thorough QA, we ensure you the
                utmost stability.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Do you agree with our solutions?</h2>
          <CallToActionButton
            title="SOLVE A CHALLENGE"
            href="/contacts"
          />
        </section>

        <section>
          <h2>Custom Financial Software Development Services We Offer</h2>
          <OfferList list={servicesList}/>
        </section>

        <section>
          <h2>Portfolio</h2>
          <div>
            <h3 className="text-center">BankerAdvisor</h3>
            <p>
              BankerAdvisor is an investment banking tool from the USA. The founder of BankerAdvisor — a
              well-experienced banker and financial advisor — asked himself why there is no such solution for
              bankers like TripAdvisor for travelers. This is how the idea of BankerAdvisor was born. This platform is
              innovative, and it lets users make banking and financial services decisions with the trust and
              confidence of peer reviews. At the same time, by claiming their profile on BankerAdvisor, banks and
              investment management firms can increase their visibility on the market and promote their services to
              a wider audience. Our financial software development services at BankerAdvisor stretched through the
              full-cycle of banking software development — from the idea discovery up to support and marketing.
            </p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-web-development"><a>Web</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/services-web-development-node"><a>Node</a></Link>, <Link href="/tech-back-end-express"><a>Express</a></Link>, Redux, Keystone, <Link href="/tech-front-end-react"><a>React</a></Link>, <Link href="/tech-data-base-mongo"><a>MongoDB</a></Link>, Mongoose, AWS, CSS</div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Scrum</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 3 full-stack developers, 1 Quality Assurance specialist, 1 Project Manager, 1 Marketing specialist.</div>
            </div>
            <Works works={works.filter(({ title }) => ['BankerAdvisor'].includes(title))} />
          </div>
        </section>

        <section>
          <h2>Why choose KeenEthics?</h2>
          <WhyKeenethicsList list={keenethicsList} />
        </section>

        <section>
          <h1 className="text-center">Now, let’s discuss your business idea!</h1>
          <CallToActionButton title="Contact Us" href="/contacts" />
        </section>
      </div>
    </Layout>
  )
}

export default ServicesFinancialSoftwareDevelopment;