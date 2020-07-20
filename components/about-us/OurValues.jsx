/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import CategoryButton from '../categories-filter/CategoryButton';
import ourValuesData from '../../data/ourValues';
import { ItemDescription } from './StoryItem';
import ValuesSlider from './ValuesSlider';

const steps = ourValuesData.map((v) => v.title);

class OurValues extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    };
  }

  setStep = (toStep, skipSlideChange = false) => {
    if (this.slider && !skipSlideChange) {
      this.slider.slickGoTo(toStep);
    }
    this.setState({ step: toStep });
  }

  render() {
    const { step } = this.state;
    return (
      <div className="our-values">
        <h2>Our Values</h2>
        <p>We strive to develop robust solutions while staying devoted to our business values.</p>
        <div className="buttons">
          {
            steps.map((s, i) => (
              <CategoryButton
                key={s}
                isActive={s === steps[step]}
                category={s}
                buttonClick={() => this.setStep(i)}
              />
            ))
          }
        </div>

        <ValuesSlider
          setRef={(node) => { this.slider = node; }}
          values={ourValuesData}
          step={step}
          onStepChange={this.setStep}
        />

        <ul className="values-toggler">
          {
            steps.map((s, i) => (
              <li
                key={s}
                className={s === steps[step] ? 'active' : ''}
                onClick={() => this.setStep(i)}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default OurValues;
