import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { techFrontEnd } from '../main.config';

const TechFrontEndVue = () => (
  <Layout>
    <ContentNavigation image="fe" points={techFrontEnd()} />
    <div className="content-block">
      <h1>Vue.js development services</h1>
      <p>
        There are plenty of technologies used to build a strong frontend part of the project.
        What is and when to use Vue.js on the project? Vue.js is a progressive JavaScript
        framework for building user interfaces. Since Vue.js is an open-source framework, there
        is no need to buy any license, you and your development team are free to use it as you
        wish.
      </p>
      <p>
        With Vue framework, we can build all kinds of advanced single-page web apps and complex
        mobile apps, including multi-device hybrid (Cordova or Phonegap) apps and Native apps.
        Our Vue.js. developers have access to a rapidly-growing Vue.js community. Also, they are
        free to use supporting libraries and plugins.
      </p>
      <p>
        The Vue.js framework has a lot of strengths:
      </p>
      <ul>
        <li>
          Approachable. Developer knowing HTML, CSS and JavaScript can deliver and support
          Vue.js apps. This fact means you will have no problems hiring more stuff.
        </li>
        <li>
          Versatile. Simple, minimal core with an adoptable stack that can handle Vue.js apps of
          any scale.
        </li>
        <li>
          Performant (in many cases, faster than React) and flexible. Vue.js developers can
          easily integrate with other libraries or existing projects.
        </li>
      </ul>
      <p>
        Today, the Vue.js framework is being used by giants like Alibaba, Baidu & Tencent,
        Xiaomi, and some others. We suggest to you to contact our astronauts and find out which
        stack of technologies will suit your project.
      </p>
      <h2>Hire Vue.js developers</h2>
      <p>
        To cut the Vue.js development budget companies often hire an offshore dedicated
        development team or a few freelance developers. Building the communication process with
        an existing development team usually is faster and easier to manage.
      </p>
      <p>
        The list of frontend technologies used by a company does not only demonstrate company`s
        expertise but also shows you your opportunities. For example, our astronauts are good at
        using Angular, Angular 2, React, Redux, and more. If you want to keep your project
        up-to-date, hire a company, that masters cutting-edge technologies like Vue.js framework
        and can offer different solutions.
      </p>
      <p>
        On our Keenethics spaceship, we have experience providing Vue.js development services
        for businesses all around the globe. It would be great if you contact our astronauts and
        tell us more about your project!
      </p>
    </div>
  </Layout>
);

export default TechFrontEndVue;
