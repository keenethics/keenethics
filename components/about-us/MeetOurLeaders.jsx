import React from 'react';
import LeadersMobile from './LeadersMobile';
import LeadersDesktop from './LeadersDesktop';

import leadersData from '../../data/leaders';

const MeetOurLeaders = () => (
  <div className="meet-our-leaders">
    <div className="heading">
      <h1>Meet Our Leaders</h1>
      <p>
        The people who form our strategy aimed to pursue our business vision
      </p>
    </div>
    <div className="leaders">
      <LeadersMobile data={leadersData} />
      <LeadersDesktop data={leadersData} />
    </div>
  </div>
);

export default MeetOurLeaders;
