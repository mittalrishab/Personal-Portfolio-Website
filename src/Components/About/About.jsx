import React from 'react';
import AboutImg from '../../assets/AboutImg.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div
      id="about"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-around bg-black shadow-xl mx-0 lg:mx-20 bg-opacity-30 rounded-lg p-6 md:p-8 lg:p-12"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">Technical Skills</h2>
        <div className="md:flex items-center justify-center gap-6 lg:gap-8">
          <img 
            className="w-full max-w-md md:h-64 lg:h-80 mx-auto mb-6 md:mb-0 rounded-lg shadow-xl" 
            src={AboutImg} 
            alt="Skills" 
          />
          
          <ul className="space-y-4 md:space-y-6 w-full max-w-2xl">
            {[
              { 
                title: 'Frontend', 
                skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Redux', 'TypeScript', 'Tailwind CSS', 'Next.js']
              },
              { 
                title: 'Backend', 
                skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'JWT', 'WebSockets', 'Redis']
              },
              { 
                title: 'Data Structures', 
                skills: ['Arrays & Hashing', 'Trees & Graphs', 'Linked Lists', 'Stacks & Queues', 'Heaps', 'Trie', 'Dynamic Programming', 'Sorting Algorithms']
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 md:gap-4 group">
                <IoArrowForward 
                  size={24} 
                  className="mt-1 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" 
                />
                <div className="max-w-full">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1 md:mb-2 text-purple-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-sm lg:text-base leading-relaxed">
                    {item.skills.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;