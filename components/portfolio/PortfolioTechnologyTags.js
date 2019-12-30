import React from 'react';
import PropTypes from 'prop-types';

const links = {
  meteor: '/tech-back-end-meteor',
  react: '/tech-front-end-react',
  reactnative: '/tech-apps-react-native',
  mongo: '/tech-data-base-mongo',
  express: '/tech-back-end-express',
  nodejs: '/services-web-development-node',
  cordova: '/tech-apps-cordova',
  angular: '/tech-front-end-angular',
  android: '/services-mobile-development-android',
};

const PortfolioTechnologyTags = ({ tags, style }) => (
  <div className="technology-tags-wrap">
    <ul className="technology-tags--list">
      {
        tags.map((tag) => {
          const href = links[tag.toLowerCase().replace(' ', '')];
          return (
            <li className="technology-tags--item" key={tag}>
              {
                href ? (
                  <a
                    className="technology-tag"
                    href={href}
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
