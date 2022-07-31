
import React from 'react'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className='icon'> 
     <a href='https://t.me/StilLAlien' target={'_blank'} rel="noreferrer"><FaTelegram size={25} my={3}/></a>  
    <a href='https://github.com/Asrat001' target={'_blank'} rel="noreferrer"><FaGithub size={25}/></a>
   
     </div>
    
    <h4> Design and Developed by Asrat Adane|מַעֲשֵׂר</h4>
    <small>inspierd by Wall of Text by <strong> Dagmawi Babi</strong></small>
    
          </div>
  )
}

export default Footer