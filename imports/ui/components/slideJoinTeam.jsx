import React from 'react';

export default class SlideJoinTeam extends React.Component {
  render () {
    return (
      <div className="slide slide-team" id="slide-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span className="-color-black">Join </span>
                <span className="-color-red">Keen team.</span>
              </h3>
            </div>
            <div className="col-xs-12">
              <h2>В нашей компании сейчас открыты такие вакансии:</h2>
              <ul id="work-jobs-list" data-id="738548" data-lang="ru"></ul>
              <p><a href="https://www.work.ua/jobs/by-company/738548/#open-jobs" target="_blank">Все вакансии компании «Keenethics»</a>
              на <a href="https://www.work.ua/" target="_blank">Work.ua</a></p>
              <script src="https://www.work.ua/export/company/get_jobs_list.js" type="text/javascript"></script>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
