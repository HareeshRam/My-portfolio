import React from 'react'
import './portfolio.css'
import {FaGithub} from 'react-icons/fa'
import ME from '../../assets/form.jpg'
import ME1 from '../../assets/calculator.jpg'
import ME2 from '../../assets/EmojiApp (2).jpg'
import ME3 from '../../assets/Todoapp.jpg'
import ME4 from '../../assets/passwordGenerator.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className='head'>
        <h2 className='car'><a href="https://github.com/HareeshRam?tab=repositories" className='seeta'>My Projects <FaGithub/> </a></h2>
        </div>
       

        <div className='mom'>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://password-generator-hareesh.netlify.app"><img src={ME4} alt="me" className='god'/></a>

  </div>
  <h3 className='bike'>Password Generator</h3>

</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://calculator-ram.netlify.app/"><img src={ME1} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>Calculator</h3>
</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://todo-app-hareesh.netlify.app"><img src={ME3} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>Todo App</h3>

</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://emojiapp-hareesh.netlify.app"><img src={ME2} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>Emoji Search App</h3>
</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://userlogin-ram.netlify.app/"><img src={ME} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>User-Login</h3>

</div>
</div>
</div>
</section>
  )
}

export default Portfolio