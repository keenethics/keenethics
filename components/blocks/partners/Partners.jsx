import React, { useState } from 'react';

import Testimonial from './Testimonial';
import Author from './Author';

const Partners = () => {
  const length = 3;
  const [index, setIndex] = useState(0);

  const increaseIndex = (e) => {
    e.preventDefault();

    const nextIndex = index + 1;

    if (nextIndex > length - 1) {
      setIndex(0);

      return;
    }

    setIndex(nextIndex);
  };

  const decreaseIndex = (e) => {
    e.preventDefault();

    const nextIndex = index - 1;

    if (nextIndex === -1) {
      setIndex(length - 1);

      return;
    }

    setIndex(nextIndex);
  };

  return (
    <div className="block block-partners">
      <header className="block--header">
        <div className="block--header-title">
          Our partner testimonials
        </div>
      </header>
      <div className="block--content">
        <div className="partners">
          <div className="partners--testimonials">
            <div
              className="partners--testimonials-arrow prev"
              onClick={decreaseIndex}
              role="presentation"
            />
            <div className="partners--testimonials-list">
              <Testimonial
                isVisible={index === 0}
              >
                We were impressed with Keenethics from the get-go. They really get startups and are
                able to work without perfect project-plans - making clever and reasonable
                assumptions as they go and clarifying when the need arises. Great team, solid
                communication and fast-paced, high-quality development. They really get startups and
                are able to work without perfect project-plans.
              </Testimonial>
              <Testimonial
                isVisible={index === 1}
              >
                They really get startups and are
                able to work without perfect project-plans - making clever and reasonable
                assumptions. Great team, solid communication and fast-paced, high-quality
                development.
              </Testimonial>
              <Testimonial
                isVisible={index === 2}
              >
                Great team, solid communication and fast-paced, high-quality development.
                We were impressed with Keenethics from the get-go. They really get startups and are
                able to work without perfect project-plans - making clever and reasonable.
              </Testimonial>
            </div>
            <div
              className="partners--testimonials-arrow next"
              onClick={increaseIndex}
              role="presentation"
            />
          </div>
          <div className="partners--authors">
            <Author
              isVisible={index === 0}
              avatar="jens-munch"
              name="Jens Munch"
              from="the UK"
              position="Founder of Pace, a revenue management software provider"
            />
            <Author
              isVisible={index === 1}
              avatar="jens-munch"
              name="Jens Munch"
              from="the UK"
              position="Founder of Pace, a revenue management software provider"
            />
            <Author
              isVisible={index === 2}
              avatar="jens-munch"
              name="Jens Munch"
              from="the UK"
              position="Founder of Pace, a revenue management software provider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
