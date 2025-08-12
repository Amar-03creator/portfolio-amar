// src/components/layout/Header.jsx
import React from 'react';
import Button from '../UI/Button';

const Header = ({ navLinks, activeSection, handleNavClick }) => {
  return (
    <header className="bg-background/70 backdrop-blur-lg border-b border-border/50 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          Amarnath Nayak
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 items-center bg-secondary/20 backdrop-blur-sm rounded-full p-1 border border-border/30">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
              <Button 
                variant={activeSection === link.id ? "default" : "ghost"} 
                size="sm"
                className={`rounded-full transition-all duration-300 ${activeSection === link.id ? 'shadow-lg' : ''}`}
              >
                <i className={`fa-solid ${link.icon} mr-2 text-sm`}></i>
                {link.title}
              </Button>
            </a>
          ))}
        </div>
        
        {/* Contact Button */}
        <a href="mailto:your-email@example.com">
          <Button className="hidden md:flex shadow-lg">
            <i className="fa-solid fa-envelope mr-2"></i> Let's Talk
          </Button>
        </a>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <i className="fas fa-bars text-lg"></i>
        </Button>
      </nav>
    </header>
  );
};

export default Header;