import React from 'react';
import bannerImg from '../../assets/bannerImg.png';
import bmiImg from "../../assets/bmiImg.png";
import ToDoApp from "../../assets/ToDoApp.png"

const Projects = () => {
  const projects = [
    {
      title: "BMI Calculator",
      description: "A simple BMI calculator built with React to determine Body Mass Index based on user input.",
      tags: ["React"],
      demoLink: "https://mittalrishab.github.io/bmi_calculator/", // Replace with actual demo link
      codeLink: "https://github.com/mittalrishab/bmi_calculator", // Replace with actual GitHub repo link
      image: bmiImg, // Ensure bmiImg is correctly imported or defined
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
      title: "AI-Powered Blog Platform",
      description: "Full-stack blogging platform with AI content suggestions",
      tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
      demoLink: "#",
      codeLink: "#",
      image: bannerImg,
    },
    {
      title: "AI-Powered Blog Platform",
      description: "Full-stack blogging platform with AI content suggestions",
      tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
      demoLink: "#",
      codeLink: "#",
      image: bannerImg,
    },
    // Add other projects
  ];

  return (
    <section id="projects" className="py-10 px-6 md:px-12 lg:px-24 bg-[#171d32]">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#0c0e19] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e19] via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-[#465697]/20 rounded-full text-[#465697]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demoLink} target='_blank'
                  className="flex-1 text-center py-2 px-4 rounded-lg bg-[#465697] hover:bg-[#3a487e] transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink} target='_blank'
                  className="flex-1 text-center py-2 px-4 rounded-lg border border-[#465697] hover:bg-[#465697]/20 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
