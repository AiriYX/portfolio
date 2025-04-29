
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CodeSquare, Coffee, Book, Camera, Palette, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AboutMe: React.FC = () => {
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
    <div className="min-h-screen bg-[#D6D5C9]">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="w-64 h-64 bg-[#D6D5C9] rounded-full flex items-center justify-center text-[#0A2342] text-7xl font-serif relative overflow-hidden group border-2 border-[#0A2342]/20 shadow-lg">
              <span className="relative z-10">A</span>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6D5C9] to-[#0A2342]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="inline-flex items-center gap-2 text-[#0A2342]/70">
              <User className="w-5 h-5" />
              <span>Currently in New York</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A2342] mb-8">
                Hello, I'm Airi
              </h1>
              <p className="text-lg text-[#0A2342]/80 leading-relaxed">
                A computer science student at The City College of New York (CCNY) with a passion for creating 
                beautiful, functional web experiences. I believe in the power of technology to make a positive impact 
                on people's lives.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-[#0A2342]/90 mb-4">What I Do</h2>
              <p className="text-[#0A2342]/80 leading-relaxed">
                My journey in computer science began with my first programming class in high school, 
                where I discovered my love for problem-solving and creating something out of nothing but code. 
                When I'm not coding, you can find me exploring new design trends or working on personal projects.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-[#0A2342]/90 mb-4">Technical Focus</h2>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "React", "Java", "C++", "UI/UX Design"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-[#0A2342]/10 text-[#0A2342]/80 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-serif text-[#0A2342]/90 mb-4">Get in Touch</h2>
              <a 
                href="mailto:airi@example.com" 
                className="inline-flex items-center gap-2 text-[#0A2342] hover:text-[#002500] transition-colors"
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
        
        {/* Hobbies Section */}
        <div className="mt-24">
          <div className="flex items-center justify-center mb-12">
            <Separator className="w-1/4 h-px bg-[#0A2342]/20" />
            <h2 className="text-center font-serif text-2xl px-6 text-[#0A2342]">Beyond Code</h2>
            <Separator className="w-1/4 h-px bg-[#0A2342]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {hobbies.map((hobby, index) => (
              <div 
                key={index}
                className={`card-professional p-6 text-center group ${
                  index % 3 === 0 ? 'float-slow' : index % 3 === 1 ? 'float-medium' : 'float-fast'
                }`}
              >
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-[#0A2342]/10 rounded-full group-hover:scale-110 transition-transform text-[#002500]">
                    {hobby.icon}
                  </div>
                </div>
                <h3 className="font-serif text-[#0A2342] mb-1 font-medium">{hobby.name}</h3>
                <p className="text-[#0A2342]/70 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 text-[#0A2342]/60 text-sm italic">
            "Balancing code with creativity keeps me inspired and energized."
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
