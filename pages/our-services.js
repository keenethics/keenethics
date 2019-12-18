import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const platesContent = [
  {
    icon: 'front-end-1.svg',
    text: 'Web Development',
  },
  {
    icon: 'mobile-dev.svg',
    text: 'Mobile Development',
  },
  {
    icon: 'rocket-icon.svg',
    text: 'Minimum Viable Product',
  },
  {
    icon: 'pwa.svg',
    text: 'PWA Development',
  },
  {
    icon: 'staff-aug.svg',
    text: 'Staff Augmentation',
  },
  {
    icon: 'cloud.svg',
    text: 'Cloud Appliction Development Service',
  },
  {
    icon: 'robot.svg',
    text: 'Chatbots & AI Development',
  },
  {
    icon: 'home.svg',
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
            <img className="plate-img" src={`/static/images/svg/${el.icon}`} alt="service icon" />
          </div>
        ))}
        <div className="plates-grid plates-grid-v horizontal" />
        <div className="plates-grid plates-grid-v start" />
        <div className="plates-grid plates-grid-v mid" />
        <div className="plates-grid plates-grid-v end" />
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
