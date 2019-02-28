import React from 'react';
import PropTypes from 'prop-types';

const PortfolioTechnologyTags = ({ tags, style }) => (
  <div className="technology-tags-wrap">
    <ul className="technology-tags--list">
      {
        tags.map((tag) => {
          let href = '';
          switch (tag.toLowerCase()) {
            case 'meteor':
              href = 'tech-back-end-meteor';
              break;
            case 'react':
              href = 'tech-front-end-react';
              break;
            case 'react native':
              href = 'tech-front-end-react-native';
              break;
            case 'mongo':
              href = 'tech-data-base-mongo';
              break;
            case 'express':
              href = 'tech-back-end-express';
              break;
            case 'redux':
              href = 'tech-front-end-redux';
              break;
            case 'node js':
              href = 'services-web-development-node';
              break;
            case 'cordova':
              href = 'tech-apps-cordova';
              break;
            case 'angular':
              href = 'tech-front-end-angular';
              break;
            case 'angular 2':
              href = 'tech-front-end-angular-2';
              break;
            case 'android':
              href = 'services-mobile-development-android';
              break;
            default:
              break;
          }
          return (
            <li className="technology-tags--item" key={tag}>
              {
                href ? (
                  <a
                    className="technology-tag"
                    href={`/${href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={style}
                  >
                    {tag}
                  </a>
                ) : (
                  <div className="technology-tag" style={style}>{tag}</div>
                )
              }
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default PortfolioTechnologyTags;

PortfolioTechnologyTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.object,
};
PortfolioTechnologyTags.defaultProps = {
  style: {},
};
