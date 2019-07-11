import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import PageTabs from '../components/content/tabs';

import { techApps } from '../main.config';

const TechApps = () => (
  <Layout>
    <ContentNavigation image="app" />
    <PageTabs points={techApps()} />
    <div className="content-block">
      <h1>App Development Services</h1>
      <p>
        Maybe, there are a few businesses left that can successfully
        {' '}
        {'function'}
        {' '}
without any web
        and software products. But most companies can significantly improve and grow their
        business with a help of desktop and mobile app development, chatbots, machine learning
        and artificial intelligence projects, and a lot of more.
      </p>
      <p>
        Future-oriented FinTech companies promote themselves with banking apps, E-Commerce
        businesses integrate the application with other corporate tools and third-party
        platforms, such as payment systems, CRMs, ERPs etc.
      </p>
      <p>
        So here are some tips on what to consider if you want to hire App Developers:
      </p>
      <ul>
        <li>Do not make a decision based on a hasty Google search;</li>
        <li>Think twice if you want to hire the cheapest app developer possible;</li>
        <li>
          Check out company’s portfolio and case studies on their website and professional
          social networks;
        </li>
        <li>
          If the company offers many different and unrelated services, it is not a good sign;
        </li>
        <li>
          Look for reviews and social proof of your potential partner. If possible, contact
          their old and/or existing clients.
        </li>
      </ul>
      <p>
        On our KeenEthics spaceship, we have strong expertise in Hybrid App Development. Native
        iOS and native Android development services are time-consuming and usually cost a lot.
        If you do not have specific requirements and are not sure which platform to choose,
        hire App Developers to build a multi-platform solution.
      </p>
      <p>
        Cross-platform apps help businesses to reach a larger audience. With a hybrid app, you
        can go upon the Google Play Market and the App Store: one code works for all platforms
        and devices.
      </p>
      <p>
        For app development we use the following technologies:
      </p>
      <ul>
        <li>Phonegap;</li>
        <li>Cordova;</li>
        <li>Electron.</li>
      </ul>
      <p>
        Also, our astronauts are good at Progressive Web Apps development. Progressive Web App
        (PWA) is a hybrid of a regular website and a mobile application. This model combines
        features offered by most popular browsers with the features of mobile experience.
      </p>
      <h2>Hire App Developers</h2>
      <p>
        For a lot of companies, in-house app development is unreasonable and very expensive.
        Hiring local software development service providers is not always as cost-effective as
        you would probably want it to be. That is why market players from different industries
        delegate app development to an offshore software development company.
      </p>
      <p>
        There are a few essential benefits of hiring an offshore app development company:
      </p>
      <ul>
        <li>
          Outsourcing is a great tool to cut costs and reduce the workload of your in-house
          teams.
        </li>
        <li>
          You get an efficient solution at a reasonable price.
        </li>
        <li>
          There is no need to spend time finding, hiring, and training new employees.
        </li>
        <li>
          The overall process of app development takes less time. Teams may work on a product
          round-the-clock and launch it faster.
        </li>
      </ul>
      <p>
        On our KeenEthics spaceship, we believe in Agile software development and do our best to
        deliver top-notch product to clients. We can build a cross-platform application from
        scratch or update an existing one. Feel free to contact us, receive a free consultation
        from our astronauts and hire a team that will develop an app you need.
      </p>
    </div>
  </Layout>
);

export default TechApps;
