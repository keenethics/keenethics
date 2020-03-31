import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class NavigationPoint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.renderPoint = this.renderPoint.bind(this);
    this.renderPointContent = this.renderPointContent.bind(this);
    this.toggleSubpoints = this.toggleSubpoints.bind(this);
  }

  toggleSubpoints() {
    const { isExpanded } = this.state;

    this.setState({
      isExpanded: !isExpanded,
    });
  }

  renderPoint() {
    const {
      element: {
        href,
        points,
      },
      isBurgerMenu,
    } = this.props;

    if (!points && href) {
      return (
        <Link href={href} prefetch={false}>
          <a
            className="navigation-point"
            onClick={this.props.closeSidebar}
            onKeyDown={this.props.closeSidebar}
            role="presentation"
          >
            {this.renderPointContent()}
          </a>
        </Link>
      );
    }

    return href && !isBurgerMenu ? (
      <Link href={href} prefetch={false}>
        <a className="navigation-point">
          {this.renderPointContent()}
        </a>
      </Link>
    ) : (
      <span
        className="navigation-point"
        onClick={this.toggleSubpoints}
        role="presentation"
      >
        {this.renderPointContent()}
      </span>
    );
  }

  renderPointContent() {
    const {
      element: {
        name,
        icon,
        number,
        type,
      },
    } = this.props;

    switch (type) {
      case 'icon': return (
        <span className="navigation-cell">
          <span className="navigation-icon">
            <img
              src={`/static/images/svg/${icon.name || ''}.svg`}
              width="30px"
              height="30px"
              alt={icon.alt || ''}
            />
          </span>
          {name}
        </span>
      );
      case 'number': return (
        <span className="navigation-cell">
          <i>{number}</i>
          <span className="menu-sub-nm">
            {name}
          </span>
        </span>
      );
      default: return (
        <span className="navigation-cell">{name}</span>
      );
    }
  }

  render() {
    const {
      element: {
        name,
        points,
      },
    } = this.props;

    const { isExpanded } = this.state;

    if (!name) return null;

    const {
      children,
      currentPoint,
      currentSubpoint,
    } = this.props;

    const className = cn({
      'navigation-item': true,
      current: currentPoint || currentSubpoint,
      expanded: isExpanded,
      'is-link': !children,
      points,
    });

    return (
      <li
        className={className}
        role="presentation"
      >
        {this.renderPoint()}
        {children}
      </li>
    );
  }
}

NavigationPoint.propTypes = {
  children: PropTypes.element,
  element: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.shape({
      name: PropTypes.string,
      alt: PropTypes.string,
    }),
    points: PropTypes.array,
    number: PropTypes.string,
    type: PropTypes.string,
  }),
  currentPoint: PropTypes.bool,
  currentSubpoint: PropTypes.bool,
  isBurgerMenu: PropTypes.bool,
  closeSidebar: PropTypes.func,
};
NavigationPoint.defaultProps = {
  children: null,
  element: {
    name: '',
    href: '',
    icon: {
      name: '',
      alt: '',
    },
    points: null,
    number: '01',
    type: '',
  },
  currentPoint: false,
  currentSubpoint: false,
  isBurgerMenu: false,
  closeSidebar: null,
};
