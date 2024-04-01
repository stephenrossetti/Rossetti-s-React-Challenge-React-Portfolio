// Import React and also useState to utilize functionality to set a state variable //
// Also import validate email regular expression for email input //
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Form() {
  // Create state variables for the fields in the form //
  // We are also setting their initial values to an empty string //
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // This is a useState to have an error message pop-up if user does not input name or email //
  const [errorMessageField, setErrorMessageField] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change //
    const { name, value } = e.target;
    // Based on the input type, we set the state of either email, name or message //
    if (name === 'email') setEmail(value);
    else if (name === 'name') setName(value);
    else if (name === 'message') setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page) //
    e.preventDefault();
    setErrorMessage('');

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page. //
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it //
      return;
    }

    // Simulate form submission by logging the inputs //
    console.log(`Submitted Form:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `);

    // If everything goes according to plan, we want to clear out the input after a successful registration. //
    setName('');
    setEmail('');
    setMessage('');
  };

  // Add function to have error message pop up if field is empty //
  const handleInputBlur = (e) => {
    const { name, value } = e.target;

    // Check if the field is empty and show error message //
    if (!value) {
      setErrorMessage(`Your ${name} is required`);
      setErrorMessageField(name);
    } else {
      // Clear error message if field is not empty //
      setErrorMessage('');
      setErrorMessageField('');
    }
  };

  // Standard JSX html for form submission. Utilized class activities as template //
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