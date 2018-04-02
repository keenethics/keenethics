import { Link } from 'next-url-prettifier';

import React from 'react';
import PropTypes from 'prop-types';

import { Router } from '../../routes';

const Works = ({ works }) => (
  <div className="portfolio-works">
    <ul className="portfolio__list">
      {works.map(work => (
        <li className="portfolio__item" key={work.title}>
          <Link route={Router.linkPage('work', { name: work.href })}>
            <a className="portfolio__item-link">
              <figure className="portfolio__item-figure">
                <img src={`../static/portfolio/${work.imgSrc}`} alt={work.title} className="portfolio__item-img" />
                <figcaption className="portfolio__figcaption">
                  <h3 className="portfolio__item-title">{work.title}</h3>
                    <ul className="portfolio__item-categories">
                     {work.category.main && work.category.main != 'Other' && work.category.main.map(category => (
                        <li className="portfolio__item-category" key={category}>{category}</li>
                      ))}
                      {work.category.additional && work.category.additional.map(category => (
                        <li className="portfolio__item-category" key={category}>{category}</li>
                      ))}
                    </ul>
                  <p className="portfolio__item-descr">{work.descr}</p>
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
