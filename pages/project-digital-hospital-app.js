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
              <h1 className="title">Digital Hospital App</h1>
              <p className="description">Revolutionizing the outdated, disorganized, and inefficient traditional system of healthcare</p>
              <PortfolioTechnologyTags tags={['Business', 'Healthcare']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/digital-hospital-app/digital-hospital-app.jpg" alt="Digital Hospital App" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section>
              <h2 className="title">What Is the Project We Have Worked on?</h2>
              <p>
                The owners of this website platform declare it to be an e-health digital hospital providing patients with comprehensive and high-quality medical care. Here, a user can request a consultation with any medical specialist.
              </p>

              <h4>The list of treatments offered includes:</h4>
              <ul>
                <li>cancer care</li>
                <li>cosmetic surgery</li>
                <li>weight loss surgeries</li>
                <li>hair treatment</li>
                <li>eye treatment</li>
                <li>fertility treatment</li>
                <li>orthopedic surgeries</li>
              </ul>

              <p>With a single button click, a patient chooses any of the treatment options offered. Then, they can request treatment prices, free advice, or a treatment brochure. Having provided a few details about their case, they are asked about their financial opportunities. After that, they are offered to arrange a free consultation with a medical specialist at any point in time they choose. Finally, they enter the postcode to receive more detailed medical information about locations and prices. If they have already completed patient registration in the hospital information system, final arrangements are made, and the appointment is scheduled.</p>
              <p>
                <b>The goal of the integrated hospital information management system is to transform the outdated, disorganized, and inefficient traditional system of healthcare.</b>
              </p>
              <p>This project is the first among ehospital systems with fully digitalized administrative practices for the sake of improved patient and healthcare provider experience. It revolutionizes the interaction between patients and hospitals, offers a highly personalized experience for each patient, and enables healthcare specialists to get rid of unnecessary administrative tasks and to focus on providing outstanding medical care instead.</p>
            </section>
            <section>
              <h2>Our Cooperation</h2>
              <h3>Challenges</h3>
              <p>
                The major challenge was associated with data security. Since users input a lot of personal information into the web platform, we had to ensure that it is safe and immune to data breaches.
              </p>
              <p>
                Another issue was associated with website loading speed since it features an immense database of medical data. Therefore, we had to integrate the database in a way that would not affect the performance of the platform.
              </p>
              <h3>Our Team</h3>
              <p>
                Two full-stack software developers and one Quality Assessment specialist have been working on developing front-end and back-end for this application and finding digital hospital solutions.
              </p>
              <h3>Technologies</h3>
              <p>This <Link href="/services-web-development">web platform</Link> has been developed with the use of <Link href="/tech-front-end-react">React</Link> and <Link href="/services-web-development-node">Node.js</Link>.</p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/react-logo.svg" alt="react" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/nodejs.svg" alt="node js" style={{ maxHeight: '80px' }} />
                </li>
              </ul>
              <h3>Methodology</h3>
              <p>
                We cooperated according to the principles of <Link href="/blog/how-to-choose-your-optimal-development-methodology">Scrum</Link> in order to ensure continuous communication and interaction with the client. This PM methodology proved to be the most efficient as long as the requirements were constantly updated, and the partner strove to be constantly involved in the development process.
              </p>
            </section>
            <section>
              <h2>What Makes This Case Special?</h2>
              <p>
                For those who are still reluctant about whether to trust digital health specialists with their concerns or not, the platform offers a range of <b>actual patient stories</b>. Here, real users tell about their experiences with the digital hospital software and health outcomes they managed to achieve.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/digital-hospital-app/user.svg"
                alt="user"
              />
              <p>The online hospital management system features <b>all the information in one place</b>. Here, a user can instantly learn about available treatment options, prices and payment options, appointment information, and other medical details.</p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/digital-hospital-app/folder.svg"
                alt="folder"
              />
              <p>
                The digital hospital management software offers <b>end-to-end care</b>. Patients are guided and supported from the very first consultation through the treatment process and until the final recovery. Also, medical specialists offer holistic healthcare, meaning that they take care of both physical and mental health equally.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/digital-hospital-app/refresh.svg"
                alt="refresh"
              />
              <p>
                The platform features <b>an extensive referral system</b>. Each user is offered to invite a friend or a relative to the platform. This way, both the inviter and the invitee receive a discount of £100.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/digital-hospital-app/network.svg"
                alt="network"
              />
              <p>
                <b>Data safety and privacy</b> are major concerns of the digital hospital system. To ensure these, the platform has a number of legal policies, which are clearly stated on the website. Before finally signing up as a user of the website, each patient is expected to agree with these regulations.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/digital-hospital-app/shield.svg"
                alt="shield"
              />
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
