import React from 'react';
import _ from 'underscore';

import ListItem from './listItem.jsx';

export default class ListNews extends React.Component {

  renderListItems() {
    const listNews = [];
    if (typeof this.props.Posts !== 'undefined') {
      _.map(this.props.Posts, (post, index) => {
        listNews.push(
          <ListItem
            Posts={ post }
            key={ index }
          />
        );
      });
    } else {
      return null;
    }
    return listNews;
  }

  render() {
    return (
      <div>
        <div className="row list-news">
          <h5 className="-color-black -text-center">Fresh Events and News feed</h5>
        </div>
        <ul className="list-news row">
          { this.renderListItems() }
        </ul>
      </div>
    );
  }
}

ListNews.propTypes = {
  Posts: React.PropTypes.array.isRequired,
};
