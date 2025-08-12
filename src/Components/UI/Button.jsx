// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95';
  
  const sizeClasses = {
    default: 'h-12 px-6 py-3',
    sm: 'h-10 rounded-lg px-4',
    lg: 'h-14 rounded-xl px-8 text-base',
    icon: 'h-12 w-12',
  };
  
  const variantClasses = {
    default: 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl',
    destructive: 'bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground hover:from-destructive/90 hover:to-destructive/70',
    outline: 'border-2 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50',
    secondary: 'bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/70',
    ghost: 'hover:bg-accent/50 hover:text-accent-foreground backdrop-blur-sm',
    link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80',
  };

  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;