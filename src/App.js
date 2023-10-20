
import './App.css';
import HeaderApp from './Components/HeaderApp';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom';
import Skill from './Components/Skill';
import About from './Components/About';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import NotFound from './Components/NotFound';
import FooterApp from './Components/FooterApp.jsx';

function App() {
  return (
    <div className="App">
      <div className="App-header margin-app">
        <HashRouter>
          <HeaderApp/>
          <Routes>
            <Route path='my-portfolio/' element={<Home/>}/>
            <Route path='my-portfolio/skill' element={<Skill/>}/>
            <Route path='my-portfolio/about' element={<About/>}/>
            <Route path='my-portfolio/proyectos' element={<Projects/>}/>
            <Route path='my-portfolio/contactme' element={<ContactMe/>}/>
            <Route path='my-portfolio/*' element={<NotFound/>}/>
          </Routes>
        </HashRouter>

      </div>

      <footer>
        <FooterApp/>
        
      </footer>
      
    </div>
  );
}

export default App;
