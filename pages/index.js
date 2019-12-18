import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from '../components/layout/main';
import OurMethods from '../components/blocks/our-methods/OurMethods';
import Industries from '../components/blocks/industries/Industries';
import TechStack from '../components/blocks/tech-stack/TechStack';
import SocialButton from '../components/social-buttons/main';
import OurServices from './our-services';
import Founders from './founders';
import Projects from './home-page-projects';
import Blog from './home-page-blog';
import LetsStart from './home-page-lets-start';
import HomeFooter from './home-page-footer';
import { getPostsList } from '../lib/contentful';
import PostsContext from '../components/context/posts-context';

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

JsonLd.propTypes = {
  data: PropTypes.object.isRequired,
};

const companyData = {
  '@context': 'http://www.schema.org',
  '@type': 'Organization',
  name: 'KeenEthics',
  url: 'https://keenethics.com/',
  description: 'Custom Software Development Company',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kulparkivska St, 59',
    addressLocality: 'Lviv',
    postalCode: '79000',
    addressCountry: 'Ukraine',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+38 (096) 814 72 66',
    contactType: 'Sales Representative',
  },
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    const sections = ['top', 'our-methods', 'services', 'founders', 'projects'];
    this.state = {
      sections,
      currentSection: 'top',
      nextSection: 'services',
      isInit: true,
      isMobile: false,
      // isDesktop: false,
      showCircleAnimation: false,
      fpAPI: null,
      isFPDestroyed: false,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.scrollClick = this.scrollClick.bind(this);
    // this.setPostsContext = this.setPostsContext.bind(this);
    // this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('resize', (e) => {
    //   const {
    //     isMobile,
    //     // isDesktop,
    //   } = this.state;
    //   if (!isMobile && e.target.innerWidth < 768) {
    //     this.setState({
    //       isMobile: true,
    //       isFPDestroyed: true,
    //     });
    //     return;
    //   }
    //   if (isMobile && e.target.innerWidth >= 768) {
    //     this.setState({
    //       isMobile: false,
    //       isFPDestroyed: false,
    //     });
    //   }
    // if (isDesktop && e.target.innerWidth <= 1024) {
    //   this.setState({
    //     isDesktop: false,
    //   });
    // }
    // if (!isDesktop && e.target.innerWidth >= 1024) {
    //   this.setState({
    //     isDesktop: true,
    //   });
    // }
    // });
    // this.getPosts();
    // this.setState({ isMobile: window.innerWidth <= 768 });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {});
  }

  static async getInitialProps() {
    const contResp = await getPostsList();

    return { posts: contResp && contResp.items ? contResp.items : [] };
  }
  // const getPosts = async () => {
  //   const res = await getPostsList();
  //   const posts = res.items;
  //   setTest(posts.slice(-2));
  //   setPostsContext(posts);
  // };

  scrollClick() {
    const { fpAPI } = this.state;
    fpAPI.moveTo(2);
  }

  updateDimensions(e) {
    const { isMobile } = this.state;
    if (!isMobile && e.target.innerWidth < 768) {
      this.setState({ isMobile: true });
    }
    if (isMobile && e.target.innerWidth >= 768) {
      this.setState({ isMobile: false });
    }
  }

  render() {
    // setTimeout(() => {
    //   const w = window;
    //   if (w) {
    //     const elem = w.document ? w.document.getElementById('__next') : null;
    //     if (elem) elem.classList.add('testloader');
    //   }
    // }, 1000);
    const {
      sections,
      currentSection,
      nextSection,
      isInit,
      showCircleAnimation,
      isMobile,
      isFPDestroyed,
      // isDesktop,
    } = this.state;
    const { posts } = this.props;
    const isFirstScroll = nextSection === sections[1] && !isInit && !isFPDestroyed;
    return (
      <Layout>
        <JsonLd data={companyData} />
        <div className="section" id={sections[0]}>
          <div className={classnames('home-page')}>
            <div className="home-page-content">
              <div className="social-icons home-page-social">
                <SocialButton />
              </div>
              <h4 className={classnames('home-page-small-title', {
                faded: isFirstScroll,
              })}
              >
                Keen &amp; Ethical Software
                <br />
                Development
              </h4>
              <div className={classnames('vertical-line', {
                faded: isFirstScroll,
              })}
              />
              <h1 className={classnames('home-page-large-title', {
                faded: isFirstScroll,
              })}
              >
                Full-cycle
                <br />
                web and mobile
                <br />
                development partner
              </h1>
              <div className="home-page-rates-container">
                <div className="home-page-content-link">
                  <a
                    href="https://www.upwork.com/agencies/~0106b5437592391f94"
                    className={classnames('link link-upwork', { 'link-upwork-white faded': isFirstScroll })}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    Top rated Upwork agency
                  </a>
                </div>
                <div className="home-page-content-link">
                  <a
                    href="https://clutch.co/profile/keenethics"
                    className={classnames('link link-clutch', { 'link-clutch-white faded': isFirstScroll })}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    5-stars rated company at Clutch
                  </a>
                </div>
              </div>
            </div>
            <div className={classnames('home-page-side-info')}>
              <div className="side-info-bg">
                <div className="home-page-side-info__image" />
                <div className="home-page-side-info__image" />
                <div className="home-page-side-info__image" />
              </div>
              <div className="circle-container">
                <div className={classnames('orange-circle', { 'circle-anim': showCircleAnimation })}>
                  <div className="border" />
                </div>
              </div>
            </div>
            <div className={classnames('side-info-top', { faded: isFirstScroll })}>
              <Link href="/contacts?activeForm=estimate">
                <a className="button contacts-goal side-info-top-content">Free estimate</a>
              </Link>
            </div>
            <div className="scroll-info-container">
              <p className="vertical-text">scroll down to see more</p>
              <button className="mouse-scroll" type="button" onClick={() => this.scrollClick()}>
                <span className="mouse-scroll-wheel" />
              </button>
            </div>
            <div className={classnames('bg-scroll', { 'bg-scroll-animate': currentSection === sections[0] && !isInit })} />
          </div>
        </div>
        <OurServices
          section={sections[1]}
          show={sections[1] === nextSection && !isInit}
          isMobile={isMobile}
        />
        <OurMethods />
        <Industries />
        <Founders
          section={sections[2]}
          isMobile={isMobile}
        />
        <Projects
          section={sections[3]}
          isMobile={isMobile}
        />
        <TechStack />
        <PostsContext.Provider value={posts}>
          <Blog
            section={sections[4]}
            posts={posts}
            setPostsContext={this.setPostsContext}
          />
          <LetsStart
            section={sections[5]}
          />
          <HomeFooter
            section={sections[6]}
            isMobile={isMobile}
            // isDesktop={isDesktop}
          />
        </PostsContext.Provider>
      </Layout>
    );
  }
}

Index.propTypes = {
  posts: PropTypes.array,
};

Index.defaultProps = {
  posts: [],
};
