
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-24">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 -z-10 bg-soft-wheat opacity-70"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(1.2)'
        }}
      />
      <div className="section-container relative z-10">
        <div className="max-w-2xl backdrop-blur-sm bg-white/30 p-8 rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16 border-2 border-navy">
              <AvatarFallback className="bg-navy text-wheat text-xl">A</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-5xl font-serif font-medium mb-1 text-navy">
                Hello, I'm Airi
              </h1>
              <p className="text-navy/80 italic">Computer Science Student at CCNY</p>
            </div>
          </div>
          
          <div className="space-y-4 text-navy/90">
            <p>
              I am a computer science major with a strong passion for software
              development and technology. I'm currently focusing on front-end web 
              development, and I also have experience in Java and C++.
            </p>
            <p>
              My core tools include React, JavaScript, HTML/CSS, Git, and the command 
              line — which I use to build responsive and user-friendly web applications.
            </p>
            <p className="italic text-navy/70 text-sm">
              "Always learning, occasionally debugging with iced coffee in hand ☕"
            </p>
          </div>
          <div className="mt-10">
            <Link 
              to="/about" 
              className="bg-navy hover:bg-navy/80 text-wheat font-sans px-8 py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-md duration-300 flex items-center gap-2 w-fit"
            >
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
