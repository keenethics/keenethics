import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function CallToActionButton({ title, href, buttonBefore }) {
  const isCalendlyLink = href.includes('calendly.com');

  return (
    <div className="call-to-cation-btn-wrap">
      {
        buttonBefore && buttonBefore
      }
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={classnames(
          { 'calendly-goal': isCalendlyLink },
        )}
      >
        <button
          className="call-to-cation-btn"
          type="button"
        >
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
};
CallToActionButton.defaultProps = {
  title: 'Learn more',
  href: '//calendly.com/iryna-keenethics/intro-call',
  buttonBefore: null,
};
