import React from 'react';

export default class SlidePortfolio extends React.Component {

  renderJobs() {
    return this.props.jobs.map((value, index) => {
      <li className="slider-images--item"  itemscope itemtype="http://schema.org/WebSite" key={index}>
        <div className="slider-images--inner">
          <div className="slider-images--img" style="background-image: url({{value.imgPath}})">
          </div>
          <div className="slider-images--overlay"></div>
          <div className="slider-images--text-block">
            <div className="slider-images--headline" itemprop="name headline alternateName">
              {{value.name}}
            </div>
            <div className="slider-images--text" itemprop="about description">
              {{value.desc}}
            </div>
            <a href="{{value.url}}" className="slider-images--link" itemprop="url">
              <span itemprop="name headline alternateName">{{value.name}}</span>
              <span className="arrow-additional"></span>
            </a>
          </div>
        </div>
      </li>
    });
  }

  render() {
    return (
      <div className="slide slide-portfolio" id="slide-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title -text-center">
                <span className="-color-black">Our</span>
                <span className="-color-red">works.</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <ul className="slider-images js-slick-slide">
              {this.renderJobs()}
              <li className="slider-images--item -secondary">
                <div className="slider-images--inner">
                  <a href="#slide-5" className="slider-images--img" style="background-image: url(images/project-default.jpg)">
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

SlidePortfolio.propTypes = {
  jobs: React.PropTypes.array.isRequired
}
