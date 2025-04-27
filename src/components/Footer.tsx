
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Github, FileText, Coffee, Book, Camera, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const experiences = [
    { 
      role: "Software Engineering Intern",
      company: "Tech Company",
      period: "Summer 2023"
    },
    { 
      role: "Web Development Lead",
      company: "Student Organization",
      period: "2022 - Present"
    }
  ];

  const hobbies = [
    {
      icon: <Coffee className="w-5 h-5" />,
      name: "Coffee Brewing",
      description: "Exploring different brewing methods and bean origins"
    },
    {
      icon: <Book className="w-5 h-5" />,
      name: "Reading",
      description: "Science fiction and technical books"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      name: "Photography",
      description: "Street and architectural photography"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      name: "Digital Art",
      description: "Creating minimalist illustrations"
    }
  ];

  return (
    <footer className="bg-soft-wheat py-16 border-t border-navy/10">
      <div className="section-container">
        <div className="space-y-16">
          {/* Experience Section */}
          <div>
            <div className="flex items-center justify-center mb-10">
              <Separator className="w-1/3 h-px bg-navy/20" />
              <h2 className="text-center font-serif text-xl px-4 text-navy">Experience</h2>
              <Separator className="w-1/3 h-px bg-navy/20" />
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center mb-8">
                <Button 
                  variant="outline" 
                  className="bg-white/50 hover:bg-white/80 text-navy border-navy/20 gap-2"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <FileText className="w-4 h-4" />
                  View Full Resume
                </Button>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="bg-white/50 p-4 rounded-lg shadow-sm border border-navy/10 hover:shadow-md transition-all"
                  >
                    <p className="font-serif text-navy text-lg">{exp.role}</p>
                    <p className="text-navy/70">{exp.company}</p>
                    <p className="text-navy/60 text-sm">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div>
            <div className="flex items-center justify-center mb-10">
              <Separator className="w-1/3 h-px bg-navy/20" />
              <h2 className="text-center font-serif text-xl px-4 text-navy">Beyond Code</h2>
              <Separator className="w-1/3 h-px bg-navy/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="bg-white/50 p-6 rounded-lg shadow-sm border border-navy/10 hover:shadow-md transition-all text-center group"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="p-2 bg-[#F2E2BA]/30 rounded-full group-hover:scale-110 transition-transform">
                      {hobby.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-navy mb-1">{hobby.name}</h3>
                  <p className="text-navy/60 text-sm">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-navy/20 mt-16 pt-6 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <p className="text-navy">Made with ❤️ in NYC</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-navy hover:text-green" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-navy hover:text-green" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
