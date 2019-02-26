import React from 'react';
import PropTypes from 'prop-types';

const PortfolioFeedback = ({
  title,
  photo,
  feedback,
  link,
}) => (
  <div className="feedback">
    {
      title && (
        <div className="feedback--client">
          {
            photo && <img src={photo} alt={title} className="feedback--client-img" />
          }
          <p className="feedback--client-title">{title}</p>
        </div>
      )
    }
    <div className="feedback--body">
      <p className="feedback--client-quote">{feedback}</p>
      <a
        href={link || '//clutch.co/profile/keenethics'}
        target="_blank"
        rel="noopener noreferrer"
        className="feedback--link"
      >
        {link ? 'See full review' : 'See all reviews'} <img src="/static/portfolio/icons/clutch.png" alt="clutch" />
      </a>
    </div>
  </div>
);

export default PortfolioFeedback;

PortfolioFeedback.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
  feedback: PropTypes.string.isRequired,
  link: PropTypes.string,
};
PortfolioFeedback.defaultProps = {
  title: '',
  photo: '',
  link: '',
};
