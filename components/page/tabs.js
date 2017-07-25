import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

const PageTabsElement = ({ href, name, tabsDescription, icon }) => (
  <li>
    <Link href={href}>
      <a>
        <div className="inner">
          {tabsDescription ? (
            <div className="ico">
              <div className="tbl">
                <div className="cell">
                  <img width="53" src={`/static/images/svg/${icon}.svg`} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <div className="tbl">
              <div className="cell">
                <img width="53" src={`/static/images/svg/${icon}.svg`} alt="" />
              </div>
            </div>
          )}
          {!tabsDescription || (
            <span>
              <span className="ttl">{name}</span>
              <span className="ttl-s">{tabsDescription}</span>
            </span>
          )}
        </div>
        {!tabsDescription ? <div className="icon-name">{name}</div> : null}
      </a>
    </Link>
  </li>
);

PageTabsElement.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  tabsDescription: PropTypes.string,
  icon: PropTypes.string,
};

PageTabsElement.defaultProps = {
  href: '',
  name: '',
  tabsDescription: '',
  icon: '',
};

const PageTabs = ({ points, withDescription }) => (
  <div className="icon-wrap">
    <Draggable
      axis="x"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
    >
      <ul className={withDescription ? 'icon-row icon-d-row' : 'icon-row'}>
        {points.map(element => (
          <PageTabsElement
            key={element.name}
            href={element.href}
            name={element.name}
            tabsDescription={element.tabsDescription || ''}
            icon={element.icon}
          />
        ))}
      </ul>
    </Draggable>
  </div>
);

PageTabs.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object),
  withDescription: PropTypes.bool,
};

PageTabs.defaultProps = {
  points: [],
  withDescription: false,
};

export default PageTabs;
