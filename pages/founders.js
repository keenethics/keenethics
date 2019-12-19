import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Founders = ({ section }) => (
  <div className="block block-founders" id={section}>
    <div className="section-founders block--content">
      <div className="founders-text-section">
        <h2 className="text-section-title">
          We founded KeenEthics because we knew that the tech world could do better.
        </h2>
        <p className="text-section-description">
          We are the leaders at KeenEthics: Max Savonin, the CEO, and Alex Pletnov,
          the CTO. Back in 2015, we co-founded KeenEthics because we believed that
          we could make an important contribution to the industry. We strive to
          make the tech world play ethical.
        </p>
        <Link href="/contacts?activeForm=estimate">
          <a className="button contacts-goal">Our Story</a>
        </Link>
      </div>
      <div className="founders-img-container">
        <img className="founders-img" src="static/images/founders.jpg" alt="founders" />
      </div>
    </div>
  </div>
);

Founders.propTypes = {
  section: PropTypes.string.isRequired,
};

export default Founders;
