import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import ProjectWhatIsHeader from '../components/project/ProjectWhatIsHeader';
import ProjectCooperationHeader from '../components/project/ProjectCooperationHeader';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#eb4c44';

const ProjectStoryTerrace = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
            <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">StoryTerrace</h1>
              <p className="description">A ghostwriting and publishing solution, which brings the book industry to a new level</p>
              <PortfolioTechnologyTags tags={['Business']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img loading="lazy" src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img loading="lazy" src="/static/portfolio/storyterrace/storyterrace-image-screen.png" alt="storyterrace" className="macbook--screen" />
              </div>
            </div>
            <Background />
          </div>

          <div className="project-content-more">
            <h2 className="text-center">
              <b>StoryTerrace</b>
            </h2>
            <p className="center text-italic" style={{ marginBottom: '40px' }}>
              A ghostwriting and publishing solution, which brings the book industry to a new level
            </p>
            <img
              loading="lazy"
              src="/static/portfolio/storyterrace/storyterrace-image-main.png"
              alt="StoryTerrace"
              className="image-gaps"
            />

            <section>
              <h2 className="title">What Is StoryTerrace?</h2>
              <ProjectWhatIsHeader
                projectName='StoryTerrace'
                industries={['Business', 'Publishing']}
                size='51-250'
                location='London, Great Britain 🇬🇧'
                logo='/static/portfolio/storyterrace/storyterrace-logo.svg'
              />
              <p>
                StoryTerrace is a ghostwriting and publishing solution, which brings together writers, editors, and people who
                need help writing their book. Here, they can discuss the contents of the future book, its style, structure,
                illustrations, and cover. Launched in Great Britain, this one-of-a-kind digital publishing platform now operates on
                the USA market as well. It brings the publishing industry to a new level — writing a book becomes easier than it
                has ever been.
              </p>

              <blockquote>
                <p>The most valuable thing about KeenEthics is their attitude, both to partners and to employees. Our cooperation has never been stained by conflicts or mistrust. By contrast, it was very transparent, friendly, and thus, effective.</p>
                <p>
                  <i />
                  <div className="person">
                    <img src="/static/portfolio/storyterrace/coen-borgman.jpg" alt="Coen Borgman" />
                    <span className="info">
                      <span className="name"><Link href="https://www.linkedin.com/in/coenborgman/?originalSubdomain=uk"><a>Coen Borgman</a></Link></span>
                      <span className="title">Director of Production at StoryTerrace</span>
                    </span>
                  </div>
                  <i />
                </p>
              </blockquote>
            </section>

            <section>
              <h2>Our Cooperation</h2>
              <ProjectCooperationHeader
                platforms={
                  <>
                    <Link href='/services-mobile-development'><a>Web</a></Link>
                  </>
                }
                technologies={
                  <>
                    <Link href="/tech-front-end-react"><a>React</a></Link> & Redux,
                    &nbsp;<Link href="/services-web-development-node"><a>Node.js</a></Link>,
                    &nbsp;<Link href="/tech-back-end-express"><a>Express.js</a></Link>
                  </>
                }
                methodology='Scrum'
                team='1 PM, 3 full-stack developers, and 1 QA'
              />
              <h3 className="red-italic-title">Challenges & Solutions</h3>
              <p>
                The greatest challenge was the organization of work on this digital publishing solution. We partnered up with
                StoryTerrace in 2017, and in over 2 years of our cooperation, our team changed significantly both at KeenEthics’
                and StoryTerrace’s side. Such rotation of team members comes at a cost: the lack of engagement and
                background experience left an unfortunate footprint on project development.
              </p>
              <p>
                From our side, little could we do to improve the organizational aspect of the project — instead, we fully invested
                ourselves in the technical success of the project. The quality of the publishing platform turned out to be
                impeccable with not a single negative comment from our partners. We are happy that we could stand our ground.
              </p>

              <h3 className="red-italic-title">Our Team</h3>
              <p>
                From our side, one devoted Project Manager, three expert JavaScript developers, and one Quality Assurance
                specialist worked on developing frontend and backend of this digital publishing platform
              </p>

              <h3 className="red-italic-title">Technologies</h3>
              <p>
                This web publishing solution was developed using React and Redux for front-end and Node.js and Express.js for the back-end.
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/react-logo.svg" alt="React" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/redux-logo.png" alt="Redux" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/nodejs.svg" alt="Node.js" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/express.svg" alt="Express.js" />
                </li>
              </ul>

              <h3 className="red-italic-title">Methodology</h3>
              <p>
                The work on the project was organized using the principles and artifacts of Scrum. By organizing the project in
                iterations, we succeeded in meeting changeable requirements and making the large team collaborate effectively.
              </p>
            </section>

            <section>
              <h2>What Makes storyterrace Special?</h2>
              <p>
                The idea of StoryTerrace is unique by its nature, not offered by other publishing solutions. Never before has
                anyone tried to fully bring the writing and publishing process online.
              </p>

              <img
                loading="lazy"
                src="/static/portfolio/storyterrace/storyterrace-image-s_1.png"
                alt="StoryTerrace"
                className="image-gaps"
              />

              <p>
                The target audience of StoryTerrace are the people who want to write a book — mainly a biography — and need
                help with it. Once they have an idea, they open StoryTerrace, read through sample chapters, client testimonials,
                and writer profiles. Now, they have to choose a writer themselves or to ask the StoryTerrace team to find a perfect
                writer for them. There are writers in three skill and pricing categories: Junior writers, Senior writers, and Premium writers.
              </p>
              <p>
                After that, using questionnaires and interviews, the client shares his ideas and wishes with the writer. After
                multiple interview sessions, the writer wraps the client’s ideas into well-crafted words. The client regularly reviews
                and comments on the book content as it is being written. While the text of the book is still in progress, the client
                can customize the book design and upload photos for illustrations and the cover. After all, the designers lay out
                the book interiors and cover, and the final PDF version is sent for the client’s approval.
              </p>
              <p>
                When the work on the book is over and the client is happy with the result, the books are printed and delivered to
                the customer. This entire process usually takes from eight to twelve weeks, depending on the length of the book.
              </p>
              <p>
                This project definitely brings the publishing industry to a new level — other publishing solutions do not offer such
                freedom and efficiency as StoryTerrace does. It empowers many writers and authors to achieve new literature heights.
              </p>

              <img
                loading="lazy"
                src="/static/portfolio/storyterrace/storyterrace-image-s_2.png"
                alt="StoryTerrace"
                className="image-gaps"
              />
            </section>

            <section>
                <h2 className='text-center'>Do You Have a Similar Project Idea?</h2>
                <CallToActionButton
                  title='Share your idea'
                  buttonBefore={(
                    <a
                      href="https://storyterrace.com/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      <button type="button" className="call-to-cation-btn -secondary">
                        Check The Project
                      </button>
                    </a>
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

export default ProjectStoryTerrace;