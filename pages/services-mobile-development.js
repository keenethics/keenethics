import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import PageTabs from '../components/content/tabs';

import { servicesMobileDevelopment, works } from '../main.config';
import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import CalendlyIframe from '../components/content/CalendlyIframe';

/* eslint-disable */
const ServicesMobileDevelopment = () =>  {
  const whyShouldYouGoMobile = [
    {
      icon: '/static/services/everywhere.svg',
      alt: 'everywhere icon',
      iconTitle: 'Phones are everywhere.',
      description: <p>Laptops and desktops are used mainly for education or work, while for all the other purposes, from shopping to socializing, people prefer using smartphones. As smartphones grow even “smarter”, sorry for the paradox, they seem to have the potential to completely squeeze computers out of everyday use.</p>,
    },
    {
      icon: '/static/services/dislike.svg',
      alt: 'dislike icon',
      iconTitle: 'Nobody is surprised by a mobile app.',
      description: <p>The absolute majority of applications if AppStore or Google Play are installed, opened once, and deleted because they are regular, there is nothing interesting about them, or, what is worse, they do not function as supposed to.</p>,
    },
    {
      icon: '/static/services/like.svg',
      alt: 'like icon',
      iconTitle: 'But your app can surprise everyone.',
      description: <p>Your app will leave the rows of install-open-and-delete applications if you trust your idea to a reliable partner. A company providing high-quality custom mobile application development services can help you to enter this market and to firmly establish yourself in it.</p>,
    },
    {
      icon: '/static/services/fast-forward.svg',
      alt: 'fast forward icon',
      iconTitle: 'Don’t stop here.',
      description: <p>Hire a company that will help you <Link href="/blog/1548151200000-voice-app-development"><a >develop a voice chatbot</a></Link> or integrate your application with your smartwatch, fitness bracelet, smart clock, kettle, lamp, or whatever it is that you need. Explore the possibilities that the world of mobile development and IoT provides you with.</p>,
    },
    {
      icon: '/static/services/search.svg',
      alt: 'search icon',
      iconTitle: 'Do you doubt whether your business idea is worth implementing?',
      description: <p>Let our developers create a <Link href="/services-proof"><a>Proof of Concept</a></Link> for you, and you will have this question answered by your users themselves.</p>,
    },
  ];
  const servicesList = [
    {
      icon: '/static/services/services-mobile-development/android.svg',
      title: 'Android app development',
      href: '/services-mobile-development-android',
    },
    {
      icon: '/static/services/services-mobile-development/ios-icon.svg',
      title: 'iOS app development',
      href: '/services-mobile-development-apple',
    },
    {
      icon: '/static/services/services-mobile-development/iot.svg',
      title: 'Internet of Things',
    },
    {
      icon: '/static/services/services-mobile-development/cross-platform.svg',
      title: 'Cross-platform development',
    },
  ];

  const mobileDevelopmentWorks = works.filter(({ title }) => {
    return ['Pree', 'ParkQX', 'Tetrami'].includes(title);
  });

  return (
    <Layout>
      <ContentNavigation image="mobile_development" />
      <PageTabs points={servicesMobileDevelopment()} />
      <div className="content-block">
        <section>
          <h1 className="text-center">Mobile App Development Services</h1>
          <p className="text-center text-italic">
            We offer exactly the applications that you need.
          </p>
          <CallToActionButton />
        </section>
        <section>
          <h2>What Is Mobile Development?</h2>
          <p>Due to the rapid growth of the smartphone market, mobile development is the most popular service in the IT industry, and the number of companies providing it is immense.</p>
          <p>What makes us different from the sweeping majority of such agencies is that we do not ask ourselves “<span className="text-italic">How to develop the app?</span>”. Instead, we ask “<span className="text-italic">Why to develop the app?</span>”.</p>
          <p>As a mobile application development company, we want to be sure that our products are actively used and dearly loved by the users and that they solve all the needs of the business owner. Therefore, our developers would be glad not only to follow your requirements but also to help you collect them if you do not have any. We want to make sure that the idea behind the final product is fully viable and destined to succeed.</p>
          <p>Here at KeenEthics, we offer custom mobile app development services. In our case, custom stands for the one that would fully meet your interests and our values: we strive to ensure the transparent development process and to provide the final product of the highest quality.</p>
        </section>

        <section>
          <h2>Why Should You Go Mobile?</h2>
          <ul className="services-icons--list">
            {
              whyShouldYouGoMobile.map(({ icon, alt, iconTitle, description }, key) => (
                <li key={key} className="services-icons--item">
                  <figure className="services-icons--figure">
                    <div>
                      <img src={icon} alt={alt} className="services-icons--img" />
                      <h3>{iconTitle}</h3>
                    </div>
                    <figcaption className="services-icons--figcaption">
                      {description}
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
          <CallToActionButton title="Request a proof of concept" />
        </section>

        <section>
          <h2>Why KeenEthics?</h2>
          <p>As a custom mobile app development company, we offer exactly the applications that you need.</p>

          <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Cutting edge.</h3>  
          <p>As nobody is surprised by an average mobile app, we offer you a progressive one. Progressive web applications combine the best functions of mobile and web apps, all for the best experience of the user. Fast, reliable, and engaging, easily-developed and resource-efficient — our apps will become the optimal solution both for your business and for your users.</p>

          <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Well-designed.</h3>  
          <p>People are judged by their appearance, and so are mobile applications. Our UI/UX designers are eager and ready to develop a unique outstanding design for your application.</p>

          <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Perfectly functional.</h3>  
          <p>Nothing can spoil the user experience more than an annoying software bug or an excessively long loading time. Not only we look for the best mobile app development solutions, but also we provide continuous maintenance and support to constantly improve the app.</p>

          <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Relevant.</h3>  
          <p>Creating a perfect technical solution is not enough for the app to be loved and popular. To ensure the best user experience and to provide all the necessary features and services without overloading the app with unnecessary stuff, our mobile app development team conducts a comprehensive discovery stage.</p>

          <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Social.</h3>  
          <p>The importance of Facebook, Instagram, and Twitter is the one you cannot deny. We make sure that all your wishes and expectations on the social integration of your app are fulfilled.</p>

          <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Compatible.</h3>  
          <p>You can see hundreds of people a day wearing smartwatches or fitness trackers, so why don’t you use it in your favor?  Wearable devices have already become a usual thing, and an ideal mobile application is the one that uses them to provide a better, more personalized service to the user.</p>

          <h3>These are some of the Node.js applications and websites we have developed:</h3>
          <Works works={mobileDevelopmentWorks} />
        </section>
        <CalendlyIframe />
      </div>
    </Layout>
  );
}

export default ServicesMobileDevelopment;