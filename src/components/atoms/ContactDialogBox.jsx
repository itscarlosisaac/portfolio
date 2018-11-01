import React, { Component } from 'react';
import CloseSVG from './CloseSVG';
import { sendMessage } from '../../data/Firebase';

class ContactDialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.closeContact = this.closeContact.bind(this);
  }

  closeContact() {
    this.props.toggleContactForm();
  }

  handleChange(e) {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.validate();
    this.setState((prev) => {
      return { [field]: value};
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message, formValid } = this.state;
    if ( formValid ) {
      sendMessage(name, email, message);
      this.closeContact();
      this.setState(() => {
        return { name: '', email: '', message: '', isValidated: false };
      });
    }
  }

  validate() {
    this.setState((prev) => {
      return { formValid: this.form.checkValidity() };
    });
  }

  render() {
    const openContact = this.props.openContact ? 'open' : 'closed';
    const { name, email, message, formValid } = this.state;
    return (
      <div className={`app__contact ${openContact}`}>
        <div className="app__dialog__box">
          <div className="app__close">
            <CloseSVG closeContact={this.closeContact} />
          </div>
          <h3 className="app__dialog__title">
            Thanks for taking the time to reach out. What can I do for you today?
          </h3>
          <form ref={form => this.form = form} className="app__form">
            <div className="app__form__row">
              <div className="app__form__control half">
                <input name="name" required onChange={this.handleChange} type="text" placeholder="Jane Doe" value={name} />
              </div>
              <div className="app__form__control half">
                <input name="email" required  onChange={this.handleChange} type="email" placeholder="jane.doe@gmail.com" value={email} />
              </div>
            </div>
            <div className="app__form__row ">
              <div className="app__form__control full">
                <textarea name="message" onChange={this.handleChange} id="message" cols="30" rows="10" placeholder="Message" value={message} required />
              </div>
            </div>
            <div className="app__form__row full flex__end">
              <div className="app__form__control">
                <button type="submit" onClick={this.handleSubmit} className="app__form__submit" disabled={!formValid}>Send Message</button>
              </div>
            </div>
          </form>
        </div>
        <div className="app__overlay" onClick={this.closeContact}></div>
      </div>
    )
  }
}

export default ContactDialogBox;
