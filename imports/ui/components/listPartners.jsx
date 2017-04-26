import React from 'react';

export default class ListPartners extends React.Component {
  render() {
    return (
      <ul className="list-partners row">
        <li className=" col-xs-6 col-sm-3">
          <img src="/images/partners/meteor-official.png" />
        </li>
        <li className="col-xs-6 col-sm-3">
          <img src="/images/partners/jssolutions.png" />
        </li>
        <li className="col-xs-6 col-sm-3">
          <img src="/images/partners/azinec.png" />
        </li>
        <li className="col-xs-6 col-sm-3">
          <img src="/images/partners/Image_from_Skype.jpg" />
        </li>
      </ul>
    );
  }
}
