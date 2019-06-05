import React from 'react';
import PropTypes from 'prop-types';

export default function CallToActionButton({ title, href }) {
  return (
    <div className="call-to-cation-btn-wrap">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <button className="call-to-cation-btn" type="button">{title}</button>
      </a>
    </div>
  );
}
CallToActionButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};
CallToActionButton.defaultProps = {
  title: 'Learn more',
  href: '//calendly.com/iryna-keenethics/intro-call',
};
