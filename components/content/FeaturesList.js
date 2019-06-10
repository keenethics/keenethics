import React from 'react';
import PropTypes from 'prop-types';

export default function FeaturesList({ list }) {
  return (
    <ul className="features-icons--list">
      {
        list.map(({
          icon,
          alt,
          description,
          additionalText,
        },
        key) => (
          <li key={key} className="features-icons--item">
            <figure className="features-icons--figure">
              <img src={icon} alt={alt} className="features-icons--img" />
              <figcaption className="features-icons--figcaption">
                {description}
              </figcaption>
            </figure>
            { additionalText && <p className="features-additional-text">{additionalText}</p> }
          </li>
        ))
      }
    </ul>
  );
}
FeaturesList.propTypes = {
  list: PropTypes.array.isRequired,
};
