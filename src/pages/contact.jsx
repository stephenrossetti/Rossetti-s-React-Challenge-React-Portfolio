import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageField, setErrorMessageField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'name') setName(value);
    else if (name === 'message') setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    // Simulate form submission by logging the inputs
    console.log(`Submitted Form:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `);

    setName('');
    setEmail('');
    setMessage('');
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;

    // Check if the field is empty and show error message
    if (!value) {
      setErrorMessage(`Your ${name} is required`);
      setErrorMessageField(name);
    } else {
      // Clear error message if field is not empty
      setErrorMessage('');
      setErrorMessageField('');
    }
  };

  return (
    <section id="contact-me" className="contact">
      <div className="flex-row">
        <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="contact-info">
        <div className="contact-address">
          <h3>Hello {name ? name : '(Friend)'}</h3>
          <p>Are you looking to connect?</p>
          <address>
            Minneapolis, MN <br />
            Cell: <a href="tel:603.459.5113">(603) 459-5113</a>
            <br />
            Email: <a href="mailto://rossettistephen@gmail.com">rossettistephen@gmail.com</a>
          </address>
          <p>
            <strong>Also feel free to fill out the form!</strong>
          </p>
        </div>
        <div className="contact-form">
          <h3>Send Me a Note</h3>
          <form className="form" onSubmit={handleFormSubmit}>
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />
            {errorMessage && errorMessageField === "name" && <p className="error-message" style={{ color: "red", fontStyle: "italic", fontSize: "14px" }}>{errorMessage}</p>}
            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />
             {errorMessage && errorMessageField === "email" && <p className="error-message" style={{ color: "red", fontStyle: "italic", fontSize: "14px" }}>{errorMessage}</p>}
            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}