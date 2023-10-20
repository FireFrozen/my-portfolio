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
                HomeDescription:"Medium level of experience in web design and oriented to learning constantly",
                AboutMe: "About me",
                Projects: "Projects",
                ContactMe:"Contact me",
                VerCodigo:"View Code",
                VerProyectos:"View Projects",

                DescargarCV:"Download CV",
                CertificadoBachiller:"Bachelor Certificate",

                AboutText1:"Bachelor of Mechatronics Engineering "+
                "from the Pontificia Universidad Católica del Perú (PUCP)",
                AboutText2:"Front-end web Developer",
                AboutText3:"Experience using React",
                
                TechSkills:"Technical Skills",
                SoftSkills:"Soft Skills",
                Autodidacta:"Autodidact",
                AprendizajeRapido:"Quick Learning",
                CapacidadAnalisis:"Analytical Skill",
                TrabajoEquipo:"Teamwork",

                ProyectoDescripcion1:"Web application to check the weather, temperature, humidity and "+
                "wind speed of the city of a country. Developed with React",
                ProyectoDescripcion2:"Web application with a responsive design to shorten URL that "+
                "works using an API and save the URL shortened. Developed with React",
                ProyectoDescripcion3:"Web application that generate an random advice using an API. "+
                "The button generates an new random advice",
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
                HomeDescription:"Nivel medio de experiencia en diseño web y orientado al aprendizaje constante",
                AboutMe: "Acerca de mí",
                Projects: "Proyectos",
                ContactMe:"Contáctame",
                VerCodigo:"Ver Código",
                VerProyectos:"Ver Proyectos",

                DescargarCV:"Descargar CV",
                CertificadoBachiller:"Certificado de Bachiller",

                AboutText1:"Bachiller de la especialidad de Ingeniería Mecatrónica"+
                 " de la Pontificia Universidad Católica del Perú (PUCP)",
                AboutText2:"Desarrollador web Front-end",
                AboutText3:"Experiencia usando React",

                TechSkills:"Habilidades técnicas",
                SoftSkills:"Habilidades blandas",
                Autodidacta:"Autodidacta",
                AprendizajeRapido:"Aprendizaje Rápido",
                CapacidadAnalisis:"Capacidad de Análisis",
                TrabajoEquipo:"Trabajo en equipo",

                ProyectoDescripcion1:"Aplicación web para consultar el clima, temperatura, humedad y "+
                "velocidad del viento de la ciudad de un país. Desarrollada con React",
                ProyectoDescripcion2:"Aplicación web de diseño flexible para acortar enlaces que "+
                "funciona usando una API y además guarda los enlaces acortados. Desarrollada con React",
                ProyectoDescripcion3:"Aplicación web que genera un aviso aleatorio usando una API. "+
                "El botón genera un nuevo aviso aleatorio",
                ProyectoDescripcion4:"Aplicación web que simula el juego piedra papel y tijeras. "+
                "Se almacenan los puntajes incluso si se actualiza el navegador.",

                NotFoundMessage:"Deberías volver a la página principal",
                GoHomePage:"Página principal",
                
            }
        },
    },
  });

export default i18n;