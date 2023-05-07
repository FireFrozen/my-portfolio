import React,{useEffect,useState} from 'react'

import './NavBar.css'
import { NavLink } from 'react-router-dom'
import {FaRegMoon} from 'react-icons/fa'
import {ImSun} from 'react-icons/im'
import {LANGUAGES} from "../Components/constants/languages";
import { useTranslation } from "react-i18next";

const NavBar = () => {

    const {t, i18n} = useTranslation();

    const handleTrans = (e) => {
      const languageValue = e.target.value;
      i18n.changeLanguage(languageValue);
    };

    
    const [dark,setDark] = useState(false);
    useEffect(()=>{
    
        const BodyVery = document.querySelector('#body1');
        
        BodyVery.classList.toggle('mood',dark);
           
      },[dark]);

  return (
    <nav className={`nav-app navbar navbar-expand-lg ${dark ? "navbar-dark" : "navbar-light"}`}>
        

        <li className='mood-item' onClick={()=> setDark(!dark)} >{dark? <ImSun/>:<FaRegMoon/>}</li>
        <li><select className="form-select" defaultValue={"es"} onChange={handleTrans}>
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code} >
                    {label} 
                  </option>
                ))}
              </select></li>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="opciones">
          <ul className="navbar-nav me-0 list-container-navBar">
              <li><NavLink to="/" className="active" >{t("Home")}</NavLink></li>
              <li><NavLink to="/about" className="active">{t("AboutMe")}</NavLink></li>
              
              <li><NavLink to="/skill" className="active">Skills</NavLink></li>
              
              <li><NavLink to="/proyectos" className="active">{t("Projects")}</NavLink></li>

              <li><NavLink to="/contactme" className="active">{t("ContactMe")}</NavLink></li>
              
          </ul>
        </div>
    </nav>
  )
}

export default NavBar