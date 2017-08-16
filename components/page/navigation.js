import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';

import { config } from '../../main.config';

export default class PageNavigation extends React.Component {
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
    const { image, title } = this.props;

    return (
      <div className={title ? 'slide-block with-menu-title' : 'slide-block'}>
        <div className="slide-block-inner">
          {!image || (
            <div className="figure-wrap">
              <div className="tbl">
                <div className="cell">
                  <div className="figure">
                    <img className="f-top" src={`/static/images/figures/${image}_top.png`} alt="" />
                    <img className="f-btm" src={`/static/images/figures/${image}_btm.png`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {!title || (
            <div className="slide-menu-title">
              <span>{title}</span>
            </div>
          )}
          <div className="tbl">
            <div className="cell">
              <div className="slide-navigation">
                <Link href={this.points.prev.href}>
                  <a className="slide-title slide-title-nav prev">
                    <div className="title">{this.points.prev.name}</div>
                    <div className="title-s">{this.points.prev.description || ''}</div>
                  </a>
                </Link>
                <Link href={this.points.current.href}>
                  <a className="slide-title current">
                    <h1 className="title">{this.points.current.name}</h1>
                    <div className="title-s">{this.points.current.description || ''}</div>
                  </a>
                </Link>
                <Link href={this.points.next.href}>
                  <a className="slide-title slide-title-nav next">
                    <div className="title">{this.points.next.name}</div>
                    <div className="title-s">{this.points.next.description || ''}</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="orbit-wrap inner">
            <ul className="orbit"><li /><li /><li /><li /></ul>
            <div className="orbit-star orbit-star-1"><span /></div>
            <div className="orbit-star orbit-star-2"><span /></div>
            <div className="orbit-star orbit-star-3"><span /></div>
            <div className="orbit-star orbit-star-4"><span /></div>
          </div>
          <div className="stars-wrap">
            <div className="stars-1" />
            <div className="stars-2" />
            <div className="stars-3" />
            <div className="stars-4" />
          </div>
        </div>
      </div>
    );
  }
}

PageNavigation.propTypes = {
  url: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  points: PropTypes.array,
};

PageNavigation.defaultProps = {
  url: {},
  image: '',
  title: '',
  points: [],
};
