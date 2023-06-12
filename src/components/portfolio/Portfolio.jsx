import React from 'react'
import './portfolio.css'
import ME from '../../assets/form.jpg'
import ME1 from '../../assets/calculator.jpg'
import ME2 from '../../assets/EmojiApp (2).jpg'
import ME3 from '../../assets/Todoapp.jpg'






const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className='head'>
        <h2> My Projects</h2>
        </div>
        <div className="border">
        <div className='card1'>
          <div className="login">
          <a href="https://userlogin-ram.netlify.app/"><img src={ME} alt="me"/></a>
          </div>
         <h3>User-Login</h3>

        </div>
        </div>

        <div className="border">
        <div className='card1'>
          <div className="login">
          <a href="https://calculator-ram.netlify.app/"><img src={ME1} alt="me"/></a>
          </div>
         <h3>Calculator</h3>
        </div>
        </div>
    
        <div className="border">
        <div className='card1'>
          <div className="login">
          <a href="https://emojiapp-hareesh.netlify.app"><img src={ME2} alt="me"/></a>
          </div>
         <h3>EmojiSearchApp</h3>
        </div>
        </div>
        <div className="border">
        <div className='card1'>
          <div className="login">
          <a href="https://todo-app-hareesh.netlify.app"><img src={ME3} alt="me"/></a>
          </div>
         <h3>Todo App</h3>

        </div>
        </div>

    </section>
  )
}

export default Portfolio