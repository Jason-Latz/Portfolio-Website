import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ThemeToggle />
        <Header />
        <Projects />
        <WorkExperience />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;