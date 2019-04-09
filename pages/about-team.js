/* eslint no-param-reassign: ["error", { "props": false }] */
/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Ship from '../components/pages/about/ship-item';

import { spaceships } from '../main.config';

function splitTo(arr, n) {
  const plen = Math.ceil(arr.length / n);

  return arr.reduce((p, c, i) => {
    if (i % plen === 0) {
      p.push([]);
    }
    p[p.length - 1].push(c);

    return p;
  }, []);
}

export default class AboutTeam extends React.Component {
  static propTypes = {
    url: PropTypes.object,
    team: PropTypes.array,
  };

  static defaultProps = {
    url: {},
    team: [],
  };

  state = {
    activeId: 'first',
  }

  static getInitialProps = async () => {
    const response = await fetch(`${BACKEND_URL}/team-list`);
    const team = await response.json();
    return { team };
  };

  setActiveId = activeId => this.setState({ activeId })

  getSpaceships = (team = []) => team.map((worker, index) => (<Ship
    key={`${worker.name}-${index}`}
    worker={worker}
    isFirstItem={worker.key === 'spaceship' && index === 0}
    id={`${worker.name}-${index}`}
    activeId={this.state.activeId}
    changeId={this.setActiveId}
  />));

  render() {
    const { url, team } = this.props;

    return (
      <Layout currentURL={url}>
        <div className="team-page page">
          <div className="team-page-content">
            <h1 className="team-page-title">Team <span>Astronaut office</span></h1>
            <div className="ships">
              <div className="ship-columns">
                {this.getSpaceships(team)}
              </div>
            </div>
          </div>
          <Background className="open-source-page-background" />
        </div>
      </Layout>
    );
  }
}
