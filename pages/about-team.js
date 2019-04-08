/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Ship from '../components/pages/about/ship-item';

import { spaceships, team } from '../main.config';

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
  state = {
    activeId: 'first',
  }

  setActiveId = activeId => this.setState({ activeId })

  getSpaceships = () => team.map((subteam) => {
    const spaceship = spaceships[subteam.key];
    const numberOfShips = Math.ceil(subteam.people.length / spaceship.capacity);
    const parade = splitTo(subteam.people, numberOfShips);

    return parade.map((p, index) => (
      p.map(worker => (<Ship
        key={`${worker.name}-${index}`}
        ship={subteam}
        worker={worker}
        isFirstItem={subteam.key === 'spaceship' && index === 0}
        id={`${worker.name}-${index}`}
        activeId={this.state.activeId}
        changeId={this.setActiveId}
      />))
    ));
  })

  render() {
    const { url } = this.props;

    return (
      <Layout currentURL={url}>
        <div className="team-page page">
          <div className="team-page-content">
            <h1 className="team-page-title">Team <span>Astronaut office</span></h1>
            <div className="ships">
              <div className="ship-columns">
                {this.getSpaceships()}
              </div>
            </div>
          </div>
          <Background className="open-source-page-background" />
        </div>
      </Layout>
    );
  }
}
AboutTeam.propTypes = {
  url: PropTypes.object,
};
AboutTeam.defaultProps = {
  url: {},
};
