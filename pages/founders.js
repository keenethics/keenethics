import React from 'react';
import Link from 'next/link';

const Founders = () => (
  <div id="founders" className="block block-founders">
    <div className="section-founders block--content">
      <div className="founders-text-section">
        <h2 className="text-section-title">
          We found KeenEthics because we knew that the tech world could do better.
        </h2>
        <p className="text-section-description">
          We are the leaders at KeenEthics: Max Savonin,
          the CEO, and Alex Pletnov, the CTO.
          Back in 2015, we co-founded KeenEthics
          Because we believed that we can make an
          Important contribution to the industry.
          We strive to make the tech world play ethically.
        </p>
        <Link href="/about-us">
          <a className="button contacts-goal orange-btn">Our Story</a>
        </Link>
      </div>
      <div className="founders-img-container">
        <img className="founders-img" src="static/images/D3X_3157 1 (2) 2.jpg" alt="founders" />
      </div>
    </div>
  </div>
);

export default Founders;
