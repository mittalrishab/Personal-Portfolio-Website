import React from 'react';
import bannerImg from '../../assets/bannerImg.png';
import bmiImg from "../../assets/bmiImg.png";
import ToDoApp from "../../assets/ToDoApp.png"
import utilityWebSuite from "../../assets/utilityWebSuite.png"
import roadmapgen from "../../assets/roadmapgen.png"
import snakegame from "../../assets/snakegame.jpg"

// Add these styles in your global CSS (e.g., index.css or App.css)
/*
@keyframes float1 {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.08); }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(40px) scale(1.13); }
}
@keyframes float3 {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(0.95); }
}
.animated-bg-1 {
  animation: float1 7s ease-in-out infinite;
}
.animated-bg-2 {
  animation: float2 10s ease-in-out infinite;
}
.animated-bg-3 {
  animation: float3 8s ease-in-out infinite;
}
*/

const Projects = () => {
  const projects = [
    {
      title: "Gesture & Voice Controlled Snake Game",
      description: "A classic Snake game reimagined with voice commands and hand gesture controls using JavaScript.",
      tags: ["HTML", "CSS", "JavaScript","Scribbler.Live"],
      demoLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/scribbler-hackathon-project/final_submission_notepad.jsnb", 
      codeLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/scribbler-hackathon-project/final_submission_notepad.jsnb", 
      image: snakegame 
    }, {
      title: "Learning Roadmap Generator",
      description: "Converts syllabus PDFs into interactive learning planners.",
      tags: ["HTML", "CSS", "JavaScript", "PDF.js", "TailwindCSS","Scribbler.Live"],
      demoLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/summer-scribbler-hackathon/MapItFlow.jsnb", 
      codeLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/summer-scribbler-hackathon/MapItFlow.jsnb", 
      image: roadmapgen,
    }, {
      title: "BMI Calculator",
      description: "A simple BMI calculator built with React to determine Body Mass Index based on user input.",
      tags: ["React"],
      demoLink: "https://mittalrishab.github.io/bmi_calculator/", 
      codeLink: "https://github.com/mittalrishab/bmi_calculator", 
      image: bmiImg,
    },
    {
      title: "To Do App",
      description: "A simple and responsive to-do list app built with HTML, CSS, and JavaScript for your daily tasks.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://rishabhtodoapp.netlify.app/",
      codeLink: "https://github.com/mittalrishab/todolist-html-css-js-",
      image: ToDoApp,
    },
    {
      title: "Utility Web Suite",
      description: "A compact site combining a calculator, clock, stopwatch, weather app, and quote generator in one place.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://basicappshtmlcssjs.netlify.app/",
      codeLink: "https://github.com/mittalrishab/basic_app",
      image: utilityWebSuite,
    }
  ];

  return (
    <section id="projects" className="relative py-10 px-6 md:px-12 lg:px-24 bg-[#171d32] overflow-hidden">

      {/* Animated Background Circles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="animated-bg-1 absolute top-10 left-10 w-56 h-56 bg-teal-400 opacity-20 rounded-full blur-2xl"
        ></div>
        <div
          className="animated-bg-2 absolute bottom-20 right-16 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl"
        ></div>
        <div
          className="animated-bg-3 absolute top-1/2 left-1/3 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-2xl"
        ></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#0c0e19] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-teal-500/20"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e19] via-transparent to-transparent" />
              
              {/* Floating tags animation */}
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-[#465697]/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 transition-colors group-hover:text-gray-200 duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#465697]/20 rounded-full text-[#465697] transition-all duration-300 hover:bg-[#465697]/40 hover:text-white hover:-translate-y-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demoLink} 
                  target='_blank'
                  className="flex-1 text-center py-2 px-4 rounded-lg bg-[#465697] hover:bg-[#3a487e] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group/demo"
                >
                  Live Demo
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transition-transform group-hover/demo:translate-x-1"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={project.codeLink} 
                  target='_blank'
                  className="flex-1 text-center py-2 px-4 rounded-lg border border-[#465697] hover:bg-[#465697]/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group/code"
                >
                  Source Code
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transition-transform group-hover/code:translate-x-1"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl blur-sm"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
