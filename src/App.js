import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import DarkLightMode from "./components/DarkLightMode";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Help from "./components/Help";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Nav />
      <DarkLightMode />
      <div className="body-section">
        <CustomCursor />
        <Hero />
        <Projects />
        <Help />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
