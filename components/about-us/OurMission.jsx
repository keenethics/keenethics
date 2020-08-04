/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames';
import { Swipeable } from 'react-swipeable';
import { debounce } from 'lodash';

import missionData from '../../data/ourMission';

const getElemMargin = (elem) => {
  const styles = elem.currentStyle || window.getComputedStyle(elem);
  return parseInt(styles.marginBottom, 10);
};

const getElemHeight = (elem) => elem.clientHeight;

const getComputedSliderHeight = (slider) => getElemHeight(slider) * 2 + getElemMargin(slider) + 30;

const getComputedTranslation = (toStep, currentStep, singleSlide) => {
  let translation = 0;

  if (toStep > currentStep) {
    translation = -1 * (getElemHeight(singleSlide) + getElemMargin(singleSlide));
  }
  return translation;
};

class OurMission extends React.Component {
  adjustDimensions = debounce(() => {
    this.setState((state) => ({
      sliderHeight: getComputedSliderHeight(this.singleSlide),
      actualTranslation: getComputedTranslation(
        state.step,
        state.step,
        this.singleSlide,
      ),
    }));
  }, 300);

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      sliderHeight: 0,
      actualTranslation: 0,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.adjustDimensions();
      window.addEventListener('resize', this.adjustDimensions);
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.step !== prevState.step && window.innerWidth < 1024) {
      const slides = document.querySelectorAll('.missions-item');
      (slides[this.state.step - 1] || slides[0]).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.adjustDimensions);
    }
  }

  setStep = (toStep) => {
    if (
      toStep >= 0
      && toStep < missionData.length
      && toStep !== this.state.step
    ) {
      this.setState((state) => ({
        step: toStep,
        sliderHeight: getComputedSliderHeight(this.singleSlide),
        actualTranslation: getComputedTranslation(
          toStep,
          state.step,
          this.singleSlide,
        ),
      }));
    }
  };

  render() {
    const { step, sliderHeight, actualTranslation } = this.state;

    return (
      <div className="our-mission">
        <h2>We strive for a tech world devoted to the social good</h2>
        <div className="our-mission-body">
          <h3>
            <span>Our mission </span>
            in our social projects
          </h3>
          <Swipeable
            onSwipedUp={() => this.setStep(step + 1)}
            onSwipedDown={() => this.setStep(step - 1)}
            preventDefaultTouchmoveEvent
          >
            <div
              className="missions"
              style={{ height: `${sliderHeight}px` }}
              ref={(node) => {
                this.missionsSlider = node;
              }}
            >
              <div
                className="missions-inner"
                style={{ transform: `translateY(${actualTranslation}px)` }}
              >
                {missionData.map(({
                  title, image, description, href,
                }, i) => (
                  <div
                    key={title}
                    className={classNames('missions-item', { active: step === i })}
                    onClick={() => this.setStep(i)}
                    ref={i === 0 ? (node) => { this.singleSlide = node; } : null}
                  >
                    <img src={image} alt={title} />
                    {
                        href ? (
                          <a
                            target="_blank"
                            href={href}
                            rel="nofollow noopener noreferrer"
                          >
                            {title}
                          </a>
                        ) : (
                          <h4>{title}</h4>
                        )
                    }
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Swipeable>
        </div>
      </div>
    );
  }
}

export default OurMission;
