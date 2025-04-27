
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
    <div className="min-h-screen relative bg-[#F2E2BA]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2E2BA] via-[#EFDCAA] to-[#E5D5A3] pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <section className="section-container relative z-10 py-16">
          <h2 className="text-3xl font-serif mb-12 text-navy text-center">Featured Projects</h2>
          <div className="space-y-24">
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
          </div>
        </section>
        
        <Skills skills={skills} />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
