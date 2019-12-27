import React from 'react';

import Layout from '../components/layout/main';
import OurStory from '../components/about-us/OurStory';
import OurMission from '../components/about-us/OurMission';
import OurValues from '../components/about-us/OurValues';
import OurTeam from '../components/about-us/OurTeam';
import LetsStart from './home-page-lets-start';
import MeetOurLeaders from '../components/about-us/MeetOurLeaders';
import { getPostsList } from '../lib/contentful';
import PostsContext from '../components/context/posts-context';
import HomeFooter from './home-page-footer';

// eslint-disable-next-line react/prefer-stateless-function
class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isTablet: false,
      posts: [],
    };
  }

  async componentDidMount() {
    const { posts } = this.state;
    if (!posts || !posts.length) {
      const blogPosts = await getPostsList();
      if (blogPosts && blogPosts.items) {
        this.setState({ posts: blogPosts.items });
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', ({ target }) => {
        if (target) {
          this.setState({
            isTablet: target.innerWidth <= 768 && target.innerWidth > 480,
            isMobile: target.innerWidth <= 480,
          });
        }
      });

      this.setState({
        isTablet: window.innerWidth <= 768 && window.innerWidth > 480,
        isMobile: window.innerWidth <= 480,
      });
    }
  }

  render() {
    const { isMobile, isTablet, posts } = this.state;
    return (
      <Layout>
        <section className="page__wrapper page__about-us">
          <div className="page__header">
            <h1 className="page__title">
              we solve&nbsp;
              <br className="desktop-plus" />
              your
              <br className="tablet" />
              <em>
                business&nbsp;
                <br className="mobile-only" />
                challenges
              </em>
              <br />
              WITH FULL-CYCLE DEVELOPMENT
            </h1>
            <div className="separator" />
            <h5>
              KeenEthics is an ethical web and mobile development partner based in Eastern Europe
              and represented in the Netherlands and the United States.
            </h5>
            <p>
            Since 2015, we have been solving business challenges with full-cycle development.
            More than 40 companies have turned their ideas into lucrative products with us.
            The successful web and mobile projects include PWA, MVP, chatbots and
            AI-powered, cloud and IoT solutions.
            </p>
          </div>
          <OurStory />
          <OurMission />
          <OurValues />
          <MeetOurLeaders />
          <OurTeam />
          <LetsStart />
        </section>
        <PostsContext.Provider value={posts}>
          <HomeFooter
            isMobile={isMobile}
            isTablet={isTablet}
          />
        </PostsContext.Provider>
      </Layout>
    );
  }
}

export default AboutUs;
