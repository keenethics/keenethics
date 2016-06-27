import React from 'react';

export default class ListIconsTechnologies extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <ul className="list-icons row" id="icon-list">
          <li className="list-icons--item">
              <span className="list-icons--span -node"></span>
          </li>
          <li className="list-icons--item">
              <span className="list-icons--span -meteor"></span>
          </li>
          <li className="list-icons--item -angular">
              <span className="list-icons--span -angular"></span>
          </li>
          <li className="list-icons--item -react">
              <span className="list-icons--span -react"></span>
          </li>
          <li className="list-icons--item -mean">
              <span className="list-icons--span -mean"></span>
          </li>
        </ul>
      </div>
    );
  }
}
