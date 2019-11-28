import React from 'react';

const Industries = () => (
  <div className="block block-industries">
    <header className="block--header">
      <div className="block--header-title">
        Industries We Serve
      </div>
      <div className="block--header-description">
        We strive to be industry experts bringing business value and boosting your
        competitive power.
      </div>
    </header>
    <div className="industries">
      <div className="grid">
        <div className="col-1-3">
          <div className="industries--big-item">
            <div className="industries--big-item-logo" />
            <div className="industries--big-item-title">
              Education
            </div>
            <div className="industries--big-item-description">
              Software development
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Industries;
