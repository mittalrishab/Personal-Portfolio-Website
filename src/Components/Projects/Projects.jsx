import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust path if needed
import bmiImg from "../../assets/bmiImg.png";
import ToDoApp from "../../assets/ToDoApp.png";
import utilityWebSuite from "../../assets/utilityWebSuite.png";
import roadmapgen from "../../assets/roadmapgen.png";
import snakegame from "../../assets/snakegame.jpg";
import minesweeper from "../../assets/minesweeper.png";
import tictactoe from "../../assets/tictactoe.png";

const Projects = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe Game",
      description: "A classic two-player strategy game where players take turns marking X or O in a 3×3 grid to get three in a row.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://tictactoe-rishabh.netlify.app/", 
      codeLink: "https://github.com/mittalrishab/tic-tac-toe", 
      image: tictactoe 
    },
    {
      title: "MineSweeper Game",
      description: "A classic puzzle game where players uncover cells and avoid hidden mines using logic and numbers.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://minesweeper-rishabh.netlify.app/", 
      codeLink: "https://github.com/mittalrishab/Minesweeper-Game", 
      image: minesweeper 
    },
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
    <section id="projects" className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#171d32] overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="animated-bg-1 absolute top-10 left-10 w-56 h-56 bg-teal-400 opacity-20 rounded-full blur-2xl"></div>
        <div className="animated-bg-2 absolute bottom-20 right-16 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
        <div className="animated-bg-3 absolute top-1/2 left-1/3 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-2xl"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 md:mb-16 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
