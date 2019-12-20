import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LetsStart = ({ section }) => (
  <div className="block block-lets-start" id={section}>
    <div className="block--content">
      <div className="lets-start">
        <div className="lets-start-section lets-start-text">
          <h4 className="lets-start-text-title">
            Our clients come to us with tough business challenges,
            and I strive to make sure they find a solution.
          </h4>
          <p className="lets-start-text-description">
            Starting an ambitious project or trying to breath in
            new life into a legacy solution can be difficult.
            Let me take it from here and offer you
            a free estimate of your project.

          </p>
          <p className="lets-start__author">
              Irene Krot
          </p>
          <p className="lets-start__author-position">
              Head of Partner Engagement
          </p>
          <Link href="/contacts?activeForm=estimate">
            <a className="button lets-start-btn orange-btn">Let&#39;s start</a>
          </Link>
        </div>
        <div className="lets-start-section lets-start-img">
          {/* <img src="/static/images/IreneK 1.png" alt="Irene" /> */}
        </div>
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
