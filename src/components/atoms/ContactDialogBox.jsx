import React, { Component } from 'react';
import CloseSVG from './CloseSVG';

class ContactDialogBox extends Component {
  constructor(props) {
    super(props);
    this.closeContact = this.closeContact.bind(this);
  }

  closeContact() {
    this.props.toggleContactForm();
  }

  render() {
    const openContact = this.props.openContact ? 'open' : 'closed';
    return (
      <div className={`app__contact ${openContact}`}>
        <div className="app__dialog__box">
          <div className="app__close">
            <CloseSVG closeContact={this.closeContact} />
          </div>
          <h3 className="app__dialog__title">
            Thanks for taking the time to reach out. What can I do for you today?
          </h3>
          <div className="app__form">
            <div className="app__form__row">
              <div className="app__form__control half">
                <input type="text" placeholder="Jane Doe"/>
              </div>
              <div className="app__form__control half">
                <input type="email" placeholder="jane.doe@gmail.com"/>
              </div>
            </div>
            <div className="app__form__row ">
              <div className="app__form__control full">
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
              </div>
            </div>
            <div className="app__form__row full flex__end">
              <div className="app__form__control">
                <button type="submit" className="app__form__submit">Send Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="app__overlay"></div>
      </div>
    )
  }
}

export default ContactDialogBox;
