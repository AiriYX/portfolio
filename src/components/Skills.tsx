
import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="section-container pt-10 pb-20">
      <h2 className="text-3xl font-serif mb-6 text-navy">Skills</h2>
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="portfolio-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
