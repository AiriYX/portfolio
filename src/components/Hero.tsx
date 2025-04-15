
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="section-container pt-20 pb-24">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-serif font-medium mb-6 text-navy">
          Hello, I'm Airi. A Current Student At CCNY
        </h1>
        <div className="space-y-4 text-navy/80">
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
            className="bg-navy hover:bg-navy/80 text-wheat font-sans px-8 py-3 rounded-md transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
