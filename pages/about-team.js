/* eslint no-param-reassign: ["error", { "props": false }] */
/* global BACKEND_URL, fetch */

import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Ship from '../components/pages/about/ship-item';

import { spaceships } from '../main.config';

const splitTo = (arr, n) => {
  const plen = Math.ceil(arr.length / n);

  return arr.reduce((p, c, i) => {
    if (i % plen === 0) {
      p.push([]);
    }
    p[p.length - 1].push(c);

    return p;
  }, []);
};

const getSpaceships = team => team.map((t) => {
  const spaceship = spaceships[t.key];
  const numberOfShips = Math.ceil(t.people.length / spaceship.capacity);
  const parade = splitTo(t.people, numberOfShips);

  return parade.map(p => (
    p.map(worker => (<Ship
      key={nanoid()}
      ship={t}
      worker={worker}
    />))
  ));
});

export default class AboutTeam extends React.Component {
  static propTypes = {
    url: PropTypes.object,
    team: PropTypes.array,
  };

  static defaultProps = {
    url: {},
    team: [],
  };

  static getInitialProps = async () => {
    const res = await fetch(`${BACKEND_URL}/team`);
    const team = await res.json();
    return { team };
  };

  render() {
    const { url, team } = this.props;

    return (
      <Layout currentURL={url}>
        <div className="team-page page">
          <div className="team-page-content">
            <h1 className="team-page-title">Team <span>Astronaut office</span></h1>
            <div className="ships">
              <div className="ship-columns">
                {getSpaceships(team)}
              </div>
            </div>
          </div>
          <Background className="open-source-page-background" />
        </div>
      </Layout>
    );
  }
}
