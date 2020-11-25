import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#4b6a6a';

const ProjectBusinessResearchPlatform = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">Business Research Platform</h1>
              <p className="description">A mediator between business consultants and consultees.</p>
              <PortfolioTechnologyTags tags={['Business Administration']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/the-business-research-platform/the-business-research-platform.jpeg" alt="The Business Research Platform" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section className="clearfix">
              <h2 className="title">What Is Business Research Platform?</h2>
              <div className="columns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="column">
                  <table>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Name</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>Business Research Platform</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Business Development</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>Business development</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Size</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>
                        &nbsp;&gt; 250 employees
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Location</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>
                        London, Great Britain
                        <span role="img" aria-label="GB">🇬🇧</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="column">
                  <img src="/static/portfolio/the-business-research-platform/icons8-business-100.png" style={{ width: '100px' }} alt="search logo" />
                </div>
              </div>
              <p>
                This business research platform lets users take well-thought-out investment
                decisions. There is a lot of useful information online, but the challenge
                is to find exactly the information you need. Our partners strive to play
                the role of a mediator – to help a person in need of a business consultation
                get in contact with the most suitable business consultant. This may concern
                any sphere, ranging from HR management to marketing or accounting.
              </p>
              <p>
                The business consulting industry enterprise of our partner is multifaceted
                and huge. We are delighted to help them with developing their major tool.
                The web platform we are working on is an internal tool for their employees.
                It lets them process business consultation requests and contact clients with
                the most suitable consultants.
              </p>
            </section>
            <section>
              <h2 className="title">Our Cooperation</h2>
              <div className="columns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="column">
                  <table>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Platform</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>Web</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Technologies</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>Node.js, LoopBack, React</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Methodology</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>Kanban</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Team</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>3 developers, 1 QA, and 1 PM</td>
                    </tr>
                  </table>
                </div>
              </div>
              <h3>Challenges & Solutions</h3>
              <p>
                We have been cooperating with the enterprise, and the project has been in
                production all the time. These two conditions placed a few significant
                challenges in front of us.
              </p>
              <p>
                The company has an extensive system of&nbsp;
                <b>privacy and corporate culture policies</b>
                . While all companies have some regulations, the large-scale business has a lot
                of them. Making sure that we follow all of them without compromising our own
                ethical and security policies is quite challenging. A professional Project Manager,
                who organizes communication with the partner according to the principles of Kanban,
                significantly facilitates our lives.
              </p>
              <p>
                As for&nbsp;
                <b>security</b>
                , it is our top priority and major headache. The system contains quite a lot of
                sensitive and confidential information about businesses and people associated with
                them. It is our job to ensure the safety of their data. We have to make sure that
                in no case a wrong person may receive somebody else’s consultation results.
              </p>
              <p>
                Since the project is in production, our&nbsp;
                <b>Quality Assurance</b>
                &nbsp;specialist shoulders a great deal of responsibility. We have to make sure
                that the web platform does not stop working once we release updates and the system
                is not susceptible to technical glitches.
              </p>
              <h3>Our Team</h3>
              <p>
                The team, which is currently working on this project, consists of three devoted
                full-stack software developers and one Quality Assurance specialist. They are
                managed by an expert PM.
              </p>
              <h3>Technologies</h3>
              <p>
                The management consulting industry project has been developed with&nbsp;
                <a href="https://loopback.io/" target="_blank" rel="noopener noreferrer nofollow">LoopBack</a>
                ,&nbsp;
                <a href="/tech-data-base-mysql" target="_blank">MySQL</a>
                ,&nbsp;
                <a href="/tech-front-end-react" target="_blank">React</a>
                ,&nbsp;
                <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer nofollow">AWS</a>
                &nbsp;(SES, S3, Secrets Manager, Lambda, CloudWatch, ElasticSearch, Kibana),&nbsp;
                <a href="https://serverless.com/" target="_blank" rel="noopener noreferrer nofollow">Serverless</a>
                ,&nbsp;
                <a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer nofollow">Terraform</a>
                ,&nbsp;
                <a href="https://jenkins.io/" target="_blank" rel="noopener noreferrer nofollow">Jenkins</a>
                .
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/the-business-research-platform/loopback.png" alt="Loopback" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/the-business-research-platform/mysql.jpg" alt="MySQL" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/react.png" alt="React" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/the-business-research-platform/serverless.png" alt="Serverless" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/the-business-research-platform/jenkins.png" alt="Jenkins" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/the-business-research-platform/docker.png" alt="Docker" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img style={{ maxHeight: '100px' }} src="/static/portfolio/the-business-research-platform/aws-logo.png" alt="AWS" />
                </li>
                <li className="technologies-item">
                  <img style={{ maxHeight: '100px' }} src="/static/portfolio/the-business-research-platform/terraform.png" alt="Terraform" />
                </li>
              </ul>
              <h3>Methodology</h3>
              <p>
                To ensure continuous communication with the client and timely implementation
                of all project requirements, we are cooperating according to the principles of
                <a href="/blog/how-to-choose-your-optimal-development-methodology">Kanban</a>
                .
              </p>
            </section>
            <section>
              <h2>What Makes This Project Special?</h2>
              <p>
                First of all, this project is an internal tool for company employees, who change
                the future of consulting industry. IT lets a user process a consultation request,
                schedule a consultation, record it, transcribe, and send it to both a consultant
                and a consultee. Then, the former sends the business analysis results to the latter
                also via the platform.
              </p>
              <img style={{ margin: '30px auto' }} src="/static/portfolio/the-business-research-platform/smartphones-usage.png" alt="Copy of 2.7 billion people use smartphones" />
              <p>
                Such a software solution helps a business&nbsp;
                <b>to automate the process</b>
                &nbsp;of organizing conference calls and&nbsp;
                <b>to enhance the quality of calls?</b>
                &nbsp;by recording them.
              </p>
              <p>
                It is an important and unique tool for business growth consultants, which helps:
              </p>
              <ul>
                <li style={{ color: '#12233d' }}>
                  businesses to optimize their research process and take the
                  best investment decision,
                </li>
                <li style={{ color: '#12233d' }}>
                  business managers to find an external consultant instead of
                  hiring an in-house one,
                </li>
                <li style={{ color: '#12233d' }}>business strategy consulting firms to find their clients</li>
              </ul>
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

export default ProjectBusinessResearchPlatform;
