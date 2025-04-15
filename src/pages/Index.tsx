
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';

const Index: React.FC = () => {
  const skills = [
    "React", "HTML", "CSS", "JavaScript", "TypeScript", 
    "Git", "C++", "Java", "UI/UX", "Responsive Design"
  ];

  return (
    <div className="min-h-screen peach-gradient-bg">
      <Navbar />
      <Hero />
      
      <section className="section-container">
        <ProjectCard 
          title="PaintOn- An interactive author's tool"
          description="An interactive application designed to streamline the authoring process with intuitive tools and features."
          imageUrl="/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png" 
        />
        
        <ProjectCard 
          title="PaintOn- An interactive author's tool"
          description="An interactive application designed to streamline the authoring process with intuitive tools and features."
          imageUrl="/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png"
          reverse={true}
        />
      </section>
      
      <Skills skills={skills} />
      
      <footer className="section-container py-6 text-center text-sm text-gray-500">
        <div>© 2025 Airi's Portfolio. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Index;
