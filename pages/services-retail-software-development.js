import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import Works from '../components/portfolio/works';

import { servicesWebDevelopmentTabs, works } from '../main.config';

const ServicesWebDevelopmentE = () => (
  <Layout>
    <ContentNavigation image="web_development" points={servicesWebDevelopmentTabs()} />
    <div className="content-block">
      <section>
        <h1 className="text-center">Retail Software Development Services</h1>
        <p className="text-center text-italic">
          Solving retail challenges associated with medical responsibility, patient ethics, high
          costs, technological advancement, and holistic approach
        </p>
        <CallToActionButton />
      </section>
      <section>
        <h2>Retail Industry</h2>
        <p>
          Life is getting busier and faster. People have neither time nor opportunity to
          spend their time shopping for clothes, groceries, electronics, cosmetics, or
          furniture. It is much easier to order food online and get it delivered right
          to your door. Booking a hotel suite and buying tickets for a holiday trip also
          went 100 percent online.In 2023, the industry is about to reach $30 trillion
          in global revenue, compared to $23 trillion in 2017. This thousands-billion-dollar
          industry provides numerous business opportunities for those who choose to enter it.
        </p>
        <p>
          There are 6 types of retail software solutions:
          <br />
          <b>#1 B2B</b>
            &nbsp;– Business-to-Business
          <br />
          <b>#2 B2C</b>
            &nbsp;– Business-to-Consumer
          <br />
          <b>#3 B2A</b>
            &nbsp;– Business-to-Administration
          <br />
          <b>#4 C2B</b>
            &nbsp;– Consumer-to-Business
          <br />
          <b>#5 C2C</b>
            &nbsp;– Consumer-to-Consumer
          <br />
          <b>#6 P2P</b>
            &nbsp;– Peer-to-Peer
          <br />
        </p>
      </section>
      <section>
        <h2>Challenges in Retail Development Services</h2>
        <ul className="challenges-list">
          <li className="challenges-item">
            <h3>
              <img
                src="/static/services/services-education-software-development/challenges-you-face.png"
                alt="Challanges you face"
              />
              Challenges you face
            </h3>
            <b>Digital transformation</b>
            <p>
              Transitioning your business into the online sphere can be complicated if you
              have little experience in software development. At this point, you need to
              make sure that your digital and physical stores are fully aligned.
              <br />
              <strong>
                So how can you ensure that transitioning is smooth and cost-efficient?
              </strong>
            </p>
          </li>
          <li className="challenges-item">
            <h3>
              <img
                src="/static/services/services-education-software-development/solutions-we-offer.png"
                alt="Solutions we offer"
              />
              Solutions we offer
            </h3>
            <ul>
              <li>
                Employ a chatbot to automate and personalize customer support according
                to the needs of your customers.
              </li>
              <li>
                Send a weekly newsletter to keep your customers engaged and informed.
              </li>
              <li>
                Improve data collection and analysis technology to offer your customers
                exactly the goods or services that they need.
              </li>
            </ul>
          </li>
          <li className="challenges-item">
            <b>Communication</b>
            <p>
              While running a physical store, you hire shopping assistants and consultants
              to talk to your customers, give them recommendations, and collect their feedback.
              Once you open an online store, how do you make sure that your business does
              not lose the personal touch with the target market? In other words,&nbsp;
              <strong>
                how can you reach your customers when running a digital retail platform?
              </strong>
            </p>
          </li>
          <li className="challenges-item">
            <ul>
              <li>
                Hire a retail software development team to build a robust product customized
                for the needs of your business.
              </li>
              <li>
                Align your retail software solutions with your internal sales channels.
              </li>
              <li>
                Inform your loyal customers about the transition of your business into the online
                sphere.
              </li>
              <li>
                Communicate with your customers via blogs, newsletters, personal messages,
                or calls.
              </li>
            </ul>
          </li>
          <li className="challenges-item">
            <b>Payment model</b>
            <p>
              Financial operations are an essential part of your business. Choosing a payment model
              may be hard. Existing methods differ in terms of safety features, costs,
              opportunities, localization, and convenience.
              <br />
              <strong>What is the best payment model to choose for your retail business?</strong>
            </p>
          </li>
          <li className="challenges-item">
            <ul>
              <li>
                <a
                  href="https://www.paypal.com/ua/home"
                >
                  PayPal
                </a>
                &nbsp;– available in 200 countries, 8 payment methods, 2.9% fee plus $0.30 per
                transaction.
              </li>
              <li>
                <a
                  href="https://www.braintreepayments.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Braintree
                </a>
                &nbsp;– available in 46 countries, 18 payment methods, 2.9% fee.
              </li>
              <li>
                <a
                  href="https://stripe.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Stripe
                </a>
                &nbsp;– available in 26 countries, 14 payment methods, 2.9% fee plus $0.30 per
                incoming transaction.
              </li>
              <li>
                and&nbsp;
                <a
                  href="https://www.entrepreneur.com/article/286006"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  many others
                </a>
                ...
              </li>
            </ul>
          </li>
          <li className="challenges-item">
            <b>Data safety</b>
            <p>
              Information leaks, cybercrimes, and identity thefts are among the most dangerous
              threats for Internet users and business owners. When moving your business online,
              you definitely want to make sure that it is not going to fall victim to
              cybercriminals.
              <br />
              <strong>How can you be sure that your idea, data, and resources are safe?</strong>
            </p>
          </li>
          <li className="challenges-item">
            <ul>
              <li>
                Closely follow&nbsp;
                <a
                  href="/blog/1543388400000-your-data-is-safe-in-ukraine"
                  target="_blank"
                >
                  data security regulations
                </a>
                &nbsp;for retail development.
              </li>
              <li>
                Choose a reliable payment model.
              </li>
              <li>
                Integrate your retail platform only with secure social networking websites.
              </li>
              <li>
                Let your users, both buyers and sellers, sign a comprehensive privacy agreement.
              </li>
            </ul>
          </li>
          <li className="challenges-item">
            <b>Technological advancement</b>
            <p>
              Technologies are changing the world at an immense pace. Falling behind
              innovations equals losing the competition.
              <br />
              <strong>
                How can you ensure that the app you have developed recently will not be
                outdated in a short period of time?
              </strong>
            </p>
          </li>
          <li className="challenges-item">
            <ul>
              <li>
                Implement AR/VR technologies to improve your customer experience.
              </li>
              <li>
                Design your platform as a&nbsp;
                <a
                  href="/tech-apps-progressive-web-apps"
                  target="_blank"
                >
                  progressive web app
                </a>
                &nbsp;to make your app faster, more reliable, and engaging.
              </li>
              <li>
                Integrate a&nbsp;
                <a
                  href="/blog/1548151200000-voice-app-development"
                  target="_blank"
                >
                  voice assistant
                </a>
                &nbsp; into your platform.
              </li>
              <li>
                To improve data collection and analysis processes and to boost the visibility of
                your physical store, implement an&nbsp;
                <a
                  href="/blog/1554793200000-indoor-positioning-in-retail"
                  target="_blank"
                >
                  indoor positioning system
                </a>
                .
              </li>
            </ul>
          </li>
        </ul>
        <h2>Do you agree with our solutions?</h2>
        <CallToActionButton
          title="SOLVE A CHALLENGE"
          href="/contacts"
        />
      </section>
      <section>
        <h2>Custom Retail Development Services We Offer</h2>
        <ul className="mobile-development-list">
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/development.png"
                alt="Ecommerce Web Development Services and Design"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                Retail Web Development Services and Design
              </figcaption>
            </figure>
          </li>
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/deployment2.png"
                alt="Online Store Maintenance and Support"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                Online Store Maintenance and Support
              </figcaption>
            </figure>
          </li>
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/platform.png"
                alt="Ecommerce Mobile App Design and Development"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                Retail Mobile App Design and Development
              </figcaption>
            </figure>
          </li>
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/security.png"
                alt="Payment and Delivery System Integration"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                Payment and Delivery System Integration
              </figcaption>
            </figure>
          </li>
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/web.png"
                alt="Online Store Migration"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                Online Store Migration
              </figcaption>
            </figure>
          </li>
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/ecommerce.png"
                alt="Online Shopping Cart Development"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                Online Shopping Cart Development
              </figcaption>
            </figure>
          </li>
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/interaction.png"
                alt="Customer Management System Optimization"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                Customer Management System Optimization
              </figcaption>
            </figure>
          </li>
          <li className="mobile-development-item">
            <figure>
              <img
                src="/static/pages/ecommerce-development-services/seo-and-web2.png"
                alt="SEO Optimization"
                width="100"
                height="100"
              />
              <figcaption className="mobile-development-figcaption">
                SEO Optimization
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <section>
        <h2>Portfolio</h2>
        <div>
          <h3>Tetrami</h3>
          <p>
            Tetrami is a brand new “deal” shopping project with a unique discounting method,
            where people can find the product or service they need and try to purchase it with
            a considerable discount. While this retail business offers delivery only to the
            USA addresses, it does accept orders from other countries if users organize shipping on
            their own.
          </p>
          <div style={{ marginBottom: '5px' }}>
            <b>Platform</b>
            :&nbsp;
            <a href="/services-web-development" target="_blank">Web</a>
            ,&nbsp;
            <a href="/services-mobile-development-android" target="_blank">Android</a>
            , and&nbsp;
            <a href="/services-mobile-development-apple" target="_blank">iOS</a>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <b>Technologies</b>
            :&nbsp;
            <a href="/tech-back-end-meteor" target="_blank">Meteor</a>
            , Blaze, Ionic, and&nbsp;
            <a href="/tech-front-end-angular" target="_blank">Angular</a>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <b>Methodology</b>
            : Kanban
          </div>
          <div style={{ marginBottom: '25px' }}>
            <b>Team</b>
            : 3 full-stack developers, 1 QA specialist, and 1 Project Manager.
          </div>
          <Works
            works={works.filter(({ title }) => ['Tetrami'].includes(title))}
            rounded
          />
        </div>
      </section>
      <section>
        <div>
          <h3>ParkQX</h3>
          <p>
            The goal of ParkQX is to make parking routine easy, hassle-free,
            climate neutral, and convenient. This e-commerce software helps drivers (Renters) find,
            book, and pay for a parking spot with their credit card in a few simple taps.
            At the same time, it lets parking spot owners (Lenders) turn their unused
            parking space into money.
          </p>
          <div style={{ marginBottom: '5px' }}>
            <b>Platform</b>
            :&nbsp;
            <a href="/services-mobile-development-android" target="_blank">Android</a>
            &nbsp;and&nbsp;
            <a href="/services-mobile-development-apple" target="_blank">iOS</a>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <b>Technologies</b>
            : Redux,&nbsp;
            <a href="/services-web-development-node" target="_blank">Node.js</a>
            ,&nbsp;
            <a href="/tech-data-base-mongo" target="_blank">MongoDB</a>
            , Firebase, Twilio,&nbsp;
            <a href="/tech-apps-react-native" target="_blank">React Native Maps, React Native Push Notifications</a>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <b>Methodology</b>
            : Scrum
          </div>
          <div style={{ marginBottom: '25px' }}>
            <b>Team</b>
            : 1 UI/UX designer, 2 full-stack developers, 1 QA specialist, and 1 Project Manager.
          </div>
          <Works
            works={works.filter(({ title }) => ['ParkQX'].includes(title))}
            rounded
          />
        </div>
      </section>
      <section>
        <h2>Why KeenEthics?</h2>
        <p>
          As a retail website development company, we are devoted to the needs of
          your business and the best interests of your users.
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span>
          &nbsp;Empowering growth
        </h3>
        <p>
          We help companies requesting retail software solutions grow. We develop
          customized e-commerce software solutions to help them retain their customers.
          Besides, we offer SEO-optimization services for their websites.
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span>
          &nbsp;Building value
        </h3>
        <p>
          We believe in business ethics and transparency. As a retail software development company,
          we help our partners fully comply with ethical guidelines and data security
          regulations to ensure the best experience for their customers.
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span>
          &nbsp;Launching in a matter of weeks
        </h3>
        <p>
          We are willing to start working on your project as fast as possible. Thus, we
          promptly provide you with a team of full-stack software developers, QA specialists,
          and UI/UX designers. Led by a dedicated PM, they will offer you the best retail
          development services.
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span>
          &nbsp;Bringing tech expertise
        </h3>
        <p>
          Our highly skilled retail software development team is ready to offer&nbsp;
          <a href="/services-mobile-development" target="_blank">mobile app development</a>
          &nbsp;and&nbsp;
          <a href="/services-web-development" target="_blank">web platform development</a>
          &nbsp;services. We are also willing to assist you with&nbsp;
          <a href="/tech-apps-progressive-web-apps" target="_blank">progressive web apps</a>
          &nbsp;or&nbsp;
          <a href="/services-chatbots-artificial-intelligence" target="_blank">chatbots</a>
          .
        </p>

        <h3 className="red-italic-title">
          <span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span>
          &nbsp;Protecting your data
        </h3>
        <p>
          We greatly value your project idea, so we abide by all the&nbsp;
          <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank">data security</a>
          &nbsp;regulations. We will respect your desire to stay private about ecommerce development
          services if you choose to sign a non-disclosure agreement.
        </p>
      </section>
      <section>
        <h2>Now, let’s discuss your business idea!</h2>
        <CallToActionButton title="CONTACT US" />
      </section>
    </div>
  </Layout>
);

export default ServicesWebDevelopmentE;
