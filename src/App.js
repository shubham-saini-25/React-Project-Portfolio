import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/HomePage';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <NavbarComponent />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer className='fw-bold'>
        {`Copyright © ${year} | Shubham Saini | All Rights Reserved`}
      </footer>
    </>
  );
}

export default App;