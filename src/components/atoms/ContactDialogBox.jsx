import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.form = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.validate = this.validate.bind(this);
    this.closeContact = this.closeContact.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keypress', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyDown, false);
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) this.closeContact();
  }

  closeContact() {
    const { toggleContactForm } = this.props;
    toggleContactForm();
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.validate();
    this.setState(() => ({ [name]: value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      email,
      message,
      formValid,
    } = this.state;
    if (formValid) {
      sendMessage(name, email, message);
      this.closeContact();
      this.setState(() => ({
        name: '',
        email: '',
        message: '',
        isValidated: false,
      }));
    }
  }

  validate() {
    this.setState(() => ({ formValid: this.form.current.checkValidity() }));
  }

  render() {
    let { openContact } = this.props;
    openContact = openContact ? 'open' : 'closed';
    const {
      name,
      email,
      message,
      formValid,
    } = this.state;
    return (
      <div className={`app__contact ${openContact}`}>
        <div className="app__dialog__box">
          <div className="app__close">
            <CloseSVG closeContact={this.closeContact} />
          </div>
          <h3 className="app__dialog__title">
            Thanks for taking the time to reach out. What can I do for you today?
          </h3>
          <form ref={this.form} className="app__form">
            <div className="app__form__row">
              <div className="app__form__control half">
                <input name="name" required onChange={this.handleChange} type="text" placeholder="Jane Doe" value={name} />
              </div>
              <div className="app__form__control half">
                <input name="email" required onChange={this.handleChange} type="email" placeholder="jane.doe@gmail.com" value={email} />
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
        <div className="app__overlay" role="button" tabIndex="0" onKeyDown={this.handleKeyDown} onClick={this.closeContact} />
      </div>
    );
  }
}

ContactDialogBox.propTypes = {
  toggleContactForm: PropTypes.func.isRequired,
  openContact: PropTypes.bool.isRequired,
};

export default ContactDialogBox;
