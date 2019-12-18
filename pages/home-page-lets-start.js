import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LetsStart = ({ section }) => (
  <div className="section fp-auto-height" id={section}>
    <div className="lets-start">
      <div className="lets-start-section lets-start-text">
        <h4 className="lets-start-text-title">
            I am here to help you find a software solution.
        </h4>
        <p className="lets-start-text-description">
            If you have a business challenge you want to be solved with a software solution,
            let me tell you about what we can offer. Should we start with a free estimate
            of your project?
        </p>
        <p className="lets-start__author">
            Irene Krot
        </p>
        <p className="lets-start__author-position">
            Head of Partner Engagement
        </p>
        <Link href="/contacts?activeForm=estimate">
          <a className="button lets-start-btn">Let&#39;s start</a>
        </Link>
      </div>
      <div className="lets-start-section lets-start-img">
        {/* <img src="/static/images/IreneK 1.png" alt="Irene" /> */}
      </div>
    </div>
  </div>
);

LetsStart.propTypes = {
  section: PropTypes.string,
};

LetsStart.defaultProps = {
  section: '',
};

export default LetsStart;
