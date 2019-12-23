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

    this.state = {
      isLoading: true,
      isMobile: false,
      isTablet: false,
      isTabletL: false,
    };
  }

  static async getInitialProps() {
    const contResp = await getPostsList();

    return { posts: contResp && contResp.items ? contResp.items : [] };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', ({ target }) => {
        if (target) {
          this.setState({
            isLoading: false,
            isTabletL: target.innerWidth <= 1024 && target.innerWidth > 768,
            isTablet: target.innerWidth <= 768 && target.innerWidth > 480,
            isMobile: target.innerWidth <= 480,
          });
        }
      });

      this.setState({
        isLoading: false,
        isTabletL: window.innerWidth <= 1024 && window.innerWidth > 768,
        isTablet: window.innerWidth <= 768 && window.innerWidth > 480,
        isMobile: window.innerWidth <= 480,
      });
    }
  }

  render() {
    const { posts } = this.props;
    const {
      isLoading,
      isMobile,
      isTablet,
      isTabletL,
    } = this.state;

    if (isLoading) return null;

    return (
      <Layout>
        <JsonLd data={companyData} />
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
        <PostsContext.Provider value={posts}>
          <Blog
            isTabletL={isTabletL}
          />
          <Partners />
          <LetsStart />
          <HomeFooter
            isMobile={isMobile}
            isTablet={isTablet}
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
