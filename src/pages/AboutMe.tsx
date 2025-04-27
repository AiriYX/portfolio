
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Waves } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="w-64 h-64 bg-[#F2E2BA] rounded-full flex items-center justify-center text-navy text-7xl font-serif relative overflow-hidden group">
              <span className="relative z-10">A</span>
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2E2BA] to-[#E5D5A3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="inline-flex items-center gap-2 text-navy/60">
              <Waves className="w-5 h-5" />
              <span>Currently in New York</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8">
                Hello, I'm Airi
              </h1>
              <p className="text-lg text-navy/70 leading-relaxed">
                A computer science student at The City College of New York (CCNY) with a passion for creating 
                beautiful, functional web experiences. I believe in the power of technology to make a positive impact 
                on people's lives.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-navy/80 mb-4">What I Do</h2>
              <p className="text-navy/70 leading-relaxed">
                My journey in computer science began with my first programming class in high school, 
                where I discovered my love for problem-solving and creating something out of nothing but code. 
                When I'm not coding, you can find me exploring new design trends or working on personal projects.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-navy/80 mb-4">Technical Focus</h2>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "React", "Java", "C++", "UI/UX Design"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-[#F2E2BA]/30 text-navy/70 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-serif text-navy/80 mb-4">Get in Touch</h2>
              <a 
                href="mailto:airi@example.com" 
                className="inline-flex items-center gap-2 text-navy hover:text-green transition-colors"
              >
                airi@example.com
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
