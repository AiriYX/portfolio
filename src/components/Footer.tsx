
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Github } from 'lucide-react';

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
    <footer className="bg-white py-16">
      <div className="section-container">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <Separator className="w-1/3 h-px bg-gray-300" />
            <h2 className="text-center font-serif text-xl px-4">Relevant Courseworks</h2>
            <Separator className="w-1/3 h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-4xl mx-auto">
            {courseItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-600 flex-shrink-0"></div>
                <p className="text-gray-700">{item.bullet}</p>
                <div className="flex-grow"></div>
                <button className="bg-peach-300 hover:bg-peach-400 px-6 py-2 rounded-full text-gray-700 transition-colors">
                  {item.link}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <p className="text-gray-600">Made with ❤️ in NYC</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-portfolio-button transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-600 hover:text-portfolio-button transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
