/* global fetch */

import 'whatwg-fetch';

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import HtmlParser from 'react-html-parser';

import Layout from '../components/layout/main';

import { config } from '../main.config';

export default class Careers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemIndex: 0,
      showApplyForm: false,
      sliderIsActive: false,
      firstname: {
        value: '',
        error: false,
      },
      lastname: {
        value: '',
        error: false,
      },
      position: {
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
      infinite: false,
      centerMode: true,
      dots: true,
      arrows: true,
      variableWidth: true,
      centerPadding: 0,
      className: 'career-slider',
      afterChange: this.sliderChange,
      initialSlide: this.state.activeItemIndex,
      init: this.sliderInit,
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
        >
          <img src={`/static/images/ships/${item.image}.svg`} className="size-2" alt="" />
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
    const { activeItemIndex, showApplyForm, isPending, firstname, lastname, message } = this.state;
    const { position, experience, description, image } = config.careers[activeItemIndex];

    return (
      <div className="career-block active">
        <div className="career-ship">
          <img className="size-2" src={`/static/images/ships/${image}.svg`} alt="" />
        </div>
        <div className="career-vac">{position}</div>
        <div className="title-s">{experience}</div>
        {showApplyForm || <div className="career-main text">{HtmlParser(description)}</div>}
        {!showApplyForm || (
          <div className="career-main form">
            <form onSubmit={this.onSubmit}>
              <div className="input-wrap">
                <input
                  className={firstname.error ? 'error' : null}
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-wrap input-wrap-l">
                <input
                  className={lastname.error ? 'error' : null}
                  name="lastname"
                  placeholder="Last Name"
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
              <button
                type="submit"
                className={isPending ? 'button button-send pending' : 'button button-send'}
              >
                Launch spaceship
              </button>
            </form>
          </div>
        )}
        {showApplyForm || (
          <button className="button" onClick={this.toggleApplyForm}>
            Apply
          </button>
        )}
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
    const { status } = this.state;

    return (
      <Layout currentURL={url}>
        <div className="content-wrap content-wrap-bg">
          <div className="orbit-wrap inner">
            <ul className="orbit"><li /><li /><li /><li /></ul>
            <div className="orbit-star orbit-star-1"><span /></div>
            <div className="orbit-star orbit-star-2"><span /></div>
            <div className="orbit-star orbit-star-3"><span /></div>
            <div className="orbit-star orbit-star-4"><span /></div>
          </div>
          <div className="stars-wrap">
            <div className="stars-1" />
            <div className="stars-2" />
            <div className="stars-3" />
            <div className="stars-4" />
          </div>
          <div className="content-socket-c">
            <div className="title-page">
              <div className="title">Careers</div>
              <div className="title-s">We’re hiring</div>
            </div>
            <div className="career-wrap">
              <div className={this.state.sliderIsActive ? 'slider-loaded' : 'loading-slider'}>
                <Slider ref={(s) => { this.slider = s; }} {...this.sliderSettings}>
                  {config.careers.map(item => (
                    <div key={item.position}>
                      <div className="career-ship">
                        <img className="size-2" src={`/static/images/ships/${item.image}.svg`} alt="" />
                      </div>
                      <span>{item.position}</span>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="career-items left">
                {this.getCareersItems(true)}
              </div>
              <div className="career-items right">
                {this.getCareersItems()}
              </div>
              <div className="career-window">
                <div className="figure-1" />
                <div className="figure-2" />
                {this.getCareersItem()}
              </div>
              {status ? (
                <div className="form-status">{status}</div>
              ) : null}
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
