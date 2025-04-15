
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseItem {
  bullet: string;
  link: string;
}

const Footer: React.FC = () => {
  const courseItems: CourseItem[] = [
    { bullet: "Data Structures & Algorithms", link: "Data Structures" },
    { bullet: "Computer Architecture", link: "Computer Architecture" },
    { bullet: "Web Development", link: "Web Development" },
    { bullet: "Software Engineering", link: "Software Engineering" }
  ];

  return (
    <footer className="bg-wheat py-16 border-t border-navy/10">
      <div className="section-container">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <Separator className="w-1/3 h-px bg-navy/20" />
            <h2 className="text-center font-serif text-xl px-4 text-navy">Relevant Courseworks</h2>
            <Separator className="w-1/3 h-px bg-navy/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-4xl mx-auto">
            {courseItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/50 p-4 rounded-lg shadow-sm border border-navy/10">
                <div className="w-4 h-4 bg-green flex-shrink-0 rounded-full"></div>
                <p className="text-navy flex-grow">{item.bullet}</p>
                <Button 
                  variant="outline" 
                  className="bg-frenchgray hover:bg-frenchgray/80 text-navy border-navy/20"
                >
                  {item.link}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-navy/20 pt-6 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <p className="text-navy">Made with ❤️ in NYC</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-navy hover:text-green" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-navy hover:text-green" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
