import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesWebDevelopmentTabs } from '../main.config';

const ServicesWebDevelopmentVoice = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation image="web_development" points={servicesWebDevelopmentTabs()} />
    <div className="content-block">
      <h1>Programmable Voice Development Services</h1>
      <p>
        Automating all possible processes helps businesses not only to save costs but also, to
        save time and resources, ensure availability 24/7, gather valuable data and so on.
        Automating the Customer Support with the help of Programmable Voice Development is one
        of the most required services.
      </p>
      <p>
        With Programmable Voice, you can create unique communication experiences to make,
        receive and control voice interactions around the world. Programmable Voice SDK makes it
        easy to add voice-over-IP (VoIP) calling into web and mobile applications quickly and to
        initiate an automated service or process. Voice API can help you also record,
        transcribe, and bring conference callers together using your existing web server and
        database.
      </p>
      <p>
        The list of industries, where Programmable Voice Development Services are used, is truly
        convincing:
      </p>
      <ul>
        <li>Advertising and Marketing;</li>
        <li>Finance;</li>
        <li>Healthcare;</li>
        <li>Government;</li>
        <li>Real Estate;</li>
        <li>Retail;</li>
        <li>Technology (Services, Hardware, Software);</li>
        <li>Telecommunications and many others.</li>
      </ul>
      <p>
        For example, Programmable Voice Services are being used by Zendesk, Uber, Trulia,
        eHarmony, lifesize and others.
      </p>
      <p>
        In order to make your decision cost-efficient, think about hiring an offshore software
        development vendor. Eastern Europe is one of the most prominent outsourcing destinations
        since here you can receive both quality and reasonable pricing.
      </p>
      <h2>Hire Programmable Voice Developers</h2>
      <p>
        On the Keenethics spaceship, we have experience integrating Twilio Programmable Voice
        into native and progressive apps. In short, what is Twilio and when to use it? Twilio
        itself is a cloud communications platform. It offers Voice & Video, Messaging, and
        Authentication APIs for every application. You can use Twilio products, if your App’s
        Backend is written in PHP, Node, Python, Ruby, Java, .NET (C#).
      </p>
      <p>
        Programmable Voice from Twilio helps to build unique phone call experiences with one
        API to make, receive, control, and monitor calls. On our opinion, Twilio Programmable
        Voice is developer-friendly, feature-rich, and scalable.
      </p>
      <p>
        Also, we have experience integrating Alexa Voice Service (AVS) for native and hybrid
        apps. In general, what is Amazon Alexa and does your app need it? Alexa is an
        intelligent personal assistant developed by Amazon Lab126. It is capable of voice
        interaction, making to-do lists, setting alarms, providing weather, traffic, and other
        real-time information.
      </p>
      <p>
        Amazon allows device manufacturers to integrate Alexa Voice capabilities into their own
        connected products by using the Alexa Voice Service, a cloud-based service that provides
        APIs to interface with Alexa. Products built using Alexa API have access to Alexa&apos;s
        growing list of capabilities, and there are no fees for companies looking to integrate
        Alexa into their products by using AVS.
      </p>
      <p>
        One of the frequently asked questions is how much does Amazon Alexa Voice Service cost
        and is it time-consuming. We suggest to you to tell us more about your projects, so we
        can provide clearer estimates.
      </p>
      <p>
        Contact us anytime and our astronauts will build an efficient solution based on your
        business goals.
      </p>
    </div>
  </Layout>
);

ServicesWebDevelopmentVoice.propTypes = {
  url: PropTypes.object,
};
ServicesWebDevelopmentVoice.defaultProps = {
  url: {},
};

export default ServicesWebDevelopmentVoice;
