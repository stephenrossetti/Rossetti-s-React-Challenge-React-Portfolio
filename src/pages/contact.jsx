import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'userName') setUserName(value);
    else if (name === 'message') setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    // Simulate form submission by logging the inputs
    console.log(`Submitted Form:
      Name: ${userName}
      Email: ${email}
      Message: ${message}
    `);

    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Contact Me</h2>
      </div>

      <div className="contact-info">
        <div>
        <h3>Hello {userName ? userName : 'Friend'}</h3>
          <p>Want to get into contact?</p>
          <address>
            Minneapolis, MN <br />
            P: <a href="tel:603.459.5113">603.459.5113</a>
            <br />
            E: <a href="mailto://rossettistephen@gmail.com">rossettistephen@gmail.com</a>
          </address>
          <p>
            <strong>I'd love to hear your feedback!</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form" onSubmit={handleFormSubmit}>
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

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
        {errorMessage && <div><p className="error-text">{errorMessage}</p></div>}
      </div>
    </section>
  );
}