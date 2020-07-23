import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Founders = () => (
  <div id="founders" className="block block-founders">
    <div className="section-founders block--content">
      <div className="founders-text-section">
        <h2 className="text-section-title">
          We founded KeenEthics because we knew that the tech world could do better.
        </h2>
        <p className="text-section-description">
          We are the leaders at KeenEthics: Max Savonin,
          the CEO, and Alex Pletnov, the CTO.
          Back in 2015, we co-founded KeenEthics
          because we believed that we can make an
          important contribution to the industry.
          We strive to make the tech world play ethically.
        </p>
        <Link href="/about-us">
          <a className="button contacts-goal orange-btn">Our Story</a>
        </Link>
      </div>
      <div className="founders-img-container">
        <LazyLoadImage
          className="founders-img"
          src="static/images/founders.jpg"
          alt="founders"
        />
      </div>
    </div>
  </div>
);

export default Founders;
