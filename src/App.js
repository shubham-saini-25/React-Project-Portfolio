import Navbar from './components/NavbarComponent';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;