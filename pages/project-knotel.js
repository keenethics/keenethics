import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';

const baseColor = '#fc634d';

const ProjectKnotel = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Knotel</h2>
              <h3 className="duration"><span>Duration:</span> In development since April 2016</h3>
              <p className="description">
                Knotel - the Innovative Platform for Workspace Management
              </p>
              <div className="tags">
                <div className="tag">Meteor</div>
                <div className="tag">React</div>
                <div className="tag">React Native</div>
                <div className="tag">Mongo</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/knotel.png" alt="Knotel" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              It becomes clear that the market is growing when the diversity starts to show. The flexible workspace industry not only got bigger in size lately; it also branched out in the new directions. Knotel is the brand that was quick to keep up with the market opportunities. They have recognized the growing demand for the workspace management services and created their own niche.
            </p>
            <h2>The idea behind Knotel</h2>
            <p>
              The lack of growth opportunities for the multiple startups in terms of real estate was something that the founders of Knotel experienced themselves. There was too little space available for the new companies that would fulfill all their needs: being flexible enough to accommodate the changing number of teams and open for modifications at the same time. Thus, the primary goal of Knotel was to develop a flexible solution to this problem, and they managed to come up with a win-win situation for both lenders and tenants.
            </p>
            <p>
              What Knotel did was creating the platform that would connect the owners of multiple commercial properties with the tenants in search of a flexibility. This way, the lenders would still have the long-term tenants, whereas the latter would not be tied to a single space and could later relocate to another location within the network of their lender.
            </p>
            <p>
              Knotel is a unique service of managing workspace which is based on the principles of shared economy. Their model is sometimes described as Airbnb for the commercial real estate. The value proposition that Knotel offers to their customers is something that no other service can provide.
            </p>
            <h2>The benefits provided by Knotel</h2>
            <p>
              Knotel is basically an intermediary between the property owners and the companies looking for an accommodation. There is a number of benefits that the growing companies get from such arrangement.
            </p>
            <p>
              Naturally, the greatest advantage is the flexibility; the company CEOs know that they can relocate at any given time, which deprives them of a headache that comes along with looking for an available property that will not be partially occupied by someone else.
            </p>
            <p>
              Also, Knotel handles a bunch of other technical and specific things. Given that the intermediary takes on all the real estate-related tasks, the businesses that use their service don’t have to deal with the typical office management issues.
            </p>
            <p>
              As a result, the customers of Knotel get even more than that; they have the luxury to fully concentrate on the most important thing - developing their business.
            </p>
            <h2>Sui generis platform</h2>
            <p>
              The demand for the services of Knotel mainly comes from the small companies with 20+ people employed who are lured by the short-term lease opportunities. It may seem that this approach is not new to the flexible workspace industry, but this impression is deceptive. The position of Knotel on the market is pretty solid, which is ensured by the way they get their profit. Whereas many other workspace management companies rely on the building leases and extract the revenues from license or membership fees, Knotel embraces the terms resembling that of hotels and partners up with the landlords under profit-sharing arrangements. This makes the company remain in a safe place in the event of a downturn.
            </p>
            <p>
              Although Knotel is a relatively new company, they see further growth, and more opportunities are yet to come for this aspiring venture.
            </p>
            <a
              href="https://knotel.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
          </div>
          <Navigation url={url} />
        </div>
      </div>
    </div>
  </Layout>
);
ProjectKnotel.propTypes = {
  url: PropTypes.object,
};
ProjectKnotel.defaultProps = {
  url: {},
};

export default ProjectKnotel;
