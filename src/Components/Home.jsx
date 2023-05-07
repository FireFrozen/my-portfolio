import React from 'react'
import './Home.css'
import { useTranslation } from "react-i18next"
import Computator from "../Assets/computer1.jpg"
import {FaArrowAltCircleRight} from "react-icons/fa" 
import { NavLink } from 'react-router-dom'

const Home = () => {
  const {t, i18n} = useTranslation();

  return (
    <div className='Home'>
      <div className='section-titles'>
        <h1>{t("greeting")} Alejandro </h1>
        <h2>{t("ocupation")}</h2>

        <p>{t("HomeDescription")}</p>
        
        <NavLink to="my-portfolio/proyectos" className="active">
          <button> 
              Ver Proyectos <FaArrowAltCircleRight/>
          </button>
        </NavLink>
        
      </div>

      <div className='PerfilImg'>
        <img className='Home-img' src={Computator} alt='image'/>
      </div>
      
    </div>
  )
}

export default Home