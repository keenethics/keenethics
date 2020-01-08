/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import classNames from 'classnames';
// import { useGesture } from 'react-use-gesture';
// import { throttle } from 'lodash';
import PropTypes from 'prop-types';

import missionData from '../../data/ourMission';

const MissionItem = ({
  image,
  title,
  description,
  onClick,
  active,
}) => (
  <div
    className={classNames('missions-item', { active })}
    onClick={onClick}
    onKeyDown={(event) => {
      if (event.keyCode === 32) {
        event.preventDefault();
        onClick();
      }
    }}
    tabIndex="0"
  >
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

MissionItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

const OurMission = () => {
  const [step, _setStep] = useState(0);

  const setStep = (toStep) => {
    if (step + toStep >= 0 && step + toStep < missionData.length) {
      _setStep(step + toStep);
    }
  };

  return (
    <div className="our-mission">
      <h2>We strive for a tech world devoted to the social good</h2>
      <div className="our-mission-body">
        <h3>
          <span>Our mission </span>
          in our social projects
        </h3>
        <div className="missions">
          {
            missionData.map((mission, i) => (
              <MissionItem
                {...mission}
                key={mission.title}
                onClick={() => setStep(i)}
                active={step === i}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default OurMission;
