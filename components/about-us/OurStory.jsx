/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
  '-363px',
];

const getOffset = (step) => {
  if (window.innerWidth < 768) {
    return { transform: `translateX(${-25 * step}%)` };
  }
  return { transform: `translateY(${-25 * step}%)` };
};

const OurStory = () => {
  const [step, _setStep] = useState(0);

  const setStep = (toStep) => {
    if (step + toStep >= 0 && step + toStep < storyData.length) {
      _setStep(step + toStep);
    }
  };

  const bind = useGesture({
    onDragEnd: throttle(({ vxvy }) => {
      if (window.innerWidth > 1024) {
        return;
      }
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
      <div className="our-story-body">
        <div className="timeline">
          <ul
            className="years"
            style={{ transform: `translateX(${mobileYearOffsets[step]})` }}
          >
            {storyData.map((s, i) => (
              <li
                key={s.year}
                className={classNames({ active: step === i })}
                onClick={() => _setStep(i)}
                onKeyDown={(event) => {
                  if (event.keyCode === 32) {
                    event.preventDefault();
                    _setStep(i);
                  }
                }}
                tabIndex="0"
              >
                {s.year}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="story"
          style={getOffset(step)}
        >
          {storyData.map((_step, i) => (
            <StoryItem
              visible={step === i}
              key={_step.year}
              {..._step}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
