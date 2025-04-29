
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Github, FileText } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-[#D6D5C9] py-16 border-t border-[#0A2342]/10">
      <div className="section-container">
        {/* Minimal footer for home page */}
        {isHomePage && (
          <div className="flex flex-col items-center">
            <p className="text-[#0A2342]/80 mb-4">Made with ❤️ in NYC</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-[#0A2342] hover:text-[#002500]" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-[#0A2342] hover:text-[#002500]" />
              </a>
            </div>
          </div>
        )}
        
        {/* Footer for other pages (experience section remains) */}
        {!isHomePage && (
          <div className="space-y-16">
            {/* Experience Section */}
            <div>
              <div className="flex items-center justify-center mb-10">
                <Separator className="w-1/3 h-px bg-[#0A2342]/20" />
                <h2 className="text-center font-serif text-xl px-4 text-[#0A2342]">Experience</h2>
                <Separator className="w-1/3 h-px bg-[#0A2342]/20" />
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-8">
                  <button 
                    className="bg-white/50 hover:bg-white/80 text-[#0A2342] border border-[#0A2342]/20 px-4 py-2 rounded gap-2 flex items-center"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <FileText className="w-4 h-4" />
                    View Full Resume
                  </button>
                </div>

                <div className="space-y-4">
                  {[
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
                  ].map((exp, index) => (
                    <div 
                      key={index} 
                      className="bg-white/50 p-4 rounded-lg shadow-sm border border-[#0A2342]/10 hover:shadow-md transition-all"
                    >
                      <p className="font-serif text-[#0A2342] text-lg">{exp.role}</p>
                      <p className="text-[#0A2342]/70">{exp.company}</p>
                      <p className="text-[#0A2342]/60 text-sm">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#0A2342]/20 mt-16 pt-6 flex flex-col items-center">
              <div className="flex items-center mb-4">
                <p className="text-[#0A2342]/80">Made with ❤️ in NYC</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-[#0A2342] hover:text-[#002500]" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-[#0A2342] hover:text-[#002500]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
