import React from 'react';

export default class ListSocial extends React.Component {
  render() {
    return (
      <ul className="list-social row">
        <li className="list-social--item">
            <a href="https://www.upwork.com/o/companies/~0106b5437592391f94/" className="list-social--link">
              <img src="/images/social/upwork.svg" />
            </a>
        </li>
        <li className="list-social--item">
            <a href="https://www.facebook.com/KeenEthics.development" className="list-social--link">
              <img src="/images/social/fb.svg" />
            </a>
        </li>
        <li className="list-social--item">
            <a href="https://plus.google.com/103030720036135400511/about" className="list-social--link">
              <img src="/images/social/g+.svg" />
            </a>
        </li>
        <li className="list-social--item">
            <a href="https://twitter.com/keen_ethics" className="list-social--link">
              <img src="/images/social/twitter.svg" />
            </a>
        </li>
        <li className="list-social--item">
            <a href="https://github.com/keenethics" className="list-social--link">
              <img src="/images/social/git.svg" />
            </a>
        </li>
        <li className="list-social--item">
            <a href="https://blog.keenethics.com/" className="list-social--link">
              <img src="/images/social/medium.svg" />
            </a>
        </li>
      </ul>
    );
  }
}
