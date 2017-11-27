/* global fetch */

import 'whatwg-fetch';

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import HtmlParser from 'react-html-parser';

import Background from '../components/content/background';

import Layout from '../components/layout/main';

import { config } from '../main.config';

export default class Careers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemIndex: 0,
      showApplyForm: false,
      sliderIsActive: false,
      name: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
      message: {
        value: '',
        error: false,
      },
      isPending: false,
      status: '',
    };

    this.getCareersItems = this.getCareersItems.bind(this);
    this.getCareersItem = this.getCareersItem.bind(this);
    this.itemClick = this.itemClick.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.sliderInit = this.sliderInit.bind(this);
    this.toggleApplyForm = this.toggleApplyForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.sliderSettings = {
      swipe: true,
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 3,
      afterChange: this.sliderChange,
      initialSlide: this.state.activeItemIndex,
      init: this.sliderInit,
      centerMode: true,
      responsive: [
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            draggable: true,
          },
        },
      ],
    };
  }
  onSubmit(e) {
    e.preventDefault();

    const { activeItemIndex } = this.state;

    const position = config.careers[activeItemIndex].position;

    this.setState({
      isPending: true,
    });

    const state = Object.assign(this.state, {
      position: {
        value: position,
        error: '',
      },
    });

    fetch('/careers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).then(response => response.json()).then((json) => {
      const responseState = {
        isPending: false,
        status: json.status.toString(),
      };

      if (json && json.errorField) {
        Object.assign(responseState, json.errorField);
      }

      this.setState(responseState);
    });
  }
  onChange({ target }) {
    this.setState({
      [target.name]: {
        value: target.value,
        error: '',
      },
    });
  }
  getCareersItems(even) {
    const { activeItemIndex } = this.state;

    return config.careers.reduce((acc, item, i) => {
      const element = (
        <div
          key={item.position}
          role="presentation"
          className={activeItemIndex === i ? 'career-item active' : 'career-item'}
          onClick={() => this.itemClick(i)}
          onKeyDown={() => this.itemClick(i)}
        >
          <img src={`/static/images/ships/${item.image}.svg`} className="size-2" alt="Ship" />
          <span>{item.position}</span>
        </div>
      );
      if (even && i % 2 === 0) {
        acc.push(element);
      }
      if (!even && i % 2 !== 0) {
        acc.push(element);
      }

      return acc;
    }, []);
  }
  getCareersItem() {
    const {
      activeItemIndex,
      showApplyForm,
      isPending,
      name,
      email,
      message,
      status,
    } = this.state;
    const { position, experience, description } = config.careers[activeItemIndex];

    return (
      <div className="careers-page-position-inner">
        <div className="career-position">{position}</div>
        <div className="career-experience">{experience}</div>
        {!showApplyForm ? (
          <div className="career-description">
            {HtmlParser(description)}
          </div>
        ) : (
          <div className="career-form">
            <form onSubmit={this.onSubmit}>
              <div className="input-wrap">
                <input
                  className={name.error ? 'error' : null}
                  name="name"
                  placeholder="Your Fullname"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-wrap">
                <input
                  className={email.error ? 'error' : null}
                  name="email"
                  placeholder="Email"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-wrap">
                <textarea
                  className={message.error ? 'error' : null}
                  name="message"
                  placeholder="Why you?"
                  onChange={this.onChange}
                />
              </div>
              {!status || <div className="career-form-status">{status}</div>}
              <button
                type="submit"
                className={isPending ? 'button button-send pending' : 'button button-send'}
              >
                Launch spaceship
              </button>
            </form>
          </div>
        )}
        {showApplyForm || <button className="button" onClick={this.toggleApplyForm}>Apply</button>}
      </div>
    );
  }
  itemClick(activeItemIndex) {
    this.slider.slickGoTo(activeItemIndex);

    this.setState({
      activeItemIndex,
    });
  }
  sliderChange(activeItemIndex) {
    this.setState({
      activeItemIndex,
      showApplyForm: false,
    });
  }
  sliderInit() {
    this.setState({
      sliderIsActive: true,
    });
  }
  toggleApplyForm() {
    this.setState({
      showApplyForm: !this.state.showApplyForm,
    });
  }
  render() {
    const { url } = this.props;
    const { sliderIsActive, activeItemIndex } = this.state;

    if (this.slider && !activeItemIndex) {
      this.slider.slickGoTo(0);
    }

    return (
      <Layout currentURL={url}>
        <div className="careers-page">
          <div className="careers-page-header">
            <h1 className="title">Careers<span>We’re hiring</span></h1>
            <Background className="careers-page-background" />
          </div>
          <div className="careers-page-content">
            <div className={sliderIsActive && this.slider ? 'careers-page-slider' : 'careers-page-slider loading'}>
              <Slider ref={(s) => { this.slider = s; }} {...this.sliderSettings}>
                {config.careers.map(item => (
                  <div className="careers-page-slider-ship" key={item.position}>
                    <div className="careers-page-slider-ship-img">
                      <img src={`/static/images/ships/${item.image}.svg`} className={item.image} alt={item.position} />
                    </div>
                    <span>{item.position}</span>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="careers-page-position">
              {this.getCareersItem()}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Careers.propTypes = {
  url: PropTypes.object,
};

Careers.defaultProps = {
  url: {},
};
