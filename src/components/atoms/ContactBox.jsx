import React from 'react';
import PropTypes from 'prop-types';

const ContactBox = (props) => {
  const toggleContactForm = () => {
    props.toggleContactForm();
  };

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
        <button onClick={toggleContactForm} type="button">Say Hello</button>
      </div>
    </div>
  );
};

ContactBox.propTypes = {
  toggleContactForm: PropTypes.func.isRequired,
};

export default ContactBox;
