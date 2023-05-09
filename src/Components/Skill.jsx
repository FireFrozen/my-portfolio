import React from 'react'
import "./Skill.css"
import ImageSkills from "../Assets/image-skills.jpg"
import { useTranslation } from "react-i18next"

const Skill = () => {

  const {t, i18n} = useTranslation();

  return (
    <div className='Skill'>
      <h1>Skills</h1>
      <div className='Skill-container'>
        <section className='section-skill'>
          <h2>{t("TechSkills")}</h2>
          <ul>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Angular</li>
            <li>Typescript</li>
            <li>Git</li>
          </ul>
          
        </section>

        <section className='section-skill'>
          <h2>{t("SoftSkills")}</h2>
          <ul>
            <li>{t("Autodidacta")}</li>
            <li>{t("AprendizajeRapido")}</li>
            <li>{t("CapacidadAnalisis")}</li>
            <li>{t("TrabajoEquipo")}</li>                
          </ul>
          
        </section>

        <div className='skill-imagen'>
          <img className='logo-skill' src={ImageSkills} alt='image-skills.jpg'/>
        </div>
      </div>
      
    </div>
  )
}

export default Skill