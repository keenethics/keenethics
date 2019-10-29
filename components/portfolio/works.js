import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

const Works = ({ works }) => (
  <div className="portfolio-works">
    <ul className="page__list">
      {works.map((work) => (
        <li className="page__item" key={work.title}>
          <Link href={work.href}>
            <a className="page__item-link">
              <figure className="page__item-figure">
                <div className="page__item-figure-img-wrap">
                  <img src={`static/portfolio/${work.imgSrc}`} alt={work.title} className="page__item-img" />
                </div>
                <figcaption className="page__item-figcaption">
                  <div className="page__item-figcaption-heading">
                    <ul className="page__item-tags">
                      {
                        work.category.main && work.category.main !== 'Other'
                          ? work.category.main.map((category) => (<li className="page__item-tag" key={category}>{category}</li>))
                          : null
                      }
                      {
                        work.category.additional
                          ? work.category.additional.map((category) => (<li className="page__item-tag" key={category}>{category}</li>))
                          : null
                      }
                    </ul>
                  </div>
                  <h3 className="page__item-title">{work.title}</h3>
                </figcaption>
              </figure>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Works.propTypes = {
  works: PropTypes.array,
};
Works.defaultProps = {
  works: [],
};

export default Works;
