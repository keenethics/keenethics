import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesWebDevelopmentTabs } from '../main.config';

const ServicesWebDevelopmentChat = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image={'web_development'} points={servicesWebDevelopmentTabs()} />
    <div className="content-block">
      <h2>Chatbot Development</h2>
      <p>
        Your apps and websites promote you 24/7. How do you like an idea to build a customer
        service, that also does not sleep? Then think about chatbots – virtual assistants
        programmed to automatically give answers to your users. Just imagine, chatbot is always
        there for you and your users. And it always has time.
      </p>
      <p>
        Our astronauts believe that Chatbot Development shapes the future since more and more
        companies involve chatbots to avoid the unnecessary routine, save costs and, the most
        important, get in touch with users immediately. If you also find this idea useful, then
        you definitely need to look for a Chatbot Development company that will provide such a
        service.
      </p>
      <p>
        Generally, there are unintelligent chatbots that act using predefined answers written by
        people and intelligent AI chatbots that use machine learning.
      </p>
      <p>
        How to know if it is necessary to build chatbots?
      </p>
      <ul>
        <li>You receive many requests that are similar to each other;</li>
        <li>Products you sell are low involvement;</li>
        <li>Your customers need information that is easy to provide;</li>
        <li>You work in a highly competitive niche and you need to be fast.</li>
      </ul>
      <p>
        Chatbots will help you to decrease calls and e-mails to support service, enhance
        productivity and operational effectiveness. Your staff will have more time and
        motivation to complete more valuable tasks.
      </p>
      <p>
        What kind of technologies is being used for developing chatbots? On our Keenethics
        spaceship, we prefer to use and deliver to our customers chatbots, developed with
        Microsoft Bot Framework, Skype Bot REST API, and Node.js. If you will look for best
        practices, you will find out that this stack of technologies is the most prominent for
        creating chatbots.
      </p>
      <h3>Hire Chatbot Developers</h3>
      <p>
        High-class chatbot development service can burn a hole in the budget, so businesses
        often hire offshore companies to provide this piece of work. For the US and European
        Countries, Eastern Europe appears as the most trustworthy and efficient outsourcing
        destinations, since we profess similar values and have a lot in common. We respect
        privacy and follow international quality standards when developing chatbots for your
        business.
      </p>
      <p>
        On the Keenethics spaceship, you receive an all-inclusive Chatbot Development service,
        therefore you will not have to look for other vendors and developers.Our astronauts can
        build and connect smart bots to interact with your users wherever they are — from your
        website or app to text/SMS, Skype, Slack, Facebook Messenger and other services. Also,
        our chatbot developers can help you fill your chatbots with your brand’s identity, make
        it speak to your users like you would, change its message depending on the input from
        the user and so on.
      </p>
      <p>
        Chatbots change how people interact with businesses and with the internet. Contact us
        anytime and give your users the best experience they can get.
      </p>
    </div>
  </Layout>
);
ServicesWebDevelopmentChat.propTypes = {
  url: PropTypes.object,
};
ServicesWebDevelopmentChat.defaultProps = {
  url: {},
};

export default ServicesWebDevelopmentChat;
