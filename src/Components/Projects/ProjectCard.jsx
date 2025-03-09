import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ title, description, tags, image, demoLink, codeLink }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-[#0F172A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1E293B]/90 backdrop-blur-sm">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#465697] text-white rounded-lg hover:bg-[#374785] transition-colors text-sm md:text-base"
            >
              <FiExternalLink className="text-lg text-white" />
              Live Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#465697] text-[#465697] rounded-lg hover:bg-[#465697] hover:text-white transition-colors text-sm md:text-base"
            >
              <FiGithub className="text-lg text-white" />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2.5 hover:text-[#465697] transition-colors">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
            {title}
          </a>
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-sm bg-[#465697]/30 rounded-full text-[#A3BFFA] hover:bg-[#465697]/50 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Mobile Links */}
        <div className="flex gap-3 md:hidden">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs bg-[#465697] text-white rounded-lg"
            >
              <FiExternalLink className="text-sm" />
              Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs border border-[#465697] text-[#465697] rounded-lg"
            >
              <FiGithub className="text-sm" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;