import React, { useRef } from 'react'
import './contact.css';
import LinkedInIcon from '../../assets/LinkedInIcon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ck4gi4h', 'template_nk9u7gb', form.current, 'Hgiw3sO_8FBIjr01O')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent');
          }, (error) => {
              console.log(error.text);
          });
      };

  return (

        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className='contactDesc'>Please fill out the details below to get in touch with me!</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name="your_name" />
                    <input type='email' className='email' placeholder='Your Email' name="your_email" S/>
                    <textarea type='text' className='message' name='message' rows='5' placeholder='Your Message'/>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={LinkedInIcon} alt='LinkedIn'className='link'/>
                    </div>
                </form>
            </div>
        </section>

  );
}

export default Contact;

