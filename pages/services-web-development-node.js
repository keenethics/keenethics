import React, { Component } from 'react'
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { servicesWebDevelopmentTabs, works } from '../main.config';
import Works from '../components/portfolio/works';

/* eslint-disable */
export default class ServicesWebDevelopmentNode extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.classList.add('calendly-script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }
  componentWillUnmount() {
    document.querySelector('head .calendly-script').remove();
  }
  render() {
    const whyNodejsSection = [
      {
        iconTitle: 'two-way-communication',
        description: <p>It is the optimal technology for creating real-time web apps because WebSockets provide <b>open two-way communication</b> channels.</p>,
      },
      {
        iconTitle: 'perform-better',
        description: <p>Its Input/Output operations are event-driven and non-blocking, which makes the app lighter and lets it <b>perform better</b>.</p>,
      },
      {
        iconTitle: 'fastest-technology',
        description: <p>It uses the V8 javascript engine, which makes it <b>the fastest technology</b> for the website and application development.</p>,
      },
      {
        iconTitle: 'compatible-with-multiple-platforms',
        description: <p>It is <b>compatible with multiple platforms</b> and can easily integrate with the latest technologies, such as Angular or React.</p>,
      },
      {
        iconTitle: 'perfectly-scalable',
        description: <p>It is built on the event loop principle, which makes it <b>perfectly scalable</b>.</p>,
      },
      {
        iconTitle: 'handle-the-heavy-traffic',
        description: <p>It can <b>handle the heavy traffic</b> of users and data.</p>,
      },
      {
        iconTitle: 'business-and-finance',
        description: <p>Such applications are <b>less expensive</b> to test and host than similar apps written in any other environment.</p>,
      },
      {
        iconTitle: 'extensive-repository',
        description: <p>It has an <b>extensive repository</b> of good-to-go modules as it is an open-source technology.</p>,
      },
      {
        iconTitle: 'developer-community-is-large',
        description: <p>The Node.js <b>developer community is large</b> and constantly growing.</p>,
      },
      {
        iconTitle: 'easy-and-convenient',
        description: <p>Node.js application development is <b>easy and convenient</b> for developers as long as this environment enables them to write JavaScript both for the server and the client and to transport data between them.</p>,
      },
      {
        iconTitle: 'cloud',
        description: <p>It is actively used not only in web and mobile development but also in <b>cloud and IoT solutions</b>.</p>,
      },
    ];

    const whatDoWeOfferIconst = [
      {
        iconTitle: 'node-js-web-and-application-development',
        description: 'Node.js web and application development',
      },
      {
        iconTitle: 'node-js-data-management',
        description: 'Node.js data management',
      },
      {
        iconTitle: 'custom-node-js-software-development-solutions',
        description: 'Custom Node.js software development solutions',
      },
      {
        iconTitle: 'node-js-migrating',
        description: 'Node.js migrating',
      },
      {
        iconTitle: 'node-js-consulting',
        description: 'Node.js consulting',
      },
      {
        iconTitle: 'ui-ux-development-for-node-js',
        description: 'UI/UX development for Node.js maintenance and support',
      },
      {
        iconTitle: 'node-js-applications',
        description: 'Node.js applications',
      },
    ];

    const nodeJsWorks = works.filter(({ title }) => {
      return ['OneRemission', 'Pree', 'SelfLeaders'].includes(title);
    })

    return (
      <Layout>
        <ContentNavigation image="web_development" points={servicesWebDevelopmentTabs()} />
        <div className="content-block">
          <section>
            <h1 className="text-center">Node.js Development Services</h1>
            <p className="text-center text-italic">
              The optimal environment for sustainable, scalable, and resource-efficient apps
            </p>
            <div className="primary-gradient-btn-wrap">
              <a
                href="//calendly.com/iryna-keenethics/intro-call"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <button className="primary-gradient-btn" type="button">Learn more</button>
              </a>
            </div>
          </section>

          <section>
            <h2>What Is Node.js?</h2>
            <p>Node.js is a free, open-source, cross-platform, runtime environment for JavaScript. It allows executing code outside of a browser, which enables us to develop a sustainable, scalable, and resource-efficient application.</p>
            <p>The Node.js software development community has developed several server frameworks in order to accelerate the development process of apps and websites. Among such frameworks, there are Express.js, Meteor, Derby etc. Thanks to a broad range of frameworks and libraries available, Node.js web development and Node.js application development have become the most efficient solution for achieving specific business goals.</p>
            <p>
              Such popular websites as <a href="//www.paypal.com/ua/home" target="_blank" rel="noopener noreferrer nofollow">PayPal</a>, <a href="//www.wsj.com/" target="_blank" rel="noopener noreferrer nofollow">The Wall Street Journal</a>, <a href="//www.ibm.com/ua-uk/" target="_blank" rel="noopener noreferrer nofollow">IBM</a>, <a href="//www.linkedin.com/" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</a>, <a href="//www.microsoft.com/uk-ua/" target="_blank" rel="noopener noreferrer nofollow">Microsoft</a>, <a href="//www.netflix.com/ua/" target="_blank" rel="noopener noreferrer nofollow">Netflix</a>, <a href="//www.walmart.com/" target="_blank" rel="noopener noreferrer nofollow">Walmart</a>, <a href="//www.yahoo.com/" target="_blank" rel="noopener noreferrer nofollow">Yahoo!</a> are powered by Node.js.
            </p>
          </section>

          <section>
            <h2>Why Node.js?</h2>
            <ul className="services-icons--list">
              {
                whyNodejsSection.map(({ iconTitle, description }, key) => (
                  <li key={key} className="services-icons--item">
                    <figure className="services-icons--figure">
                      <img src={`/static/services/${iconTitle}.svg`} alt={iconTitle} className="services-icons--img" />
                      <figcaption className="services-icons--figcaption">
                        {description}
                      </figcaption>
                    </figure>
                  </li>
                ))
              }
            </ul>
            <div className="primary-gradient-btn-wrap">
              <a
                href="//calendly.com/iryna-keenethics/intro-call"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <button className="primary-gradient-btn" type="button">request a proof of concept</button>
              </a>
            </div>
          </section>

          <section>
            <h2>What Do We Offer?</h2>
            <p>Node.js development company should be able to provide you with a cross-platform application or a website, which can be easily scaled as your business grows. If you need to receive not just a regular website but a powerful tool for your business, which will stand out in the market, you will need to find a highly qualified Node.js development company.</p>
            <p>So, we are glad and proud to offer our services, and as a Node.js development company, we offer:</p>
            <ul className="what-do-we-offer-list">
              {
                whatDoWeOfferIconst.map(({ iconTitle, description }, key) => (
                  <li key={key} className="what-do-we-offer-item">
                    <figure>
                      <img src={`/static/services/node-js/${iconTitle}.png`} alt={description} />
                      <figcaption className="what-do-we-offer-figcaption">{description}</figcaption>
                    </figure>
                  </li>
                ))
              }
            </ul>
          </section>
          
          <section>
            <h2>Why KeenEthics?</h2>
            <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Any app for any industry.</h3>
            <p>As an experienced Node.js development company, we can <b>build a variety of server tools and applications</b>, Node.js chatbots, complex websites, real-time applications, and more. For years, our specialists have provided Node.js development services for Finance & Banking Industry, Medical Services, E-commerce, Transportation, Education, and other industries.</p>

            <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Reasonable price and data safety.</h3>  
            <p>We offer a <b>reasonable pricing policy</b> and the opportunity to choose a paying model you prefer, should it be a fixed price or a “<Link href="/blog/1554420300000-estimates"><a>Time & Materials</a></Link>” approach. We perfectly follow <Link href="/blog/1543388400000-your-data-is-safe-in-ukraine"><a>data security</a></Link> regulations and the requirements of the NDA you choose to sign.</p>

            <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>Cooperation and communication.</h3>
            <p>We offer you <b>full-cycle cooperation</b>, and we will be glad to take your project from an idea to a perfectly functioning and continuously improved final product. We will also encourage you to be <Link href="/blog/1553896800000-how-to-monitor-your-project-distantly"><a>monitoring the project</a></Link> and communicating with our team continuously.</p>

            <h3 style={{ margin: '0 0 5px 0', color: '#d62c2c', fontSize: '16px' }}>High-quality solutions.</h3>
            <p>The quality of the final product should be the first priority of a Node.js development company. With us, you can be sure that <b>the solution is robust and the code is clean</b>. We assess all the risks and pay close attention to quality assurance.</p>

            <h3>These are some of the Node.js applications and websites we have developed:</h3>
            <Works works={nodeJsWorks} />
          </section>

          <section style={{ marginTop: '60px' }}>
            <h2>Now, let’s discuss your business idea!</h2>
            <p>Schedule a call with our CEO Max Savonin.</p>
            <div class="calendly-inline-widget" data-url="https://calendly.com/keenethics/30min" style={{ height: '600px' }}></div>
          </section>
        </div>
      </Layout>
    );
  }
};
