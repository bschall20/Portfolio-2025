import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();

  const [success, setSuccess] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        },
      );
  };

  return (
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="fullName" name="from_name" placeholder="Name" required/><br />
        <input type="email" className="email" name="from_email" placeholder="Email" required/><br />
        {/* <input type="text" id="message" name="message" placeholder="Message"/> */}
        <textarea className="message" name="message" rows="6" maxLength="3000" placeholder="Message" required />
        <button type="submit" value="Send" className="contactMeBtn sendMessageBtn">Send Message</button>
        {success === true ? <p className="successMessage">Message Successfully Sent!</p> : null }
        {success === false ? <p className="errorMessage">Message did not send. Please try again!</p> : null}

        {/* <p className="successMessage">Message Successfully Sent!</p>
        <p className="errorMessage">Message did not send. Please try again!</p> */}
    </form>
    );
};

export default ContactMe;


    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>