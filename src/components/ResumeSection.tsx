
import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { FileText, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ResumeSection: React.FC = () => {
  const experiences: Job[] = [
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      period: "Summer 2023",
      description: "Developed and maintained web applications using React and TypeScript. Collaborated with senior developers to implement new features and fix bugs."
    },
    {
      title: "Web Development Lead",
      company: "Student Computing Association",
      period: "2022 - Present",
      description: "Lead a team of 5 developers to create and maintain the organization's website. Implemented modern web practices and improved site performance by 40%."
    },
    {
      title: "Teaching Assistant",
      company: "CCNY Computer Science Department",
      period: "Fall 2022",
      description: "Assisted professor with grading assignments and providing guidance to students in Introduction to Programming course."
    }
  ];

  return (
    <section className="pt-16 pb-24 bg-[#D6D5C9]/70">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif mb-4 text-[#0A2342]">Professional Experience</h2>
          <p className="text-[#0A2342]/70 max-w-2xl mx-auto">
            My journey in tech has equipped me with practical experience in software development, 
            problem-solving, and team collaboration.
          </p>
          <div className="mt-6">
            <Button 
              variant="outline" 
              className="bg-white/70 hover:bg-white text-[#0A2342] border-[#0A2342]/20 gap-2 shadow-sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="w-4 h-4" />
              Download Full Resume
            </Button>
          </div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <Card key={index} className={`card-professional overflow-hidden ${index % 2 === 0 ? 'border-l-4' : 'border-r-4'} border-[#002500]`}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#0A2342]">{job.title}</h3>
                    <p className="text-[#0A2342]/80">{job.company}</p>
                  </div>
                  <div className="bg-[#0A2342]/10 px-3 py-1 rounded text-sm">
                    {job.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#0A2342]/70">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Briefcase className="text-[#002500] w-12 h-12 opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
