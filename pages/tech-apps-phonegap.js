import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import LetsStart from '../components/about-us/LetsStart';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works, techApps } from '../main.config';

import Works from '../components/portfolio/works';

const ServicesWebDevelopmentMeteor = () => {
  const whyPhoneGap = [
    {
      icon: '/static/technologies/meteor/user.png',
      alt: 'Simple',
      description: (
        <>
          <b>Simple</b>
          <br />
          Cordova and PhoneGap let a developer build a mobile app with no
          knowledge of mobile technologies, only JavaScript, HTML, and CSS.
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/users.png',
      alt: 'Popular',
      description: (
        <>
          <b>Popular</b>
          <br />
          Both Cordova and PhoneGap are open-source projects. They have large
          communities of devoted developers, who constantly update and support
          the frameworks.
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/dimension.png',
      alt: 'Extensible',
      description: (
        <>
          <b>Extensible</b>
          <br />
          PhoneGap and Cordova are supported by multiple libraries,
          {' '}
          <Link href="https://phonegap.com/tool/page7/">
            <a rel="noreferrer nofollow" target="_blank">
              tools,
            </a>
          </Link>
          {' '}
          and
          {' '}
          <Link href="https://cordova.apache.org/plugins/">
            <a rel="noreferrer nofollow" target="_blank">
              plugins,
            </a>
          </Link>
          {' '}
          which may greatly facilitate the development and advance the software
          solution.
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/like.png',
      alt: 'Convenient',
      description: (
        <>
          <b>Convenient</b>
          <br />
          Cordova and PhoneGap let you bypass the app store approval and
          deployment process, which will save you a lot of time and effort.
          Updating a Cordova app may be as simple as updating a website.
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/geography.png',
      alt: 'Meteor',
      description: (
        <>
          <b>Universal</b>
          <br />
          The apps built with PhoneGap and Cordova can be used on all popular
          mobile operating systems, including iOS, Android, BlackBerry, and
          Windows Mobile.
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/payment.png',
      alt: 'Dimension',
      description: (
        <>
          <b>Cost-efficient</b>
          <br />
          Cross-platform development is by definition faster and cheaper than
          the native one. PhoneGap application development company lets you save
          on both development and maintenance.
        </>
      ),
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/technologies/meteor/image20.png',
      title: (
        <>
          PhoneGap application
          <br />
          development
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/image9.png',
      title: (
        <>
          PhoneGap applications
          <br />
          maintenance and support
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/image1.png',
      title: 'UI/UX development for PhoneGap',
    },
    {
      icon: '/static/technologies/meteor/image19.png',
      title: 'PhoneGap data management',
    },
    {
      icon: '/static/technologies/meteor/image14.png',
      title: (
        <>
          Custom PhoneGap mobile
          <br />
          development solutions
        </>
      ),
    },
    {
      icon: '/static/technologies/meteor/image6.png',
      title: 'PhoneGap migrating',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: (
        <>
          Large enterprises can afford to go native. If you own a start-up or a
          small or medium business, you should choose a more cost-efficient
          option. By offering Cordova application development and PhoneGap
          development services, we let you save on building a mobile app for
          your business. This is how we help your company grow.
        </>
      ),
    },
    {
      title: 'Building value',
      desc: (
        <>
          For the app to be not only affordable but also valuable, it has to
          perform impeccably. Cordova and PhoneGap apps are often associated
          with poor performance because there are a lot of inexperienced
          developers in the niche. KeenEthics specialists make sure that the app
          is high-quality and brings value.
        </>
      ),
    },
    {
      title: 'Launching in a matter of weeks',
      desc: (
        <>
          Cross-platform development is a star known for efficiency and speed.
          But what if we can do it even faster? We have optimized the partner
          engagement process so that we could start working on the project as
          early as possible. The sooner we start, the sooner your app goes to
          the market.
        </>
      ),
    },
    {
      title: 'Bringing tech expertise',
      desc: (
        <>
          KeenEthics professionals have a lot of experience with JavaScript and
          with mobile development in general. By involving software engineers in
          the process of idea discovery, we make sure that they understand what
          exactly is expected from a mobile app.
        </>
      ),
    },
    {
      title: 'Protecting your data',
      desc: (
        <>
          Along with quality and efficiency, there is one more important point
          that cannot go unnoticed. Data security is an essential aspect of
          Cordova development. Our experts take the necessary legal and
          technical measures to make sure that your app data and information of
          your users are safe.
        </>
      ),
    },
  ];

  const phoneGapWorks = works.filter(({ title }) => ['OneRemission', 'Pree', 'SelfLeaders'].includes(title));

  return (
    <Layout>
      <ContentNavigation image="app" points={techApps()} />
      <div className="content-block">
        <section>
          <h1 className="text-center">PhoneGap & Cordova App Development</h1>
          <p className="text-center text-italic">
            Using a cross-platform framework to let you save on mobile app
            development.
          </p>
          <CallToActionButton />
          <h2
            style={{ fontSize: '40px', fontWeight: 900, marginBottom: '1em' }}
          >
            2,5 times faster
          </h2>
          <p className="text-center">
            it is to develop a hybrid mobile app than a native app.
          </p>
        </section>
        <section>
          <h2>What Is PhoneGap and Cordova?</h2>
          <p>
            Cordova, also known as Apache Cordova, is a cross-platform mobile
            app development framework, which was introduced in 2009. PhoneGap is
            the most popular distribution of Apache Cordova. PhoneGap and
            Cordova can be used interchangeably — there is basically only one
            difference between them. Cordova is free and open source, and so is
            PhoneGap, but the latter belongs to Adobe. If for some reason you
            prefer one over the other, we will gladly comply with your request.
            For us as for Cordova & PhoneGap app development company, there is
            barely any difference.
          </p>
          <p>
            Cordova and PhoneGap application development offer a lot of
            benefits, chiefly — convenience and universality. Yet, these
            solutions are not a panacea. PhoneGap and Cordova are perfect for
            prototyping or for internal business applications, which serve as
            add-ons, not the core of your business. However, if a mobile app is
            in the essence of your business, you should choose native
            development instead.
          </p>
        </section>
        <section>
          <h2>Why PhoneGap and Cordova?</h2>
          <FeaturesList list={whyPhoneGap} />
          <CallToActionButton
            title="HIRE Meteor JS DEVELOPERS"
            href="/contacts"
          />
        </section>
        <section>
          <h2>What PhoneGap Development Services Do We Offer?</h2>
          <ul className="mobile-development-list">
            {whatDoWeOfferIcons.map(({ icon, title, href }) => (
              <li className="mobile-development-item" key={icon}>
                <figure>
                  <img src={icon} alt={title} />
                  <figcaption className="mobile-development-figcaption">
                    {href ? <a href={href}>{title}</a> : title}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>These are some web and mobile apps that we have developed: </p>
          <Works works={phoneGapWorks} />
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <LetsStart />
      </div>
    </Layout>
  );
};

export default ServicesWebDevelopmentMeteor;
