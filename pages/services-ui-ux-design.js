import Link from 'next/link';

import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';
import { works } from '../main.config';
import Works from '../components/portfolio/works';
import LetsStart from '../components/about-us/LetsStart';
import '../styles/content/ui-ux-design.scss';

const ServicesUiUxDesign = () => {
  const whyUiUxDesign = [
    {
      icon: '/static/services/ui-ux-design/profit.png',
      alt: 'Profit',
      description: (
        <>
          <b>Boosts sales</b>
          <br />
          If done effectively, user experience design increases sales by almost
          one third. Responsive design is also important for the website to be
          ranked higher by search engines, which results in better organic
          search results.
        </>
      ),
    },
    {
      icon: '/static/services/ui-ux-design/user.png',
      alt: 'User',
      description: (
        <>
          <b>Facilitates onboarding</b>
          <br />
          Excellent user experience translates into easier user onboarding and
          higher adoption rates. If the user is having difficulties within the
          first two or three screens, they will close the app or website forever
          with little hesitation.
        </>
      ),
    },
    {
      icon: '/static/services/ui-ux-design/users.png',
      alt: 'Users',
      description: (
        <>
          <b>Attracts users</b>
          <br />
          The outstanding user interface translates into higher user attraction.
          If your website looks unique, your visitors will be quite likely to
          show it to their friends.
        </>
      ),
    },
    {
      icon: '/static/services/ui-ux-design/stopwatch.png',
      alt: 'Stopwatch',
      description: (
        <>
          <b>Decreases dropout rate</b>
          <br />
          The first impression is what counts, and user interface is what the
          first impression is about. If your website does not generate interest
          in the first 15 seconds, you can count the visitor as a lost one.
        </>
      ),
    },
    {
      icon: '/static/services/ui-ux-design/like.png',
      alt: 'Like',
      description: (
        <>
          <b>Increases user satisfaction</b>
          <br />
          Both UI and UX greatly contribute to increased user satisfaction.
          Modern-day users want everything to be not only simple and fast but
          also looking beautiful.
        </>
      ),
    },
    {
      icon: '/static/services/ui-ux-design/tick-inside-a-circle.png',
      alt: 'Tick',
      description: (
        <>
          <b>Simplifies navigation</b>
          <br />
          Well-though-out customer experience and user interface design means
          that your target audience will not feel lost. People are impatient
          about difficulties and vaguenesses, and they will not give your
          website a second chance.
        </>
      ),
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
      title: 'Cross-platform UI UX design and development services',
    },
    {
      icon: '/static/services/ui-ux-design/t-workshop.png',
      title: 'Design workshops and consulting',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc:
        'We do not just develop an app or a website — we want it to be loved and enjoyed by users. Our customer experience and user interface designs are created to be convenient and attractive. The best UI UX design is a responsive design. By helping you earn the love of your target audience, our UI UX design company will help your business grow and achieve new heights.',
    },
    {
      title: 'Building value',
      desc:
        'Your cooperation with KeenEthics can be organized in accordance with both Time and Material and Fixed Price approach, whatever you find to be more suitable to your needs. The same goes for our pricing policy — we can compromise costs, but we do not compromise the quality of our web design services.',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: (
        <>
          Our UX UI designers are interested in getting ahead with your project
          as soon as possible. Each wasted day is a wasted opportunity. Along
          with our expert Project Managers, they will help you&nbsp;
          <Link href="/blog/how-to-choose-your-optimal-development-methodology">
            <a target="_blank">choose the optimal development methodology</a>
          </Link>
          . Your project will be launched in a matter of weeks.
        </>
      ),
    },
    {
      title: 'Bringing tech expertise',
      desc: (
        <>
          Our UI UX design agency creates elegant, simple, and responsive web interfaces
          and mobile app designs, which correspond to the latest tendencies in
          the market. Check our&nbsp;
          <Link href="/portfolio">
            <a target="_blank">case studies</a>
          </Link>
          &nbsp;to see our web design services yourself! If needed, our UX UI
          designers may also conduct a design workshop or offer consultation
          about graphic design services and design process.
        </>
      ),
    },
    {
      title: 'Protecting your data',
      desc: (
        <>
          We understand how important your&nbsp;
          <Link href="/blog/1543388400000-your-data-is-safe-in-ukraine">
            <a target="_blank">data security</a>
          </Link>
          &nbsp;is to you and we are ready to ensure it at all stages of project
          development. We will take all the necessary physical, technical, and
          legal measures to protect your data. Sign a non-disclosure agreement
          with us and be sure that it stays safe.
        </>
      ),
    },
  ];

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">UI/UX Design and Development Services</h1>
          <p className="text-center text-italic">
            Creating elegant, responsive, and effectual user interface and
            experience designs with the latest market tendencies in mind.
          </p>
          <CallToActionButton />
          <h2
            style={{ fontSize: '40px', fontWeight: 900, marginBottom: '1em' }}
          >
            75%
          </h2>
          <p className="text-center">
            of one’s decision on a website’s credibility depends on its
            aesthetics,
            <br />
            according to the British Computer Society.
          </p>
        </section>
        <section>
          <h2>What is UI/UX design?</h2>
          <p>
            UI/UX design is the process of developing a software product
            interface and making the user experience as perfect as it can be.
            Whether you plan to develop an app from scratch or to revive an
            existing one, you have to keep in mind its visual appearance.
          </p>
          <p>
            The goal of user experience design is to understand the needs and
            wishes of a prospective user and to implement those in the app
            interface. In turn, the idea of UI design is to make your app look
            excellent without compromising user experience.
          </p>
          <p>
            Although the common term for the design process is “UI/UX design”,
            you should understand that the user experience goes first. However
            beautiful and unusual your app was, it is not going to work if your
            users get lost in it.
          </p>
        </section>
        <section>
          <h2>What is our experience in UI/UX design?</h2>
          <p>
            ThThese are some of the applications and websites that our design
            company as a UI design agency has developed:
          </p>
          <div>
            <p className="text-bold text-center">Banker Advisor</p>
            <p>
              The idea of Banker Advisor is to create a platform that would
              navigate users in the world of financial services, commercial
              banks, investment banking, and investment management. The industry
              by itself is quite complicated and difficult for a regular user to
              understand. Thus, the job of the UI UX designer was to facilitate
              user experience as much as possible. This was partially achieved
              through various filtering and sorting options. The design of
              BankerAdvisor is still under renovation, so keep an eye on it to
              see the amazing results that are coming!
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
                  <span>Keystone js</span>
                  ,
                  <span>
                    <Link href="/tech-front-end-react">React,</Link>
                  </span>
                  <span>Redux,</span>
                  <span>
                    <Link href="/tech-back-end-express">Express,</Link>
                  </span>
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>Mongoose,</span>
                  <span>AWS (SES, SNS, S3, EC2)</span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Kanban
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 5 developers, 1 QA, 1 UI/UX designer, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['BankerAdvisor'].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">PREE</p>
            <p>
              PREE is an IoT system, which consists of BLE beacons and a mobile
              app. It helps users to be always aware of where their important
              belongings are. The essential UI UX design challenge in PREE app
              was to let users access and control their PREE devices as quickly
              as possible. This is why our UX designers made the main page one
              click away from almost any other page. Setting up new devices is
              as easy as finding the existing ones: as soon as the user is
              registered, the BLE starts looking for PREE devices and connects
              them with the user’s account. Also, for the app not to disturb
              users with no need, our UX designers came up with the concept of
              safe haven — the address where “do not disturb” mode is turned on
              automatically.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-mobile-development-android">Android</Link>
                &nbsp;and&nbsp;
                <Link href="/services-mobile-development-apple">iOS</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>
                    <Link href="/tech-back-end-express">Express,</Link>
                  </span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>
                    <Link href="/tech-apps-cordova">Cordova,</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Kanban
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 1 UI UX designer, 2 full-stack developers, 1 QA
                specialist, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['Pree'].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">WorkBooking</p>
            <p>
              WorkBooking is a project with its own unique history. It was
              supposed to become a platform that would revolutionize the world
              of recruiting and job search. It brought together HR managers and
              job candidates, organized their communication, managed
              documentation, and scheduled interviews. The job of designers was
              to make the platform simple and fast, and this is exactly what our
              UX UI design agency did. Unfortunately, WorkBooking hit the wall
              of federal bureaucracy, so this startup had its wings cut off.
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
                  <span>
                    <Link href="/services-web-development-meteor">Meteor</Link>
                  </span>
                  <span>
                    <Link href="/tech-front-end-react">React,</Link>
                  </span>
                  <span>and</span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 1 UI UX designer, 3 full-stack developers, 1 QA
                specialist, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['WorkBooking'].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">ParkQX</p>
            <p>
              ParkQX is a project that solves the problem of parking in modern
              cities. On the one hand, it helps people who look for a parking
              spot to easily find one. On the other hand, it helps people who
              own a parking spot to earn some extra profit from it while it is
              empty. The task of UI UX designers was, as always though, to make
              the app navigation as simple as possible. After all, if drivers
              need a parking spot, they will not be able to spend a lot of time
              looking at their phones.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-mobile-development-android">Android</Link>
                &nbsp;and&nbsp;
                <Link href="/services-mobile-development-apple">iOS</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Technologies</b>
                :
                <span className="technologies-links">
                  <span>Redux</span>
                  <span>
                    <Link href="/services-web-development-node">Node.js,</Link>
                  </span>
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>Firebase,</span>
                  <span>Twilio,</span>
                  <span>and</span>
                  <span>
                    <Link href="/tech-apps-react-native">React Native.</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 1 UI UX designer, 2 full-stack developers, 1 QA
                specialist, and 1 PM
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['ParkQX'].includes(title))}
            />
          </div>

          <div>
            <p className="text-bold text-center">Blood Test Application</p>
            <p>
              The blood test application we have been working on is a mobile
              solution for people to keep a record of and easily interpret their
              blood test results. It might not be relevant for everybody, but it
              is particularly important for people with some serious health
              conditions. The job of the UI UX designer was to update the old
              designs and to make them look nicer and more usable.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-mobile-development">Mobile</Link>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Tools</b>
                :
                <span className="technologies-links">
                  <span>inVision,</span>
                  <span>Sketch,</span>
                  <span>Avocode,</span>
                  <span>Photoshop</span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 1 UI UX designer
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ['Blood Test Application'].includes(title))}
            />
          </div>
        </section>
        <section>
          <h2>What UI UX design services do we offer?</h2>
          <ul className="mobile-development-list">
            {whatDoWeOfferIcons.map(({ icon, title, href }) => (
              <li className="mobile-development-item" key={icon}>
                <figure>
                  <img
                    style={{ height: '70px', alignSelf: 'flex-start' }}
                    src={icon}
                    alt={title}
                  />
                  <figcaption className="mobile-development-figcaption">
                    {href ? (
                      <Link href={href}>
                        <a>{title}</a>
                      </Link>
                    ) : (
                      title
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>How do we do it?</h2>
          <p>
            As a UI UX development company, we employ an iterative approach
            towards web and mobile design. We start with project discovery,
            {' '}
            <Link href="/blog/the-value-of-user-testing">
              <a target="_blank">user testing,</a>
            </Link>
            {' '}
            and
            {' '}
            <Link href="/blog/ux-audit">
              <a target="_blank">UX audit</a>
            </Link>
            {' '}
            if necessary. Then, we go through an extensive process of
            wireframing, prototyping, and
            {' '}
            <Link href="/blog/1521631041972-the-importance-of-mockups">
              <a target="_blank">mockup development.</a>
            </Link>
            {' '}
            After that, we proceed to design evaluation. Only when both the
            client and our designers are happy with the result, the designs are
            sent to the development team for the implementation. This may seem
            like an approach that all UX design agencies employ, but in truth,
            only the best ones do.
          </p>

          <div className="service-page-ui-ux-our-procces">
            <span>Define</span>
            <span>Discover</span>
            <span>Draw</span>
            <span>Design</span>
            <span>Implement</span>
            <span>Evaluate</span>
          </div>

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
                  Carry out
                  {' '}
                  <Link href="/blog/the-value-of-user-testing">
                    <a target="_blank">usability testing</a>
                  </Link>
                </li>
                <li>Compile reports</li>
                <li>Offer recommendations</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="project-content-more">
            <h2>What tools do we use in design process?</h2>
            <ul className="design-tools-list">
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/sketch.png"
                  alt="Sketch"
                />
                <div className="text-center">Sketch</div>
              </li>
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/invision.png"
                  alt="Invision Studio"
                />
                <div className="text-center">Invision Studio</div>
              </li>
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/adobe-illustrator.png"
                  alt="Adobe Illustrator"
                />
                <div className="text-center">Adobe Illustrator</div>
              </li>
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/figma.png"
                  alt="Figma"
                />
                <div className="text-center">Figma</div>
              </li>
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/photoshop.png"
                  alt="Adobe Photoshop"
                />
                <div className="text-center">Adobe Photoshop</div>
              </li>
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/adobe-after-effects.png"
                  alt="Adobe After Effects"
                />
                <div className="text-center">Adobe After Effects</div>
              </li>
            </ul>
            <ul className="design-tools-list">
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/principle.png"
                  alt="Principle"
                />
                <div className="text-center">Principle</div>
              </li>
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/zeplin.png"
                  alt="Zeplin"
                />
                <div className="text-center">Zeplin</div>
              </li>
            </ul>
            <ul className="design-tools-list">
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/framer.png"
                  alt="Framer"
                />
                <div className="text-center">Framer</div>
              </li>
              <li className="design-tools-item">
                <img
                  src="/static/services/ui-ux-design/avocode.png"
                  alt="Avocode"
                />
                <div className="text-center">Avocode</div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Why choose UI/UX design?</h2>
          <FeaturesList list={whyUiUxDesign} />
          <CallToActionButton title="HIRE UI UX DESIGNER" href="/contacts" />
        </section>
        <section>
          <h2>Why choose KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <LetsStart />
      </div>
    </Layout>
  );
};
export default ServicesUiUxDesign;
