/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import CallToActionButton from '../components/content/CallToActionButton';
import LetsStart from '../components/about-us/LetsStart';
import FeaturesList from '../components/content/FeaturesList';
import Works from '../components/portfolio/works';

import { techFrontEnd, works } from '../main.config';

const whyAngularJs = [
  {
    description: 'Reliable.',
    additionalText: 'Angular is supported by Google – a company with an exceptional reputation, which ensures the long-term support of this JavaScript framework and regularly releases improvements. An extended developer community also facilitates project development and support experience.',
  },
  {
    description: 'Effective.',
    additionalText: 'Angular used to perform worse than other frameworks, such as React, because of bidirectional data binding that it uses. However, the most recent update brought Angular back into the competition. Today, it is one of the best-performing web development JS frameworks.',
  },
  {
    description: 'Scalable.',
    additionalText: 'Angular apps are TypeScript-based and have a fixed structure. It makes Angular more suitable for larger projects and ensures the scalability. Also, since Angular is a thoroughly documented and standardized programming language, an Angular development team can easily start working on the already existing project.',
  },
  {
    description: 'Self-sufficient.',
    additionalText: 'Angular does not require any additional libraries or modules to be used. The framework has all the features and functions necessary for a full-fledged web and mobile development. The usage of Ionic or NativeScript for mobile development is optional.',
  },
  {
    description: 'Multifunctional.',
    additionalText: 'Angular supports dependency injection, bidirectional data binding, data mutability, change detection, component-based routing, and form validation. All the essential functions can be implemented with the means of the Angular package.',
  },
  {
    description: 'UI-Friendly.',
    additionalText: 'Angular has an embedded Material Design Toolset. It features numerous buttons, form controls, layouts, and pop-ups. The UI configuration process is simpler and more effective with Angular development services.',
  },
];

const servicesList = [
  {
    icon: '/static/services/node-js/node-js-web-and-application-development.png',
    title: 'AngularJS mobile app and web development',
  },
  {
    icon: '/static/services/node-js/node-js-data-management.png',
    title: 'AngularJS data management',
  },
  {
    icon: '/static/services/node-js/custom-node-js-software-development-solutions.png',
    title: 'Custom AngularJS software development solutions',
  },
  {
    icon: '/static/services/node-js/node-js-migrating.png',
    title: 'AngularJS migrating',
  },
  {
    icon: '/static/services/node-js/ui-ux-development-for-node-js.png',
    title: 'UI/UX development for AngularJS',
  },
  {
    icon: '/static/services/node-js/node-js-applications.png',
    title: 'AngularJS applications maintenance and support',
  },
];

