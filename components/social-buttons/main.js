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
        {config.social.map((i) => (
          <li className={i.class} key={i.name}>
            <a href={i.href} target="_blank" rel="noopener noreferrer" title={i.name}>
              {i.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
