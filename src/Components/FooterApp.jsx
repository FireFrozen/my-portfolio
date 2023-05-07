import React from 'react'
import "./FooterApp.css"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const FooterApp = () => {
  return (
    <div className='FooterApp'>
        
        
        <div className='FooterApp-container margin-app'>
          <h1>Alejandro</h1>
            

            <div className='icon-footer-container'>

                <a href="https://github.com/FireFrozen" 
                role="button" target='_blank'><BsGithub className='icon-footer'/></a>
                <a href="https://www.linkedin.com/in/juan-alejandro-mendoza-zapata-235613196/" 
                role="button" target='_blank'><BsLinkedin className='icon-footer'/></a>

            </div>
            
            
        </div>
        <p>This website was developed with React by FireFrozen 2023</p>
    </div>
  )
}

export default FooterApp