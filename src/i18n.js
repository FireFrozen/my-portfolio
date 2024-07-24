import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources:{
        en: {
            translation: {
                Home: 'Home',
                greeting: "Hi, I'm",
                ocupation:"Frontend developer",
                HomeDescription:"Medium level of experience in web development and oriented to learning constantly",
                AboutMe: "About me",
                Projects: "Projects",
                ContactMe:"Contact me",
                VerCodigo:"View Code",
                VerProyectos:"View Projects",
                VerProyecto:"View Project",

                DescargarCV:"Download CV",
                CertificadoBachiller:"Bachelor Certificate",

                AboutText1:"Bachelor of Mechatronics Engineering "+
                "from the Pontificia Universidad Católica del Perú (PUCP)",
                AboutText2:"Front-end web Developer",
                AboutText3:"Experience using React, Angular and Java in projects",
                
                
                TechSkills:"Technical Skills",
                SoftSkills:"Soft Skills",
                Autodidacta:"Autodidact",
                AprendizajeRapido:"Quick Learning",
                CapacidadAnalisis:"Analytical Skill",
                TrabajoEquipo:"Teamwork",

                ProyectoDescripcion0:`Web application that allows you to perform CRUD operations.
                Includes pagination to display table elements in a more organized way.
                Firebase is used for authentication and the application database.
                Developed with Angular and Firebase.`,

                ProyectoDescripcion1:"Web application to check the weather, temperature, humidity and "+
                "wind speed of the city of a country. Developed with React.",
                ProyDescripLPColegioJB:"Web development of the approved design for the landing page of the "+
                "San José de Begoña school. Developed with Wordpress, CSS and Javascript.",
                ProyectoDescripcion2:"Web application with a responsive design to shorten URL that "+
                "works using an API and save the URL shortened. Developed with React.",
                ProyectoDescripcion3:"Web application that generate an random advice using an API. "+
                "The button generates an new random advice.",
                ProyectoDescripcion4:"Web application that simulates the game rock-paper-scissors. "+
                "Scores are stored even if the browser is refreshed.",

                NotFoundMessage:"You should come back to the homepage",
                GoHomePage:"Go Homepage",
                
            }
        },
        es: {
            translation: {
                Home: 'Página principal',
                greeting: "Hola, soy",
                ocupation:"Desarrollador Frontend",
                HomeDescription:"Nivel medio de experiencia en desarrollo web y orientado al aprendizaje constante",
                AboutMe: "Acerca de mí",
                Projects: "Proyectos",
                ContactMe:"Contáctame",
                VerCodigo:"Ver Código",
                VerProyectos:"Ver Proyectos",
                VerProyecto:"Ver Proyecto",

                DescargarCV:"Descargar CV",
                CertificadoBachiller:"Certificado de Bachiller",

                AboutText1:"Bachiller de la especialidad de Ingeniería Mecatrónica"+
                 " de la Pontificia Universidad Católica del Perú (PUCP)",
                AboutText2:"Desarrollador web Front-end",
                AboutText3:"Experiencia usando React, Angular y Java en proyectos",

                TechSkills:"Habilidades técnicas",
                SoftSkills:"Habilidades blandas",
                Autodidacta:"Autodidacta",
                AprendizajeRapido:"Aprendizaje Rápido",
                CapacidadAnalisis:"Capacidad de Análisis",
                TrabajoEquipo:"Trabajo en equipo",

                ProyectoDescripcion0:`Aplicación web que permite realizar operaciones CRUD.
                Incluye una paginación para mostrar los elementos de la tabla de manera más organizada. 
                Se utiliza Firebase para la autenticación y la base de datos de la aplicación. 
                Desarrollada con Angular y Firebase.`,

                ProyectoDescripcion1:"Aplicación web para consultar el clima, temperatura, humedad y "+
                "velocidad del viento de la ciudad de un país. Desarrollada con React.",
                ProyDescripLPColegioJB:"Desarrollo web del diseño aprobado para el landing page del "+
                "Colegio San José de Begoña. Desarrollada con Wordpress, CSS y Javascript.",
                ProyectoDescripcion2:"Aplicación web de diseño flexible para acortar enlaces que "+
                "funciona usando una API y además guarda los enlaces acortados. Desarrollada con React.",
                ProyectoDescripcion3:"Aplicación web que genera un aviso aleatorio usando una API. "+
                "El botón genera un nuevo aviso aleatorio.",
                ProyectoDescripcion4:"Aplicación web que simula el juego piedra papel y tijeras. "+
                "Se almacenan los puntajes incluso si se actualiza el navegador.",

                NotFoundMessage:"Deberías volver a la página principal",
                GoHomePage:"Página principal",
                
            }
        },
    },
  });

export default i18n;