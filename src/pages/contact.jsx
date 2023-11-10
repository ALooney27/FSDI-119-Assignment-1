import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_g8dntz6', 'template_kkscigg', form.current, 'WXy3kMBN5p6SX-Oji')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <div className="contact">
        <br />
        <h2>CONTACT US</h2>
        <p>QUESTIONS ABOUT CONCRETE, CONCERNS, OR INTERESTED IN RECEIVING INFO ABOUT AN ESTIMATE? WE WANT TO HEAR FROM YOU.</p><p>PLEASE FEEL FREE TO SEND US YOUR CONTACT INFORMATION, ALONG WITH A BRIEF MESSAGE OF THE TYPE OF WORK YOU ARE INTERESTED IN RECEIVING AND WE WILL RESPOND AS SOON AS POSSIBLE. PLEASE ALLOW 1 BUSINESS DAY TO RESPOND.</p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="to_name" />
          <label>Email</label>
          <input type="email" name="from_name" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
    </div>
    )
}

export default Contact;