const TechBackEndExpress = () => (
  <Layout>
    <ContentNavigation
      image="be"
      points={techFrontEnd()}
    />
    <div className="content-block">
      <section>
        <h1 className="text-center">AngularJS Development Services</h1>
        <p className="text-center text-italic">Using the scalable, reliable, self-sufficient, and multifunctional framework.</p>
        <CallToActionButton />
      </section>
      <section>
        <h2>What Is AngularJS?</h2>
        <p>Angular is an open-sourced web and mobile development JS framework. Angular <b>is actively supported by Google</b> and an extended community of developers.</p>
        <p>The initial version of Angular was introduced in 2010, but it failed to meet developers’ expectations because of excessive complexity. In September 2016, Angular 1.0 was completely rewritten, and the absolutely new Angular 2.0 was introduced to the world. Today, the sixth version of Angular, which is a descendant of Angular 2.0, is in the game.</p>
        <p>AngularJS technology <b>can be used for both mobile and web development</b>. However, a great share of work in <Link href="/services-mobile-development">mobile development</Link> is done by Ionic or NativeScript. In AngularJS <Link href="/services-web-development">web development</Link>, this framework is fully self-sufficient, and it can be used to develop both single-page and multiple-page AngularJS web applications. It <b>does not require additional libraries</b> as all the features and functions can be implemented with the means given in the Angular package.</p>
        <p>At the same time, it <b>is augmented with a variety of tools</b>. AngularJS technology is supported by the majority of code editors:  Aptana, Sublime Text, Visual Studio, and plenty of others. Angular CLI is a tool aimed at facilitating the project setup process. Server-side rendering is carried out using the Angular Universal tool. The testing process is also simple since Angular applications can be fully tested with a single tool: Jasmine, Protractor, Augury, and Karma are perfect end-to-end testing tools.</p>
        <p>Angular itself is a complex framework, which takes quite some time to master. Angular is not a game for beginners, it <b>is a powerful tool for software development professionals</b>. Learning to work with it is difficult, but the results make up for the effort. Hiring a proficient AngularJS development company will bring you the best business outcome!</p>
        <p>If a developer or a company says that working with Angular is not worth the effort, this developer or company merely do not know Angular. The result <b>is worth the time and resources</b> you will invest in an Angular project. Otherwise, Google would not risk its reputation supporting the framework.</p>
        <p>Such prominent companies as Microsoft, Adobe, McDonald’s, AT&T, HBO, Apple, Forbes, and Nike use AngularJS development services.</p>
      </section>

      <section>
        <h2>Why AngularJS?</h2>

        <img
          style={{ margin: '25px auto 35px auto' }}
          src="/static/services/angular/why-angular-js.png"
          alt="Why AngularJS"
        />
        <FeaturesList list={whyAngularJs} titleBold />

        <CallToActionButton title="ESTIMATE YOUR PROJECT" href="/contacts?activeform=estimate" />
      </section>

      <section>
        <h2>What AngularJS Development Services Do We Offer?</h2>
        <ul className="mobile-development-list">
          {
            servicesList.map(({ icon, title, href }) => (
              <li className="mobile-development-item" key={title}>
                <figure>
                  <img src={icon} alt={title} />
                  <figcaption className="mobile-development-figcaption">
                    {
                      href ? <Link href={href}>{title}</Link> : title
                    }
                  </figcaption>
                </figure>
              </li>
            ))
          }
        </ul>
      </section>

      <section>
        <h2>Why KeenEthics?</h2>
        <p>We are a company providing AngularJS <Link href="/services-mobile-development">mobile app development services</Link> and <Link href="/services-web-development">web development services</Link>, doing our best to solve your business challenges in the most effective way.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth.</h3>
        <p>As an AngularJS development company, we strive to help your business reach the highest outcome regardless of the industry you operate in. <Link href="/services-education-software-development">Education</Link>, <Link href="/services-custom-healthcare-software-development">healthcare</Link>, e-commerce, hospitality, or agriculture, be sure that the services of our AngularJS development company will be professional. Our specialists have sound technical expertise, and we engage people with deep industry-specific knowledge.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value.</h3>
        <p><Link href="/blog/1551175200000-our-ethical-dimension">Ethics</Link> is an essential part of our corporate policies. We prioritize the interests and needs of businesses partnering with us and people using our apps and websites. Transparency, honesty, and openness are the pillars of our company.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks.</h3>
        <p>Our partner engagement process is perfectly organized. We promptly collect the requirements, conduct project estimates, sign legal papers, and launch the development process. More than that, we are a company providing full-cycle  AngularJS development services, so you can trust us with your idea and together turn it into a perfect final product.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise.</h3>
        <p>Our AngularJS developers are experienced and knowledgeable. The <Link href="/portfolio">solutions</Link> that we have developed using Angular and other JS frameworks are robust and innovative. If you are not sure whether you can trust us with your idea or not, you can start with technical consulting, see our expertise by yourself, and then make this important decision.</p>

        <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data.</h3>
        <p>We understand how important your privacy and information safety is when you hire AngularJS developers. We closely follow <Link href="/blog/1543388400000-your-data-is-safe-in-ukraine">data security</Link> guidelines and legal requirements, ensure the physical safety of our facilities, and make sure that our projects can withstand cyber attacks. All for the sake of your perfect, hassle-free, and safe software development experience.</p>
      </section>

      <section>
        <h2>Angular Solutions</h2>
        <p>These are some of custom AngularJS development solutions that our team has developed:</p>
        <Works works={works.filter(({ title }) => ['Education System Platform', 'Black Book', 'Tetrami'].includes(title))} />
      </section>
    </div>
    <LetsStart/>
  </Layout>
);

export default TechBackEndExpress;
