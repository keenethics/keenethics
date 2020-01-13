import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import '../styles/content/ui-ux-design.scss';

const ServicesUiUxDesign = () => {
  const whyUiUxDesign = [
    {
      icon: '/static/services/ui-ux-design/profit.png',
      alt: 'Profit',
      description:
  <>
    <b>Boosts sales</b>
    <br />
    If done effectively, user experience design increases sales by almost one third.
    Responsive design is also important for the website to be ranked higher by search engines,
    which results in better organic search results.
  </>,
    },
    {
      icon: '/static/services/ui-ux-design/user.png',
      alt: 'User',
      description:
  <>
    <b>Facilitates onboarding</b>
    <br />
    Excellent user experience translates into easier user onboarding and higher adoption rates.
    If the user is having difficulties within the first two or three screens, they will close
    the app or website forever with little hesitation.
  </>,
    },
    {
      icon: '/static/services/ui-ux-design/users.png',
      alt: 'Users',
      description:
  <>
    <b>Attracts users</b>
    <br />
    The outstanding user interface translates into higher user attraction. If your website
    looks unique, your visitors will be quite likely to show it to their friends.
  </>,
    },
    {
      icon: '/static/services/ui-ux-design/stopwatch.png',
      alt: 'Stopwatch',
      description:
  <>
    <b>Decreases dropout rate</b>
    <br />
    The first impression is what counts, and user interface is what the first impression is about.
    If your website does not generate interest in the first 15 seconds, you can count the visitor
    as a lost one.
  </>,
    },
    {
      icon: '/static/services/ui-ux-design/like.png',
      alt: 'Like',
      description:
  <>
    <b>Increases user satisfaction</b>
    <br />
    Both UI and UX greatly contribute to increased user satisfaction. Modern-day users want
    everything to be not only simple and fast but also looking beautiful.
  </>,
    },
    {
      icon: '/static/services/ui-ux-design/tick-inside-a-circle.png',
      alt: 'Tick',
      description:
  <>
    <b>Simplifies navigation</b>
    <br />
    Well-though-out customer experience and user interface design means that your target
    audience will not feel lost. People are impatient about difficulties and vaguenesses,
    and they will not give your website a second chance.
  </>,
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/services/ui-ux-design/t-mobile.png',
      title: 'Mobile app design',
    },
    {
      icon: '/static/services/ui-ux-design/t-web.png',
      title: 'Web design services',
    },
    {
      icon: '/static/services/ui-ux-design/t-crossplatform.png',
      title: 'Cross-platform UI UX design services',
    },
    {
      icon: '/static/services/ui-ux-design/t-workshop.png',
      title: 'Design workshops and consulting',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'We do not just develop an app or a website – we want it to be loved and enjoyed by users. Our customer experience and user interface designs are created to be convenient and attractive. The best UI UX design is a responsive design. By helping you earn the love of your target audience, our design team will help your business grow and achieve new heights.',
    },
    {
      title: 'Building value',
      desc: 'Your cooperation with KeenEthics can be organized in accordance with both Time and Material and Fixed Price approach, whatever you find to be more suitable to your needs. The same goes for our pricing policy – we can compromise costs, but we do not compromise the quality of our web design services.',
    },
    {
      title: 'Launching in a matter of weeks',
      desc:
  <>
    Our UX UI designers are interested in getting ahead with your project as soon as possible.
    Each wasted day is a wasted opportunity. Along with our expert Project Managers,
    they will help you&nbsp;
    <a href="/blog/how-to-choose-your-optimal-development-methodology" target="_blank">choose the optimal development methodology</a>
    . Your project will be launched in a matter of weeks.
  </>,
    },
    {
      title: 'Bringing tech expertise',
      desc:
  <>
    Our design team creates elegant, simple, and responsive web interfaces and mobile app designs,
    which correspond to the latest tendencies in the market. Check our&nbsp;
    <a href="/portfolio" target="_blank">case studies</a>
    &nbsp;to see our web design services yourself! If needed, our UX UI designers may also conduct
    a design workshop or offer consultation about graphic design services and design process.
  </>,
    },
    {
      title: 'Protecting your data',
      desc:
  <>
    We understand how important your&nbsp;
    <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank">data security</a>
    &nbsp;is to you and we are ready to ensure it at all stages of project development. We will take
    all the necessary physical, technical, and legal measures to protect your data. Sign
    a non-disclosure agreement with us and be sure that it stays safe.
  </>,
    },
  ];

  const webDevelopmentWorks = works.filter(
    ({ title }) => ['ParkQX', 'SelfLeaders', 'Pree', 'Banker Advisor', 'WorkBooking'].includes(title),
  );

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            UI/UX Design
          </h1>
          <p className="text-center text-italic">
            Creating elegant, responsive, and effectual user interface and experience
            designs with the latest market tendencies in mind
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '1em' }}>75%</h2>
          <p className="text-center">
            of one’s decision on a website’s credibility depends on its aesthetics,
            <br />
            according to the British Computer Society.
          </p>
        </section>
        <section>
          <h2>What Is UI/UX Design?</h2>
          <p>
            UI/UX design is the process of developing a software product interface and making
            the user experience as perfect as it can be. Whether you plan to develop an app
            from scratch or to revive an existing one, you have to keep in mind its visual
            appearance.
          </p>
          <p>
            The goal of user experience design is to understand the needs and wishes of
            a prospective user and to implement those in the app interface. In turn, the idea
            of UI design is to make your app look excellent without compromising user experience.
          </p>
          <p>
            Although the common term for the design process is “UI/UX design”, you should understand
            that the user experience goes first. However beautiful and unusual your app was, it is
            not going to work if your users get lost in it.
          </p>
        </section>
        <section>
          <h2>What Do We Offer?</h2>
          <ul className="mobile-development-list">
            {
              whatDoWeOfferIcons.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img style={{ height: '70px', alignSelf: 'flex-start' }} src={icon} alt={title} />
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
          <h2>How We Do It?</h2>
          <div className="hwdi-list">
            <div className="list-item">
              <h3>Define</h3>
              <ul>
                <li>Define requirements</li>
                <li>Define use cases</li>
                <li>Define user personas</li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Discover</h3>
              <ul>
                <li>Discover industry trends</li>
                <li>Discover market trends</li>
                <li>Discover competitors</li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Draw</h3>
              <ul>
                <li>Draw sketches</li>
                <li>Draw wireframes</li>
                <li>Draw logo design</li>
                <li>Evaluate and re-draw</li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Design</h3>
              <ul>
                <li>Design prototypes</li>
                <li>Design style guides</li>
                <li>Design UX guidelines</li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Implement</h3>
              <ul>
                <li>Implement UI/UX guidelines</li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Evaluate</h3>
              <ul>
                <li>Evaluate the result</li>
                <li>
                  <a href="/blog/the-value-of-user-testing" target="_blank">Test usability</a>
                </li>
                <li>Compile reports</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="project-content-more">
            <h2>What Tools Do We Use in Design Process?</h2>
            <ul className="design-tools-list">
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/sketch.png" alt="Sketch" />
                <div className="text-center">Sketch</div>
              </li>
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/invision.png" alt="Invision Studio" />
                <div className="text-center">Invision Studio</div>
              </li>
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/adobe-illustrator.png" alt="Adobe Illustrator" />
                <div className="text-center">Adobe Illustrator</div>
              </li>
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/figma.png" alt="Figma" />
                <div className="text-center">Figma</div>
              </li>
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/photoshop.png" alt="Adobe Photoshop" />
                <div className="text-center">Adobe Photoshop</div>
              </li>
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/adobe-after-effects.png" alt="Adobe After Effects" />
                <div className="text-center">Adobe After Effects</div>
              </li>
            </ul>
            <ul className="design-tools-list">
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/principle.png" alt="Principle" />
                <div className="text-center">Principle</div>
              </li>
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/zeplin.png" alt="Zeplin" />
                <div className="text-center">Zeplin</div>
              </li>
            </ul>
            <ul className="design-tools-list">
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/framer.png" alt="Framer" />
                <div className="text-center">Framer</div>
              </li>
              <li className="design-tools-item">
                <img src="/static/services/ui-ux-design/avocode.png" alt="Avocode" />
                <div className="text-center">Avocode</div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Why UI/UX Design?</h2>
          <FeaturesList list={whyUiUxDesign} />
          <CallToActionButton
            title="HIRE UI UX DESIGNER"
            href="/contacts"
          />
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>These are some of the cloud applications that we have developed:</p>
          <Works works={webDevelopmentWorks} />
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

export default ServicesUiUxDesign;
