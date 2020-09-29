/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { works } from '../main.config';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
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
          <CallToActionButton href="/contacts" />
        </section>
        <section>
          <h2>Ed-Tech Industry</h2>
          <p>Due to the rapid growth of the smartphone market, mobile development is the most popular service in the IT industry, and the number of companies providing it is immense.</p>
          <FeaturesList list={edTechIndustry} titleItalic />
        </section>

        <section>
          <h2>Challenges in Education Software Development</h2>
          <p>You may want to realize your fresh idea for an online dictionary, a tool for visual learning, a mind-mapping instrument, an interactive STEM app, or a music simulator. You may need your conventional education organization to go online or your existing education platform to get a second breath. You may want to test your startup idea or learn more regarding education software development services. In any case, you are going to encounter certain challenges.</p>
          <ul className="challenges-list">
            <li className="challenges-item">
              <h3><img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face"/>CHALLENGES YOU FACE</h3>
              <b>Data safety</b>
              <p>
                Privacy is one of the major issues in the modern world as a lot of Internet major players are blamed for violating users' rights. At the same time, cybercriminals are actively operating to steal user information and sell it to businesses worldwide. <b>How can you make sure that your user data is protected?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3><img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face"/>SOLUTIONS WE OFFER</h3>
              <ul>
                <li>Before requesting education software development services, you should review the <a href="/blog/1543388400000-your-data-is-safe-in-ukraine" target="_blank" rel="noopener noreferrer nofollow">data safety regulations</a> offered by the agency.</li>
                <li>It is also advised that you sign an NDA with the software development service provider to have legal guarantees.</li>
              </ul>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs"><img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face"/>CHALLENGES YOU FACE</h3>
              <b>Lack of expertise</b>
              <p>
                When developing services for education, you have to ensure not only the high quality of a software product but also the relevance and efficiency of the learning strategy that it employs. <b>How can you make sure that both technical and pedagogical aspects are impeccable?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs"><img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face"/>SOLUTIONS WE OFFER</h3>
              <ul>
                <li>If you are a pedagog yourself or you have those in your team, please, cooperate with us at all times and closely <a href="/blog/1553896800000-how-to-monitor-your-project-distantly" target="_blank" rel="noopener noreferrer nofollow">monitor your project</a>.</li>
                <li>If you do not have pedagogical expertise, we will provide you with a professional in the field.</li>
              </ul>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs"><img src="/static/services/services-education-software-development/challenges-you-face.png" alt="challenges you face"/>CHALLENGES YOU FACE</h3>
              <b>Technological advancement</b>
              <p>
                While technologies are advancing so rapidly, it is easy to fall behind the pace. However, falling behind technological advancement means missing a valuable opportunity and losing the competition. <b>HowHow can you keep your recently developed educational app or e-learning platform up-to-date?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs"><img src="/static/services/services-education-software-development/solutions-we-offer.png" alt="challenges you face"/>SOLUTIONS WE OFFER</h3>
              <ul>
                <li>Maintenance and support are important stages of the education app development cycle. While supporting your app, we will make sure that your app is up-to-the-minute and functions impeccably.</li>
                <li>For our professionals to keep up with technological progress, our company organizes and participates in various educational events.</li>
              </ul>
            </li>
          </ul>
          <h2>Do you agree with our solutions?</h2>
          <CallToActionButton title="Contact us" href="/contacts" />
        </section>

        <section>
          <h2>Education Software Development Services We Offer</h2>
          <ul className="mobile-development-list">
            {
              servicesList.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={href}>
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="mobile-development-figcaption">
                      {
                        href ? <Link href={href}><a>{title}</a></Link> : title
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
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-mobile-development-android"><a>Android</a></Link> and <Link href="/services-mobile-development-apple"><a>iOS</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-back-end-meteor"><a>Meteor</a></Link>, <Link href="/tech-api-integration-graphql"><a>GraphQL</a></Link>, and <Link href="/tech-front-end-react"><a>React</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Scrum</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 4 full-stack developers, 1 QA specialist, and 1 Project Manager.</div>
            </div>
            <Works works={works.filter(({ title }) => ['SelfLeaders'].includes(title))} />
          </div>

          <div>
            <h3>Public schools monitoring system</h3>
            <p>It is an educational project, which enables high-level education officials to keep track of the learning progress of a certain student, school, region, and the country overall. This analysis provides valuable data on how educational processes may be optimized in the pursuit of reaching optimal learning results. This data is important for making sure that all schools across all regions are funded sufficiently and justly and no students are left underprivileged.</p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-web-development"><a>Web</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-front-end-angular"><a>Angular</a></Link>, <Link href="/services-web-development-node"><a>Node.js</a></Link>, <Link href="/tech-back-end-express"><a>Express</a></Link> and <Link href="/tech-data-base-mongo"><a>MongoDB</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Waterfall</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 3 full-stack developers, 1 QA specialist, and 1 Project Manager.</div>
            </div>
            <Works works={works.filter(({ title }) => ['Education System Platform'].includes(title))} />
          </div>

          <div>
            <h3>ComicEnglish</h3>
            <p>ComicEnglish is a service that helps users develop their language skills by playing games with the English learning chatbot. It includes quests of various difficulty levels and language competence. The gamified platform motivates users to stay on the track of learning English with rewards and multiple fun features.</p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-mobile-development-android"><a>Android</a></Link> and <Link href="/services-mobile-development-apple"><a>iOS</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-back-end-meteor"><a>Meteor</a></Link> and Ionic</div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Kanban</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 2 full-stack developers</div>
            </div>
            <Works works={works.filter(({ title }) => ['ComicEnglish'].includes(title))} />
          </div>
        </section>

        <section>
          <h2>Why KeenEthics?</h2>
          <p>As an education software development company, we are devoted to the needs of your business and the best interests of your users.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth</h3>
          <p>We have a proven record of helping education companies grow. The elearning software of our latest client has grown by 5 times in terms of the number of users over the course of a year. We are ready to support you in the atmosphere of changing needs and requirements.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value</h3>
          <p>Ethics is not just a part of our company name, it is the foremost principle we abide by. We cooperate with our partners on the basis of trust and transparency. We make sure that our education software solutions fully comply with the technical and ethical guidelines of Android, iOS, Microsoft, or any other platform you work with.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks</h3>
          <p>We strive to optimize and shorten the engagement stage of our cooperation. So, our education software development company will offer you the exact number of software professionals you need. You can hire software developers, QA specialists, UI/UX designers, and a dedicated PM in the shortest terms possible.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise</h3>
          <p>Our specialists have sound experience in developing educational apps and elearning software, and we want to share this experience with you. We offer mobile, desktop, and web education software solutions, on multiple platforms and software development technologies. Should you want a progressive web app or a chatbot, we are also ready to offer our assistance.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data</h3>
          <p>We understand how valuable your project idea is, so we comply with all the data security regulations. If you choose to sign an NDA, we will respect and value your willingness to stay private.</p>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesMobileDevelopment;
