
import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

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
  const hasScrolledPastThreshold = useScrollPosition();

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 bg-white/30 rounded-2xl p-8 backdrop-blur-sm border border-navy/10 ${hasScrolledPastThreshold ? 'shadow-lg -translate-y-2' : ''} transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}>
      <div className="md:w-1/2 flex items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-medium text-navy">{title}</h3>
          <p className="text-navy/80 leading-relaxed">{description}</p>
          <button className="portfolio-pill">
            View Project
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="aspect-video bg-frenchgray rounded-xl overflow-hidden border border-navy/10 shadow-md hover:shadow-xl transition-all duration-300">
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
