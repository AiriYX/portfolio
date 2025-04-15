
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  reverse = false
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-24`}>
      <div className="md:w-1/2 flex items-center">
        <div>
          <h3 className="text-lg font-mono font-medium mb-2 text-navy">{title}</h3>
          <p className="text-navy/80">{description}</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="aspect-video bg-frenchgray rounded-md overflow-hidden border border-navy/10">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
