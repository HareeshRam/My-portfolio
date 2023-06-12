import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {SiHibernate} from 'react-icons/si'
import {GrOracle} from 'react-icons/gr'
const Experience = () => {
  return (
   <section id='experience'>
    <h5>What Skills I Have</h5>
    {/* <h5>Things i code with</h5> */}
    <h2>MY Skills</h2>
    <div className="container experience__container">
   <div className="experience__frontend">
   <h3>Frontend Development</h3>
   <div className="experience__content">
  <article className="experience__details">
   <ImHtmlFive className="experience__details-icon"/>
   <h4>HTML 5</h4>
  </article>

  <article className="experience__details">
   <IoLogoCss3 className="experience__details-icon"/>
   <h4>CSS 3</h4>
  </article>


  <article className="experience__details">
   <IoLogoJavascript className="experience__details-icon"/>
   <h4>JAVASCRIPT</h4>
  </article>

  <article className="experience__details">
   <SiBootstrap className="experience__details-icon"/>
   <h4>BOOTSTRAP</h4>
  </article>

  <article className="experience__details">
   <FaReact className="experience__details-icon"/>
   <h4>REACT JS</h4>
  </article>
   </div>
   </div>
{/*=======end of frontend======*/}
   <div className="experience__backend">
   <h3>Backend Development</h3>
   <div className="experience__content">
  <article className="experience__details">
   <FaJava className="experience__details-icon"/>
   <h4>Core Java</h4>
  </article>

  <article className="experience__details">
   <FaJava className="experience__details-icon"/>
   <h4>J2EE</h4>
  </article>


  <article className="experience__details">
   <SiHibernate className="experience__details-icon"/>
   <h4>Hibernate</h4>
  </article>

  <article className="experience__details">
   <GrOracle className="experience__details-icon"/>
   <h4>SQL</h4>
  </article>

  

  
   </div>
   </div>

    </div>
   </section>
  )
}

export default Experience