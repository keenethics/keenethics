import React from 'react';
export default class ListItem extends React.Component {
  render() {
    return (
      <li className="col-xs-12 col-sm-6 col-md-3 list-news-item">
        <a href={ this.props.Posts.link }>
          <div className="news-container">
            <img src={ `${this.props.Posts.imageSrc}` } />
          </div>
          <div className="news-container">
            <p className="date-meetup">
              <span className={`-color-red ${this.props.Posts.service}`}>
                { this.props.Posts.authorName }
              </span>
              <span>{ `${this.props.Posts.publishedDate}, Lviv` }</span>
            </p>
            <h4> { this.props.Posts.title } </h4>
            <p> { this.props.Posts.subtitle } </p>

          </div>
        </a>
      </li>
    );
  }
}

ListItem.propTypes = {
  Posts: React.PropTypes.array.isRequired,
};
