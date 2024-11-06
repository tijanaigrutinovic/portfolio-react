import './App.css';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import './styles/main.scss';


function App() {
  return (
    <div className="body-section">  {/* Ovdje je div sa klasom */}
      <CustomCursor />
      <Nav /> 
      <Hero /> 
      <About /> 
      <Projects /> 
      <Skills /> 
      <Contact /> 
      <Footer /> 
    </div>
  );
}

export default App;