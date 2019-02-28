import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';

const baseColor = '#ee521d';

const ProjectComicEnglish = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary full-width" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">ComicEnglish</h2>
              <h3 className="duration"><span>Duration:</span> 5 months</h3>
              <p className="description">
                Learn English while chatting with AI
              </p>
              <PortfolioTechnologyTags tags={['Meteor', 'Ionic']} />
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <div className="title">Learn English through chatting with AI</div>
            <p>
              ComicEnglish is the service that helps users learn a foreign language through
              playing games. It was designed as a chatbot that would interact with a user
              in English. The service included quests of various levels of difficulty. The higher
              the level, the better language competence user needs to complete it.
            </p>
            <div className="title">Chatbot that helps you learn English</div>
            <p>
              The application of chatbot technology in language learning is not new. Chatbots are
              often applied for providing users with individual personalized language practice
              whenever they feel like studying. This is a great way to improve language skills.
            </p>
            <p>
              ComicEnglish uses gamification and motivation. Rewards and other fun features make
              users feel more engaged. They have fun playing games and thus become more motivated
              to achieve new language goals.
            </p>
            <div className="title">Idea behind ComicEnglish</div>
            <p>
              English has become a global language. Some people are only making their first learning
              steps whereas the others are already looking for the ways to improve their language
              skills. They all want to speak English, but very few like to study. Luckily, spending
              hours on end trying to memorize boring rules from textbooks is not the only way to
              improve the level of English.
            </p>
            <p>
              If people like games, why not to create a game that would help users acquire skills
              that could later be applied in real life? That was the idea behind ComicEnglish.
              The service was developed to make the language learning easy, engaging, and
              entertaining.
            </p>
            <div className="title">Main features</div>
            <p>
              Every user had to create a profile in the system to start playing. Throughout the
              experience, the users were encouraged to apply their English skills to win.
              ComicEnglish incorporated various language learning resources and tools: English
              lessons, study cards, daily games, chat rooms. ComicEnglish also provided daily
              updates to keep the users engaged.
            </p>
            <div className="title">Contribution of Keenethics</div>
            <p>
              Keenethics participated in developing MVP. Our team managed to complete
              required tasks on time. The website is currently offline.
            </p>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectComicEnglish.propTypes = {
  url: PropTypes.object,
};
ProjectComicEnglish.defaultProps = {
  url: {},
};

export default ProjectComicEnglish;
