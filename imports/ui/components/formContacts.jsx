import React from 'react';

export default class FormContacts extends React.Component {

  // contact form event
  onSubmit(e) {
    this.props.onSubmit(
      {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value 
      }
    )
  }

  render() {
    return (
      <form className="form-primary js-contact-form" onSubmit={this.onSubmit.bind(this)}>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your e-mail" />
        <textarea name="message" placeholder="Type here..."></textarea>
        <input type="submit" className="button -wide" value="Send" />
      </form>
    );
  }
}

FormContacts.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}
