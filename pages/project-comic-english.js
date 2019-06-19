import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#ee521d';

const ProjectComicEnglish = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">ComicEnglish</h1>
              <div className="duration">
                <span style={{ marginRight: '.25em' }}>Duration:</span>
                5 months
              </div>
              <p className="description">
                ComicEnglish is a chatbot-based app for interactive English learning
              </p>
              <PortfolioTechnologyTags tags={['Meteor', 'Ionic']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/comicenglish-mac-book.jpg" alt="ComicEnglish" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p className="center text-italic" style={{ marginBottom: '40px' }}>
              A chatbot-based app for interactive English learning
            </p>
            <section>
              <h2>What Is ComicEnglish?</h2>
              <p>
                ComicEnglish is a service that helps users develop their language skills by playing
                games with the English learning chatbot. The service includes quests of various
                difficulty levels and language competence. This gamified platform motivates users to
                stay on the track of learning English with rewards and multiple fun features.
                Achieving a language goal becomes as simple as completing
                another level in a favorite game.
              </p>
            </section>

            <section>
              <h2>Our Cooperation</h2>

              <h3 className="red-italic-title">Challenges</h3>
              <p>
                The world of education and self-development has changed, and nobody is eager to
                spend hours cramming grammar rules and doing boring bookish exercises. At the same
                time, this change opened multiple opportunities for companies willing to
                enter the ed-tech industry.
              </p>
              <p>
                ComicEnglish, unlike most one-time install-open-and-delete applications, strove
                to keep English learners motivated. Together with their creative manager, we have
                developed an English learning chatbot making the language acquisition process
                easy, engaging, and entertaining.
              </p>

              <h3 className="red-italic-title">Our Team</h3>
              <p>
                Two of our best software developers have been working on the project. To meet
                the best needs and possibilities of the client, they did not only develop the
                app but also tested it and managed the overall project.
              </p>

              <h3 className="red-italic-title">Technologies</h3>
              <p>
                The chatbot for learning English has been developed for both
                <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-apple">iOS</Link></span>
                and
                <span style={{ margin: '0 .25em' }}><Link href="/services-mobile-development-android">Android</Link></span>
                , with the use of
                <span style={{ margin: '0 .25em' }}><Link href="/services-web-development-meteor">Meteor</Link></span>
                and Ionic.
              </p>
              <ul className="technologies-list -comic-english">
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/android.png" alt="android" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/ios.png" alt="ios" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/meteor.jpg" alt="meteor" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/technologies/ionic.svg" alt="ionic" />
                </li>
              </ul>

              <h3 className="red-italic-title">Methodology</h3>
              <p>
                We used Kanban because the team working on the project was quite small
                and the requirements for this English bot were constantly changing.
              </p>
            </section>

            <section>
              <h2>What Makes ComicEnglish Special?</h2>
              <p>
                The English learning chatbot enables users to improve and practice their
                skills in listeningand writing and to develop knowledge of vocabulary and grammar.
                For this purpose, it features various language learning resources and tools, such
                as theoretical English lessons, word cards, daily games, fun stories with comic
                book characters, language quests, and chat rooms. To pass a game level, users have
                to apply their English skills to the best of their knowledge. To keep users engaged,
                the English bot sends daily notifications and updates.
              </p>
            </section>

            <CallToActionButton
              buttonBefore={(
                <Link href="/portfolio">
                  <span
                    className="link"
                    style={{ background: baseColor, textTransform: 'uppercase' }}
                  >
                    Other case studies
                  </span>
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

export default ProjectComicEnglish;
