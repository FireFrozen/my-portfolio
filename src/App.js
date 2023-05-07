
import './App.css';
import HeaderApp from './Components/HeaderApp';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <BrowserRouter>
          <HeaderApp/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/skill' element={<Skill/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/proyectos' element={<Projects/>}/>
            <Route path='/contactme' element={<ContactMe/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>

      </div>

      <footer>
        <FooterApp/>
        
      </footer>
      
    </div>
  );
}

export default App;
