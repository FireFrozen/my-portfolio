import React from 'react'
import "./FooterApp.css"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const FooterApp = () => {
  return (
    <div className='FooterApp'>
        
        
        <div className='FooterApp-container margin-app'>
            
            <div className='icon-footer-container'>

                <a href="https://github.com/FireFrozen" 
                role="button" target='_blank'><BsGithub className='icon-footer'/></a>
                <a href="https://www.linkedin.com/in/juan-alejandro-mendoza-zapata-235613196/" 
                role="button" target='_blank'><BsLinkedin className='icon-footer'/></a>

            </div>          
            
        </div>

        <div className='ref-links-container'>
          <p>This website was developed with React by FireFrozen 2024</p>
          <p>
            <a target="_blank" href="https://icons8.com/icon/21278/css3">css</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/20909/html-5">html</a> icon,&nbsp; 
            <a target="_blank" href="https://icons8.com/icon/108784/javascript">Js</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/84710/oreja">Bootstrap</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/123603/reaccionar-nativo">React</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/uJM6fQYqDaZK/typescript">TypeScript</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/71257/angularjs">Angular</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/13441/python">Python</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/13664/wordpress">WordPress</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/zfHRZ6i1Wg0U/figma">Figma</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/hsPbhkOH4FMe/node-js">nodo-js</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/2oBx9FpXcbLa/spring-boot">Spring Boot</a> icon,&nbsp;
            <a target="_blank" href="https://icons8.com/icon/13679/java">Java</a> icon and&nbsp;
            <a target="_blank" href="https://icons8.com/icon/20906/git">Git</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>.
          </p>
        </div>
    </div>
  )
}

export default FooterApp