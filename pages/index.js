/* global Skype */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import SocialButton from '../components/social-buttons/main';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    if (typeof Skype !== 'undefined') {
      Skype.ui({
        name: 'chat',
        element: 'SkypeButton_Call_hermannalexey_1',
        participants: ['hermannalexey'],
      });
    }
  }
  render() {
    const { url } = this.props;

    return (
      <Layout currentURL={url}>
        <div className="home-page">
          <div className="home-page-content">
            <div className="home-page-content-link">
              <a
                href="https://www.upwork.com/agencies/~0106b5437592391f94"
                className="link link-upwork"
                target="_blank"
                rel="noreferrer noopener"
              >
                Top rated Upwork agency
              </a>
            </div>
            <div className="home-page-content-link">
              <a
                href="https://clutch.co/profile/keenethics"
                className="link link-clutch"
                target="_blank"
                rel="noreferrer noopener"
              >
                5-stars rated company at Clutch
              </a>
            </div>
            <h1>Ethical<br />development<br />of keen web-apps</h1>
            <h2>You have a keen idea<span className="dash" />we have a keen approach</h2>
            <div className="home-page-content-contact">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <img src="/static/images/svg/icon-map.svg" alt="point" />
                </div>
                <a href="https://goo.gl/maps/yYJjPymkW7w" rel="noopener noreferrer" target="_blank">
                  3 Lytvynenka Street
                </a>
                <i>Lviv, Ukraine</i>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <img src="/static/images/svg/icon-mail.svg" alt="mail" />
                </div>
                <a href="mailto:founders@keenethics.com">founders@keenethics.com</a>
                <i>
                  Drop Us a Letter or
                  <div className="skype_button" id="SkypeButton_Call_hermannalexey_1" />
                </i>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <img src="/static/images/svg/icon-tel.svg" alt="phone" />
                </div>
                <a href="tel:+380968147266">+38 (096) 814 72 66</a>
                <i>Give Us a Calls</i>
              </div>
            </div>
          </div>
          <div className="home-page-social">
            <SocialButton />
          </div>
          <div className="home-page-background">
            <div className="home-page-background-inner">
              <div className="planet" />
              <div className="orbits">
                <div className="orbit" />
                <div className="orbit" />
                <div className="orbit" />
                <div className="orbit" />
              </div>
              <div className="stars">
                <div className="star-1" />
                <div className="star-2" />
                <div className="star-3" />
                <div className="star-4" />
              </div>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="https://secure.skypeassets.com/i/scom/js/skype-uri.js" />
      </Layout>
    );
  }
}

Index.propTypes = {
  url: PropTypes.object,
};

Index.defaultProps = {
  url: {},
};
