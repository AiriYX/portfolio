
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2E2BA]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2E2BA] via-[#EFDCAA] to-[#E5D5A3] pointer-events-none" />
      <Navbar />
      
      <section className="relative section-container py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-serif mb-6 text-navy">About Me</h1>
            <div className="w-24 h-1 bg-navy/20 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-navy/10">
                <p className="text-navy/80 leading-relaxed">
                  I'm Airi, a computer science student at The City College of New York (CCNY) with a passion for creating 
                  beautiful, functional web experiences. I believe in the power of technology to make a positive impact 
                  on people's lives.
                </p>
              </div>
              
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-navy/10">
                <p className="text-navy/80 leading-relaxed">
                  My journey in computer science began when I took my first programming class in high school, 
                  where I discovered my love for problem-solving and creating something out of nothing but code. 
                  Since then, I've been on a continuous learning path, expanding my skills in various programming 
                  languages and technologies.
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-navy/10">
                <p className="text-navy/80 leading-relaxed">
                  When I'm not coding, you can find me exploring new design trends, reading about technology advancements, 
                  or working on personal projects that challenge my creative and technical abilities.
                </p>
              </div>
              
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-navy/10 space-y-6">
                <h2 className="text-2xl font-serif text-navy">Education</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-navy">Bachelor of Science in Computer Science</h3>
                    <p className="text-navy/70">The City College of New York (CCNY) | Expected 2026</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-navy/10 space-y-8">
                <div className="mb-8 flex justify-center">
                  <div className="w-32 h-32 bg-navy rounded-full flex items-center justify-center text-wheat text-4xl font-serif transform hover:scale-105 transition-all duration-300">
                    A
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-navy mb-2">Location</h4>
                    <p className="text-navy/70">New York, NY</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-2">Focus Areas</h4>
                    <p className="text-navy/70">Web Development, UX/UI Design, Software Development</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-2">Languages</h4>
                    <p className="text-navy/70">JavaScript, TypeScript, Java, C++, HTML, CSS</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-2">Contact</h4>
                    <p className="text-navy/70">airi@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
