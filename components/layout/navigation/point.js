import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class NavigationPoint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showChildren: props.currentPoint && props.showSidebar,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
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
  onMouseOver() {
    if (this.state.showChildren) {
      return;
    }
    if (!this.props.children) {
      return;
    }

    this.setState({
      showChildren: true,
    });
  }
  onMouseOut() {
    if (this.props.currentPoint) {
      return;
    }
    if (!this.props.children) {
      return;
    }

    this.setState({
      showChildren: false,
    });
  }
  renderPoint() {
    const { href, type } = this.props.element;

    if (href) {
      const attr = {
        className: 'point',
      };

      if (type && type === 'number') {
        attr.rel = 'noopener noreferrer';
        attr.target = '_blank';
      }
      return (
        <Link href={href} prefetch>
          {React.createElement('a', attr, this.renderPointContent())}
        </Link>
      );
    }

    return (
      <span className="point">
        {this.renderPointContent()}
      </span>
    );
  }
  renderPointContent() {
    const { name, icon, number, type } = this.props.element;

    switch (type) {
      case 'icon': return (
        <span className="cell">
          <span className="menu-ico sz-1 svg">
            <img src={`/static/images/svg/${icon.name || ''}.svg`} alt={icon.alt || ''} />
          </span>
          <span className="menu-sub-nm">
            {name}
          </span>
        </span>
      );
      case 'number': return (
        <span className="cell">
          <i>{number}</i>
          <span className="menu-sub-nm">
            {name}
          </span>
        </span>
      );
      default: return (
        <span className="cell">
          <span className="menu-nm-wrap">
            <span className="menu-bg" />
            <span className="menu-nm">{name}</span>
          </span>
        </span>
      );
    }
  }
  render() {
    if (!this.props.element.name) return null;

    const { children, height, currentPoint, currentSubpoint } = this.props;
    const { showChildren } = this.state;

    const className = cn({
      current: currentPoint || currentSubpoint,
      'show-children': showChildren,
    });

    return (
      <li
        className={className}
        role="presentation"
        style={{ height }}
        onMouseEnter={this.onMouseOver}
        onMouseLeave={this.onMouseOut}
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
