import Link from 'next/link';

import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import OfferList from '../components/content/OfferList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';
import Works from '../components/portfolio/works';

import '../styles/content/services-chatbots-artificial-intelligence.scss';

const ChatbotsArtificialIntelligence = () => {
  const whatIsBusinessAnalysis = [
    {
      icon: '/static/services/services-chatbots-artificial-intelligence/dimension.png',
      alt: 'Dimension',
      description:
  <>
    <b>Scalable and integrable</b>
    <br />
    A chatbot or an AI solution can be scaled up or down and integrated with the existing
    web or mobile app. New features can be effortlessly added.
  </>,
    },
    {
      icon: '/static/services/services-chatbots-artificial-intelligence/geography.png',
      alt: 'Web',
      description:
  <>
    <b>Universal</b>
    <br />
    Chatbots and AI-powered algorithms may come in handy in any industry, including
    education, healthcare, e-commerce, or business administration.
  </>,
    },
    {
      icon: '/static/services/services-chatbots-artificial-intelligence/dollar-symbol.png',
      alt: 'Dollar Symbol',
      description:
  <>
    <b>Cost-efficient</b>
    <br />
    If you employ a chatbot for customer care, you do not need to hire support specialists
    and to pay them monthly. You pay for chatbot only once when it is developed.
  </>,
    },
    {
      icon: '/static/services/services-chatbots-artificial-intelligence/user.png',
      alt: 'User',
      description:
  <>
    <b>User-friendly</b>
    <br />
    Your customers or users will appreciate the opportunity to get help immediately 24/7.
    This will greatly improve your brand image and boost customer loyalty.
  </>,
    },
  ];

  const offerList = [
    {
      icon: '/static/services/services-chatbots-artificial-intelligence/bot.png',
      alt: 'Text-based Chatbots',
      title: 'Text-based chatbots',
    },
    {
      icon: '/static/services/services-chatbots-artificial-intelligence/chat.png',
      alt: 'Voice-based Chatbots',
      title: 'Voice-based chatbots',
    },
    {
      icon: '/static/services/services-chatbots-artificial-intelligence/ai.png',
      alt: 'AI-powered Algorithms',
      title: 'AI-powered algorithms',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'Artificial Intelligence is a technology that you should employ to make your business future-proof. It lets you automate a great number of monotonous and time-consuming tasks. It in turn lets yon engage people and resources into doing something important and innovative, something that will help your business grow.',
    },
    {
      title: 'Building value',
      desc: 'AI-powered algorithms and chatbots have the potential to greatly improve your business performance and productivity. The customers will value the opportunity to get immediate responses to their queries. Meanwhile, employees will appreciate that you spare them monotonous tasks.',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'Our partner engagement process is optimized to enable us to start working on your project as soon as you want us to. Your project development process will be efficiently organized by our professional Project Managers according to the chatbot development methodology which suits you best. We have no time to lose, we are ready to launch as soon as possible.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'Not all our developers can do AI, but those who can – they are experts in this technology. Along with their technical proficiency, we are ready to offer you some industry-specific expertise, should it be education, e-commerce, or healthcare. Also, our professionals from other departments will be happy to cooperate.',
    },
    {
      title: 'Protecting your data',
      desc: 'AI solutions can be easily compromised if not implemented wisely. As an AI chatbot development company, we understand how important data security and user privacy is. Thus, we take all the necessary measures to ensure them. Our developers and QA specialists will make sure that your chatbot or AI-powered project is invulnerable.',
    },
  ];

  const webDevelopmentWorks = works.filter(
    ({ title }) => ['OneRemission', 'ComicEnglish'].includes(title),
  );

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            AI and Chatbot Development Services for Your Business
          </h1>
          <p className="text-center text-italic">
            Automating monotonous tasks, improving your business performance, and boosting
            customer satisfaction
          </p>
          <CallToActionButton />
        </section>
        <section>
          <h2>What Is AI and Chatbot Development?</h2>
          <p>
            Chatbots are widely used to automate repetitive tasks. The four most common functions
            of a chatbot are: enabling self-service in simple scenarios (78%), gathering basic
            information about a client before handling the case to an agent (77%), providing
            guidance and recommendations (71%), greeting customers when they call or message (67%).
          </p>
          <p>
            In fact, chatbots are only one of many manifestations of artificial intelligence. AI is
            not only about robots or smart speakers. Spam filters, plagiarism checkers, ridesharing
            apps, and even Facebook – all of these use AI algorithms. Your business is not an
            exception. There must be at least one tedious and repetitive task that can be automated
            by the means of machine learning.
          </p>
        </section>
        <section>
          <h2>Why AI and Chatbot Development Services?</h2>
          <FeaturesList list={whatIsBusinessAnalysis} />
          <CallToActionButton
            title="Contact us"
            href="/contacts"
          />
        </section>
        <section>
          <h2>What Do We Offer?</h2>
          <OfferList list={offerList} />
        </section>
        <section>
          <h2>How Do We Do It?</h2>
          <div className="chatbots-and-ai-technologies-list">
            <div className="chatbots-and-ai-technologies-item chatbots-and-ai-technologies-item-1">
              <b>Text-based chatbots:</b>
              <br />
              Social media’s APIs
              <br />
              (Facebook, Slack, WhatsApp, etc.)
              <br />
              <a href="/services-web-development-node" target="_blank" rel="noopener noreferrer">Node.js</a>
              <br />
              <img src="/static/services/services-chatbots-artificial-intelligence/f-logo.png" alt="Fasebook" />
              <img src="/static/services/services-chatbots-artificial-intelligence/slack.png" alt="Slack" />
              <img src="/static/services/services-chatbots-artificial-intelligence/whatsapp.png" alt="WhatsApp" />
              <br />
              <img src="/static/services/services-chatbots-artificial-intelligence/node-js.png" alt="Node.js" />
            </div>
            <div className="chatbots-and-ai-technologies-item chatbots-and-ai-technologies-item-2">
              <b>Voice-based chatbots:</b>
              <br />
              <Link href="https://aws.amazon.com/">
                <a target="_blank" rel="noopener noreferrer nofollow">AWS</a>
              </Link>
              ,&nbsp;
              <Link href="https://www.luis.ai/home">
                <a target="_blank" rel="noopener noreferrer nofollow">Microsoft LUIS</a>
              </Link>
              ,&nbsp;
              <Link href="https://developers.google.com/assistant">
                <a target="_blank" rel="noopener noreferrer nofollow">Google Assistant</a>
              </Link>
              <br />
              <Link href="/services-web-development-node">
                <a target="_blank" rel="noopener noreferrer">Node.js</a>
              </Link>
              <br />
              <br />
              <img src="/static/services/services-chatbots-artificial-intelligence/aws.png" alt="AWS" />
              <img src="/static/services/services-chatbots-artificial-intelligence/microsoft.png" alt="Microsoft LUIS" />
              <img src="/static/services/services-chatbots-artificial-intelligence/google-assistant.png" alt="Google Assistant" />
              <br />
              <img src="/static/services/services-chatbots-artificial-intelligence/node-js.png" alt="Node.js" />
            </div>
            <div className="chatbots-and-ai-technologies-item chatbots-and-ai-technologies-item-3">
              <b>AI-powered algorithms:</b>
              <br />
              <Link href="https://www.tensorflow.org/">
                <a target="_blank" rel="noopener noreferrer nofollow">TensorFlow</a>
              </Link>
              ,
              <br />
              <Link href="https://brain.js.org/#/">
                <a target="_blank" rel="noopener noreferrer nofollow">Brain.js</a>
              </Link>
              <br />
              <br />
              <img src="/static/services/services-chatbots-artificial-intelligence/tf_logo.png" alt="TensorFlow" />
              <br />
              <img src="/static/services/services-chatbots-artificial-intelligence/brain-js.png" alt="Brain.js" />
            </div>
          </div>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Our AI Solutions</h2>
          <img src="/static/services/services-chatbots-artificial-intelligence/asama-logo.png" alt="Asama logo" />
          <br />
          <p>
            <Link href="https://asama.tech/eng">
              <a target="_blank" rel="noopener noreferrer nofollow">Asama</a>
            </Link>
            &nbsp;is an IoT-based employee tracking solution developed by KeenEthics and powered by
            Artificial Intelligence. The system consists of fitness trackers, BLE beacons, and
            AI-powered mobile app. It may work in any sphere where the activity and movement of
            employees need to be monitored. Our solution can be used in stores, warehouses,
            industrial plants, constructions, hotels, shopping centers, and restaurants. It lets
            a manager or a company owner make sure that the staff works actively throughout the day
            and follows the schedule.
          </p>
          <p>
            What does AI have to do with it? When fitness trackers send user data to the system via
            Wi-Fi, AI starts processing it. The AI-powered algorithm identifies if the tracker was
            worn or not and if the right person was wearing it. The artificial intelligence also
            checks if the person was standing, walking, sitting, or sleeping.
          </p>
          <p>
            KeenEthics specialists will install and configure BLE beacons, set up trackers and the
            mobile application, and show your managers how to use Asama.
          </p>
          <img src="/static/services/services-chatbots-artificial-intelligence/asama-items.png" alt="Asama items" />
          <CallToActionButton
            title="Contact us"
            href="/contacts"
          />
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>These are some mobile applications augmented with chatbots that we have developed: </p>
          <div><Works works={webDevelopmentWorks} /></div>
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

export default ChatbotsArtificialIntelligence;
