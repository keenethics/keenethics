import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { throttle } from 'lodash';

import CategoryButton from '../categories-filter/CategoryButton';
import ourValuesData from '../../data/ourValues';

const steps = ourValuesData.map((v) => v.title);

const OurValues = () => {
  const [step, _setStep] = useState(0);
  const setStep = (toStep) => {
    if (toStep >= 0 && toStep < steps.length) {
      _setStep(toStep);
    }
  };

  const bind = useDrag(throttle(({ last, movement: [x] }) => {
    if (Math.abs(x) < 30 || !last) {
      return;
    }
    if (x > 0) {
      setStep(step - 1);
    } else {
      setStep(step + 1);
    }
  }, 150));

  return (
    <div className="our-values">
      <h2>Our Values</h2>
      <p>We strive to develop robust solutions while staying devoted to our business values.</p>
      <div
        className="buttons"
        {...bind()}
        style={{
          transform: `translateX(-${0}px)`,
        }}
      >
        {
          steps.map((s, i) => (
            <CategoryButton
              key={s}
              isActive={s === steps[step]}
              category={s}
              buttonClick={() => setStep(i)}
            />
          ))
        }
      </div>

      <ul className="values-slides">
        {
          ourValuesData.map((value) => (
            <li key={value.title}>
              <img src={value.image} alt={value.title} />
              <div className="caption">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            </li>
          ))
        }
      </ul>

      <ul className="values-toggler">
        {
          steps.map((s) => (
            <li
              key={s}
              className={s === steps[step] ? 'active' : ''}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default OurValues;
