import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const src = this.props.Posts.virtuals.previewImage.imageId ?
      `https://cdn-images-1.medium.com/max/500/${this.props.Posts.virtuals.previewImage.imageId}` : '/images/news/1.png';
    return (
      <li className="col-xs-12 col-sm-6 col-md-3 list-news-item">
        <a href={`https://blog.keenethics.com/${this.props.Posts.uniqueSlug}?source=latest`}>
          <div className="minHei">
            <img src={`${src}`} />
          </div>
          <div className="minHei">
            <p className="date-meetup">
              <span className="-color-red meetup">
                {this.props.Users[this.props.Posts.creatorId].name}
              </span>
              <span>{`${this.props.Posts.virtuals.firstPublishedAtEnglish}, Lviv`}</span>
            </p>
            <h4> { this.props.Posts.title } </h4>
            <p> { this.props.Posts.virtuals.subtitle } </p>
          </div>
        </a>
      </li>
    );
  }
}

ListItem.propTypes = {
  Posts: React.PropTypes.object.isRequired,
  Users: React.PropTypes.object.isRequired,
};
