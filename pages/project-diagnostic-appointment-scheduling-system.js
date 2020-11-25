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
              <h1 className="title">Diagnostic Appointment Scheduling System</h1>
              <p className="description">Personalized medical care and public health support</p>
              <PortfolioTechnologyTags tags={['Business', 'Healthcare']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/diagnostic-appointment-scheduling-system/diagnostic-appointment-scheduling-system.jpg" alt="Diagnostic Appointment Scheduling System" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section>
              <h2 className="title">What Is the Project We Have Worked on?</h2>
              <p>
                Scheduling a doctor can be a long-lasting and troublesome experience. While holding on a line or standing in a queue, patients can lose some valuable time so that the treatment process gets more complicated. Ehospital systems are not yet as common as they should be. So, we are happy to have been involved in developing such a unique and important project.
              </p>
              <p>The hospital management system we have developed is <b>a platform for online searching and scheduling medical checks or appointments with a doctor</b>. Through this hospital management software, a user can get in touch with a medical specialist in a few moments and get answers to all the pressing questions 24 hours a day, seven days a week. Also, the web platform features a messenger – a hotline via which users can ask questions or request consultations.</p>
              <p>The idea of this electronic hospital was invented by a team of general practitioners, radiologists, and health insurers. Here, <b>they aim to provide patients with general care and ultrasound checks in a convenient, time-efficient, and highly personalized manner</b>. These professionals understand the importance of making accurate diagnoses, and that is what they strive to achieve. For diagnoses to be timely and definitive, general practitioners need to cooperate closely with diagnostic specialists. Otherwise, the medical investigation process can become protracted and ineffective.</p>
              <p>
                <b>The ultimate goal of this hospital information system is to facilitate communication patients and health providers, to improve the quality of medical care, and to make it more customer-friendly.</b>
              </p>
              <p>It aims to provide the most reliable, personalized, and relevant healthcare information. It is important that this hospital software does not strive to substitute physical hospitals. Instead, it aims to become a valuable addition to the traditional hospital information system.</p>
            </section>
            <section>
              <h2>Our Cooperation</h2>
              <h3>Challenges</h3>
              <p>
                We have been working with a code written by our predecessors, and the major challenge was to deal with existing errors and architectural flaws in this hospital management software. Respectively, at first, we have implemented unit tests. Then, we refactored the code and implemented the new syntax of <Link href="/tech-front-end-react">React</Link>.
              </p>
              <h3>Our Team</h3>
              <p>
                Two full-stack software developers, one professional PM, and one expert QA specialist have been developing the hospital management system software.
              </p>
              <h3>Technologies</h3>
              <p>This hospital software project has been developed with the usage of Python, Django, SQLite, <Link href="/tech-front-end-react">React</Link> and Redux.</p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/react-logo.svg" alt="react" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/redux-logo.png" alt="redux" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/sqlite.png" alt="SQLite" />
                </li>
              </ul>
              <h3>Methodology</h3>
              <p>
                The cooperation was based on the principles of <Link href="/blog/how-to-choose-your-optimal-development-methodology">Scrum</Link> since the requirements were constantly changing and the partner wished to be actively involved.
              </p>
            </section>
            <section>
              <h2>What Makes This Case Special?</h2>
              <p>This case is unique because the common good rather than business profit is in the center of it. The company witnessed a huge success in achieving their goal of helping people. So far, tens of thousands of patients in the region have been seen by a doctor and a radiologist. The average cost for each visit is by at least 25% lower than in a traditional hospital. As long as the diagnostics hospital information system is improved, the number of unnecessary hospital referrals has dropped. Healthcare insurers report that excessive medical care costs have been decreased. In turn, patient satisfaction rates have grown significantly.</p>
              <p>Besides providing personal medical care services, this hospital management software strives to drive an important social change. They organize successful public awareness campaigns and healthcare monitoring projects in order to improve the state of public health. </p>
              <p>Their goals and objectives closely align with our business values as we share their desire to make ourselves and the local community healthier. Our corporate policies provide numerous healthcare initiatives for our employees, such as stand-up desks, healthy nutrition, massage, sports and education reimbursements, or smoking- and alcohol-free corporate parties. We also support local children with the charity initiative <a href="https://letkidsmove.org/en" target="_blank" rel="noopener noreferrer nofollow">“Let Kids Move”</a>.</p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/diagnostic-appointment-scheduling-system/dumbbell.svg"
                alt="dumbbell"
              />
              <p>
                In turn, our partners work hard to motivate people to balance their weight by exercising and eating healthily. The business understands that it is easier to prevent diseases rather than cure them, so they motivate the local community to live an active life.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/diagnostic-appointment-scheduling-system/heartbeat.svg"
                alt="heartbeat"
              />
              <p>
                The company pays particular attention to cardiovascular health, so they teach people about heart diseases and ways of their prevention. The campaign features both theoretical lectures, where people are educated on the structure and functioning of the cardiovascular system, practical lessons, where people are taught to act in an emergency, and physical training sessions to improve their physical health condition.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/diagnostic-appointment-scheduling-system/sugar-blood-level.svg"
                alt="sugar blood level"
              />
              <p>
                Also, the business supports people living with diabetes. The team educates such patients on various self-management practices and teaches others about how to provide help to these patients. Diabetes is a serious healthcare concern growing globally, and it is important that the company recognizes the problem.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/diagnostic-appointment-scheduling-system/femenine.svg"
                alt="femenine"
              />
              <p>
                The business supports women while they are going through menopause and educates them on the specifics of a female body. It works to reduce the stigma against female health issues and to promote gender equality in healthcare settings.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/diagnostic-appointment-scheduling-system/no-smoking.svg"
                alt="no smoking"
              />
              <p>More than that, they have successfully launched a few public anti-smoking campaigns in the pursuit of decreasing the number of people addicted to this detrimental habit. Successfully combining theoretical lessons and physical exercising sessions, the company managed to considerably decrease local smoking rates.</p>
              <p>Having succeeded in a few health initiatives in their home district, the business is planning to extend its area of influence to a few neighbor regions.</p>
              <p>The company is doing an amazing job for the purpose of the public good, and we are truly proud to partner with such a decent company! Ehospital systems are the future of healthcare, and we have made an important contribution to the world of tomorrow.</p>
            </section>
            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <Link href="/portfolio">
                    <a>
                      <button type="button" className="call-to-cation-btn -secondary">
                        CHECK OTHER PROJECTS
                      </button>
                    </a>
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
