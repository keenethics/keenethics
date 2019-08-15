/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { works } from '../main.config';

import './services-mobile-development.scss';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import CalendlyIframe from '../components/content/CalendlyIframe';
import FeaturesList from '../components/content/FeaturesList';

const ServicesMobileDevelopment = () => {
  const edTechIndustry = [
    {
      description: 'Business development.',
      additionalText: <p>All leading retail companies like Coca-Cola, Home Depot, and Walmart use mobile learning apps and educational web services for the purpose of teaching and <b>training employees</b>.</p>,
    },
    {
      description: 'Personal development.',
      additionalText: <p>Lots of students decide to abandon traditional education and opt for online education via such <b>self-learning</b> platforms as edX, Coursera, or LinkedIn Learning. <b>Learning languages</b> has become so much easier when Duolingo, Memrise, LinguaLeo, Babbel were introduced.</p>,
    },
    {
      description: 'Academic development.',
      additionalText: <p>Most school administrations, including those of Oxford, MIT, and California Institute of Technology, have employed e-learning software in the pursuit of <b>managing their learning process</b>, assessing and <b>keeping a record of student performance</b>, and <b>sharing educational materials and resources</b>.</p>,
    },
  ];
  const servicesList = [
    {
      icon: '/static/portfolio/services-education-software-development/customized-education-systems.svg',
      title: 'Customized education systems',
    },
    {
      icon: '/static/portfolio/services-education-software-development/skills-assessment-solutions.svg',
      title: 'Skills assessment solutions',
    },
    {
      icon: '/static/portfolio/services-education-software-development/e-learning-platforms.svg',
      title: 'E-learning platforms',
    },
    {
      icon: '/static/portfolio/services-education-software-development/self-learning-management-systems.svg',
      title: 'Self-learning management systems',
    },
    {
      icon: '/static/portfolio/services-education-software-development/machine-learning-and-ai-chatbots.svg',
      title: 'Machine learning and AI chatbots',
    },
    {
      icon: '/static/portfolio/services-education-software-development/professional-training-platforms.svg',
      title: 'Professional training platforms',
    },
    {
      icon: '/static/portfolio/services-education-software-development/gamified-services-for-education.svg',
      title: 'Gamified services for education',
    },
    {
      icon: '/static/portfolio/services-education-software-development/school-management-systems.svg',
      title: 'School management systems',
    },
  ];

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">Education Software Development Services</h1>
          <p className="text-center text-italic">Revolutionizing the world of personal, academic, and professional development.</p>
          <CallToActionButton />
        </section>
        <section>
          <h2>Ed-Tech Industry</h2>
          <p>Due to the rapid growth of the smartphone market, mobile development is the most popular service in the IT industry, and the number of companies providing it is immense.</p>
          <FeaturesList list={edTechIndustry} titleItalic />
        </section>

        <section>
          <h2>Education Software Development Challenges</h2>

          <img
            style={{ margin: '25px auto 35px auto' }}
            src="/static/portfolio/services-education-software-development/5-educational-app-challenges.jpg"
            alt="Education Software Development Challenges"
          />

          <h3 className="red-italic-title">Challenge #1.</h3>
          <p>You want to realize your fresh idea for an online dictionary, a tool for visual learning, a mind-mapping instrument, an interactive STEM app, or a music simulator.</p>

          <h3 className="red-italic-title">Challenge #2.</h3>
          <p>You need your conventional education organization to go online.</p>

          <h3 className="red-italic-title">Challenge #3.</h3>
          <p>You want your existing education platform to get a second breath.</p>

          <h3 className="red-italic-title">Challenge #4.</h3>
          <p>You need to test your startup idea that will change the world of personal, academic, and professional development.</p>

          <h3 className="red-italic-title">Challenge #5.</h3>
          <p>You want to learn more regarding education software development services.</p>

          <p>If at least one of these challenges feels relatable to you, please, tell us more.</p>
          
          <CallToActionButton title="Solve a challenge" />
        </section>

        <section>
          <h2>Education Software Development Services We Offer</h2>
          <ul className="mobile-development-list">
            {
              servicesList.map(({ icon, title, href }) => (
                <li className="mobile-development-item">
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="mobile-development-figcaption">
                      {
                        href ? <Link href={href}>{title}</Link> : title
                      }
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
        </section>

        <section>
          <h2>Portfolio</h2>
          <div>
            <h3>SelfLeaders</h3>
            <p>SelfLeaders delivers training events for professional and personal development in self-leadership for businesses of different sizes, NGOs, and the public sector. This app is a set of personal growth tools for those who organize and participate in educational events. It provides an opportunity to conduct workshops with interactive materials, videos, presentations, etc.</p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-mobile-development-android">Android</Link> and <Link href="/services-mobile-development-apple">iOS</Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-back-end-meteor">Meteor</Link>, <Link href="/tech-api-integration-graphql">GraphQL</Link>, and <Link href="/tech-front-end-react">React</Link></div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Scrum</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 4 full-stack developers, 1 QA specialist, and 1 Project Manager.</div>
            </div>
            <Works works={works.filter(({ title }) => ['SelfLeaders'].includes(title))} />
          </div>

          <div>
            <h3>ComicEnglish</h3>
            <p>ComicEnglish is a service that helps users develop their language skills by playing games with the English learning chatbot. It includes quests of various difficulty levels and language competence. The gamified platform motivates users to stay on the track of learning English with rewards and multiple fun features.</p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-mobile-development-android">Android</Link> and <Link href="/services-mobile-development-apple">iOS</Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-back-end-meteor">Meteor</Link> and Ionic</div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Kanban</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 2 full-stack developers</div>
            </div>
            <Works works={works.filter(({ title }) => ['ComicEnglish'].includes(title))} />
          </div>
        </section>

        <section>
          <h2>Why KeenEthics?</h2>
          <p>As an education software development company, we are devoted to the needs of your business and the best interests of your users.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth.</h3>
          <p>We have a proven record of helping education companies grow. The elearning software of our latest client has grown by 5 times in terms of the number of users over the course of a year. We are ready to support you in the atmosphere of changing needs and requirements.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value.</h3>  
          <p>Ethics is not just a part of our company name, it is the foremost principle we abide by. We cooperate with our partners on the basis of trust and transparency. We make sure that our education software solutions fully comply with the technical and ethical guidelines of Android, iOS, Microsoft, or any other platform you work with.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks.</h3>
          <p>We strive to optimize and shorten the engagement stage of our cooperation. So, our education software development company will offer you the exact number of software professionals you need. You can hire software developers, QA specialists, UI/UX designers, and a dedicated PM in the shortest terms possible.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise.</h3>
          <p>Our specialists have sound experience in developing educational apps and elearning software, and we want to share this experience with you. We offer mobile, desktop, and web education software solutions, on multiple platforms and software development technologies. Should you want a progressive web app or a chatbot, we are also ready to offer our assistance.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data.</h3>
          <p>We understand how valuable your project idea is, so we comply with all the data security regulations. If you choose to sign an NDA, we will respect and value your willingness to stay private.</p>
        </section>
        <CalendlyIframe />
      </div>
    </Layout>
  );
};

export default ServicesMobileDevelopment;
