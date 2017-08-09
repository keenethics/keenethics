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
          <div className="content-wrap">
            <div className="slide-block main">
              <div className="tbl">
                <div className="cell">
                  <div className="title-wrap">
                    <div className="title-u title-top">
                      TOP RATED UPWORK AGENCY
                    </div>

                    <div className="title-main">
                      ETHICAL <br />
                      DEVELOPMENT <br />
                      OF KEEN WEB-APPS
                    </div>

                    <div className="title-u">
                      YOU HAVE A KEEN IDEA <span className="dash" /> WE HAVE A KEEN APPROACH
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

                    <span>3 Lytvynenka Street</span>
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

                    <span>+38 (096) 814 72 66</span>
                    <i>Give Us a Call</i>
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
          </div>
        </div>
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
