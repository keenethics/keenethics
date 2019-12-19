import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const platesContent = [
  {
    icon: 'icon-web.svg',
    text: 'Web Development',
  },
  {
    icon: 'icon-mobile.svg',
    text: 'Mobile Development',
  },
  {
    icon: 'icon-mvp.svg',
    text: 'Minimum Viable Product',
  },
  {
    icon: 'icon-pwa.svg',
    text: 'PWA Development',
  },
  {
    icon: 'icon-team.svg',
    text: 'Staff Augmentation',
  },
  {
    icon: 'icon-cloud.svg',
    text: 'Cloud Appliction Development Service',
  },
  {
    icon: 'icon-ai.svg',
    text: 'Chatbots & AI Development',
  },
  {
    icon: 'icon-iot.svg',
    text: 'Internet of Things Development Services',
  },

];

const OurServices = ({ show }) => (
  <div className="block block-our-services">
    <header className="block--header">
      <div className="block--header-title">
        Our services
      </div>
      <div className="block--header-description">
        You can rely on us to cover any product development need you have.
        We are sure to contribute to the success of your solution no matter what the task.
      </div>
    </header>
    <div className="our-services">
      <div className={classnames('home-section-plates', {
        'fade-in-timed-out': show,
      })}
      >
        {platesContent.map((el) => (
          <div className="home-section-plates-item" key={el.text}>
            <img className="plate-img" src={`/static/images/svg/home/services/${el.icon}`} alt="service icon" />
            <p className="plate-text">{el.text}</p>
          </div>
        ))}
        <div className="plates-grid horizontal" />
        <div className="plates-grid start" />
        <div className="plates-grid mid" />
        <div className="plates-grid end" />
      </div>
    </div>
  </div>
);

OurServices.propTypes = {
  show: PropTypes.bool,
};

OurServices.defaultProps = {
  show: false,
};

export default OurServices;
