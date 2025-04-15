
import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "PaintOn- An interactive author's tool",
      description: "An interactive application designed to streamline the authoring process with intuitive tools and features to enhance creativity and productivity.",
      imageUrl: "/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png",
      technologies: ["React", "TypeScript", "Canvas API"]
    },
    {
      id: 2,
      title: "Personal Blog Platform",
      description: "A full-featured blogging platform with a clean UI, markdown support, and user authentication system.",
      imageUrl: "/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A responsive weather application that provides real-time forecasts and visualization of weather data.",
      imageUrl: "/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png", 
      technologies: ["JavaScript", "Weather API", "CSS3"]
    },
    {
      id: 4,
      title: "E-commerce Product Page",
      description: "A fully responsive product page with interactive elements, cart functionality, and product image gallery.",
      imageUrl: "/lovable-uploads/c035af35-ca2c-499e-bbe9-8d5d24d2fdc7.png",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <div className="min-h-screen wheat-gradient-bg">
      <Navbar />
      
      <section className="section-container py-16">
        <h1 className="text-4xl font-serif mb-8 text-navy">My Projects</h1>
        <p className="text-navy/80 mb-12">Here's a collection of my recent work, showcasing my skills in web development and design.</p>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="border-b border-navy/10 pb-16 last:border-0">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                reverse={index % 2 === 1}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-white px-3 py-1 rounded-full text-sm text-navy border border-navy/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
