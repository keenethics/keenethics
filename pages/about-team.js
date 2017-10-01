/* global document */
/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Ship from '../components/pages/about/ship-item';

import { spaceships, superteam, team } from '../main.config';

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
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      name: '',
      position: '',
      description: '',
      pos_x: '',
      pos_y: '',
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.getSpaceships = this.getSpaceships.bind(this);
    this.getSupership = this.getSupership.bind(this);
  }
  onMouseOver(e) {
    const { img, name, pos, desc } = e.currentTarget.dataset;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    let posX = left - 95;
    const posY = (top + 24) - bodyRect.top;

    if (document.body.clientWidth <= 767) {
      posX = (document.body.clientWidth / 2) - 145;
    }

    this.setState({
      image: img,
      name,
      position: pos,
      description: desc,
      pos_x: posX,
      pos_y: posY,
      show: true,
    });
  }
  onMouseOut() {
    this.setState({
      show: false,
    });
  }
  getSupership() {
    return (
      <div className="ship-column">
        <div className="ship main">
          <img src="/static/images/ships/spaceship.svg" alt="" />
          {superteam.map((worker, i) => (
            <div key={worker.name} className={`worker worker-${i}`} data-img={worker.avatar} data-name={worker.name} data-pos="QA" data-desc={worker.descriptio}>
              <div className="point-flash">
                <span
                  onMouseOver={this.onMouseOver}
                  onMouseOut={this.onMouseOut}
                  data-img={worker.avatar}
                  data-name={worker.name}
                  data-pos={worker.position}
                  data-desc={worker.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  getSpaceships() {
    return team.map((t) => {
      const spaceship = spaceships[t.key];
      const numberOfShips = Math.ceil(t.people.length / spaceship.capacity);
      const parade = splitTo(t.people, numberOfShips);

      return parade.map(p => (
        p.map(worker => <Ship key={nanoid()} ship={t} worker={worker} />)
      ));
    });
  }
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
