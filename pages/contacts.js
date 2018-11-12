import 'whatwg-fetch';

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import ContactForm from '../components/contact/contact-form';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: {
        value: '',
        error: false,
      },
      lastname: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
      phone: {
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

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      isPending: true,
    });

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then(response => response.json()).then((json) => {
      const state = {
        isPending: false,
        status: json.status.toString(),
      };

      if (json && json.errorField) {
        Object.assign(state, json.errorField);
      }

      this.setState(state);
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
  render() {
    const { url } = this.props;

    return (
      <Layout currentURL={url}>
        <div className="contacts-page">
          <div className="contacts-conteiner">
            <div className="contacts-title">
              <h1 className="title-text">Contact Us</h1>
            </div>
            <div className="contacts-content" itemScope itemType="http://schema.org/Organization">
              <ul className="contacts-stars"><li /><li /><li /><li /></ul>
              <ul className="company-info">
                <li className="company-info-item" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <a className="company-info-link" href="https://goo.gl/maps/eaAU8qqLZoo" rel="noopener noreferrer" target="_blank">
                    <img width="15" src="/static/images/svg/con-map.svg" alt="" className="ico" />
                    <p className="company-info-title" itemProp="streetAddress">Kulparkivska St, 59</p>
                    <span className="company-info-subtitle"><span itemProp="addressLocality" style={{ display: 'inline' }}>Lviv</span>, <span itemProp="addressRegion" style={{ display: 'inline' }}>Ukraine</span></span>
                  </a>
                </li>
                <li className="company-info-item">
                  <a className="company-info-link" href="tel:+380968147266">
                    <img width="15" src="/static/images/svg/con-tel.svg" alt="" className="ico" />
                    <p className="company-info-title" itemProp="telephone">+38 (096) 814 72 66</p>
                    <span className="company-info-subtitle">Give Us a Call</span>
                  </a>
                </li>
                <li className="company-info-item">
                  <a className="company-info-link" href="mailto:founders@keenethics.com">
                    <img width="15" src="/static/images/svg/con-mail.svg" alt="" className="ico" />
                    <p className="company-info-title">founders@keenethics.com</p>
                    <span className="company-info-subtitle">Drop Us a Letter</span>
                  </a>
                </li>
              </ul>
              <div className="contacts-form-container">
                <div className="contacts-form-background" />
                <div className="contacts-mail" />
                <ContactForm />
              </div>
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
