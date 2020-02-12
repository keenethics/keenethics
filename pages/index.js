import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Main from '../components/blocks/main/Main';
import OurMethods from '../components/blocks/our-methods/OurMethods';
import Industries from '../components/blocks/industries/Industries';
import TechStack from '../components/blocks/tech-stack/TechStack';
import Partners from '../components/blocks/partners/Partners';
import OurServices from './our-services';
import Founders from './founders';
import Projects from './home-page-projects';
import Blog from './home-page-blog';
import LetsStart from './home-page-lets-start';
import { getPostsList } from '../lib/contentful';
import PostsContext from '../components/context/posts-context';

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

  static async getInitialProps() {
    const contResp = await getPostsList();

    return { posts: contResp && contResp.items ? contResp.items : [] };
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
    const { posts } = this.props;
    const {
      isMobile,
      isTablet,
      isTabletL,
    } = this.state;

    return (
      <PostsContext.Provider value={posts}>
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
      </PostsContext.Provider>
    );
  }
}

Index.propTypes = {
  posts: PropTypes.array,
};

Index.defaultProps = {
  posts: [],
};
