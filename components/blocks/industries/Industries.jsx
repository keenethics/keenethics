import React from 'react';

import Link from 'next/link';
import SeeProjects from './SeeProjects';
import useScrollToAnchor from '../../../helpers/useScrollToAnchor';

const Industries = () => {
  const section = 'industries';
  const ref = useScrollToAnchor(section);
  return (
    <div className="block block-industries" id={section} ref={ref}>
      <div className="block-content">
        <header className="block--header">
          <div className="block--header-title">
            Industries We Serve
          </div>
          <div className="block--header-description">
            We strive to be industry experts bringing business value and boosting your
            competitive power.
          </div>
        </header>
        <div className="block--content">
          <div className="industries">
            <div className="industries-big grid">
              <div className="col-1-3">
                <Link href="/services-education-software-development" prefetch={false}>
                  <a className="industries--big-item">
                    <div className="industries--big-item-logo">
                      <img
                        src="/static/main-blocks/industries/large/icon-education.svg"
                        width="54px"
                        height="34px"
                        alt="Education industries"
                      />
                    </div>
                    <div className="industries--big-item-title">
                      Education
                    </div>
                    <div className="industries--big-item-description">
                      Software Development
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-1-3">
                <Link href="/services-business-administration-development" prefetch={false}>
                  <a className="industries--big-item">
                    <div className="industries--big-item-logo">
                      <img
                        src="/static/main-blocks/industries/large/icon-business.svg"
                        width="54px"
                        height="34px"
                        alt="Education industries"
                      />
                    </div>
                    <div className="industries--big-item-title">
                      Business
                    </div>
                    <div className="industries--big-item-description">
                      Administration Development
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-1-3">
                <Link href="/services-custom-healthcare-software-development" prefetch={false}>
                  <a className="industries--big-item">
                    <div className="industries--big-item-logo">
                      <img
                        src="/static/main-blocks/industries/large/icon-healthcare.svg"
                        width="54px"
                        height="34px"
                        alt="Education industries"
                      />
                    </div>
                    <div className="industries--big-item-title">
                      Healthcare
                    </div>
                    <div className="industries--big-item-description">
                      Software Development
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="industries-small">
              <div className="industries--small-item">
                <Link href="/services-retail-software-development" prefetch={false}>
                  <a className="link">
                    <div className="industries--small-item-logo">
                      <img
                        src="/static/main-blocks/industries/small/icon-retail.svg"
                        width="32px"
                        height="27px"
                        alt="Retail industries"
                      />
                    </div>
                    <div className="industries--small-item-title link">
                      Retail
                    </div>
                  </a>
                </Link>
              </div>
              <div className="industries--small-item">
                <div className="industries--small-item-logo">
                  <img
                    src="/static/main-blocks/industries/small/icon-agriculture.svg"
                    width="32px"
                    height="27px"
                    alt="Agriculture industries"
                  />
                </div>
                <div className="industries--small-item-title">
                  Agriculture
                </div>
              </div>
              <div className="industries--small-item">
                <div className="industries--small-item-logo">
                  <img
                    src="/static/main-blocks/industries/small/icon-hospitality.svg"
                    width="32px"
                    height="27px"
                    alt="Hospitality and Entertainment industries"
                  />
                </div>
                <div className="industries--small-item-title">
                  Hospitality and Entertainment
                </div>
              </div>
              <div className="industries--small-item">
                <div className="industries--small-item-logo">
                  <img
                    src="/static/main-blocks/industries/small/icon-real-estate.svg"
                    width="32px"
                    height="27px"
                    alt="Real Estate industries"
                  />
                </div>
                <div className="industries--small-item-title">
                  Real Estate
                </div>
              </div>
              <div className="industries--small-item">
                <div className="industries--small-item-logo">
                  <img
                    src="/static/main-blocks/industries/small/icon-finance.svg"
                    width="32px"
                    height="27px"
                    alt="Finance and Banking industries"
                  />
                </div>
                <div className="industries--small-item-title">
                  Finance and Banking
                </div>
              </div>
            </div>
            <SeeProjects />
          </div>
        </div>
      </div>
      <div className="block-background">
        <div className="grid">
          <div className="col-1-3"><span>Education</span></div>
          <div className="col-1-3"><span>Business</span></div>
          <div className="col-1-3"><span>Healthcare</span></div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
