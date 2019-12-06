import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';
import classnames from 'classnames';
import Layout from '../components/layout/main';
import SocialButton from '../components/social-buttons/main';
import OurServices from './our-services';
import Founders from './founders';
import Projects from './home-page-projects';
import Blog from './home-page-blog';

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

    const sections = ['top', 'services', 'founders', 'projects'];
    this.state = {
      sections,
      currentSection: 'top',
      nextSection: 'services',
      isInit: true,
      isMobile: false,
      showCircleAnimation: false,
      fpAPI: null,
      isFPDestroyed: false,
    };

    this.updateDimensions.bind(this);
    this.scrollClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      const { isMobile } = this.state;
      if (!isMobile && e.target.innerWidth < 768) {
        this.setState({ isMobile: true });
      }
      if (isMobile && e.target.innerWidth >= 768) {
        this.setState({ isMobile: false });
      }
    });
    this.setState({ isMobile: window.innerWidth <= 768 });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {});
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

  scrollClick() {
    const { sections, currentSection } = this.state;
    const newSectionIndex = sections.indexOf(currentSection) + 1;
    const newSection = document.getElementById(sections[newSectionIndex]);
    newSection.scrollIntoView({ behavior: 'smooth' });
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
      fpAPI,
      isFPDestroyed,
    } = this.state;
    console.log(this);
    return (
      <Layout
        className="home-full-vh"
      >
        <div className={classnames('container-top ', {
          test: currentSection === sections[0],
        })}
        >
          <ReactFullpage
            autoScrolling
            navigation
            // fitToSection={false}
            onLeave={(origin, destination) => {
              const enableFP = sections[0] === nextSection
              || (currentSection === sections[0] && nextSection === sections[1]);
              let isDestroyed = isFPDestroyed;
              if (enableFP && !isInit) {
                fpAPI.destroy();
                isDestroyed = true;
              } else if (!isInit) {
                if (isDestroyed) {
                  fpAPI.reBuild();
                  isDestroyed = false;
                }
              }
              this.setState({
                currentSection: origin.item.id,
                nextSection: destination.item.id,
                isInit: false,
                showCircleAnimation: destination.item.id === sections[1]
                && origin.item.id === sections[0],
                isFPDestroyed: isDestroyed,
              });
            }}
            render={({ fullpageApi }) => {
              if (!fpAPI) {
                this.setState({ fpAPI: fullpageApi });
              }
              return (
                <ReactFullpage.Wrapper>

                  <JsonLd data={companyData} />
                  <div className="section" id={sections[0]}>
                    <div className={classnames('home-page')}>
                      <div className="home-page-content">
                        <div className="social-icons home-page-social">
                          <SocialButton />
                        </div>
                        <h4 className={classnames('home-page-small-title', {
                          faded: nextSection === sections[1] && !isInit,
                        })}
                        >
                          Keen &amp; Ethical Software
                          <br />
                          Development
                        </h4>
                        <div className={classnames('vertical-line', {
                          faded: nextSection === sections[1] && !isInit,
                        })}
                        />
                        <h1 className={classnames('home-page-large-title', {
                          faded: nextSection === sections[1] && !isInit,
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
                              className="link link-upwork"
                              target="_blank"
                              rel="noreferrer noopener nofollow"
                            >
                              Top rated Upwork agency
                            </a>
                          </div>
                          <div className="home-page-content-link">
                            <a
                              href="https://clutch.co/profile/keenethics"
                              className="link link-clutch"
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
                          <img src="/static/images/banner-photo-1.jpg" className="home-page-side-info__image" alt="Banner one" />
                          <img src="/static/images/banner-photo-2.jpg" className="home-page-side-info__image" alt="Banner two" />
                          <img src="/static/images/banner-photo-3.jpg" className="home-page-side-info__image" alt="Banner three" />
                        </div>
                        <div className="circle-container">
                          <div className={classnames('orange-circle', { 'circle-anim': showCircleAnimation })}>
                            <div className="border" />
                          </div>
                        </div>
                      </div>
                      <div className={classnames('side-info-top', { faded: nextSection === sections[1] && !isInit })}>
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
                  <Founders
                    section={sections[2]}
                    isMobile={isMobile}
                  />
                  <Projects
                    section={sections[3]}
                    isMobile={isMobile}
                  />
                  <Blog
                    section={sections[4]}
                    // isMobile={isMobile}
                  />
                </ReactFullpage.Wrapper>
              );
            }
          }
          />
        </div>
      </Layout>
    );
  }
}
