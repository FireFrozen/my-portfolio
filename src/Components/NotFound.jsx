import React from 'react'
import "./NotFound.css"
import Bocchi from "../Assets/Bocchi.png"
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom'
import {FaArrowAltCircleRight} from "react-icons/fa" 

const NotFound = () => {

  const {t, i18n} = useTranslation();

  return (
    <div className='NotFound'>
        <div className='NotFound-section'>
          <img src={Bocchi} alt/>
          <h1>404 Error</h1>
          <h2>Oops...</h2>
          <p>Sorry, page not found</p>
          <p>{t("NotFoundMessage")}</p>
        </div>
        <NavLink to="/" className="active">
          <button> 
              {t("GoHomePage")} <FaArrowAltCircleRight/>
          </button>
        </NavLink>
    </div>
  )
}

export default NotFound