import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works, techFrontEnd } from '../main.config';

import Works from '../components/portfolio/works';

const TechFrontEndVue = () => {
  const whyVue = [
    {
      icon: '/static/technologies/vue/profit.png',
      alt: 'Profit',
      description:
  <>
    <b>Innovative</b>
    <br />
    Vue.js framework is the fastest growing one of the Big Three – React, Angular, and Vue.
    At the same time, it has comprehensive documentation and open source community support.
  </>,
    },
    {
      icon: '/static/technologies/vue/user.png',
      alt: 'User',
      description:
  <>
    <b>Approachable</b>
    <br />
    Vue.js has a smooth learning curve. The code is clean and easy to understand. A developer
    knowing HTML, CSS, and JavaScript can easily learn to work with Vue.js apps.
  </>,
    },
    {
      icon: '/static/technologies/vue/flash-symbol.png',
      alt: 'Flash',
      description:
  <>
    <b>Lightweight</b>
    <br />
    Vue.js is about only 20 KB and packed with extensions. Its source code consists of a single
    file component, which includes script, template, and style.
  </>,
    },
    {
      icon: '/static/technologies/vue/dimension.png',
      alt: 'Dimension',
      description:
  <>
    <b>Universal</b>
    <br />
    Vuejs development services can be used to build apps of any scale due to a simple minimal
    core with an adoptable stack. Vue has out-of-the-box components for almost everything and
    can be integrated with any app.
  </>,
    },
    {
      icon: '/static/technologies/vue/like.png',
      alt: 'Like',
      description:
  <>
    <b>Performant and flexible</b>
    <br />
    Vue.js is often faster than React, and developers can easily integrate it with other
    libraries or existing projects. Its MVVM architecture allows to minimize HTML blocks and
    boost performance.
  </>,
    },
    {
      icon: '/static/technologies/vue/geography.png',
      alt: 'Geography',
      description:
  <>
    <b>Popular</b>
    <br />
    The community of Vue.js developers is the fastest-growing among the Big Three. It is used
    by such business giants as Nintendo, Adobe, Grammarly, 9GAG, Alibaba, Xiaomi, and Wizzair.
  </>,
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/technologies/vue/image20.png',
      title:
  <>
    Web and mobile Vuejs
    <br />
    development
  </>,
    },
    {
      icon: '/static/technologies/vue/image9.png',
      title:
  <>
    Vue.js applications
    <br />
    maintenance and support
  </>,
    },
    {
      icon: '/static/technologies/vue/image1.png',
      title: 'UI/UX Vue development',
    },
    {
      icon: '/static/technologies/vue/image19.png',
      title: 'Vue.js data management',
    },
    {
      icon: '/static/technologies/vue/image14.png',
      title:
  <>
    Custom Vue.js software
    <br />
    development solutions
  </>,
    },
    {
      icon: '/static/technologies/vue/image6.png',
      title: 'Vue.js migrating',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'Vue.js enables us to build a lightweight and highly performant web and mobile apps, which you can monetize or use to improve a certain business process. Developing a high-quality product that meets its purpose is our way to help you profit and empower the growth of your business.',
    },
    {
      title: 'Building value',
      desc: 'The mission of KeenEthics is: “We strive for a tech world devoted to the social good”. Indeed, “ethics” is not just a part of our name but a foremost principle we abide by. If you share our desire to make the world a better place and to inspire social responsibility in others, please, be our partner!',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'We understand that the software product is the first and most important thing you expect us as a Vue.js development company to provide. Our Engagement Manager will ensure quick and smooth transitioning to the development phase. We will launch the development process in the shortest terms.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'All software developers at KeenEthics are full-stack and JS-oriented. By concentrating on one programming language, we can afford to dive deeper into particular frameworks. Vue.js is one of the top frameworks we develop with, and our specialists will gladly share their knowledge.',
    },
    {
      title: 'Protecting your data',
      desc: 'Whatever services you request, product you develop, or tech stack you use, data security should be your primary concern. Throughout each stage of project development, our Vuejs development company will make sure that your information and data of your users are a hundred percent protected.',
    },
  ];

  return (
    <Layout>
      <ContentNavigation image="fe" points={techFrontEnd()} />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Vue.js Development Services
          </h1>
          <p className="text-center text-italic">
            Using the innovative, performant, and fastest-growing JS front-end development
            framework.
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '1em' }}>163.5%</h2>
          <p className="text-center">
            is the annual growth of Vue development rates, according to&nbsp;
            <a href="https://michaelnthiessen.com/react-vs-vue-which-is-growing-faster" target="_blank" rel="noopener noreferrer nofollow">Michael Thiessen</a>
            .
          </p>
        </section>
        <section>
          <h2>What Is Vue.js Development?</h2>
          <p>
            Along with&nbsp;
            <Link href="/tech-front-end-react">React</Link>
            &nbsp;and&nbsp;
            <Link href="/tech-front-end-angular">Angular</Link>
            , Vue.js is one of the Big Three JS frameworks for front-end development. Vue.js is
            a progressive open-sourced JavaScript framework for building user interfaces.&nbsp;
            <a href="https://github.com/yyx990803" target="_blank" rel="noopener noreferrer nofollow">Evan You</a>
            , a former developer at Google, created Vue.js with the idea to take his favorite
            Angular concepts and features and build an innovative lightweight framework around them.
            This is why Vue.js combines the best features of Angular and React: the code is clean
            and the app is fast and lightweight. This framework enables the swift development of
            a software product of any size without compromising performance or speed.
          </p>
          <p>
            Vue.js is well suitable for outstaffing or outsourcing of existing projects since this
            framework is easily approachable and understandable, scalable, and can be integrated
            with most projects and libraries. Also, Vue is ideal for&nbsp;
            <Link href="/approach-minimum-viable-product">MVP development</Link>
            &nbsp;as its setup and configuration do not take long and Vue.js developers do not
            need to spend extra hours on optimization. Besides, Vue.js and Nuxt.js – a framework
            built on top of Vue – are perfectly suitable for&nbsp;
            <Link href="/tech-apps-progressive-web-apps">PWA development</Link>
            .
          </p>
        </section>
        <section>
          <h2>Why Vue.js?</h2>
          <FeaturesList list={whyVue} />
          <CallToActionButton
            title="HIRE VUE.JS DEVELOPERS"
            href="/contacts"
          />
        </section>
        <section>
          <h2>What Vue.js Development Services Do We Offer?</h2>
          <ul className="mobile-development-list">
            {
              whatDoWeOfferIcons.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="mobile-development-figcaption">
                      {
                        href ? <a href={href}>{title}</a> : title
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
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Case Study</h2>
          <div>
            <p className="text-bold text-center">Attendance</p>
            <p>
              It is a web platform for managing schedules and salaries of employees in a convenient
              and timely manner. Via Attendance, team members can adjust their schedules, share
              information about vacation days, sick leaves, or days off, and check their salary
              coefficient. The idea of this platform is to keep it simple but quick and responsive
              for the employees to conveniently use it.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-web-development">Web</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span><a href="https://www.fastify.io/" target="_blank" rel="noopener noreferrer nofollow">Fastify</a></span>
                  ,
                  <span><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer nofollow">Typescript</a></span>
                  ,
                  <span><a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer nofollow">Nest</a></span>
                  ,
                  <span><a href="https://typeorm.io/#/" target="_blank" rel="noopener noreferrer nofollow">TypeORM</a></span>
                  ,
                  <span><Link href="/tech-front-end-vue">Vue</Link></span>
                  ,
                  <span><a href="https://buefy.org/" target="_blank" rel="noopener noreferrer nofollow">Buefy</a></span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 1 PO, 1 PM, 1 Tech Lead, 2 full-stack developers, 1 UI/UX designer, 1 QA
              </div>
            </div>
            <Works rounded works={works.filter(({ title }) => ['Attendance'].includes(title))} />
          </div>
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <CallToActionButton
          title="Contact us"
          href="/contacts"
        />
      </div>
    </Layout>
  );
};

export default TechFrontEndVue;
