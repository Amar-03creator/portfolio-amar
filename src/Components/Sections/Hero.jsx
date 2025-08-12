// src/components/sections/Hero.jsx
import React from 'react';
import Button from '../UI/Button';
import Badge from '../UI/Badge';

const Hero = ({ handleNavClick }) => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Text Content */}
        <div className="md:col-span-2 space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <Badge variant="secondary" className="animate-pulse">
              <i className="fa-solid fa-rocket mr-2"></i>
              Full Stack Developer & Cloud Enthusiast
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
                Building Digital
              </span>
              <br />
              <span className="text-foreground">Experiences</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              I specialize in creating modern, responsive web applications using the MERN stack. Currently expanding my expertise in DevOps to build and deploy more efficient and scalable systems.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              <Button size="lg" className="w-full sm:w-auto shadow-2xl">
                <i className="fa-solid fa-rocket mr-2"></i>
                Explore My Work
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <i className="fab fa-github mr-2"></i> 
                View GitHub
              </Button>
            </a>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-105 transition-all duration-500 shadow-2xl">
              <i className="fa-solid fa-code text-9xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse"></i>
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-full shadow-2xl border-4 border-background animate-bounce">
              <div className="bg-white h-6 w-6 rounded-full"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-400 to-cyan-500 p-2 rounded-full shadow-xl opacity-80 animate-pulse">
              <i className="fa-solid fa-star text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;