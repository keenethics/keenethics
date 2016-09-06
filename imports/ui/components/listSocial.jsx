import React from 'react';

export default class ListSocial extends React.Component {
  render() {
    return (
      <ul className="list-social row">
        <li className="list-social--item">
          <a href="https://www.upwork.com/o/companies/~0106b5437592391f94/">
            <img src="/images/social/upwork.svg" className="list-social--link" />
          </a>
        </li>
        <li className="list-social--item">
          <a href="https://www.facebook.com/KeenEthics.development">
            <img src="/images/social/fb.svg" className="list-social--link" />
          </a>
        </li>
        <li className="list-social--item">
          <a href="https://plus.google.com/103030720036135400511/about">
            <img src="/images/social/g+.svg" className="list-social--link" />
          </a>
        </li>
        <li className="list-social--item">
          <a href="https://twitter.com/keen_ethics">
            <img src="/images/social/twitter.svg" className="list-social--link" />
          </a>
        </li>
        <li className="list-social--item">
          <a href="https://github.com/keenethics">
            <img src="/images/social/git.svg" className="list-social--link" />
          </a>
        </li>
        <li className="list-social--item">
          <a href="https://blog.keenethics.com/">
            <img src="/images/social/medium.svg" className="list-social--link" />
          </a>
        </li>
        <li className="list-social--item">
          <a href="https://www.linkedin.com/company/keen-ethics">
            <img src="/images/social/linkedin.svg" className="list-social--link" />
          </a>
        </li>
      </ul>
    );
  }
}
