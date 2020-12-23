import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Link from 'next/link';
import ReactContentfulImage from 'react-contentful-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import SubscribePanel from '../components/subscribe-for-updates';

import Layout from '../components/layout/main';
import Error from './_error';
import { getPostBySlug, getRelatedPosts } from '../lib/contentful';

import blogPostsNoFollowLinks from '../data/blogPostsNoFollowHrefLinks';

const _ = require('lodash');


const EMBEDDED_ENTRY_CLASSNAMES = {
  usefulReadings: 'useful-readings',
  mostSuitableFor: 'most-suitable-for',
  helpfulTools: 'helpful-tools',
};
const EMBEDDED_ENTRY_ICON_NAMES = {
  usefulReadings: 'book_icon',
  mostSuitableFor: 'bulb_icon',
  helpfulTools: 'wrench_icon',
};
const EMBEDDED_ENTRY_HEADERS = {
  usefulReadings: 'USEFUL READINGS:',
  mostSuitableFor: 'MOST SUITABLE FOR...',
  helpfulTools: 'HELPFUL TOOLS:',
};

// eslint-disable-next-line react/prop-types
const embeddedEntryComponent = ({ type, list }) => (
  <div key={`&{type}_${Math.random()}`} className={EMBEDDED_ENTRY_CLASSNAMES[type]}>
    <div className={`${EMBEDDED_ENTRY_CLASSNAMES[type]}-icon-wrapper`}>
      <img alt="Bulb icon" src={`/static/images/${EMBEDDED_ENTRY_ICON_NAMES[type]}.png`} />
    </div>
    <div className={`${EMBEDDED_ENTRY_CLASSNAMES[type]}-content`}>
      <h4>{EMBEDDED_ENTRY_HEADERS[type]}</h4>
      {!!list && documentToReactComponents(list)}
    </div>
  </div>
);

const socialMediaShareButtons = ({ url }) => (
  <div className="socials">
    Share on:
    <FacebookShareButton url={`https://keenethics.com${url}`}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <LinkedinShareButton url={`https://keenethics.com${url}`}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <TwitterShareButton url={`https://keenethics.com${url}`}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </div>
);

const postCardComponent = ({
  slug, heroImage, publishDate, title,
}) => {
  const url = _.get(heroImage, 'fields.file.url');
  const alt = _.get(heroImage, 'fields.description') || _.get(heroImage, 'fields.title');

  return (
    <Link href={`/post?name=${slug}`} as={`/blog/${slug}`} key={slug}>
      <div className="blog-page-post">
        <div className="blog-page-post-img">
          <img alt={alt} src={`https://${url}?fm=jpg&fl=progressive&q=85&w=350`} />
        </div>
        <div className="blog-page-post-header">
          <div className="date">
            {publishDate && <Moment format="MMMM DD YYYY">{new Date(publishDate)}</Moment>}
          </div>
          <div className="title">{title}</div>
        </div>
      </div>
    </Link>
  );
};

const imageSizes = [
  {
    mediaQuery: 'default',
    params: { q: 95, w: 1000 },
  },
];

const imageComponent = ({ src, description, title }) => (
  <figure>
    <ReactContentfulImage alt={description || title} src={src} sizes={imageSizes} />
    {description && <figcaption>{description}</figcaption>}
  </figure>
);

const personComponent = ({
  image, name, position, linkedIn,
}) => {
  const url = _.get(image, 'fields.file.url');
  const alt = _.get(image, 'fields.description') || _.get(image, 'fields.title');

  if (linkedIn) {
    return (
      <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="person-link">
        <div className="person">
          {image && (
            <img
              alt={alt}
              src={`https://${url}?fm=jpg&fl=progressive&q=95&h=130&w=130&fit=crop&fit=thumb`}
            />
          )}
          <span className="info">
            <span className="name">{name}</span>
            <span className="title">{position}</span>
          </span>
        </div>
      </a>
    );
  }

  return (
    <div className="person">
      {image && (
        <img
          alt={alt}
          src={`https://${url}?fm=jpg&fl=progressive&q=95&h=130&w=130&fit=crop&fit=thumb`}
        />
      )}
      <span className="info">
        <span className="name">{name}</span>
        <span className="title">{position}</span>
      </span>
    </div>
  );
};

