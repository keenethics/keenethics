import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#1f2a44';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">ParkQX</h2>
              <p className="description">ParkQX helps drivers find, reserve, and pay for a parking spot both in advance and on the go with a few simple taps.</p>
              <PortfolioTechnologyTags tags={['E-Commerce']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img style={{ width: '100%' }} src="/static/portfolio/parkqx/parkqx.jpg" alt="OneRemission" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <h2 className="title">What Is ParkQX?</h2>
            <p>
              It is an app for those tired of never getting a free parking space. ParkQX
              helps drivers find, reserve, and pay for a parking spot both in advance and
              on the go with a few simple taps. At the same time, it lets parking spot
              owners turn their unused parking space into money. Both lenders and renters
              are going to enjoy the platform since this business solution is beneficial for both.
            </p>
            <p>
              The goal of ParkQX is to make a parking routine easy, hassle-free,
              climate neutral, and convenient.
            </p>
            <img style={{ margin: '30px 0' }} src="/static/portfolio/parkqx/parkqx-content.jpg" alt="OneRemission App" />
            <h2>Our Cooperation</h2>
            <h3 className="red-italic-title">Challenges</h3>
            <p>
              Our client strives to focus on simplicity keeping the needs of their users
              in mind. When a driver needs a parking spot in a big city, he or she needs
              it immediately. So, we have decided not to cause the users any extra troubles,
              and we decided to make their experience as convenient and as fast as possible.
            </p>
            <p>
              Our work on this project is still in progress. The React Native version we
              have used is somewhat outdated, so there is a need to update packages.
              Also, the code is yet to be refactored.
            </p>
            <h3 className="red-italic-title">Our Team</h3>
            <p>
              This app has been created by one UI/UX designer, two professional JS developers,
              one skillful project manager, and one quality assurance specialist from KeenEthics.
            </p>
            <h3 className="red-italic-title">Technologies</h3>
            <p>
              The application has been developed for the
              <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-android">Android</Link></span>
              and
              <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-apple">iOS</Link></span>
              platforms. As for the development technologies, we use
              <span style={{ marginLeft: '.25em' }}><Link href="/tech-front-end-redux">Redux</Link></span>
              ,
              <span style={{ marginLeft: '.25em' }}><Link href="/services-web-development-node">Node.js</Link></span>
              ,
              <span style={{ marginLeft: '.25em' }}><Link href="/tech-data-base-mongo">MongoDB</Link></span>
              , Firebase, Twilio, and
              <span style={{ marginLeft: '.25em' }}><Link href="/tech-apps-react-native">React Native</Link></span>
              .
            </p>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/redux.png" alt="redux" />
              </li>
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/nodejs.svg" alt="nodejs" />
              </li>
            </ul>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/firebase.svg" alt="firebase" />
              </li>
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/mongodb.svg" alt="mongodb" />
              </li>
            </ul>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/twilio.svg" style={{ width: '90%' }} alt="twilio" />
              </li>
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/react-native.png" alt="react native" />
              </li>
            </ul>
            <h3 className="red-italic-title">Methodology</h3>
            <p>
              We have decided to use Scrum because there was no clear vision of the final product
              from the very beginning. Also, the project objectives were frequently updated,
              and the customer was willing to cooperate continuously.
            </p>
            <h2>What Makes ParkQX Special?</h2>
            <div>
              <img style={{ width: '500px' }} src="/static/portfolio/parkqx/parkqx-screens.gif" alt="parkqx screens" />
            </div>
            <p>
              Sign-up and login procedures, account verification and activation, “Remember me” and
              “Forgot password” are simple but perfect. There is also nothing special about the
              payment system, but it does fully serve its purpose.
            </p>
            <p>
              What is unusual about the app, however, is that it lets its users find, reserve, pay,
              and get guided to the nearest parking spot. While looking for a place to park their
              car, a user may enter the location manually or by dropping a pin on the map, select
              date, time, and duration of parking, choose vehicle type, check parking fee, and view
              pictures. Navigating to a parking spot is easy since the app provides a user with an
              interactive real-time map. Reservation blocks the parking spot for other users so that
              one may be sure that the place will not be taken upon their arrival. Shortly before
              the reservation ends, the user receives an expiry notification, and once they
              confirm that they are leaving, payment is withdrawn from their credit card. Favorite
              parking places can be saved and easily accessed in the future.
            </p>
            <p>
              Meanwhile, a lender may offer their parking space for rent by selecting a spot on the
              map, assigning the spot a number, uploading pictures, setting payment rate, adding a
              check-in and check-out schedule.  A user can easily switch roles between renter and
              lender. All users are granted full access to their parking data history.
            </p>
            <h2>Do You Have a Similar Project Idea?</h2>
            <CallToActionButton
              buttonBefore={(
                <Link
                  href="/portfolio?chosen=consumer%20apps"
                >
                  <button type="button" className="call-to-cation-btn -secondary">
                    Other case studies
                  </button>
                </Link>
              )}
            />
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
