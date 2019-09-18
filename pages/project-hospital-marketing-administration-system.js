/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#154250';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">Hospital Marketing Administration System</h1>
              <p className="description">Modeling patient journey, automating marketing documentation, and improving client service</p>
              <PortfolioTechnologyTags tags={['Business', 'Healthcare']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/hospital-marketing-administration-system/hospital-marketing-administration-system-prew.jpeg" alt="Hospital Marketing Administration System" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section>
              <h2 className="title">What Is the Project We Have Worked on?</h2>
              <p>
                This web platform powered by Artificial Intelligence is aimed to facilitate and optimize hospital administration practices. This hospital management system is supposed to be used specifically by front desk assistants, marketing specialists, and business consultants since a great share of their work can be automated in order to let them pay more attention to the needs and interests of patients.
              </p>
              <p>
                <b>As a front desk assistant</b>, this hospital management software can manage online scheduling, call back or send out messages to reactivate patients, send reminders, track different marketing channels, and compile a digital waitlist.
              </p>
              <p>
                <b>As a marketing specialist</b>, this hospital information system can manage referrals, collect feedback, compile business growth reports, and design an effective website or improve SEO characteristics of the existing one.
              </p>
              <p>
                <b>As a business consultant</b>, this web platform manages and analyzes business reports, gives insight into patient behavior, and analyzes various marketing channels.
              </p>
              <p>
                Also, this hospital patient management software works with patients throughout all stages of their journey, meaning that it helps to attract, convert, and retain clients.
              </p>
              <img
                style={{ width: '100%' }}
                src="/static/portfolio/hospital-marketing-administration-system/hospital-marketing-administration-system.jpeg"
                alt="Hospital Marketing Administration System"
              />
            </section>
            <section>
              <h2>Our Cooperation</h2>
              <h3>Challenges</h3>
              <p>
                The first and major challenge that the company underwent was associated with <b>a lack of resources</b>. This is why they chose us – an ethical hospital software development company with a fair pricing approach. Furthermore, with the help of our development, the company got a second round of investment.
              </p>
              <p>
                Besides, throughout hospital management software development, there was <b>a problem with service rendering</b>, and we managed to resolve it. We completed server bundling and solved a problem with Hot Module Replacement. This achievement has significantly improved the project architecture, which accelerated further hospital patient management software development.
              </p>
              <h3>Our Team</h3>
              <p>
                From our side, a middle software developer, a Quality Assessment specialist, an HTML/CSS coder, and a UI/UX designer were working on the front-end for this project. A team lead and developers working on the back-end of the hospital management software were provided from the client’s side.
              </p>
              <h3>Technologies</h3>
              <p>For the hospital management software development of this <Link href="/services-web-development">web platform</Link>, we have used such technologies as <Link href="/tech-front-end-react">React</Link>, <Link href="/tech-front-end-redux">Redux</Link>, <Link href="/tech-back-end-express">Express</Link>, RethinkDB, and Webpack2.</p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/react-logo.svg" alt="react" />
                </li>
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/webpack.png" alt="webpack" />
                </li>
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/redux-logo.png" alt="redux" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/express.svg" alt="express" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/hospital-marketing-administration-system/rethinkdb-new.png" alt="rethinkdb" />
                </li>
              </ul>
              <h3>Methodology</h3>
              <p>
                To communicate effectively, we have used <Link href="/blog/how-to-choose-your-optimal-development-methodology">Kanban</Link>. The methodology was chosen by the client, but we fully agreed with this decision, and it proved to be fully effective for the hospital management software development.
              </p>
            </section>
            <section>
              <h2>What Makes This Case Special?</h2>
              <p>
                This hospital management system differs from any other similar platform because it greatly augments all the stages of a clinic marketing process.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/hospital-marketing-administration-system/diagram.svg"
                alt="diagram"
              />
              <p>
                At first, it is aimed to help your client base grow. The platform manages the online presence and reputation of the clinic. It targets the right audience through different marketing channels and encourages potential clients to visit the website. This is how this clinic management system attracts and converts clients.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/hospital-marketing-administration-system/form.svg"
                alt="form"
              />
              <p>
                Also, it effectively keeps track of all data in the record management software. Moreover, it conducts data analysis to reveal important tendencies and insights.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/hospital-marketing-administration-system/notification.svg"
                alt="notification"
              />
              <p>
                This platform can be used from any device, which means that patients can receive notifications while on the go.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/hospital-marketing-administration-system/calendar.svg"
                alt="calendar"
              />
              <p>
                As a result, the clinic using this hospital management system is very likely to promptly fill out all the calendar gaps with appointments. Respectively, the business outcome is increased, while the costs are reduced.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/hospital-marketing-administration-system/rocket.svg"
                alt="rocket"
              />
              <p>
                The company we have provided hospital management software development services for managed to become one of the most promising start-ups in the digital healthcare sector. It witnessed considerable growth in the demand for this hospital management system. Indeed, this platform seems to be a life-saver for clinics that struggle managing their online presence and other marketing activities.
              </p>
            </section>
            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <Link
                    href="/portfolio"
                  >
                    <button type="button" className="call-to-cation-btn -secondary">
                      CHECK OTHER PROJECTS
                    </button>
                  </Link>
                )}
              />
            </section>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
