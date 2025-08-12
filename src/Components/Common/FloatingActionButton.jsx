// src/components/common/FloatingActionButton.jsx
import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 transition-all duration-300 z-40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
      <Button 
        onClick={scrollToTop} 
        size="icon" 
        className="rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:shadow-primary/25"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </Button>
    </div>
  );
};

export default FloatingActionButton;