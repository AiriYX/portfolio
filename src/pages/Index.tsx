
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
    <div className="min-h-screen bg-page-bg animate-fade-in">
      <div className="relative">
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=')]" />

        <Navbar />
        
        <div className="px-8 md:px-32 py-20 md:py-32">
          <Hero />
          
          <section className="my-20">
            <h2 className="text-4xl mb-12 text-header text-center">Featured Projects</h2>
            <div className="space-y-12 md:space-y-24">
              <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <ProjectCard 
                  title="PaintOn- An interactive author's tool"
                  description="An interactive application designed to streamline the authoring process with intuitive tools and features."
                  imageUrl="/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png" 
                />
              </div>
              
              <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <ProjectCard 
                  title="PaintOn- An interactive author's tool"
                  description="An interactive application designed to streamline the authoring process with intuitive tools and features."
                  imageUrl="/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png"
                  reverse={true}
                />
              </div>
            </div>
          </section>
          
          <div className="bg-card-bg rounded-2xl p-10 shadow-sm my-20">
            <Skills skills={skills} />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
