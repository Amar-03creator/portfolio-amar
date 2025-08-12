// src/components/layout/Footer.jsx
import React from 'react';
import { contactInfo } from '../../data/portfolioData';

const Footer = ({ navLinks, handleNavClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 mt-20 bg-secondary/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Amarnath Nayak
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              A passionate developer creating modern web experiences with cutting-edge technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-secondary/50 backdrop-blur-sm p-3 rounded-full border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <i className="fab fa-github text-xl group-hover:text-primary transition-colors"></i>
                </div>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-secondary/50 backdrop-blur-sm p-3 rounded-full border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <i className="fab fa-linkedin text-xl group-hover:text-primary transition-colors"></i>
                </div>
              </a>
              <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-secondary/50 backdrop-blur-sm p-3 rounded-full border border-border/30 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <i className="fab fa-twitter text-xl group-hover:text-primary transition-colors"></i>
                </div>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={`footer-${link.id}`}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleNavClick(e, link.id)} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <i className={`fa-solid ${link.icon} mr-2 group-hover:scale-110 transition-transform`}></i>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-6">Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">API Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Database Design</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cloud Solutions</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {currentYear} Amarnath Nayak. All Rights Reserved.</p>
            <p className="text-sm">
              Made with <i className="fa-solid fa-heart text-red-500 animate-pulse mx-1"></i> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;