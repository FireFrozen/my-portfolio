import React from 'react'
import "./ContactMe.css"
import { useTranslation } from "react-i18next"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const ContactMe = () => {
    
    const {t, i18n} = useTranslation();

  return (
    <div className='ContactMe'>
        <h1>{t("ContactMe")}</h1>
        <div className='ContactMe-container'>

            <div className='ContactMe-item'>
                <h2>Github</h2>
                <p>FireFrozen</p>
                <a href="https://github.com/FireFrozen" 
                role="button" target='_blank'><BsGithub id ='ContactMe-github' className='icon-ContactMe'/></a>
                

            </div>
            
            <div className='ContactMe-item'>
                <h2>Linkedin</h2>
                <p>Juan Mendoza</p>
                <a href="https://www.linkedin.com/in/juan-alejandro-mendoza-zapata-235613196/" 
                role="button" target='_blank'><BsLinkedin id ='ContactMe-linkedin' className='icon-ContactMe'/></a>
            </div>

            <div className='ContactMe-item'>
                <h2>E-mail:</h2>
                <p>j.mendozaz@pucp.pe</p>
            </div>
        </div>
        
    </div>
  )
}

export default ContactMe