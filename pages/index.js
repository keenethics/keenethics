import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Main from '../components/blocks/main/Main';
import OurMethods from '../components/blocks/our-methods/OurMethods';
import Industries from '../components/blocks/industries/Industries';
import TechStack from '../components/blocks/tech-stack/TechStack';
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

    this.state = {};

    // this.setPostsContext = this.setPostsContext.bind(this);
    // this.getPosts = this.getPosts.bind(this);
  }

  // componentDidMount() {
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
  // }

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

  render() {
    const { posts } = this.props;

    return (
      <Layout>
        <JsonLd data={companyData} />
        <Main />
        <OurServices />
        <OurMethods />
        <Industries />
        <Founders />
        <Projects />
        <TechStack />
        <PostsContext.Provider value={posts}>
          <Blog
            posts={posts}
            setPostsContext={this.setPostsContext}
          />
          <LetsStart />
          <HomeFooter />
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
