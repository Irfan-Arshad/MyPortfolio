import React from 'react'
import './contact.css';
import LinkedInIcon from '../../assets/LinkedInIcon.png';

const contact = () => {
  return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to get in touch with me!</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'/>
                    <input type='email' className='email' placeholder='Your Email'/>
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

export default contact;

