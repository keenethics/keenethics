import React, { Component } from 'react';

/* eslint-disable */
export default class CalendlyIframe extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.classList.add('calendly-script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }
  componentWillUnmount() {
    document.querySelector('head .calendly-script').remove();
  }
  render() {
    return (
      <section style={{ marginTop: '60px' }}>
        <h2>Now, let’s discuss your business idea!</h2>
        <p>Schedule a call with our CEO Max Savonin.</p>
        <div className="calendly-inline-widget" data-url="https://calendly.com/keenethics/30min" style={{ height: '600px' }}></div>
      </section>
    )
  }
}
