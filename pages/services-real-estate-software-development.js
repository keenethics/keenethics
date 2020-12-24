/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';

import { servicesWebDevelopmentTabs, works } from '../main.config';

const ServicesWebDevelopmentE = () => {
  const servicesList = [
    {
      icon: "/static/portfolio/services-real-estate-software-development/speech-bubble.png",
      title: "Real estate CRM software",
    },
    {
      icon: "/static/portfolio/services-real-estate-software-development/real-estate.png",
      title: "Financial management software",
    },
    {
      icon: "/static/portfolio/services-real-estate-software-development/balance.png",
      title: "Real estate ERP solutions",
    },
    {
      icon: "/static/portfolio/services-real-estate-software-development/access.png",
      title: "Custom real estate software solutions",
    },
    {
      icon: "/static/portfolio/services-real-estate-software-development/zoom.png",
      title: "Property management software",
    },
    {
      icon: "/static/portfolio/services-real-estate-software-development/real-estate-laptop.png",
      title: "AI and IoT-powered real estate software",
    },
  ]
  return (
    <Layout>
      <ContentNavigation image="web_development" points={servicesWebDevelopmentTabs()} />
      <div className="content-block">
        <section>
          <h1 className="text-center">Real Estate Software Development Services</h1>
          <p className="text-center text-italic">
            Automating routine tasks, making the market transparent, and bringing CRM to a new level
          </p>
          <CallToActionButton />
        </section>
        <section>
          <h2>Real Estate Software Development</h2>
          <p>
            Real estate is often considered as the most reliable industry sector. You do not know what to 
            invest in? Invest in real estate. And yet, this reliability and stability should not give you a false 
            impression that you can refrain from innovation and technological advancement. Reals estate 
            is the industry that greatly benefits from the tech progress. Most routine tasks are automated, 
            customer relationship management is brought to a new level, and the market becomes more transparent.
          </p>
          <p>
            In today’s world, if you want your real estate business to succeed, you have to augment it with a 
            software solution. It can be a simple landing page to advertise your property or a complex 
            AI-powered system to manage your property listing and calculate the up-to-date cost of it. 
            Whatever the case, we will be happy to help you with real estate software development.
          </p>
        </section>
        <section>
          <h2>Challenges in Real Estate Software Development</h2>
          <ul className="challenges-list">
            <li className="challenges-item">
              <h3><img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face"/>CHALLENGES YOU FACE</h3>
              <b>Security</b>
              <p>
                Real estate always involves large sums of money. Augmenting your business with a poor-quality software solution, you may endanger the security of your business.
              </p>
              <b>So how do you ensure financial safety?</b>
            </li>
            <li className="challenges-item">
              <h3><img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face"/>SOLUTIONS WE OFFER</h3>
              <ul>
                <li>Technical safety is achieved through a well-considered tech stack choice, high-quality development, and thorough Quality Assurance. You have to invest in a reliable software development team to protect your business and user data.</li>
              </ul>
            </li>
            <li className="challenges-item">
              <b>Usability</b>
              <p>
                Real estate always involves large sums of money. Augmenting your business with a poor-quality software solution, you may endanger the security of your business.
              </p>
              <b>How to ensure the best user experience?</b>
            </li>
            <li className="challenges-item">
              <ul>
                <li>Our professional UI/UX designers conduct usability testing and create elegant and user-friendly interfaces. Working hand-in-hand with the Business Analysis and software development teams, they ensure the optimal user experience.</li>
              </ul>
            </li>
            <li className="challenges-item">
              <b>Market competition</b>
              <p>
                Real estate always involves large sums of money. Augmenting your business with a poor-quality software solution, you may endanger the security of your business.
              </p>
              <b>How do you build a competitive software?</b>
            </li>
            <li className="challenges-item">
              <ul>
                <li>The real estate software development services that we offer include AI-powered and IoT-powered solutions development. Besides the development itself, we offer you idea validation services to get vital market insights.</li>
              </ul>
            </li>
          </ul>
          <h2>Do you agree with our solutions?</h2>
          <CallToActionButton title="Contact us" href="/contacts" />
        </section>

        <section>
          <h2>Education Software Development Services We Offer</h2>
          <ul className="we-offer-list">
            {
              servicesList.map(({ icon, title, href }) => (
                <li className="we-offer-item" key={href}>
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="we-offer-figcaption">
                      {
                        href ? <Link href={href}><a>{title}</a></Link> : title
                      }
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
        </section>

        <section>
          <h2>Portfolio</h2>
          <div>
            <h3>Knotel</h3>
            <p><a href="https://www.knotel.com/">Knotel</a> is a unique service for workspace management, based on the principles of a shared economy. The model they use for the commercial real estate somewhat resembles the one of Airbnb, and yet, it is something that no other real estate management software can provide. This platform is a perfect solution for workspace renters, tenant brokers, and real estate owners from all around the world.</p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-web-development"><a>Web</a></Link> and <Link href="/services-mobile-development"><a>mobile</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-back-end-meteor"><a>Meteor</a></Link>, <Link href="/tech-front-end-react"><a>React</a></Link>, <Link href="/tech-apps-react-native"><a>React Native</a></Link>, <Link href="/tech-data-base-mongo"><a>MongoDB</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Scrum</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 5 full-stack developers, 1 QA specialist, and 1 Project Manager.</div>
            </div>
            <Works works={works.filter(({ title }) => ['Knotel'].includes(title))} />
          </div>

          <div>
            <h3>PaceUp</h3>
            <p><a href="https://www.paceup.com/">Pace</a> is an AI-powered revenue management software for hospitality real estate. This platform offers advanced and convenient tools for cost analysis, forecasting, and reporting. By analyzing the current market trends, the hotel or hostel owner can adjust their pricing strategy to maximize revenue and inspire business growth. This real estate management software serves as a financial advisor of hotels and hostels owners.</p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-web-development"><a>Web</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-front-end-react"><a>React</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Waterfall</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 2 full-stack developers, 1 QA specialist, and 1 Project Manager.</div>
            </div>
            <Works works={works.filter(({ title }) => ['Paceup'].includes(title))} />
          </div>
        </section>
        
        <section>
          <h2>Why KeenEthics?</h2>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth</h3>
          <p>KeenEthics professionals invest themselves in your business success. We study your idea, analyze it, develop, and turn it into a perfectly functional final product. We believe that the product we give you is the key to your business growth.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value</h3>
          <p>We build our company on the principles of trust and transparency. The first and foremost value we offer is our honest and ethical approach to our partners — after all, we will not be able to help you succeed unless we trust each other.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks</h3>
          <p>Time efficiency is an essential factor of business success. Busy people have no time to go through endless circles of bureaucracy. The organizational structure of our company is aimed to make your customer experience as simple and efficient as possible.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise</h3>
          <p>All our software engineers are JS-oriented. By maintaining a narrow technology focus, we make sure that the quality of our services is impeccable. Our developers are experts in their field, so you can entrust them with your project.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data</h3>
          <p>Data safety is our key concern — we strive to keep your business and user data protected at all times by all means. Today’s competitive market does not forgive any information security mistakes, so we will not let them happen.</p>
        </section>

        <section>
          <h2>Now, let’s discuss your business idea!</h2>
          <CallToActionButton title="Contact us"/>
        </section>
      </div>
    </Layout>
  )
};

export default ServicesWebDevelopmentE;
