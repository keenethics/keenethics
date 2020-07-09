import React from 'react';

import Layout from '../components/layout/main';
import Main from '../components/blocks/main/Main';
import OurMethods from '../components/blocks/our-methods/OurMethods';
import Industries from '../components/blocks/industries/Industries';
import TechStack from '../components/blocks/tech-stack/TechStack';
import Partners from '../components/blocks/partners/Partners';
import OurServices from '../components/blocks/our-services/OueServices';
import Founders from '../components/blocks/founders/founders';
import Projects from '../components/blocks/projects/Projects';
import Blog from '../components/blocks/keen-blog/Blog';
import LetsStart from '../components/about-us/LetsStart';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isTablet: false,
      isTabletL: false,
    };

    this.listener = null;
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.listener = window.addEventListener('resize', ({ target }) => {
        if (target) {
          this.setState({
            isTabletL: target.innerWidth <= 1024 && target.innerWidth > 768,
            isTablet: target.innerWidth <= 768 && target.innerWidth > 480,
            isMobile: target.innerWidth <= 480,
          });
        }
      });

      this.setState({
        isTabletL: window.innerWidth <= 1024 && window.innerWidth > 768,
        isTablet: window.innerWidth <= 768 && window.innerWidth > 480,
        isMobile: window.innerWidth <= 480,
      });
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined' && this.listener) {
      window.removeEventListener(this.listener);
    }
  }

  render() {
    const {
      isMobile,
      isTablet,
      isTabletL,
    } = this.state;

    return (
      <Layout>
        <Main />
        <OurServices
          isMobile={isMobile}
        />
        <OurMethods />
        <Industries />
        <Founders />
        <Projects
          minimize={isTabletL || isTablet || isMobile}
        />
        <TechStack />
        <Blog
          minimize={isTabletL || isTablet || isMobile}
        />
        <Partners />
        <LetsStart />
      </Layout>
    );
  }
}
