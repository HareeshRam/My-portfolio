import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaInstagramSquare} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form=useRef();

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_2khhn1n', 'template_oaj7wqq', form.current, '-WICZeM-9qLsDJHak')
    e.target.reset()
  }

  return (
   <section id='contact'>
    <h3 className="ram">Get In Touch</h3>
    <h2>Contact Me</h2>
    <div className="container contact__container">
       <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>hareeshram149@gmail.com</h5>
              <a href="mailto:hareeshram149@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaInstagramSquare className="contact__option-icon" id="har"/>
              <h4>Instagram</h4>
              <h5>Hareeshram_1</h5>
              <a href="https://www.instagram.com/direct/new/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" id="keer"/>
              <h4>WhatsApp</h4>
              <h5>+91 8123008187</h5>
              <a href="https://web.whatsapp.com/send?phone+918123008187&text=message&app_absent=0" target="_blank">Send a message</a>
          </article>

          
       </div>
       <form ref={form} onSubmit={sendEmail}>

<input type="text" name='name' placeholder='Your Full Name' required />
<input type="email" name='name' placeholder='Your Email' required />
<textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>

    </div>
   </section>
  )
}

export default Contact