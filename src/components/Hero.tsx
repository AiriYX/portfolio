
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
          <h1 className="text-5xl font-serif font-medium mb-6 text-navy">
            Hello, I'm Airi. A Current Student At CCNY
          </h1>
          <div className="space-y-4 text-navy/90">
            <p>
              I am a computer science major with a strong passion for software
              development and technology. Currently, I'm focused on learning front-
              end web development, with experience in Java and C++.
            </p>
            <p>
              My core skillsets include React, HTML, CSS, JavaScript, command line,
              and Git, which I utilize to build responsive and engaging web
              applications.
            </p>
          </div>
          <div className="mt-10">
            <Link 
              to="/about" 
              className="bg-navy hover:bg-navy/80 text-wheat font-sans px-8 py-3 rounded-md transition-colors transform hover:scale-105 duration-300"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
