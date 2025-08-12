// src/components/sections/Projects.jsx
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../UI/Card';
import Button from '../UI/Button';
import Badge from '../UI/Badge';
import { projects } from '../../Data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of my latest work and creative solutions
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className={`flex flex-col relative overflow-hidden group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <Badge className="animate-pulse">
                    <i className="fa-solid fa-star mr-1"></i>
                    Featured
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow relative z-10">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="group-hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="justify-between space-x-4 relative z-10">
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1"
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:border-primary/50"
                >
                  <i className="fa-solid fa-external-link-alt mr-2"></i>
                  Live Demo
                </Button>
              </a>
              <a 
                href={project.code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1"
              >
                <Button size="sm" className="w-full">
                  <i className="fab fa-github mr-2"></i>
                  Code
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;