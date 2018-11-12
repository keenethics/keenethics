import Link from 'next/link';

import React from 'react';

import { config } from '../../main.config';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
    };

    this.showButtons = this.showButtons.bind(this);
  }
  showButtons() {
    this.setState({
      showButtons: true,
    });
  }
  render() {
    const { showButtons } = this.state;

    return (
      <ul className={showButtons ? 'open' : ''}>
        <li id="soc-btn" role="presentation" onClick={this.showButtons} onKeyDown={this.showButtons} />
        {config.social.map(i => (
          <li className={i.class} key={i.name}>
            <Link href={i.href}>
              <a rel="noopener noreferrer" target="_blank" title={i.name}>{i.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
