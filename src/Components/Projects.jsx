import React from 'react'
import "./Projects.css"
import { useTranslation } from "react-i18next"
import Proyecto1 from "../Assets/Proyectos/Weather-app.png"
import Proyecto2 from "../Assets/Proyectos/Url-shortning-app.png"
import Proyecto3 from "../Assets/Proyectos/advice-generator-app.png"
import Proyecto4 from "../Assets/Proyectos/rock-paper-scissors-app.png"



const Projects = () => {

  const {t, i18n} = useTranslation();

  return (
    <div className='Projects'>
      <h1>{t("Projects")}</h1>
      <div className='Projects-item'>
        <div className='Projects-item-text'>
              <h1>Wheather app</h1>
              <p>{t("ProyectoDescripcion1")}</p>

              <div className='Projects-buttons'>
                <a className="btn btn-outline-primary" 
                  href="https://github.com/FireFrozen/react-weather-app-async/tree/loading" 
                  role="button" target='_blank'>{t("VerCodigo")}</a>
                <a className="btn btn-success" 
                  href="https://firefrozen.github.io/react-weather-app-async/" 
                role="button" target='_blank'>{t("VerProyecto")}</a>
              </div>
        </div>
        <img className='proyecto-img' src={Proyecto1} alt='proyecto1'/>
      </div>

      <div className='Projects-item'>
        <div className='Projects-item-text'>
              <h1>URL shortening app</h1>
              <p>{t("ProyectoDescripcion2")}
              </p>
              <div className='Projects-buttons'>
                <a className="btn btn-outline-primary" 
                  href="https://github.com/FireFrozen/url-shortening-api-react" 
                  role="button" target='_blank'>{t("VerCodigo")}</a>
                <a className="btn btn-success" 
                  href="https://firefrozen.github.io/url-shortening-api-react/" 
                  role="button" target='_blank'>{t("VerProyecto")}</a>
              </div>
        </div>
        <img className='proyecto-img' src={Proyecto2} alt='proyecto2'/>
      </div>

      <div className='Projects-item'>
        <div className='Projects-item-text'>
              <h1>Advice Generator app</h1>
              <p>{t("ProyectoDescripcion3")}
              </p>

              <div className='Projects-buttons'>
                <a className="btn btn-outline-primary" 
                  href="https://github.com/FireFrozen/advice-generator-app-main" 
                  role="button" target='_blank'>{t("VerCodigo")}</a>
                <a className="btn btn-success" 
                  href="https://firefrozen.github.io/advice-generator-app-main/" 
                  role="button" target='_blank'>{t("VerProyecto")}</a>
              </div>
        </div>
        <img className='proyecto-img' src={Proyecto3} alt='proyecto3'/>
      </div>

      <div className='Projects-item'>
        <div className='Projects-item-text'>
              <h1>Rock-paper-scissors App</h1>
              <p>{t("ProyectoDescripcion4")}
              </p>
              
              <div className='Projects-buttons'>
                <a className="btn btn-outline-primary" 
                  href="https://github.com/FireFrozen/rock-paper-scissors-master-3-elements" 
                  role="button" target='_blank'>{t("VerCodigo")}</a>
                <a className="btn btn-success" 
                  href="https://firefrozen.github.io/rock-paper-scissors-master-3-elements/" 
                  role="button" target='_blank'>{t("VerProyecto")}</a>
              </div>
        </div>
        <img className='proyecto-img' src={Proyecto4} alt='proyecto4'/>
      </div>
      
    </div>
  )
}

export default Projects