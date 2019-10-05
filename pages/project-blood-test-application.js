/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#1b497a';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">Blood Test Application</h1>
              <p className="description">A convenient mobile app for patients to record and understand their blood test results</p>
              <PortfolioTechnologyTags tags={['Business', 'Healthcare']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/blood-test-application/blood-test-application.jpg" alt="Blood Test Application" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section className="clearfix">
              <h2 className="title">What Is the Project We Have Worked on?</h2>
              <img className="float-right-img" src="/static/portfolio/blood-test-application/blood-test-application-screenshot.jpg" alt="Blood Test Application Screenshot" />
              <p>
                This blood test management application <b>aims at helping people record and interpret the results of their blood tests</b>. It may not be relevant to an average patient. Yet, people with specific health conditions, such as diabetes, find this help with tracking blood test results to be of utmost importance.
              </p>
              <p>
                This app <b>allows creating a unique user profile</b> with two-factor authentication, where blood test records are stored. A user can take a photo of the results, which will be analyzed by optical character recognition software. The results of the most recent tests are displayed on the dashboard. There is also an important section, which displays health aspects that need attention. The app offers a helpful function of health report generation and sharing. It <b>is augmented with AI</b>, which improves data analysis results according to the demographics and lifestyle of a user.
              </p>
              <p>
                Importantly, this blood check app <b>serves the educational function</b>. It teaches users to understand and track blood test results themselves.
              </p>
            </section>
            <section>
              <h2>Our Cooperation</h2>
              <p>
                For this project, we have been working only on UI/UX design. The idea was to make it comply with the Keep It Simple Stupid (KISS) model. That is, this blood test result analyzer app should be minimalistic, visually appealing, intuitively clear, and convenient.
              </p>
              <p>
                Our professional UI/UX designer has developed an Empathy Map to define and analyze user persona. For the creation of designs, she employed such software as Adobe Photoshop, Sketch, InVision App, and Avocode.
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/sketch.jpeg" alt="sketch" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/avocode.jpg" alt="avocode" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/invision.jpg" alt="invision" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/photoshop.jpg" alt="photoshop" />
                </li>
              </ul>
              <p>
                Among other things, we have improved previous designs of <b>login and signup screens</b> to make it more convenient and user-friendly. Sign up is the last thing users want to do. So it is better not to ask the user to create a username until it is really required. Instead, the email ID or mobile number should be used as their username by default.
              </p>
              <img style={{ margin: '30px auto', maxWidth: '600px' }} src="/static/portfolio/blood-test-application/blood-test-application-screenshot-1.jpg" alt="Blood Test Application Screenshot" />
              <p>
                <b>Touch ID screens</b> have been also developed with the main goal in mind – to keep the application minimalistic.
              </p>
              <img style={{ margin: '30px auto', maxWidth: '600px' }} src="/static/portfolio/blood-test-application/blood-test-application-screenshot-2.jpg" alt="Blood Test Application Screenshot" />
              <p>
                <b>Onboarding screens</b> have been updated to make the process more comprehensive and clear. With mobile apps, the onboarding process is critical in determining the success or failure of a product. If the user is having trouble within the first few screens, they are to likely drop off with little hesitation.
              </p>
              <img style={{ margin: '30px auto', maxWidth: '600px' }} src="/static/portfolio/blood-test-application/blood-test-application-screenshot-3.jpg" alt="Blood Test Application Screenshot" />
              <p>
                <b>Behavioral Gesturization</b> has been also integrated. Gestures, such as pinching, swiping, and scrolling, can greatly facilitate and improve user experience. Knowing how users behave is crucial for gesturization in order to understand what actions they are familiar with.
              </p>
              <img style={{ margin: '30px auto', maxWidth: '600px' }} src="/static/portfolio/blood-test-application/blood-test-application-gif.gif" alt="Blood Test Application Screenshot" />
            </section>
            <section>
              <h2>What Makes This Case Special?</h2>
              <img style={{ margin: '30px auto', maxWidth: '600px' }} src="/static/portfolio/blood-test-application/blood-test-application-screenshot-4.jpg" alt="Blood Test Application Screenshot" />
              <p>
                The greatest advantage of this application rests in the fact that it has been <b>developed by people with medical expertise</b>. Respectively, they know well what results it should generate, which aspects it should pay particular attention to, and what functionality a user should be offered. This is why the application is able to define precisely the areas that require medical attention.
              </p>
              <p>
                There is also <b>an extensive Q&A section</b>, which turns the app into a medical reference book in one’s pocket. A user can find the necessary answer while at home or on the go. This greatly facilitates their lives and the lives of healthcare practitioners, who are freed from answering simple questions over and over again. If one still needs to talk to a doctor, this blood test results app features <b>a convenient messenger</b>.
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
