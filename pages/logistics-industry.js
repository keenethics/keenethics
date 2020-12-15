import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import OfferList from '../components/content/OfferList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';
import LetsStart from '../components/about-us/LetsStart';

const IndustriesLogisticsSoftwareDevelopment = () => {
  const weOfferList = [
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_1.png',
      title: 'Supply Chain Solutions',
      alt: 'Supply Chain Solutions'
    },
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_2.png',
      title: 'Resources Management Systems',
      alt: 'Resources Management Systems'
    },
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_3.png',
      title: 'Navigation Software',
      alt: 'Navigation Software'
    },
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_4.png',
      title: 'Invertory Management Software',
      alt: 'Invertory Management Software'
    },
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_5.png',
      title: 'Transportation Software',
      alt: 'Transportation Software'
    },
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_6.png',
      title: 'Accounting & Reporting Software',
      alt: 'Accounting & Reporting Software'
    },
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_7.png',
      title: 'Custom Logistics Solutions',
      alt: 'Custom Logistics Solutions'
    },
    {
      icon: '/static/industries/logistics-software-development/we-offer-icon_8.png',
      title: 'Warehouse Solutions',
      alt: 'Warehouse Solutions'
    },
  ];

  const keenethicsList = [
    {
      title: "Empowering growth",
      desc: "We understand the importance of continual improvement and modernization: we are here to expand your business opportunities and build an innovative tech solution for you."
    },
    {
      title: "Building value",
      desc: "Here at KeenEthics, we care not only about the commercial success of your business but also about the idea behind your project and the values you cultivate."
    },
    {
      title: "Launching in a matter of weeks",
      desc: "Since time is one of the key assets of modernity, our specialists will not waste it — we are ready to start working on your project in the shortest terms!"
    },
    {
      title: "Bringing tech expertise",
      desc: "Our developers are known and respected for their professional competence, dedication, and the desire to make one’s path to success easier."
    },
    {
      title: "Protecting your data",
      desc: "We aim to provide you with really effective, innovative, and secure logistics software solutions. With KeenEthics, you can be sure that your data is in safe hands, both legally and technically."
    },
  ]
  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">Logistics Software Solutions</h1>
          <p className="text-center text-italic">Embodying goal-oriented values and taking your business to a new level</p>
          <CallToActionButton title="LEARN MORE" href="/contacts" />
        </section>

        <section>
          <h2>Logistics Industry</h2>
          <p>
            Today, logistics is considered one of the fastest-growing industries in the world. It
            prepares the ground for both international and local trade. Under the conditions of
            the pandemic, the need for logistics and transportation software development is
            only rising. Just imagine the scope of the industry, taking into account that people
            now order most of their goods online.
          </p>
          <p>
            As a result, businesses feel the need to expand their technological capabilities to
            reach a wider audience and increase their representation. Yet, rapid growth means
            constant changes. To meet market demands and stand out from the competition,
            logistics businesses should keep pace with the latest tech innovations.
          </p>
          <p>
            Making your logistics business more tech-oriented saves money, time, and effort
            and boosts the effectiveness of both internal and external processes. Software
            developers can help you transform the way you view your business, improving the
            quality of service delivery from the point of production to the point of consumption.
          </p>
        </section>

        <section>
          <h2>Challenges in Logistics Software Development</h2>
          <ul className="challenges-list">
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face" />
                CHALLENGES YOU FACE
              </h3>
              <b>Lack of Integration</b>
              <p>
                Imagine the situation: your client cancels an
                order, and you should inform your
                employees that the order is dismissed. Yet,
                informing other people takes time, and
                workers have already started the delivery
                process. You lose money for the
                organization and tracking. You lose time.
                You make all your system function messy.
                <br />
                <b>So how can you prevent such information gaps?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face" />
                SOLUTIONS WE OFFER
              </h3>
              <p>
                As a software development company, we
                can build a platform that will serve as a
                single logistics management system.
                Using this system, you will be able to
                track and exchange information about
                the transportation stages and the delivery
                process. You will save time and minimize
                the risks of inconsistencies, ensuring the
                effective functioning of your company.
              </p>
            </li>

            <li className="challenges-item">
              <b>Data overload</b>
              <p>
                Yes, storing information about logistics
                processes and their financial aspect on your
                PCs is more secure and convenient than
                keeping thousands of documents in folders.
                However, the same data should be shared
                by a number of people, and sending emails
                or manually notifying employees about
                updates are no longer an option.
                <br />
                <b>So what are the ways of diminishing data overload?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                Using applications and platforms for
                storing your data is a helpful way of
                reducing information overload. A
                powerful resource management platform
                will not only increase performance but
                also boost the company’s image in the
                eyes of clients. Seeing that you
                modernize your business and make your
                workers’ routine more pleasant, a
                customer will build a positive view of
                your company as a progressive and
                growing business.
              </p>
            </li>

            <li className="challenges-item">
              <b>Outdated mechanisms</b>
              <p>
                As an owner of a logistics business, you are
                aware of the challenges that come with a
                lack of integration. Companies that neglect
                the importance of the technological basis
                manually control data transferring from one
                department to another. It often happens
                that information flow within a company is
                disrupted, which leads to significant losses
                and errors in the delivery process.
                <br />
                <b>So what can be done to synchronize data?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                Automation is the key to success. Still
                doubting whether you need software for
                your logistics business? Think about the
                volume of time you lose while dealing
                with tasks that can and should be
                automated. For example, automatic
                reminders about the geolocation of your
                shipper will make communication
                between departments twice easier.
              </p>
            </li>

            <li className="challenges-item">
              <b>The need to reduce costs</b>
              <p>
                There is a direct relation between the
                quality of work and the volume of tasks
                assigned to a person. The more duties your
                employees have, the less effectively they
                will perform. Moreover, the more
                obligations your employees have, the more
                costs you spend on salaries and external
                services.
                <br />
                <b>So how can you save costs and time?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                Our logistic management software
                services are aimed to reduce your costs
                long-term. We will develop a platform
                that will perform many tasks for your
                employees. They will track all the
                updates, all the management data, and
                all recent changes in one place.
                Estimating how much money you spend
                on unnecessary and minor tasks and how
                much time your workers devote to
                performing them, you will see that
                becoming more tech-oriented can make
                a difference.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Logistics Software Development Services We Offer</h2>
          <OfferList list={weOfferList}/>
        </section>

        <section>
          <h2>Portfolio</h2>
          <div>
            <h3 className="text-center">ParkQX</h3>
            <p>
              ParkQX is an example of a logistics app that embodies the value of space and time
              in the modern sense. This innovative tech solution is developed for those who get
              bored with looking for a free parking space every day. Using this application, people
              can become either Renters or Lenders. If one chooses to be a Renter, they search,
              book, and pay for a parking spot with the help of ParkQX. Meantime, if you are a
              Lender, you can offer your parking space in exchange for money. Great benefits for
              everyone!
            </p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: Android and iOS</div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: Redux, Node.js, MongoDB, Firebase, Twilio, React Native Maps, React Native Push Notifications</div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Scrum</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 1 UI/UX designer, 2 full-stack developers, 1 QA specialist, and 1 Project Manager.</div>
            </div>
            <Works works={works.filter(({ title }) => ['ParkQX'].includes(title))} />
          </div>

          <div>
            <h3 className="text-center">Pree</h3>
            <p>
              This project occupies an important place in our portfolio since it can be used for
              both everyday purposes and more global transportation goals. Preliminarily, the aim
              of Pree is to help users find things that they often lose. Developed by analogy with
              iBeacon protocol, the Pree device is attached to users’ keys, car, bag, etc. People
              can check the device’s location using their smartphones and explore the information
              in their accounts. In perspective, Pree can change the perception of the notion of
              location and become an effective solution for global location-tracking in one’s
              logistics scheme.
            </p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: Android and iOS</div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: Node.js, MongoDB, Express, Ionic, Cordova, BLE, Google Maps, Geolocation</div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Agile</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 1 PM, 1 BA, 2 developers, and 1 QA.</div>
            </div>
            <Works works={works.filter(({ title }) => ['Pree'].includes(title))} />
          </div>
        </section>

        <section>
          <h2>Why choose KeenEthics?</h2>
          <p className='text-center'>Being a logistics software development company, KeenEthics aims to make your business doubly effective and powerful.</p>
          <WhyKeenethicsList list={keenethicsList} />
        </section>
      </div>
      <LetsStart />
    </Layout>
  )
}

export default IndustriesLogisticsSoftwareDevelopment;
