/* global Skype */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import SocialButton from '../components/social-buttons/main';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsIsOpen: false,
    };
    this.onClick = this.onClick.bind(this);
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
  onClick() {
    this.setState({
      contactsIsOpen: !this.state.contactsIsOpen,
    });
  }
  render() {
    const { url } = this.props;
    const { contactsIsOpen } = this.state;

    return (
      <Layout currentURL={url}>
        <div className="home-page">
          <div className="tbl">
            <div className="cell">
              <div className="title-wrap">
                <p>
                  <a
                    href="https://www.upwork.com/agencies/~0106b5437592391f94"
                    className="title-u title-top"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Top rated Upwork agency
                  </a>
                </p>
                <a
                  href="https://clutch.co/profile/keenethics"
                  className="title-u title-top title-clutch"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  5-stars rated company at Clutch
                </a>

                <h1 className="title-main">
                  Ethical<br />
                  development<br />
                  of keen web-apps
                </h1>

                <div className="title-u">
                  You have a keen idea<span className="dash" />we have a keen approach
                </div>
              </div>
              <SocialButton />
            </div>
          </div>

          <div className="waves">
            <div className="wave wave-1" />
            <div className="wave wave-2" />
          </div>

          <div className={contactsIsOpen ? 'contacts open' : 'contacts'}>
            <div>
              <div className="contact-item">
                <div className="tbl ico">
                  <div className="cell">
                    <div className="ico-svg">
                      <img src="/static/images/svg/icon-map.svg" alt="" />
                    </div>
                  </div>
                </div>
                <a href="https://goo.gl/maps/yYJjPymkW7w" rel="noopener noreferrer" target="_blank">
                  3 Lytvynenka Street
                </a>
                <i>Lviv, Ukraine</i>
              </div>

              <div className="contact-item">
                <div className="tbl ico">
                  <div className="cell">
                    <div className="ico-svg">
                      <img src="/static/images/svg/icon-mail.svg" alt="" />
                    </div>
                  </div>
                </div>

                <a href={'mailto:founders@keenethics.com'}>founders@keenethics.com</a>
                <i>
                  Drop Us a Letter or
                  <div className="skype_button" id="SkypeButton_Call_hermannalexey_1" />
                </i>
              </div>

              <div className="contact-item">
                <div className="tbl ico">
                  <div className="cell">
                    <div className="ico-svg">
                      <img src="/static/images/svg/icon-tel.svg" alt="" />
                    </div>
                  </div>
                </div>

                <a href="tel:+380968147266">+38 (096) 814 72 66</a>
                <i>Give Us a Calls</i>
              </div>
            </div>

            <div
              className={contactsIsOpen ? 'contacts-st close' : 'contacts-st'}
              role="presentation"
              onClick={this.onClick}
            />
          </div>

          <div className="planet" />

          <div className="orbit-wrap">
            <ul className="orbit"><li /><li /><li /><li /></ul>
            <div className="orbit-star orbit-star-1">
              <span />
            </div>
            <div className="orbit-star orbit-star-2">
              <span />
            </div>
            <div className="orbit-star orbit-star-3">
              <span />
            </div>
            <div className="orbit-star orbit-star-4">
              <span />
            </div>
            <div className="orbit-star orbit-star-5">
              <span />
            </div>
          </div>

          <div className="stars-wrap">
            <div className="stars-1" />
            <div className="stars-2" />
            <div className="stars-3" />
            <div className="stars-4" />
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
