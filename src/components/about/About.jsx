import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>
     <div className='container about__container'>
    <div className="about__me">
 <div className="about__me-image">
  <img src={ME} alt="About Image" />
 </div>
    </div>
    <div className="about__content">
   <div className="about__cards">
   <a href="#experience">

   <article className='about__card'>
       <FaAward  className='about__icon'/>
      <h5>Experience&Skills</h5>
      <small>Hands On Experience Of Both Frontend & Backend</small>
   </article>
   </a>

   {/* <article className='about__card'>
       <FiUsers/>
      <h5>Clients</h5>
      <small>200+ Worldwide</small>
   </article> */}

<a href="#portfolio"> <article className='about__card' >
     
      <VscFolderLibrary className='about__icon'/>
       <h5>Projects</h5>
      <small>3+projects on Frontend</small>
     
   </article> </a>
   </div>
   <div className='text'>
   <p >An enthusiastic learner from the graduating batch of 2022,trained at Fullstack Web Development.Seeking a Challenging career in IT sector that offers an oppurtunity to update myself and to move an organization hierarchy with continous learning & growth.<br></br>
    I'm passionate Developer,with strong administrative and communication skills,good attention to details and the ability to write efficient code.
   </p>
   </div>
    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
    </div>
     </div>
    </section>
  )
}

export default About