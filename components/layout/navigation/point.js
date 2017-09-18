import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class NavigationPoint extends React.Component {
  constructor(props) {
    super(props);

    this.renderPoint = this.renderPoint.bind(this);
    this.renderPointContent = this.renderPointContent.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.showSidebar !== nextProps.showSidebar) {
      this.setState({
        showChildren: nextProps.currentPoint && nextProps.showSidebar,
      });
    }
  }
  renderPoint() {
    const { href } = this.props.element;

    return href ? (
      <Link href={href} prefetch>
        <a className="navigation-point">{this.renderPointContent()}</a>
      </Link>
    ) : (
      <span className="navigation-point">
        {this.renderPointContent()}
      </span>
    );
  }
  renderPointContent() {
    const { name, icon, number, type } = this.props.element;

    switch (type) {
      case 'icon': return (
        <span className="navigation-cell">
          <span className="navigation-icon">
            <img src={`/static/images/svg/${icon.name || ''}.svg`} alt={icon.alt || ''} />
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
    if (!this.props.element.name) return null;

    const { children, height, currentPoint, currentSubpoint } = this.props;

    const className = cn({
      'navigation-item': true,
      current: currentPoint || currentSubpoint,
    });

    return (
      <li className={className} role="presentation" style={{ height }}>
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
    number: PropTypes.string,
    type: PropTypes.string,
  }),
  height: PropTypes.string,
  currentPoint: PropTypes.bool,
  currentSubpoint: PropTypes.bool,
  showSidebar: PropTypes.bool,
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
    number: '01',
    type: '',
  },
  height: '0px',
  currentPoint: false,
  currentSubpoint: false,
  showSidebar: false,
};
