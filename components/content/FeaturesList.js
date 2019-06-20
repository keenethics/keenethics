import React from 'react';
import PropTypes from 'prop-types';

export default function FeaturesList({ list, titleItalic }) {
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
              {icon && <img src={icon} alt={alt} className="features-icons--img" />}
              <figcaption className="features-icons--figcaption" style={titleItalic ? { fontStyle: 'italic' } : null}>
                {description}
              </figcaption>
            </figure>
            { additionalText && <p className="features-additional-text" style={icon ? null : { marginTop: '15px' }}>{additionalText}</p> }
          </li>
        ))
      }
    </ul>
  );
}
FeaturesList.propTypes = {
  list: PropTypes.array.isRequired,
  titleItalic: PropTypes.bool,
};
FeaturesList.defaultProps = {
  titleItalic: false,
};
