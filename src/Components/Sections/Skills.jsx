// src/components/sections/Skills.jsx
import React from 'react';
import { Card } from '../UI/Card';
import { skills } from '../../Data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Arsenal
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="group relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-br from-background/80 to-secondary/20">
              <div className="mb-4">
                <i className={`${skill.icon} text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;