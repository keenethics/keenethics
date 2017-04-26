import React from 'react';
import ListNews from './listNews';

export default class SlideNews extends React.Component {
  render() {
    return (
      <div className="slide slide-partners" id="slide-6">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span className="-color-black">Keen </span>
                <span className="-color-red">news.</span>
              </h3>
            </div>
          </div>
          <ListNews Posts={this.props.Posts} />
        </div>
      </div>
    );
  }
}

SlideNews.propTypes = {
  Posts: React.PropTypes.array.isRequired,
};