const renderNoFollowLinks = (children) => children.reduce((acc, item) => {
  if (typeof item !== 'object' && item.type !== 'a') {
    return [...acc, item];
  }

  const { props: { children: child, href } } = item;
  const isNofollowLink = blogPostsNoFollowLinks.includes(href);
  return [
    ...acc,
    <a rel={isNofollowLink ? 'nofollow noopener' : ''} href={href}>{child}</a>,
  ];
}, []);

const bodyOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url } = node.data.target.fields.file;
      const { description, title } = node.data.target.fields;

      return imageComponent({ src: url, description, title });
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (_.get(node, 'data.target.sys.contentType.sys.id') === 'usefulReadings') {
        const { bookList, list } = _.get(node, 'data.target.fields', null);

        return (
          <div className={EMBEDDED_ENTRY_CLASSNAMES.usefulReadings}>
            <div className={`${EMBEDDED_ENTRY_CLASSNAMES.usefulReadings}-icon-wrapper`}>
              <img alt="Book icon" src="/static/images/book_icon.png" />
            </div>
            <div className={`${EMBEDDED_ENTRY_CLASSNAMES.usefulReadings}-content`}>
              <h4>useful readings:</h4>
              {(bookList || list) && documentToReactComponents(bookList || list)}
            </div>
          </div>
        );
      }
      if (_.get(node, 'data.target.sys.contentType.sys.id') === 'mostSuitableFor') {
        const { list } = _.get(node, 'data.target.fields', null);

        return embeddedEntryComponent({ list, type: 'mostSuitableFor' });
      }
      if (_.get(node, 'data.target.sys.contentType.sys.id') === 'helpfulTools') {
        const { list } = _.get(node, 'data.target.fields', null);

        return embeddedEntryComponent({ list, type: 'helpfulTools' });
      }
      if (_.get(node, 'data.target.sys.contentType.sys.id') === 'suggestion') {
        const {
          body,
          suggesterName,
          suggesterPosition,
          suggestionTitle,
          suggesterPhoto,
          linkedIn,
          buttonText,
          redirectLink,
        } = node.data.target.fields;
        const noFollowLink = blogPostsNoFollowLinks.includes(redirectLink) ? 'nofollow' : '';

        return (
          <div className="suggestion">
            <h5>{suggestionTitle}</h5>
            {documentToReactComponents(body)}
            <div className="suggester-wrapper">
              {personComponent({
                image: suggesterPhoto,
                name: suggesterName,
                position: suggesterPosition,
                linkedIn,
              })}
              <a
                href={redirectLink || '/contacts'}
                target="_blank"
                rel={`noopener noreferrer ${noFollowLink}`}
              >
                <button type="button" className="btn btn-schedule">
                  {buttonText || 'Schedule a call'}
                </button>
              </a>
            </div>
          </div>
        );
      }

      return null;
    },
    'embedded-entry-inline': (node) => {
      if (_.get(node, 'data.target.sys.contentType.sys.id') === 'person') {
        const { image, name, position } = node.data.target.fields;

        return personComponent({ image, name, position });
      }

      return null;
    }
  },
  renderMark: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p>
        {renderNoFollowLinks(children)}
      </p>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3>
        {renderNoFollowLinks(children)}
      </h3>
    ),
    [MARKS.CODE]: (text) => (
      <SyntaxHighlighter 
        language="javascript"
        showLineNumbers
      >
          {text}
      </SyntaxHighlighter>
    )
  }
};

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  static async getInitialProps(p) {
    const { name, preview } = p.query;
    const { res } = p;
    const response = await getPostBySlug({ slug: name, preview });
    const { items } = response || {};

    if (!items || !Array.isArray(items) || !items[0]) {
      res.statusCode = 404;
      return {};
    }

    const { tags = [], slug } = items[0].fields;
    const relatedPosts = tags.length
      ? (await getRelatedPosts({ limit: 3, tags, excludeSlug: slug })).items
      : [];
    const updatedAt = _.get(response, 'items[0].sys.updatedAt', false);

    return {
      ...items[0].fields,
      updatedAt,
      relatedPosts,
    };
  }

  componentDidMount() {
    this.setState({
      url: window.location.href,
    });
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      document.querySelector('.content-inner').scrollTo(0, 0);
    }
  }

  render() {
    const {
      title,
      subtitle,
      description,
      publishDate,
      updatedAt,
      bodyRich,
      author,
      tags,
      heroImage,
      relatedPosts,
      metaTitle,
      metaDescription,
    } = this.props;
    const heroSrc = _.get(heroImage, 'fields.file.url', '');
    const heroTitle = _.get(heroImage, 'fields.title', '');

    if (!title || _.isEmpty(bodyRich)) {
      return <Error statusCode={404} />;
    }

    const meta = {};
    meta.title = metaTitle || title || '';
    if (metaDescription) {
      meta.description = metaDescription;
    }
    const { url } = this.state;

    return (
      <Layout meta={meta}>
        <div className="blog-post-page page">
          <header className="blog-post-page-header">
            <a href="/blog">&lt; Back to blog</a>
            <hr className="blog-post-page-header-hr" />
            <div className="blog-post-page-info">
              {tags.map((tag) => (
                <span key={tag} className="post-tag">
                  {tag}
                </span>
              ))}
              <span className="date">
                {publishDate && (
                  <>
                    PUBLISH DATE:
                    {' '}
                    <Moment format="MMMM DD YYYY">{`${new Date(publishDate)}`}</Moment>
                  </>
                )}
                <br />
                {updatedAt && (
                  <>
                    UPD:
                    {' '}
                    <Moment format="MMMM DD YYYY">{`${new Date(updatedAt)}`}</Moment>
                  </>
                )}
              </span>
              {url && socialMediaShareButtons({ url: this.props.url.asPath })}
            </div>
          </header>

          <article className="blog-post-page-content content-block">
            {author && personComponent(author.fields)}
            <header>
              <h1 className="blog-post-page-content-title">{title}</h1>

              {subtitle && <h2 className="blog-post-page-content-subtitle">{subtitle}</h2>}
              {description && <p className="blog-post-page-content-description">{description}</p>}
              {heroSrc && imageComponent({ src: heroSrc, title: heroTitle })}
            </header>

            <main>{documentToReactComponents(bodyRich, bodyOptions)}</main>

            <footer className="blog-post-page-footer">
              {url && socialMediaShareButtons({ url: this.props.url.asPath })}
              <SubscribePanel
                subscriptionText="Subscribe to our monthly newsletter and join the ethical movement."
              />
            </footer>
          </article>

          <footer>
            <div className="related-posts">
              <div className="content-block">
                <hr />
                <div className="related-posts-header">
                  {!!relatedPosts.length && <h3>Check out our articles:</h3>}
                  <a href="/blog">Back to blog</a>
                </div>
                {!!relatedPosts.length && (
                  <div className="blog-page-posts">
                    {relatedPosts.map((post) => postCardComponent(post && post.fields))}
                  </div>
                )}
              </div>
            </div>
          </footer>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                '@context': 'http://schema.org',
                '@type': 'Article',
                mainEntityOfPage: {
                  '@type': 'WebPage',
                  '@id': url,
                },
                headline: metaTitle,
                description: metaDescription,
                image: {
                  '@type': 'ImageObject',
                  url: heroImage.fields.file.url,
                  ...heroImage.fields.file.details.image,
                },
                datePublished: new Date(publishDate),
                dateModified: new Date(updatedAt),
                author: {
                  '@type': 'Person',
                  name: author.fields.name,
                  sameAs: [
                    author.fields.linkedIn,
                  ],
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'KeenEthics',
                  url: 'https://keenethics.com/',
                  sameAs: ['https://www.facebook.com/keenethics.development/', 'https://www.linkedin.com/company/keen-ethics/', 'https://github.com/keenethics', 'https://twitter.com/keen_ethics', 'https://www.upwork.com/o/companies/~0106b5437592391f94/', 'https://www.instagram.com/keen_ethics/'],
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://keenethics.com/static/images/logo.png',
                    width: 150,
                    height: 18,
                  },
                },
              },
            ),
          }}
        />
      </Layout>
    );
  }
}

personComponent.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
};

imageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

postCardComponent.propTypes = {
  slug: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  publishDate: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
};

socialMediaShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
};

Post.propTypes = {
  author: PropTypes.object,
  bodyRich: PropTypes.object,
  heroImage: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  publishDate: PropTypes.string,
  updatedAt: PropTypes.string,
  tags: PropTypes.array,
  relatedPosts: PropTypes.array,
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  url: PropTypes.object.isRequired,
};
Post.defaultProps = {
  bodyRich: {},
  heroImage: {},
  title: '',
  subtitle: '',
  description: '',
  publishDate: false,
  updatedAt: false,
  author: null,
  tags: [],
  relatedPosts: [],
  metaTitle: '',
  metaDescription: '',
};
