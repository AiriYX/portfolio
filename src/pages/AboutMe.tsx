
import React from 'react';
import Navbar from '../components/Navbar';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen peach-gradient-bg">
      <Navbar />
      
      <section className="section-container py-16">
        <h1 className="text-4xl font-serif mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <p>
              I'm Airi, a computer science student at The City College of New York (CCNY) with a passion for creating 
              beautiful, functional web experiences. I believe in the power of technology to make a positive impact 
              on people's lives.
            </p>
            
            <p>
              My journey in computer science began when I took my first programming class in high school, 
              where I discovered my love for problem-solving and creating something out of nothing but code. 
              Since then, I've been on a continuous learning path, expanding my skills in various programming 
              languages and technologies.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new design trends, reading about technology advancements, 
              or working on personal projects that challenge my creative and technical abilities.
            </p>
            
            <h2 className="text-2xl font-serif pt-4 mb-3">Education</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600">The City College of New York (CCNY) | Expected 2026</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif pt-4 mb-3">Contact</h2>
            <p>
              Feel free to reach out if you'd like to collaborate on a project or just want to connect!
            </p>
            <p className="font-medium">Email: airi@example.com</p>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="w-28 h-28 bg-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-serif">
                  A
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-center">Quick Info</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">New York, NY</p>
                </div>
                <div>
                  <h4 className="font-medium">Focus Areas</h4>
                  <p className="text-gray-600">Web Development, UX/UI Design, Software Development</p>
                </div>
                <div>
                  <h4 className="font-medium">Languages</h4>
                  <p className="text-gray-600">JavaScript, TypeScript, Java, C++, HTML, CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="section-container py-6 text-center text-sm text-gray-500">
        <div>© 2025 Airi's Portfolio. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default AboutMe;
