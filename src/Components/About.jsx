import React from 'react'
import "./About.css"
import bachiller from '../Assets/PdfDocuments/D008_72391553_B.pdf'
import CV from '../Assets/PdfDocuments/CV-Juan Mendoza.pdf'
import { useTranslation } from "react-i18next"


const About = () => {

  const {t, i18n} = useTranslation();

  return (
    <div className='About'>
      
      <div className='about-text'> 
          
          <h1>{t("AboutMe")}</h1>
          <div>
            <p>{t("AboutText1")}</p>
            <p>{t("AboutText2")}</p>
            <p>{t("AboutText3")}</p>
          </div>
          <div class="about-buttons">
            <a type='button' className='btn btn-primary' href={CV} 
              target="_blank" rel="noopener noreferrer" 
              download="D008_72391553_B.pdf">{t("DescargarCV")}</a>

            <a type='button' className='btn btn-outline-success' href={bachiller} 
              target="_blank" rel="noopener noreferrer" 
              download="D008_72391553_B.pdf">{t("CertificadoBachiller")}</a>
          </div>
        </div> 
        

    </div>
  )
}

export default About