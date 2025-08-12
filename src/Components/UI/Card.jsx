// src/components/ui/Card.jsx
import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-card/50 backdrop-blur-sm text-card-foreground border border-border/50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 group ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>
);