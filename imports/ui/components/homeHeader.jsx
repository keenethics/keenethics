import React from 'react';

export default class HomeHeader extends React.Component {
  render() {
    return (
  <header className="header" id="header" role="banner">
    <div className="container js-scroll-spy">
      <div className="row login-buttons">
        <div className='col-xs-12 button'>
          <div className="glyphicon glyphicon-lock" id="login-lock"></div>
        </div>
      </div>
      <div className="row">
        <h1 className="header--logo col-xs-12">
          <a href="#" className="header--logo-link" title="Keenethics: Advanced Web Development Services">
            <span>Keen</span>
            <span className="-color-red">.</span>
            <span>Ethics</span>
          </a>
        </h1>
      </div>
      <div className="header--content row">
        <div className="col-xs-12">
          <h2 className="header--title title -big">
            <span className="-color-red">Ethical</span> development <br/> of <span className="-color-red">keen</span> web-apps.
          </h2>
        </div>
      </div>
      <a href="#icon-list" className="header--arrow" title="Down">
        <div className="header--arrow-inner">
          <div className="header--arrow-triangle"></div>
          <div className="header--arrow-square"></div>
        </div>
      </a>
      {/*{> _listNavigation }*/}
    </div>
    <div className="stars-underlay"></div>
  </header>
);
  }
}

