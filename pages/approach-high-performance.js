import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

const ApproachHighPerformance = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation url={url} image={'high'} />
      <div className="content-block content-block-f">
        <div className="content">
          <div className="perfomance-wrap">
            <div className="line" />
            <div className="perfomance-block">
              <div className="perfomance-item">
                <div className="point" />
                <div className="perfomance-column right">
                  <div className="perfomance-image">
                    <img src="/static/images/p-img-01.jpg" alt="" />
                    <span><i>STANDING TABLE KIT</i></span>
                  </div>
                </div>
                <div className="perfomance-column left">
                  <div className="perfomance-text">
                    <span>
                      These tables help our workers not to get tires during the
                      coding adventures
                    </span>
                  </div>
                </div>
              </div>
              <div className="perfomance-item">
                <div className="point" />
                <div className="perfomance-column left">
                  <div className="perfomance-image">
                    <img src="/static/images/p-img-02.jpg" alt="" />
                    <span><i>POWERFUL COMPUTERS</i></span>
                  </div>
                </div>
                <div className="perfomance-column right">
                  <div className="perfomance-text">
                    <span>
                      Wild machines and huge displays to make the proccess of
                      creating Your product even more pleasant
                    </span>
                  </div>
                </div>
              </div>
              <div className="perfomance-item">
                <div className="point" />
                <div className="perfomance-column right">
                  <div className="perfomance-image">
                    <img src="/static/images/p-img-03.jpg" alt="" />
                    <span><i>RESULTS-COUPLING</i></span>
                  </div>
                </div>
                <div className="perfomance-column left">
                  <div className="perfomance-text">
                    <span>
                      We don’t abandon our projects after finishing them. We’re
                      supporting it and helping to fix the issues if some occur
                    </span>
                  </div>
                </div>
              </div>
              <div className="perfomance-item">
                <div className="point" />
                <div className="perfomance-column left">
                  <div className="perfomance-image">
                    <img src="/static/images/p-img-04.jpg" alt="" />
                    <span><i>HEALTHYNESS</i></span>
                  </div>
                </div>
                <div className="perfomance-column right">
                  <div className="perfomance-text">
                    <span>
                      We exercise, have fruits instead of cookies and tables
                      that let you work standing up which helps to increase our
                      productivity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

ApproachHighPerformance.propTypes = {
  url: PropTypes.object,
};

ApproachHighPerformance.defaultProps = {
  url: {},
};

export default ApproachHighPerformance;
