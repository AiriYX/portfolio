
import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="section-container pt-16 pb-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-navy text-center">Technical Skills</h2>
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-navy/10">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="portfolio-pill transform hover:scale-105 transition-all duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
