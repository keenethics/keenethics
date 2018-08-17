import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import EstimateForm from '../components/contacts/estimate-form';
import ContactForm from '../components/contacts/contact-form';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPending: false,
      status: '',
      activeContactForm: true,
    };

    this.onClick = this.onClick.bind(this);
  }
  onClick({ target }) {
    this.setState({ activeContactForm: target.name === 'contact-form-btn' });
  }
  render() {
    const { url } = this.props;
    const {
      activeContactForm,
      isPending,
      status,
    } = this.state;

    return (
      <Layout currentURL={url}>
        <div className="contacts-page">
          <div className="contacts-socket">
            <div className="title-page">
              <h1 className="title">Contact Us</h1>
            </div>
            <div className={activeContactForm ? 'contacts-block' : 'contacts-block estimate-block-background'} itemScope itemType="http://schema.org/Organization">
              <ul className="contacts-stars"><li /><li /><li /><li /></ul>
              {activeContactForm ? <div className="contacts-mail" /> : <div className="contacts-file" />}
              <button onClick={this.onClick} name="contact-form-btn" className={activeContactForm ? 'contacts-form-btn contact-form-btn' : 'contacts-form-btn contact-form-btn disabled'}>Say Hello</button>
              <button onClick={this.onClick} name="estimate-form-btn" className={!activeContactForm ? 'contacts-form-btn estimate-form-btn' : 'contacts-form-btn estimate-form-btn disabled'}>Estimate your project</button>
              <ul className="contacts-list">
                <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <a href="https://goo.gl/maps/yYJjPymkW7w" rel="noopener noreferrer" target="_blank">
                    <img width="15" src="/static/images/svg/con-map.svg" alt="" className="ico" />
                    <div itemProp="streetAddress">3 Lytvynenka Street</div>
                    <span><span itemProp="addressLocality" style={{ display: 'inline' }}>Lviv</span>, <span itemProp="addressRegion" style={{ display: 'inline' }}>Ukraine</span></span>
                  </a>
                </li>
                <li>
                  <a href="tel:+380968147266">
                    <img width="15" src="/static/images/svg/con-tel.svg" alt="" className="ico" />
                    <div itemProp="telephone">+38 (096) 814 72 66</div>
                    <span>Give Us a Call</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:founders@keenethics.com">
                    <img width="15" src="/static/images/svg/con-mail.svg" alt="" className="ico" />
                    <div>founders@keenethics.com</div>
                    <span>Drop Us a Letter</span>
                  </a>
                </li>
              </ul>
              { this.state.activeContactForm ? (
                <ContactForm
                  isPending={isPending}
                  status={status}
                  callback={state => this.setState(state)}
                />
              ) : (
                <EstimateForm
                  isPending={isPending}
                  status={status}
                  callback={state => this.setState(state)}
                />
              )}
            </div>
          </div>
          <Background />
        </div>
      </Layout>
    );
  }
}

Contacts.propTypes = {
  url: PropTypes.object,
};

Contacts.defaultProps = {
  url: {},
};
