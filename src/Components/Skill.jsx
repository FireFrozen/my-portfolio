import React from 'react'
import "./Skill.css"
import ImageSkills from "../Assets/image-skills.jpg"
import { useTranslation } from "react-i18next"
import HTML from "../Assets/icons/icons8-html.svg"
import CSS from "../Assets/icons/icons8-css.svg"
import Javascript from "../Assets/icons/icons8-js.svg"
import ReactIcon from "../Assets/icons/icons8-react-native.svg"
import Angular from "../Assets/icons/icons8-angularjs.svg"
import Bootstrap from "../Assets/icons/icons8-bootstrap.svg"
import Typescript from "../Assets/icons/icons8-typescript.svg"
import Git from "../Assets/icons/icons8-git.svg"
import Python from "../Assets/icons/icons8-python.svg"

import {GiMagnifyingGlass} from "react-icons/gi"
import {AiOutlineLaptop} from "react-icons/ai"
import {AiOutlineThunderbolt} from "react-icons/ai"
import {AiOutlineTeam} from "react-icons/ai"


const Skill = () => {

  const {t, i18n} = useTranslation();

  return (
    <div className='Skill'>
      <h1>Skills</h1>
      <div className='Skill-container'>
      {/*
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
      */}
        <section className='section-skill'>
          <h2>{t("TechSkills")}</h2>
          <div className='cards-container'>
            <div className='tarjeta-icono'>
              <img src={HTML} alt='html-icon'/>
              <p>HTML/HTML5</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={CSS} alt='css-icon'/>
              <p>CSS/CSS3</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={Javascript} alt='js-icon'/>
              <p>Javascript</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={Bootstrap} alt='Bootstrap-icon'/>
              <p>Bootstrap</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={ReactIcon} alt='React-icon'/>
              <p>React</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={Git} alt='Git-icon'/>
              <p>Git</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={Angular} alt='Angular-icon'/>
              <p>Angular</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={Typescript} alt='Typescript-icon'/>
              <p>Typescript</p>
            </div>

            <div className='tarjeta-icono'>
              <img src={Python} alt='Python-icon'/>
              <p>Python</p>
            </div>

          </div>
        </section>

        <section className='section-skill'>
          <h2>{t("SoftSkills")}</h2>
          <ul>
            <li><AiOutlineLaptop/> &nbsp; {t("Autodidacta")}</li>
            <li><AiOutlineThunderbolt/> &nbsp; {t("AprendizajeRapido")}</li>
            <li><GiMagnifyingGlass/> &nbsp; {t("CapacidadAnalisis")}</li>
            <li><AiOutlineTeam/> &nbsp; {t("TrabajoEquipo")}</li>                
          </ul>
          
        </section>

        {/*
        <div className='skill-imagen'>
          <img className='logo-skill' src={ImageSkills} alt='image-skills.jpg'/>
        </div>
        */}
      </div>
      
    </div>
  )
}

export default Skill