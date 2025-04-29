
import React from 'react';
import { CircleCheck } from 'lucide-react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="section-container pt-16 pb-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-[#0A2342] text-center">Technical Skills</h2>
        <div className="card-professional p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg ${index % 3 === 0 ? 'float-slow' : index % 3 === 1 ? 'float-medium' : 'float-fast'}`}
              >
                <CircleCheck size={20} className="text-[#002500]" />
                <span className="text-[#0A2342] font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
