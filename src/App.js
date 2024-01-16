import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'
import { Portfolio } from './components/Portfolio';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
function App() {

  const refPortfolio = useRef(null);
  const scrollToPortfolio = () => {
    refPortfolio.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const refAbout = useRef(null);
  const scrollToAbout = () => {
    refAbout.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const refSkills = useRef(null);
  const scrollToSkills = () => {
    refSkills.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const refContact = useRef(null);
  const scrollToContact = () => {
    refContact.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const refHome = useRef(null);
  const scrollToHome = () => {
    refHome.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <ul  className='headerList'>
        <li onClick={scrollToPortfolio} className='listItems'>Portfolio</li>
        <li onClick={scrollToAbout} className='listItems'>About</li>
        <li onClick={scrollToHome} className='listItems'>MK7</li>
        <li onClick={scrollToSkills} className='listItems'> Skills</li>
        <li onClick={scrollToContact} className='listItems'>Contact</li>
      </ul>
      <div ref={refHome} className='backmeup'>
        <span className='mainTitle'>I am Mariam Kulumbegovi, Front-end Developer, based in Tbilisi, Georgia.</span>
      </div>
      <div ref={refPortfolio}  className='portfolio'>
        <h1 className="title">Portfolio</h1>
        <Portfolio/>
      </div>
      <div ref={refAbout}  className='portfolio'>
        <h1 className="title">About Me</h1>
        <AboutMe />
      </div>
      <div ref={refSkills}  className='portfolio'>
        <h1 className="title">My Skills</h1>
        <Skills />
      </div>
      <div ref={refContact}  className='portfolio'>
        <h1 className="title">Get In Touch</h1>
        <Contact />
      </div>
    </div>
  );
}

export default App;
