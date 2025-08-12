// src/components/sections/Contact.jsx
import React from 'react';
import { Card } from '../UI/Card';
import Button from '../UI/Button';
import { contactInfo } from '../../Data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Let's Create Something Amazing
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm actively seeking new opportunities and collaborations. Whether you have a project in mind or just want to discuss technology, I'd love to hear from you.
        </p>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-primary to-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-envelope text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              Email Me
            </h3>
            <p className="text-muted-foreground">{contactInfo.email}</p>
          </Card>
          
          <Card className="p-8 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-phone text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              Call Me
            </h3>
            <p className="text-muted-foreground">{contactInfo.phone}</p>
          </Card>
          
          <Card className="p-8 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-map-marker-alt text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              Location
            </h3>
            <p className="text-muted-foreground">{contactInfo.location}</p>
          </Card>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href={`mailto:${contactInfo.email}`}>
            <Button size="lg" className="w-full sm:w-auto shadow-2xl">
              <i className="fa-solid fa-paper-plane mr-2"></i> 
              Get in Touch
            </Button>
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <i className="fab fa-linkedin mr-2"></i> 
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;