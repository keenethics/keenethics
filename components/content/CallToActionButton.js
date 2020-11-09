import React from 'react';
import PropTypes from 'prop-types';

export default function CallToActionButton({
  title,
  href,
  buttonBefore,
  clazz,
  nofollow,
}) {
  return (
    <div className={`call-to-cation-btn-wrap ${clazz}`}>
      {buttonBefore && buttonBefore}
      <a
        href={href}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        rel={`noopener noreferrer ${nofollow ? 'nofollow' : ''}`}
      >
        <button className="call-to-cation-btn" type="button">
          {title}
        </button>
      </a>
    </div>
  );
}
CallToActionButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  buttonBefore: PropTypes.node,
  clazz: PropTypes.string,
  nofollow: PropTypes.bool,
};
CallToActionButton.defaultProps = {
  title: 'Learn more',
  clazz: '',
  href: '/contacts',
  buttonBefore: null,
  nofollow: false,
};
