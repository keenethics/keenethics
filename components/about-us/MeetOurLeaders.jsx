import React from 'react';

const MeetOurLeaders = () => (
  <div className="meet-our-leaders">
    <div className="heading">
      <h1>Meet Our Leaders</h1>
      <p>
        The people who form our strategy aimed to pursue our business vision
      </p>
    </div>
    <div className="leaders">
      <div className="gallery">
        <figure>
          <div className="wrapper">
            <img src="../../static/images/about-us/max-savonin.jpg" alt="Max Savonin" />
            <div className="overlay">
              <a href="#">Send an email</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <figcaption>
            <h3>Max Savonin</h3>
            <p>Chief Executive Officer</p>
          </figcaption>
        </figure>
        <figure>
          <div className="wrapper">
            <img src="../../static/images/about-us/max-savonin.jpg" alt="Max Savonin" />
            <div className="overlay">
              <a href="#">Send an email</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <figcaption>
            <h3>Max Savonin</h3>
            <p>Chief Executive Officer</p>
          </figcaption>
        </figure>
      </div>
      <ul className="values-toggler">
        <li
          className="active"
        />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  </div>
);

export default MeetOurLeaders;
