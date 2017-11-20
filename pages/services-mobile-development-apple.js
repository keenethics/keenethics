import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesMobileDevelopment } from '../main.config';

const ServicesWebDevelopmentApple = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image="apple" points={servicesMobileDevelopment()} />
    <div className="content-block">
      <h1>iOS Mobile App Development</h1>
      <p>
        If you are not sure that you need an iOS App for your business, face this fact: in 2016
        the total number of active Apple devices has reached 1 billion. So you do need one if
        you want to offer your services and products to a large community of Apple users.
      </p>
      <p>
        Finding the best provider can take time. You will recognize, that there are a lot of
        ios app development companies worldwide. But you are not ought to hire a company, which
        specializes only in the ios app development language and does not have expertise in any
        other. Plus, rates in this type of companies are often extremely higher.
      </p>
      <p>
        At Keenethics we recommend to chose a company, that has experience in iOS and Android
        mobile app development software and can have both projects in production at the same
        time. Such decision will not only save your time and budget but also, it will help to
        avoid an extra routine.
      </p>
      <h2>Professional Apple application development</h2>
      <p>
        On our spaceship, we use the best programming language for mobile apps to bring
        clients projects to life. Swift and the Objective-C are the main languages for creating
        iOS apps. Developers can use only the official ios app development software in their
        work. The major apple developer program is Xcode. It is a development environment
        containing tools developed by Apple for developing software for products like iPhone,
        iPad and etc. An apple developer certificate proves that the developer has the required
        knowledge and rights for building Apple applications. It is important and you can’t
        ignore it because otherwise you will not be allowed to upload the app on the AppStore.
      </p>
      <p>
        But what language are android apps written in today? The core language is Java and the
        official development environment for Android development is Android Studio. So we can
        use open source mobile app development software for projects, based on the Android
        platform.
      </p>
      <p>
        If you are not sure which platform to choose, we can offer an all-purpose solution and
        develop a powerful cross-platform App or a Progressive Web App that will suit every
        device, regardless of the platform, brand, sizes and so on. Cross-platform and
        Progressive Web Apps have huge pros: they are responsive, connectivity independent,
        app-like, linkable, and safe.
      </p>
      <p>
        Astronauts at Keenethics will deliver a high-quality mobile app, no matter on which
        platform it is based.
      </p>
    </div>
  </Layout>
);

ServicesWebDevelopmentApple.propTypes = {
  url: PropTypes.object,
};
ServicesWebDevelopmentApple.defaultProps = {
  url: {},
};

export default ServicesWebDevelopmentApple;
