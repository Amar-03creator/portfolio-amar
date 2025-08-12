// src/App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

// Layout Components
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import AnimatedBackground from './Components/Layout/AnimatedBackground';

// Section Components
import Hero from './Components/Sections/Hero';
import About from './Components/Sections/About';
import Skills from './Components/Sections/Skills';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';

// Common Components
import ScrollProgress from './Components/Common/ScrollProgress';
import FloatingActionButton from './Components/Common/FloatingActionButton';

// Data
import { navLinks } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Effect to apply dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    return () => {
      root.classList.remove('dark');
    };
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <AnimatedBackground />
      <ScrollProgress />
      <FloatingActionButton />

      <Header
        navLinks={navLinks}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      <main className="container mx-auto px-4 md:px-6 pt-24">
        <Hero handleNavClick={handleNavClick} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer navLinks={navLinks} handleNavClick={handleNavClick} />
    </div>
  );
}

export default App;