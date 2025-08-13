import React from 'react';
import './App.css'; 


import Sagbar from './components/Sagbar/Sagbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Sagbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
