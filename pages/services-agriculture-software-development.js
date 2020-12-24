import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart'
import OfferList from '../components/content/OfferList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

const ServicesAgricultureSoftwareDevelopment = () => {
  const servicesList = [
    {
      icon: '/static/services/services-agriculture-software-development/service-icon_1.png',
      title: 'Grazing Management Software',
      alt: 'Grazing Management Software'
    },
    {
      icon: '/static/services/services-agriculture-software-development/service-icon_2.png',
      title: 'Farm Management Software',
      alt: 'Farm Management Software'
    },
    {
      icon: '/static/services/services-agriculture-software-development/service-icon_3.png',
      title: 'Livestock Management Software',
      alt: 'Livestock Management Software'
    },
    {
      icon: '/static/services/services-agriculture-software-development/service-icon_4.png',
      title: 'Farm Accounting Platforms',
      alt: 'Farm Accounting Platforms'
    },
    {
      icon: '/static/services/services-agriculture-software-development/service-icon_5.png',
      title: 'Precision Agriculture Software Solutions',
      alt: 'Precision Agriculture Software Solutions'
    },
    {
      icon: '/static/services/services-agriculture-software-development/service-icon_6.png',
      title: 'Agriculture Trade Solutions',
      alt: 'Agriculture Trade Solutions'
    }
  ];

  const keenethicsList = [
    {
      title: "Empowering growth",
      desc: "Our specialists understand that a high-quality software solution is your path to success. By providing you with an efficient and effective product, we help your company grow and thrive."
    },
    {
      title: "Building value",
      desc: "Innovative agricultural solutions are the key to solving food supply issues, guaranteeing food safety, and ensuring climate sustainability. We appreciate your effort and support the values you promote."
    },
    {
      title: "Launching in a matter of weeks",
      desc: "We understand that time is a sensitive matter in such a competitive industry. By optimizing our partner engagement process, we make sure that the development starts in the shortest terms possible."
    },
    {
      title: "Bringing tech expertise",
      desc: "To build a scalable, reliable, and high-quality solution, you need developers with sound knowledge and expertise in software engineering. We are ready to offer you the best full-stack JavaScript developers."
    },
    {
      title: "Protecting your data",
      desc: "We are ready to ensure both legal and technical security of your app. Our software engineers will be working hand-in-hand with industry experts to make sure that your data safety cannot be compromised."
    },
  ]
  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">Agriculture Software Development </h1>
          <p className="text-center text-italic">Making the agricultural sphere smarter and more efficient</p>
          <CallToActionButton title="LEARN MORE" href="/contacts" />
        </section>

        <section>
          <h2>The Agriculture Industry</h2>
          <p>
            Agriculture has turned from the most ancient craft into one of the most advanced industries of
            today. Have you read about vertical gardening, AI-powered vegetable picking, or precision
            agriculture? These concepts completely changed the lives of farmers. Today, technology is
            not a benefit anymore — it is a necessity for their business to thrive. Farm management
            software is as usual as an online store or an accounting platform.
          </p>
          <p>
            Here at KeenEthics, we are eager to assist them. We have experience in helping a few
            European farming companies to start working smarter and more efficiently. We believe that
            the agriculture industry desperately needs technological innovation — especially in the era
            when the shortage of food supply is not a possibility but a matter of time.
          </p>
        </section>

        <section>
          <h2>Challenges in Agriculture Software Development</h2>
          <ul className="challenges-list">
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face" />
                CHALLENGES YOU FACE
              </h3>
              <b>Legal issues</b>
              <p>
                There are a lot of laws and standards your
                farm management software should comply
                with: FDA, FSIS, EPA, NPDES, and GHGRP.
                <br />
                <b>How do you make sure that your software is legally protected?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face" />
                SOLUTIONS WE OFFER
              </h3>
              <p>
                Our Business Analysts make sure that
                your software solution is compliant
                with all local and global laws. We will
                work hand-in-hand with you to
                prevent and solve all legal issues.
              </p>
            </li>

            <li className="challenges-item">
              <b>Mobility</b>
              <p>
                The life of a farmer is so active — you do
                not have much time to spend in front of a
                computer.
                <br />
                <b>How do you make your agricultural software more convenient?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                Along with web platforms, we offer hybrid
                mobile apps. Not only they
                are more convenient, but also the
                development of a hybrid app is more
                efficient than of a native one.
              </p>
            </li>

            <li className="challenges-item">
              <b>Continuous innovation</b>
              <p>
                The agriculture industry is one of the most
                quickly developed ones. Your company
                should keep up with innovations.
                <br />
                <b>How do you stay in line with ever-changing trends?</b>
              </p>
            </li>
            <li className="challenges-item">
              <p>
                After we launch the solution, we offer
                you continuous support for your app
                to be always up-to-date. Also, JS
                solutions we develop are scalable for
                your app to grow together with your
                company.
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
          <h2>Custom Agricultural Development Services We Offer</h2>
          <OfferList list={servicesList}/>
        </section>

        <section>
          <h2>Portfolio</h2>
          <div>
            <h3 className="text-center">My Grass Growth</h3>
            <p>
              This web platform aims to facilitate the lives of farmers. Using a set of user data and
              specific formulas, the app prepares forecasts on grazing and mowing paddocks and
              feeding herds. This way, the farmer does not have to go around their huge fields and
              monitor the growth of grass — this function is perfectly performed by My Grass Growth.
              The farm management software is relatively simple in terms of UI, but
              instead, it offers a powerful tool for analytics.
            </p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-web-development"><a>Web</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-back-end-meteor"><a>Meteor</a></Link>, Blaze, Mobile</div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Scrum</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 3 full-stack developers, 1 QA specialist, and 1 Project Manager.</div>
            </div>
            <Works works={works.filter(({ title }) => ['My Grass Growth'].includes(title))} />
          </div>
        </section>

        <section>
          <h2>Why choose KeenEthics?</h2>
          <WhyKeenethicsList list={keenethicsList} />
        </section>
      </div>
      <LetsStart/>
    </Layout>
  )
}

export default ServicesAgricultureSoftwareDevelopment;