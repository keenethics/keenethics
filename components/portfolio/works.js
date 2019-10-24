import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

const Works = ({ works }) => (
  <div className="portfolio-works">
    <ul className="portfolio__list">
      {works.map((work) => (
        <li className="portfolio__item" key={work.title}>
          <Link href={work.href}>
            <a className="portfolio__item-link">
              <figure className="portfolio__item-figure">
                <div className="portfolio__item-figure-img-wrap">
                  <img src={`static/portfolio/${work.imgSrc}`} alt={work.title} className="portfolio__item-img" />
                </div>
                <figcaption className="portfolio__figcaption">
                  <ul className="portfolio__item-categories">
                    {
                      work.category.main && work.category.main !== 'Other'
                        ? work.category.main.map((category) => (<li className="tag" key={category}>{category}</li>))
                        : null
                    }
                    {
                      work.category.additional
                        ? work.category.additional.map((category) => (<li className="tag" key={category}>{category}</li>))
                        : null
                    }
                  </ul>
                  <h3 className="portfolio__item-title">{work.title}</h3>
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
