import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#1f2a44';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Education System Platform</h2>
              <p className="description">Analysis and optimization of the federal education system</p>
              <PortfolioTechnologyTags tags={['Education']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/education-system-platform.jpg" alt="OneRemission" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <h2 className="title">What Is the Project We Have Worked on?</h2>
            <p>
              It is an educational project consisting of an extensive monitoring
              system of public schools from entire Italy. The system enables a user
              to keep track of the learning progress of a certain student, school,
              region, and Italy overall. This analysis provides valuable data on how
              educational processes may be optimized in the pursuit of reaching optimal
              learning results. This data is important for making sure that all schools
              across all regions are funded sufficiently and justly and no students
              are left underprivileged.
            </p>
            <p>
              The platform is not accessible for external users. Instead, each person
              should be authorized by a super-admin – a responsible person from the Ministry
              of Education. The users are categorized in accordance with
              the strict educational system hierarchy.
            </p>
            <img style={{ margin: '30px 0' }} src="/static/portfolio/educational-app-hierarchy-prew.jpg" alt="OneRemission App" />
            <p>
              The higher the level of a user is, the more access and opportunities
              they are granted. For instance, students are allowed to view only their courses
              and learning progress. Teachers and other users of higher hierarchical levels have
              a right to manage courses and examination sessions. Admins and super-admins
              can add, manage, and delete some users, courses, institutions, etc.
            </p>
            <h2>Our Cooperation</h2>
            <h3 className="red-italic-title">Challenges</h3>
            <p>
              The primary question was related to data security: how to enable users to access
              certain information according to their place in the educational system? Solving
              this issue required long hours of brainstorming and planning, but through continuous
              cooperation, we managed to develop the ultimate hierarchy. Another concern was
              associated with a huge amount of data that the system had to process. In particular,
              the geographical database featured over 8000 towns and villages, where each of them
              had at least one school. Eventually, the system had to contain data of about 300
              thousand students. Our back-end developer did a great job in the pursuit of making
              the system work fast even when there are a lot of simultaneous users.
            </p>
            <p>
              Finally, we had to take into account the specific features and needs of schools for
              students with disabilities to ensure that our system is as inclusive as possible.
            </p>
            <h3 className="red-italic-title">Our Team</h3>
            <p>
              Three senior JS developers, one dedicated Project Manager, and one Quality Assurance
              specialist have been helping our partners to develop the project.
            </p>
            <h3 className="red-italic-title">Technologies</h3>
            <p>
              The application has been developed for the
              <span style={{ marginLeft: '.25em' }}><Link href="/services-web-development">web platform</Link></span>
              . As for the development technologies, we used
              <span style={{ marginLeft: '.25em' }}><Link href="/tech-front-end-angular">Angular</Link></span>
              ,
              <span style={{ marginLeft: '.25em' }}><Link href="/services-web-development-node">Node.js</Link></span>
              ,
              <span style={{ marginLeft: '.25em' }}><Link href="/tech-back-end-express">Express</Link></span>
              , and
              <span style={{ marginLeft: '.25em' }}><Link href="/tech-data-base-mongo">MongoDB</Link></span>
              .
            </p>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/angular.svg" alt="angular" />
              </li>
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/nodejs.svg" alt="nodejs" />
              </li>
            </ul>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/express.svg" alt="express" />
              </li>
              <li className="technologies-item">
                <img src="/static/portfolio/technologies/mongodb.svg" alt="mongodb" />
              </li>
            </ul>
            <h3 className="red-italic-title">Methodology</h3>
            <p>
              Waterfall – all the requirements were clear from the very beginning, our developers
              had an excellent experience in development methodologies, and we were badly
              limited in terms of time.
            </p>
            <h2>What Makes This Case Special?</h2>
            <p>
              We partnered up with a learning transformation company that supports people in their
              professional development. The project is run by a team of experts in design,
              management, and maintenance of training courses and workshops, which are based on
              the exclusive learning methodology invented by our partners. This methodology is a
              unique way of acquiring new personal and professional skills, managing learning tools,
              optimizing learner behavior patterns, and developing competitive potential.
            </p>
            <div>
              Our partners strive to help their users in:
              <ul>
                <li>Developing leadership skills;</li>
                <li>Shifting to innovation;</li>
                <li>Managing talents;</li>
                <li>Acquiring useful skills;</li>
                <li>Boosting performance and productivity;</li>
                <li>Making a valuable social impact.</li>
              </ul>
            </div>
            <h2>Feedback</h2>
            <blockquote>
              <p>
                KeenEthics worked seamlessly alongside the internal team and produced fast,
                efficient code. They accommodated expanded work-hours to meet tight deadlines and
                responded quickly to inquiries. Customers can expect a highly productive team that
                delivers high-quality products at competitive rates.
              </p>
              <p>
                <i />
                <div className="person">
                  <span className="info">
                    <span className="title">Technical Lead</span>
                  </span>
                </div>
                <i />
              </p>
            </blockquote>
            {/* <p>
              “KeenEthics worked seamlessly alongside the internal team and produced fast, efficient
              code. They accommodated expanded work-hours to meet tight deadlines and responded
              quickly to inquiries. Customers can expect a highly productive team that delivers
              high-quality products at competitive rates.” –
              <a
                href="//clutch.co/profile/keenethics#review-637049"
                style={{ marginLeft: '.25em' }}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Technical Lead
              </a>
            </p> */}
            <CallToActionButton
              buttonBefore={(
                <Link
                  href="/portfolio"
                >
                  <button type="button" className="call-to-cation-btn -secondary">
                    Other case studies
                  </button>
                </Link>
              )}
            />
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
