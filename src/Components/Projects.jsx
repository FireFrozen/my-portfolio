import React from 'react'
import "./Projects.css"
import { useTranslation } from "react-i18next"
import Proyecto0a from "../Assets/Proyectos/Captura web_17-11-2023_14538_firefrozen.github.io.jpeg"
import Proyecto0b from "../Assets/Proyectos/Captura web_17-11-2023_145418_firefrozen.github.io.jpeg"
import Proyecto0c from "../Assets/Proyectos/Captura web_17-11-2023_32436_firefrozen.github.io.jpeg"

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
              <h1>CRUD app</h1>
              <p>{t("ProyectoDescripcion0")}</p>

              <div className='Projects-buttons'>
                <a className="btn btn-outline-primary" 
                  href="https://github.com/FireFrozen/CRUD-Angular-Firebase" 
                  role="button" target='_blank'>{t("VerCodigo")}</a>
                <a className="btn btn-success" 
                  href="https://firefrozen.github.io/CRUD-Angular-Firebase/" 
                role="button" target='_blank'>{t("VerProyectos")}</a>
              </div>
        </div>
        {/* <img className='proyecto-img' src={Proyecto0a} alt='proyecto0'/> */}

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="proyecto-img proyecto-img-crud" src={Proyecto0a} alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img className="proyecto-img proyecto-img-crud" src={Proyecto0b} alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img className="proyecto-img proyecto-img-crud" src={Proyecto0c} alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>

      </div>

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
                role="button" target='_blank'>{t("VerProyectos")}</a>
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
                  role="button" target='_blank'>{t("VerProyectos")}</a>
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
                  role="button" target='_blank'>{t("VerProyectos")}</a>
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
                  role="button" target='_blank'>{t("VerProyectos")}</a>
              </div>
        </div>
        <img className='proyecto-img' src={Proyecto4} alt='proyecto4'/>
      </div>
      
    </div>
  )
}

export default Projects