
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const skills = [
    "React", "HTML", "CSS", "JavaScript", "TypeScript", 
    "Git", "C++", "Java", "UI/UX", "Responsive Design"
  ];

  return (
    <div className="min-h-screen wheat-gradient-bg">
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
      
      <Footer />
    </div>
  );
};

export default Index;
