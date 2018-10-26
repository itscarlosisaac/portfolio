import React from 'react';

const ContactBox = (props) => {
  return (
    <div className="app__contact__box">
      <div className="app__contact__box__info">
        <h1>
          Interested on working
          <span className="no-break-text"> with me?</span>
        </h1>
        <h3>or just want to say hello.</h3>
      </div>
      <div className="app__contact__box__action">
        <button type="button">Say Hello</button>
      </div>
    </div>
  );
};

export default ContactBox;
