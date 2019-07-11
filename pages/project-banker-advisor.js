import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import PortfolioFeedback from '../components/portfolio/PortfolioFeedback';

const baseColor = '#0c2fdf';

const ProjectBankerAdvisor = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Banker Advisor</h2>
              <p className="description">
                Investment banking tool
              </p>
              <PortfolioTechnologyTags tags={['Business Digitalization', 'MVP']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/banker-advisor.png" alt="Banker Advisor" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <PortfolioFeedback
              title="Mike Casey, Georgia, USA"
              photo="static/portfolio/client-banker-advisor.jpeg"
              feedback="Due to their responsiveness & patience, the collaboration itself progressed smoothly from start to finish, resulting in a high quality product & ensuring their continued engagement. KeenEthics’ skillset was exactly what was needed, & despite a language difference, communications never suffered."
              link="https://clutch.co/profile/keenethics#review-339220"
              style={{ titleWidth: '100px' }}
            />
            <div className="title">Our part</div>
            <p>
              Prior to cooperating with any bank, a buyer needs to learn about bank fees,
              interest rates, and customer services. Asking an expert for advice could make
              one&apos;s business up and running. What if we could bring an expert opinion
              into the smartphone?
            </p>
            <p>
              The idea behind BankerAdvisor was to create an efficient investment banking
              service for both buyers and advisory firms that would provide relevant insights
              into bank operations based on verified client reviews. Buyers would be able to
              make better decisions and investment banks and advisory firms would be able to
              improve their services relying on clients’ feedbacks.
            </p>
            <p>
              For us, this app is an opportunity to make the investment banking more efficient by
              providing unbiased reviews and showing the advisory services their weaknesses and
              strengths.
            </p>
            <img
              src="/static/images/project/banker-advisor-prew-1.jpg"
              alt="Banker Advisor"
              className="image-gaps"
            />
            <div className="title">Customer’s story</div>
            <p>
              Mike Casey has more than 30 years of experience in the financial and operational
              leadership. Having served as CFO in several leading public software and technology
              companies, such as MAPICS, iXL Enterprises, Manhattan Associates and IQ Software,
              noticed that it was quite a challenge to pick the right service for each specific
              sector. Neither was it easy to ensure a smooth transaction experience. After a
              thorough analysis, Mr. Casey figured the common problem of all companies:
            </p>
            <div className="project-content-chapter">
              <p className="chapter-paragraph italic quote">“There was no way for them to get an unbiased and insightful advice.”</p>
            </div>
            <div className="title">Challenge</div>
            <p>
              KeenEthics have been hired to develop a solution that helps buyers
              see the realistic picture of the investment banking market by providing
              the users with an access to the client reviews. Our main goal was to make a
              resourceful application that would simplify the choice of banks for cooperation.
            </p>
            <p>
              Similarly, we wanted to make this application valuable for the bank owners who’d
              be able to use the feedbacks as the first step in overcoming the weaknesses
              in the operation of their businesses.
            </p>
            <p>
              <span className="semi-bold">BankerAdvisor - an even-handed assistance for investment banking</span>
            </p>
            <img
              src="/static/images/project/banker-advisor-prew-2.jpg"
              alt="Banker Advisor"
              className="image-gaps"
            />
            <div className="double-column-wrapper retreat">
              <div className="column column-no-padding">
                <div className="project-content-chapter">
                  <p className="chapter-title">How it works</p>
                  <p className="chapter-paragraph">
                    The application provides a flexible search by banking services and
                    industry sectors with the opportunity to sort results by rate and
                    most reviews. A user may add a rated review with recommendations
                    to a service. At the same time, bank owners are able to create
                    a new listing or claim the existing one by setting
                    premium accounts using Stripe service.
                  </p>
                  <p className="chapter-title">Reliability first</p>
                  <p className="chapter-paragraph">
                    To protect a bank owner from unfair feedback, spam and bots we use reCAPTCHA.
                    Also, all users have to log in via LinkedIn to verify their accounts.
                  </p>
                </div>
              </div>
              <div className="column">
                <img src="static/images/project/banker-advisor-how-it-works.jpg" alt="How Banker Advisor works" />
              </div>
            </div>
            <div className="title">Background</div>
            <p>
              <span className="semi-bold">We wanted to create an app that would simplify the search for the most convenient bank.</span>
            </p>
            <div className="project-content-chapter">
              <p className="chapter-title chapter-title-upper">Research</p>
              <p className="chapter-paragraph">
                Our clients thoroughly researched the demand for the service they
                wanted to have developed. The market niche was not yet taken.
                Likewise, we did not find any similar services or direct competitors,
                and given the obvious need the service, the app has a vast potential.
              </p>
            </div>
            <img
              src="/static/images/project/banker-advisor-prew-4.png"
              alt="Banker Advisor"
              className="image-gaps"
            />
            <div className="double-column-wrapper retreat">
              <div className="column">
                <div className="project-content-chapter">
                  <p className="chapter-title chapter-title-upper">Data Collection</p>
                  <p className="chapter-paragraph">
                    For this application, we went through the vast amounts of information to
                    examine the peculiarities of the financial market and investment funds.
                    We created the separate Customer Journey Maps for buyers and
                    bankers to determine the target audience.
                  </p>
                  <p className="chapter-title chapter-title-upper">Prototyping</p>
                  <p className="chapter-paragraph">
                    We used prototyping to model the user’s interaction with the application.
                    At this stage, we went through building a project architecture
                    and sketching, to development of an MVP concept.
                  </p>
                </div>
              </div>
              <div className="column">
                <img src="static/images/project/banker-advisor-personas.jpg" alt="Banker Advisor personas" />
              </div>
            </div>
            <img
              src="/static/images/project/banker-advisor-prew-5.png"
              alt="Banker Advisor"
              className="image-gaps"
            />
            <div className="project-content-chapter">
              <p className="chapter-title chapter-title-upper">UX/UI Design</p>
              <p className="chapter-paragraph">
                In the end, we developed a user-friendly interface and ensured an excellent
                user experience based on the results of the previous steps.
              </p>
            </div>
            <div className="title">Development challenges</div>
            <p>
              Our first goal was to use proven technical stack and to provide a fast
              result with high quality. The second goal was to grant customer access to
              edit all information across the website. That is why we chose our
              main stack to avoid any unexpected situations.
            </p>
            <p>
              The website has flexible payment plans and works in sync with the Stripe
              payment platform. Moreover, we have implemented &ldquo;complex search&rdquo; and will
              work on intelligence search and smart recommendations in the next version.
            </p>
            <div className="title">Result</div>
            <div className="project-content-chapter">
              <p className="chapter-paragraph italic bigger">A user-friendly app with more than 1000 trusted bank reviews.</p>
            </div>
            <div className="project-achievements">
              <h3>BankerAdvisor main features</h3>
              <ul>
                <li>Flexible search</li>
                <li>Add rating and review transaction basing on your experience</li>
                <li>Create new or claim existing bank</li>
                <li>Protection from bots and spammers</li>
                <li>Stripe service for payment</li>
                <li>Gather data with Google analytics</li>
                <li>Log In via Linkedin</li>
              </ul>
            </div>
            <p>
              Ultimately, BankerAdvisor will help the app users to save a lot of time
              and resources and make the industry more trustworthy.
            </p>
            <div className="title">Technologies used in making the app</div>
            <PortfolioTechnologyTags tags={['Keystonejs', 'React', 'Redux', 'Express', 'Node.js', 'SCSS', 'Mongodb', 'Mongoose', 'AWS (SES, SNS, S3, EC2)']} />
            <img
              src="/static/images/project/banker-advisor-prew-3.png"
              alt="Banker Advisor"
              className="image-gaps"
            />
            <a
              href="http://bankeradvisor.com"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectBankerAdvisor;
