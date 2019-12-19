import React, { useState, useRef, useEffect } from 'react';
import { throttle, last } from 'lodash';

import CategoryButton from '../categories-filter/CategoryButton';
import ourValuesData from '../../data/ourValues';

const steps = ourValuesData.map((v) => v.title);

const OurValues = () => {
  const [step, setStep] = useState(0);

  const slidesRef = useRef(null);
  let offsets = [];
  const setOffsets = ({ target: { children } }) => {
    const slicedChildren = [...children];
    offsets = slicedChildren.map((child) => child.offsetLeft);
  };
  if (slidesRef && slidesRef.current) {
    setOffsets({ target: slidesRef.current });
  }
  const watchScroll = throttle((event) => {
    const slidesScrollPosition = event.target.scrollLeft;
    const currentSlideOffset = offsets.find((o, i) => {
      if (slidesScrollPosition >= last(offsets)) {
        return i === offsets.length - 1;
      }
      return slidesScrollPosition >= o && slidesScrollPosition < offsets[i + 1];
    });

    const currentSlide = offsets.indexOf(currentSlideOffset);
    setStep(currentSlide);
  }, 100);

  useEffect(() => {
    if (slidesRef !== null) {
      window.addEventListener('resize', setOffsets);
      slidesRef.current.addEventListener('scroll', watchScroll);
      setOffsets({ target: { children: slidesRef.current.children } });
    }

    return () => {
      window.removeEventListener('resize', setOffsets);
      slidesRef.current.removeEventListener('scroll', watchScroll);
    };
  }, [slidesRef]);

  const stepButtonClick = (toStep) => {
    slidesRef.current.scrollLeft = offsets[toStep];
    setStep(toStep);
  };

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
              buttonClick={() => stepButtonClick(i)}
            />
          ))
        }
      </div>

      <ul className="values-slides" ref={slidesRef}>
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
