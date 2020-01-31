import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import OfferList from '../components/content/OfferList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import './services-education-software-development.scss';

const BusinessAdministrationSoftware = () => {
  const companiesWeServe = [
    {
      icon: '/static/services/business-administration-software/img1.png',
      title: 'Start-ups and micro-companies',
    },
    {
      icon: '/static/services/business-administration-software/img3.png',
      title: 'Medium-sized companies',
    },
    {
      icon: '/static/services/business-administration-software/img2.png',
      title: 'Small companies',
    },
    {
      icon: '/static/services/business-administration-software/img4.png',
      title: 'Large enterprises',
    },
  ];

  const servicesWeOffer = [
    {
      icon: '/static/services/business-administration-software/people.png',
      alt: 'HR Management Platforms',
      title: 'HR Management Platforms',
    },
    {
      icon: '/static/services/business-administration-software/browser.png',
      alt: 'File Management Systems ',
      title: 'File Management Systems ',
    },
    {
      icon: '/static/services/business-administration-software/settings.png',
      alt: 'Business Security Solutions',
      title: 'Business Security Solutions',
    },
    {
      icon: '/static/services/business-administration-software/startup.png',
      alt: 'Marketing & SEO Platforms',
      title: 'Marketing & SEO Platforms',
    },
    {
      icon: '/static/services/business-administration-software/money.png',
      alt: 'Accounting Platforms',
      title: 'Accounting Platforms',
    },
    {
      icon: '/static/services/business-administration-software/directions.png',
      alt: 'Enterprise resource planning systems',
      title: 'Enterprise resource planning systems',
    },
    {
      icon: '/static/services/business-administration-software/networking.png',
      alt: 'Task Management Solutions',
      title: 'Task Management Solutions',
    },
    {
      icon: '/static/services/business-administration-software/bar-chart.png',
      alt: 'Business Analysis & Report Systems',
      title: 'Business Analysis & Report Systems',
    },
    {
      icon: '/static/services/business-administration-software/user.png',
      alt: 'Customer relationship management systems',
      title: 'Customer relationship management systems',
    },
    {
      icon: '/static/services/business-administration-software/cloud-computing.png',
      alt: 'AI, IoT, and cloud solutions for business',
      title: 'AI, IoT, and cloud solutions for business',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'Regardless of the stage you are currently at, we strive to help your business continue growing. We understand that you need the results to be quick, effective, and high-quality. By cooperating continuously and transparently, we make sure that our partnership is fruitful.',
    },
    {
      title: 'Building value',
      desc: 'Ethics is the fundamental principle we abide by. We build our cooperation according to the principles of trust and honesty. Also, we will ensure that your business software solution will adhere to legal, technical, and ethical guidelines.',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'If you want to jump straight into development, we are not going to hold you back. Our engagement stage is optimized and short, and we are ready to offer you exactly the number of software professionals that you need. You may hire developers, QAs, designers, and a PM in the shortest terms possible.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'Our company has sound experience in business administration software development. Aside from commercial projects, we have developed a number of solutions that help us manage our internal business processes. Our accounting, HR, and content management systems are fully powered by the software our developers have developed. Let us share this experience with you.',
    },
    {
      title: 'Protecting your data',
      desc: 'We comply with all data security regulations because we understand how valuable your project idea is. Also, regardless of how trustful our cooperation is, we want to keep it legal. If you sign a non-disclosure agreement, we will respect your desire to keep our cooperation private.',
    },
  ];

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Business Administration Software
          </h1>
          <p className="text-center text-italic">
            Helping your business grow, automating mundane tasks, and boosting productivity
          </p>
          <CallToActionButton
            title="learn more"
            href="/contacts"
          />
        </section>
        <section>
          <h2>Companies We Serve</h2>
          <ul className="mobile-development-list">
            {
              companiesWeServe.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img style={{ width: '200px' }} src={icon} alt={title} />
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
          <h2>What is Business Administration?</h2>
          <p>
            Managing and developing a successful business requires you as a business owner
            to put a great deal of effort almost 24/7. To save yourself some time and energy,
            you hire a team of people. Some business responsibilities you delegate include: HR,
            marketing, accounting, analysis and reporting, security, task and resource management.
            To facilitate business growth even further, you develop various software solutions
            and integrate them into your business system. HR management platforms, accounting
            systems, security solutions, or task management platforms – these aim to improve your
            business performance and productivity by sparing some routine tasks.
          </p>
        </section>
        <section>
          <h2>Custom Business Administration Software Development Services We Offer</h2>
          <OfferList list={servicesWeOffer} />
        </section>
        <section>
          <h2>Challenges in Business Administration Software Development</h2>
          <ul className="challenges-list">
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face" />
                CHALLENGES YOU FACE
              </h3>
              <b>Resource scarcity</b>
              <p>
                Profitability is the first objective of a business. To make sure that it brings
                you income, you should start with minimizing expenses.
                <br />
                <b>How do you optimize resource usage or address the scarcity?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3>
                <img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face" />
                SOLUTIONS WE OFFER
              </h3>
              <ul>
                <li>Develop a resource management platform for your business.</li>
                <li>
                  When developing software, choose an agency with an&nbsp;
                  <Link href="/blog/1551175200000-our-ethical-dimension">ethical</Link>
                  &nbsp;and flexible approach to payment.
                </li>
              </ul>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face" />
                CHALLENGES YOU FACE
              </h3>
              <b>Data security</b>
              <p>
                Your business files contain a lot of personal information about your employees
                and clients. Sure thing, you do not want anyone to get access to this data.
                <br />
                <b>How can you protect your business from an error or an attack?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face" />
                SOLUTIONS WE OFFER
              </h3>
              <ul>
                <li>Hire a team of professionals, who will develop high-quality bug-free code.</li>
                <li>
                  Make sure that your business software complies with laws and&nbsp;
                  <Link href="/blog/1543388400000-your-data-is-safe-in-ukraine">data safety</Link>
                  &nbsp;regulations.
                </li>
              </ul>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face" />
                CHALLENGES YOU FACE
              </h3>
              <b>Conflicts of interests</b>
              <p>
                The larger your company grows, the more likely are the conflicts of interests
                to occur.
                <br />
                <b>How do you make sure that these do not affect your business success?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face" />
                SOLUTIONS WE OFFER
              </h3>
              <ul>
                <li>While you cannot prevent COI’s, you can minimize the negative impact.</li>
                <li>
                  Report all the conflicts of interests to the business management and deal with
                  them at once.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>COI Management Solution CIRE365</h2>
          <p>
            To ensure the security of your business, please, consider the solution that
            our partners at&nbsp;
            <a href="https://www.silvertowntechnologies.com/" target="_blank" rel="noopener noreferrer nofollow">Silvertown Technologies</a>
            &nbsp;have developed.
          </p>
          <img style={{ height: '150px', marginBottom: '1em' }} src="/static/services/business-administration-software/unnamed.png" alt="Silvertown Technologies Logo" />
          <p>
            CIRE365 is a cloud application development platform, a Conflicts Management
            solution offered by Silvertown Technologies.  CIRE stands for Conflicts of
            Interests Registry for Employees. It makes sure that your cloud-based app meets
            the MiFID II requirements on Conflicts of Interest. MiFID II is a legislation
            introduced by the European Union, which regulates financial markets in the EU
            and protects investors. It requires you to register all the potential or actual
            conflicts of interest that occur at the workplace. CIRE365 reports directly to
            your managers and supervisors.
          </p>
          <p>With CIRE365, you can:</p>
          <ul>
            <li>
              Leverage Compliance capabilities in our team of experts
              (5+ years international experience)
            </li>
            <li>Manage your Integrity Risks well with a secure Cloud application</li>
            <li>Create full transparency with smooth workflow and HR integration</li>
            <li>Avoid reputational damages and regulatory scrutiny</li>
            <li>Minimize business impact from Compliance</li>
          </ul>
          <p>
            It is a real-time highly automated solution for organizing the workflow and
            compiling reports. There is a dashboard for prioritizing and optimizing the
            workflow. The platform offers a built-in reporting function, which lets you
            schedule reports and adjust their content to your needs. The system is also
            provided with reminders, alerts, and updates for the best user experience.
          </p>
          <p>
            CIRE365 supports the integrity and ethical approach of your company.
            This is what our&nbsp;
            <Link href="/blog/1560268800000-silvertown-technologies-announces-partnership-with-keenethics">KeenEthics & Silvertown Technologies partnership</Link>
            &nbsp;is based on.
          </p>
          <CallToActionButton
            title="SEE THE SOLUTION"
            href="https://www.silvertowntechnologies.com/?utm_source=KeenEthics&utm_medium=KeenEthics&utm_campaign=KeenEthics"
          />
        </section>
        <section>
          <h2>Portfolio</h2>
          <div>
            <p className="text-bold text-center">WorkBooking</p>
            <p>
              It is a platform for the business people to find part-time employees and
              for the professionals to find a part-time job. Workbooking helps the people
              who are looking for specialists in a certain field for a certain task in a
              particular place and time. Meanwhile, it lets professionals who are looking
              for a part-time job to find the potential employer. This platform features
              convenient searching and scheduling tools and is available on any device.
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
                  <span><Link href="/tech-data-base-mongo">MongoDB</Link></span>
                  ,
                  <span><Link href="/tech-back-end-meteor">Meteor</Link></span>
                  &nbsp;and
                  <span><Link href="/tech-front-end-react">React</Link></span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 3 full-stack developers, 1 QA specialist, and 1 PM
              </div>
            </div>
            <Works works={works.filter(({ title }) => ['WorkBooking'].includes(title))} />
          </div>
          <div>
            <p className="text-bold text-center">The Check Network</p>
            <p>
              It is a one-of-a-kind business development and promotion platform. It presents
              universal SEO solutions for companies from different industries. The Check Network
              is an international network. It combines localized price comparison websites on
              various themes and subjects, ranging from coffee products to equestrian goods.
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
                  <span><Link href="/tech-back-end-meteor">Meteor</Link></span>
                  &nbsp;and
                  <span><Link href="/tech-front-end-react">React</Link></span>
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Scrum
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 3 full-stack developers and 1 QA specialist
              </div>
            </div>
            <Works works={works.filter(({ title }) => ['The Check Network'].includes(title))} />
          </div>
          <div>
            <p className="text-bold text-center">Black Book</p>
            <p>
              It is an enterprise solution for large companies with numerous employees.
              Black Book has been developed for and together with NOKIA. This app helps to
              track real-time statistics on company employees around the world. You can estimate
              the number of employees by the department they work in, as well as by the market,
              country, or city they represent.
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
                  <span><Link href="/tech-back-end-meteor">Meteor</Link></span>
                  , Ionic,
                  <span><Link href="/tech-front-end-angular">Angular</Link></span>
                  , and D3.js
                </span>
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Methodology</b>
                : Kanban
              </div>
              <div style={{ marginBottom: '5px' }}>
                <b>Team</b>
                : 1 full-stack developer and 1 QA specialist
              </div>
            </div>
            <Works works={works.filter(({ title }) => ['Black Book'].includes(title))} />
          </div>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <p>
            As a business software development company, we strive to satisfy the needs
            of your business and the best interests of your users.
          </p>
          <WhyKeenethicsList list={whyKeenethics} />
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

export default BusinessAdministrationSoftware;
