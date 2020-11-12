import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { get } from 'lodash';
import classnames from 'classnames';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import dateParse from '../../helpers/date-parser';
// import Webp from '../webp';
/**
 * Convert blog-post/portfolio-item to same scheme:
 * {
 *  title,
 *  description,
 *  imgUrl,
 *  tags,
 *  url,
 *  asUrl,
 *  publishDate,
 * }
 * @param {} item data object
 */

const links = {
  Business: '/services-business-administration-development',
  Healthcare: '/services-custom-healthcare-software-development',
  Education: '/services-education-software-development',
  Retail: '/services-retail-software-development',
};
const getDataFromProperty = (item) => {
  // check if we got portfolio item
  if (!item.file && !item.slug && item.category) {
    return {
      title: item.title,
      description: item.description,
      imgUrl: `/static/portfolio/${item.imgSrc}`,
      webpUrl: item.webpSrc ? `/static/portfolio/${item.webpSrc}` : null,
      url: item.href,
      asUrl: item.href,
      tags: item.category.main,
      publishDate: null,
    };
  }

  // check blog post
  if (item.slug && item.heroImage.fields.file) {
    return {
      title: item.title,
      description: null,
      imgUrl: `https:${
        get(item.heroImage, 'fields.file.url')
      }?fm=jpg&fl=progressive&q=85&w=600`,
      url: `/blog/${item.slug}`,
      asUrl: `/blog/${item.slug}`,
      tags: item.categories,
      publishDate: item.publishDate,
    };
  }

  throw new Error('Wrong item object supplied.');
};

const ListItem = ({ work }) => {
  const {
    title,
    // description,
    imgUrl,
    url,
    asUrl,
    tags,
    publishDate,
    webpUrl,
  } = getDataFromProperty(work);


  return (
    <div className={classnames('page__item')}>
      <Link href={url} as={asUrl} prefetch={false}>
        <a className="page__item-link">
          <figure className="page__item-figure">
            <div className="page__item-figure-img-wrap">
              <LazyLoadComponent>
                <picture>
                  <source className="page__item-img" srcSet={webpUrl} />
                  <img src={imgUrl} alt={title} className="page__item-img" />
                </picture>
              </LazyLoadComponent>
            </div>
          </figure>
        </a>
      </Link>
      <div className="page__item-figcaption">
        {!publishDate && (
          <h3 className="page__item-title">
            <Link href={url} as={asUrl} prefetch={false}>
              {title}
            </Link>
          </h3>
        )}
        <div className="page__item-figcaption-heading">
          <ul className="page__item-tags">
            {
              !!tags.length && tags.map((category) => {
                const href = links[category];
                return (
                  <li key={category}>
                    <div className="page__item-tag">
                      {
                        href
                          ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none', color: '#d42e2d' }}
                              href={href}
                            >
                              {category}
                            </a>
                          )
                          : <p>{category}</p>
                      }
                    </div>
                  </li>
                );
              })
            }
          </ul>
          {
            publishDate
            && (
              <time className="page__item-date" dateTime={Date.parse(publishDate)}>
                {dateParse(publishDate, 'MMM DD YYYY')}
              </time>
            )
          }
        </div>
        {publishDate && <h3 className="page__item-title">{title}</h3>}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  work: PropTypes.shape({
    href: PropTypes.string,
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.object,
    slug: PropTypes.string,
  }).isRequired,
};

export default ListItem;
