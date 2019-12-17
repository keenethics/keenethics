import React from 'react';

import Link from 'next/link';
// import Slider from 'react-slick';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = 'linear-gradient(135deg,#071e40 0%,#662938 80%)';

// const sliderSettings = {
//   swipe: true,
//   slidesToShow: 1,
// };

const ProjectTetrami = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">Tetrami</h1>
              <p className="description">Start challenge against others & win discounts!</p>
              <PortfolioTechnologyTags tags={['Consumer apps', 'E-Commerce']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/tetrami/tetrami-main.jpg" alt="Tetrami" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section>
              <h2 className="title">What Is Tetrami?</h2>
              <p>
                While sales and discounts are major marketing strategies to increase sales and win
                customer loyalty, they are also a great chance for ordinary people to save a lot
                of money. People love discounts since they bring more satisfaction from shopping.
                Tetrami enables people to do what they love, so it is no surprise that the
                users love Tetrami back.
              </p>
              <p>
                Tetrami is a brand new “deal” shopping project with a unique discounting method,
                headquartered in King Of Prussia, PA, but serving the customers from all over
                the world. While Tetrami offers delivery only to the USA addresses, it does accept
                orders from international users on a condition they organize the shipping
                out of the United States on their own.
              </p>
            </section>
            <img
              src="/static/portfolio/tetrami/tetramix.png"
              alt="Tetrami"
              className="image-gaps"
              style={{ marginBottom: '50px' }}
            />
            {/* <div className="iphone-slider-wrap">
              <div className="iphone-slider">
                <Slider {...sliderSettings}>
                  <div>
                    <img src="/static/portfolio/tetrami/slide-1.jpg" alt="tetrami screenshot" />
                  </div>
                  <div>
                    <img src="/static/portfolio/tetrami/slide-2.jpg" alt="tetrami screenshot" />
                  </div>
                  <div>
                    <img src="/static/portfolio/tetrami/slide-3.jpg" alt="tetrami screenshot" />
                  </div>
                  <div>
                    <img src="/static/portfolio/tetrami/slide-4.jpg" alt="tetrami screenshot" />
                  </div>
                </Slider>
              </div>
              <img className="iphone-frame" src="/static/images/iphone7-frame.svg" alt="iphone" />
            </div> */}
            <section>
              <h2 className="title">Our Cooperation</h2>
              <h3 className="red-italic-title">Challenges</h3>
              <p>
                We have built the app from scratch, tested it, and deployed it. In fact, a great
                amount of work has been done as we optimized major app functions, and secured
                the online payment system. Moreover, Tetrami has decided to change horses midstream
                and go with an entirely different design and functionality. Eventually,
                we have managed to revamp and launch the app into production.
              </p>

              <h3 className="red-italic-title">Our Team</h3>
              <p>
                Our three leading software developers, one QA specialist, and one
                project manager have been helping Tetrami implement the idea.
              </p>

              <h3 className="red-italic-title">Technologies</h3>
              <p>
                The application has been developed for the
                <span style={{ marginLeft: '.25em' }}><Link href="/services-web-development">web</Link></span>
                ,
                <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-apple">iOS</Link></span>
                and
                <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-android">Android</Link></span>
                platforms. As for the technologies, we used
                <span style={{ marginLeft: '.25em' }}><Link href="/tech-back-end-meteor">Meteor</Link></span>
                , Blaze, Ionic, and
                <span style={{ marginLeft: '.25em' }}><Link href="/tech-front-end-angular">Angular</Link></span>
                .
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/android.svg" alt="android" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/ios.svg" alt="ios" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/meteor.svg" alt="meteor" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/ionic.svg" alt="ionic" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/angular.svg" alt="angular" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/blaze.svg" alt="blaze" />
                </li>
              </ul>

              <h3 className="red-italic-title">Methodology</h3>
              <p>
                We have used Kanban because the app has been developed from scratch, our team has
                been quite small. In addition, the customer has been eager to take
                an active part in the development process.
              </p>
            </section>

            <section>
              <h2>What Makes Tetrami Special?</h2>
              <p>
                A customer chooses a product from the list of suggested ones. These products include
                but are not limited to various electronic devices, such as voice assistant speakers,
                electric dental brushes, cameras, TVs, wireless earphones, or home appliances, as
                well as jewelry, makeup, gift cards, and a lot of other popular items. The list of
                offered goods and services is regularly updated, so monitoring it carefully, people
                can find the product of their dream and try to purchase it with a
                considerable discount.
              </p>
              <p>
                To do so, a person creates a special 4-characters-long promo code, challenges
                other users, and watches the discount dynamically grow. The promo code is made
                of 4 given variables, and each time a different user offers another one that
                does not match, the challenger receives a certain discount.
              </p>
              <img
                src="/static/portfolio/tetrami/tetrami-content.jpg"
                alt="Tetrami"
                className="image-gaps"
              />
              <p>
                As soon as the user is satisfied, he or she can make a purchase at a bargain price.
                However, once someone else creates the same promo code, the challenger’s
                one becomes unavailable.
              </p>
              <p>
                Each user is given 50 chances per day to participate in challenges. Once they are
                out of lives, they can earn additional ones by watching adds, responding to surveys,
                or sharing invitations via social media. All the payments are processed via PayPal –
                a popular online payments system.
              </p>
              <p>
                To sign up for Tetrami, one may use their
                <span style={{ marginLeft: '.25em' }}><a href="//www.facebook.com/tetramideals/" target="_blank" rel="noopener noreferrer nofollow">Facebook</a></span>
                ,
                <span style={{ marginLeft: '.25em' }}><a href="//twitter.com/tetramideals" target="_blank" rel="noopener noreferrer nofollow">Instagram</a></span>
                , or
                <span style={{ margin: '0 .25em' }}><a href="//www.instagram.com/tetramideals/" target="_blank" rel="noopener noreferrer nofollow">Twitter</a></span>
                accounts. Respectively, the platform has its accounts on all of these three
                networks, so feel free to check their Facebook, Twitter, and Instagram
                to learn more!
              </p>
            </section>

            <h2>Do You Have a Similar Project Idea?</h2>

            <CallToActionButton
              buttonBefore={(
                <a
                  href="//web.tetrami.com/"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <button type="button" className="call-to-cation-btn -secondary">
                    CHECK THE PROJECT
                  </button>
                </a>
              )}
            />
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectTetrami;
