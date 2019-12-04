import React, { useState } from 'react';
import classNames from 'classnames';
import { useGesture } from 'react-use-gesture';
import { throttle } from 'lodash';

import StoryItem from './StoryItem';
import storyData from '../../data/ourStory';

const mobileYearOffsets = [
  '0',
  '-90px',
  '-210px',
  '-333px',
];

const OurStory = () => {
  const [step, _setStep] = useState(0);

  const setStep = (toStep) => {
    if (step + toStep >= 0 && step + toStep < storyData.length) {
      _setStep(step + toStep);
    }
  };

  const bind = useGesture({
    onDragEnd: throttle(({ vxvy }) => {
      console.log('nu che tam');
      const vx = Math.abs(vxvy[0]);
      const vy = Math.abs(vxvy[1]);
      if (vx > vy && vx > 0.3) {
        if (vxvy[0] < 0) {
          setStep(1);
        } else {
          setStep(-1);
        }
      }
    }, 1000),
  }, {
  });

  return (
    <div className="our-story" {...bind()}>
      <h2>Our Story</h2>
      <div className="timeline">
        <ul
          className="years"
          style={{ transform: `translateX(${mobileYearOffsets[step]})` }}
        >
          {storyData.map((s, i) => (
            <li
              key={s.year}
              className={classNames({ active: step === i })}
            >
              {s.year}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="story"
        style={{ transform: `translateX(${step * -25}%)` }}
      >
        {storyData.map((_step) => (
          <StoryItem
            {..._step}
            key={_step.year}
          />
        ))}
      </div>
    </div>
  );
};

export default OurStory;
