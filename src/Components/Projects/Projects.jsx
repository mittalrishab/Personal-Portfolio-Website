import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Import project images
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
      tags: ["HTML", "CSS", "JavaScript", "Scribbler.Live"],
      demoLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/scribbler-hackathon-project/final_submission_notepad.jsnb", 
      codeLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/scribbler-hackathon-project/final_submission_notepad.jsnb", 
      image: snakegame 
    }, 
    {
      title: "Learning Roadmap Generator",
      description: "Converts syllabus PDFs into interactive learning planners.",
      tags: ["HTML", "CSS", "JavaScript", "PDF.js", "TailwindCSS", "Scribbler.Live"],
      demoLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/summer-scribbler-hackathon/MapItFlow.jsnb", 
      codeLink: "https://app.scribbler.live/?jsnb=github:parthsidpara/summer-scribbler-hackathon/MapItFlow.jsnb", 
      image: roadmapgen,
    }, 
    {
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

  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredTag, setHoveredTag] = useState(null);

  // Get all unique tags
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on active tag
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 } 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tagHover = {
    scale: 1.05,
    backgroundColor: "#0ea5e9",
    transition: { duration: 0.2 }
  };

  return (
    <section 
      id="projects" 
      className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden my-16"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-3xl">
        {/* Animated gradient layers */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Animated gradient waves */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-teal-400/10 to-transparent animate-wave"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-400/10 to-transparent animate-wave-reverse"></div>
        </div>
      </div>

      {/* Content Container with Rounded Borders */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl shadow-slate-950/50 py-16 px-8 sm:px-12 md:px-16">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: 'linear-gradient(90deg, #4ade80, #22d3ee, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            A collection of my recent work showcasing various technologies and problem-solving approaches
          </motion.p>
        </motion.div>

        {/* Tag Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {allTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-800 text-gray-300'
              }`}
              whileHover={tagHover}
              onHoverStart={() => setHoveredTag(tag)}
              onHoverEnd={() => setHoveredTag(null)}
              animate={{
                scale: hoveredTag === tag ? 1.05 : 1,
                backgroundColor: activeFilter === tag 
                  ? '' 
                  : hoveredTag === tag 
                    ? '#0ea5e9' 
                    : '#1e293b'
              }}
              transition={{ duration: 0.2 }}
            >
              {tag === 'all' ? 'All Projects' : tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-800/50 p-10 rounded-2xl max-w-md mx-auto border border-slate-700">
              <h3 className="text-2xl text-teal-300 font-medium mb-3">No Projects Found</h3>
              <p className="text-gray-300 text-lg">
                Try selecting a different filter
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={item}
                  layout
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    damping: 25,
                    duration: 0.5 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <ProjectCard 
                    {...project} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute -z-10 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            backgroundColor: ['#4ade80', '#22d3ee', '#818cf8'][Math.floor(Math.random() * 3)],
            opacity: Math.random() * 0.4 + 0.1
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Add CSS animations for background waves */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wave-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-wave {
          animation: wave 12s ease-in-out infinite;
        }
        .animate-wave-reverse {
          animation: wave-reverse 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;