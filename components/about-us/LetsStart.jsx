import React from 'react';
import Link from 'next/link';

const LetsStart = () => (
  <div id="lets-start" className="block block-lets-start">
    <div className="block--content">
      <div className="lets-start">
        <div className="lets-start-section lets-start-text">
          <h4 className="lets-start-text-title">
            I am here to help you find a software solution.
          </h4>
          <p className="lets-start-text-description">
            If you have a business challenge you want to 
            be solved with a software solution, let me tell 
            you about what we can offer. Should we start 
            with a free estimate of your project?
          </p>
          <p className="lets-start__author">
            Ilona Shvahla
          </p>
          <p className="lets-start__author-position">
            Head of Partner Engagement
          </p>
          <Link href="/contacts?activeform=estimate">
            <a className="button lets-start-btn orange-btn">Let&#39;s start</a>
          </Link>
        </div>
        <div className="lets-start-section lets-start-img"/>
      </div>
    </div>
  </div>
);

export default LetsStart;
