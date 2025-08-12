// src/components/sections/About.jsx
import React from 'react';
import { Card } from '../UI/Card';
import Badge from '../UI/Badge';
import { qualifications } from '../../Data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-5 gap-16">
        {/* About Text */}
        <div className="md:col-span-3 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
          </div>
          
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              Passionate about crafting digital solutions that make a difference.
            </p>
            <p>
              I'm a dedicated developer with a strong foundation in the MERN stack and a growing passion for cloud technologies. My academic journey through a BSc in ETC and now an MCA in Cloud Computing has equipped me with a robust technical foundation.
            </p>
            <p>
              I thrive on the challenge of building complete, user-centric applications. My current focus is on mastering Data Structures & Algorithms and delving into DevOps to understand the full lifecycle of software development.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-secondary/20 backdrop-blur-sm rounded-2xl border border-border/30">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-secondary/20 backdrop-blur-sm rounded-2xl border border-border/30">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="md:col-span-2">
          <h3 className="text-3xl font-semibold tracking-tight mb-8 text-primary">
            Education Journey
          </h3>
          <div className="space-y-6">
            {qualifications.map((q, index) => (
              <div key={q.degree} className="group">
                <Card className="transition-all duration-300 hover:shadow-xl">
                  <div className="p-6 flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-accent h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i className={`fa-solid ${q.icon} text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                        {q.degree}
                      </p>
                      <p className="text-muted-foreground mt-1">{q.institution}</p>
                      <Badge variant="outline" className="mt-2">
                        <i className="fa-solid fa-calendar mr-1"></i>
                        {q.year}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;