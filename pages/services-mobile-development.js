import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import PageTabs from '../components/content/tabs';

import { servicesMobileDevelopment } from '../main.config';

const ServicesMobileDevelopment = () => (
  <Layout>
    <ContentNavigation image="mobile_development" />
    <PageTabs points={servicesMobileDevelopment()} />
    <div className="content-block">
      <h1>Mobile App Development Services</h1>
      <p>
        According to statistics, people check their smartphone almost 300 times a day. Teens
        snap lock button even more often. We touch our phones almost every minute, check for new
        notifications and messages.
      </p>
      <p>
        This trend progress through years and will grow even more. Search engines optimize
        mobile index, the percentage of searches and purchases from mobile devices is growing
        exponentially. These are the arguments for mobile application development for business.
      </p>
      <p>
        What applications need the business now? Sleek-designed. Social – we all love to share
        everything on Facebook and Twitter. Compatible with the smartwatch or fitness bracelet -
        wearable devices become a permanent accessory for everyone. If you want to know more,
        get in touch. Successful mobile app starts with a strategy and understanding of its
        functions and tasks.
      </p>
      <p>
        Mobile app development is a time-consuming and creative process at the same time. If we
        want to make a mobile app that is talked about, downloaded and opened again and again,
        it`s not enough to make just a technically perfect product. We need to invest in it all
        the knowledge and inspiration. Both, the app developers team and business side must get
        involved to a process. We give you the mobile application development tools your company
        needs to get idea to market.
      </p>
      <p>
        Not sure what type of application do you exactly need? Let us help you choose. Native
        applications, custom mobile application development - our approach to choosing type and
        app developing is based on your business` features. We are the fans of agile,
        analytics-driven approach. Analyze, build, test, launch, get feedback.
      </p>
      <p>
        Not decided on the platform, or choosing the main platform? We provide professional
        android application development, iOS development and cross platform mobile development.
      </p>
      <p>
        We have a clear and easy monitoring and reporting system. We are pleased to develop
        mobile applications for your business and we`ll not be embarrassed if you watch the
        process.
      </p>
      <p>
        We&apos;re not calling ourselves the best. We just say that we`ll take your cool idea
        and make it even better.
      </p>
    </div>
  </Layout>
);

export default ServicesMobileDevelopment;
