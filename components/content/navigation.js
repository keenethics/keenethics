import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

import ContentNavigationBackground from './background';

import { config } from '../../main.config';

export default class ContentNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.points = this.getPoints();

    this.getPoints = this.getPoints.bind(this);
  }
  getPoints() {
    const { url, points } = this.props;
    const currentPoints = {
      prev: {},
      current: {},
      next: {},
    };

    if (points && points.length) {
      points.forEach((navigation, i) => {
        const index = navigation.href === url.pathname ? i : -1;

        if (index > -1) {
          currentPoints.current = points[index];

          if (points[index + 1]) {
            currentPoints.next = points[index + 1];
          } else {
            currentPoints.next = points[0];
          }

          if (points[index - 1]) {
            currentPoints.prev = points[index - 1];
          } else {
            currentPoints.prev = points[points.length - 1];
          }
        }
      });
    }

    if (url && url.pathname) {
      config.navigation.forEach((navigation, i) => {
        if (navigation.points) {
          const index = navigation.points.map(point => point.href).indexOf(url.pathname);

          if (index > -1) {
            const currentNav = config.navigation[i].points;

            currentPoints.current = currentNav[index];

            if (currentNav[index + 1]) {
              currentPoints.next = currentNav[index + 1];
            } else {
              currentPoints.next = currentNav[0];
            }

            if (currentNav[index - 1]) {
              currentPoints.prev = currentNav[index - 1];
            } else {
              currentPoints.prev = currentNav[currentNav.length - 1];
            }
          }
        }
      });
    }

    return currentPoints;
  }
  render() {
    const { image } = this.props;

    return (
      <div className="content-navigation">
        <div className="content-navigation-inner">
          {!image || (
            <div className="content-navigation-image">
              <div className="content-navigation-image-inner">
                <img className="image-top" src={`/static/images/figures/${image}_top.png`} alt="" />
                <img className="image-bottom" src={`/static/images/figures/${image}_btm.png`} alt="" />
              </div>
            </div>
          )}
          <div className="content-navigation-carousel">
            <div className="content-navigation-carousel-inner">
              <Link href={this.points.prev.href}>
                <a className="content-navigation-carousel-link prev">
                  <div className="content">
                    <div className="name">{this.points.prev.name}</div>
                    <div className="description">{this.points.prev.description || ''}</div>
                  </div>
                </a>
              </Link>
              <Link href={this.points.current.href}>
                <a className="content-navigation-carousel-link current">
                  <div className="name">{this.points.current.name}</div>
                  <div className="description">{this.points.current.description || ''}</div>
                </a>
              </Link>
              <Link href={this.points.next.href}>
                <a className="content-navigation-carousel-link next">
                  <div className="content">
                    <div className="name">{this.points.next.name}</div>
                    <div className="description">{this.points.next.description || ''}</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <ContentNavigationBackground props={this.point} />
        </div>
      </div>
    );
  }
}

ContentNavigation.propTypes = {
  url: PropTypes.object,
  image: PropTypes.string,
  points: PropTypes.array,
};
ContentNavigation.defaultProps = {
  url: {},
  image: '',
  points: [],
};
