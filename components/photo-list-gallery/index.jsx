/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PhotoListGallery = ({
  title, data, name, direction, galleryClassName,
}) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={`photo-list-gallery-container  ${direction}`}>
      <div className="list">
        <h5>{title}</h5>
        {data.map(({ listTitle, listText }, index) => (
          <>
            <input
              type="radio"
              name
              id={`team-member-${index}`}
              checked={activeItem === index ? 'checked' : ''}
              key={`input-${name}-${index}`}
              onChange={() => { }}
            />
            <label htmlFor={`team-member-${index}`} key={`label-${name}-${index}`}>
              <div role="presentation" onClick={() => setActiveItem(index)}>
                <span>{listTitle}</span>
                {' '}
                {listText}
              </div>
            </label>
          </>
        ))}
      </div>

      <div className={`photo-gallery ${galleryClassName}`}>
        <figure>
          <div
            className="figure-images"
            style={{
              transform: `translateX(-${activeItem * 100}%)`,
            }}
          >
            {
              data
                .map((item, index) => (
                  <div className="wrapper" key={`photo-${name}-${index}`}>
                    <LazyLoadImage src={item.picture} alt={item.name} />
                  </div>
                ))
            }
          </div>

          <div
            className="figcaptions"
            style={{
              transform: `translateX(-${activeItem * 100}%)`,
            }}
          >
            {
              data.map((item, index) => (
                <figcaption key={`figcaption-${name}-${index}`}>
                  <span>{item.name}</span>
                  <p>{item.position}</p>
                </figcaption>
              ))
            }
          </div>
        </figure>
        <ul className="values-toggler">
          {
            times(data.length, (i) => (
              <li
                key={i}
                className={i === activeItem ? 'active' : ''}
                onClick={() => setActiveItem(i)}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

PhotoListGallery.defaultProps = {
  direction: 'list-gallery',
  galleryClassName: '',
};

PhotoListGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  direction: PropTypes.string,
  galleryClassName: PropTypes.string,
};

export default PhotoListGallery;
