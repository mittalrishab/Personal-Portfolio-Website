import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import PropTypes from 'prop-types';

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const ProjectCard = memo(({ 
  title, 
  description, 
  tags, 
  image, 
  demoLink, 
  codeLink 
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px", amount: 0.2 }}
      style={{ willChange: 'transform, opacity' }}
      className="group relative bg-[#0F172A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <img
          loading="lazy"
          width={400}
          height={225}
          src={image}
          alt={title}
          className="w-full h-full object-scale-down md:object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

        <motion.div 
          variants={overlayVariants}
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-[#1E293B]/90 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#465697] text-white rounded-lg hover:bg-[#374785] transition-colors text-sm md:text-base"
              >
                <FiExternalLink className="text-lg" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${title}`}
                className="flex items-center gap-2 px-5 py-2.5 border border-[#465697] text-[#465697] rounded-lg hover:bg-[#465697] hover:text-white transition-colors text-sm md:text-base"
              >
                <FiGithub className="text-lg" aria-hidden="true" />
                Source Code
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2.5 hover:text-[#465697] transition-colors">
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#465697]"
            >
              {title}
            </a>
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs md:text-sm bg-[#465697]/30 rounded-full text-[#A3BFFA] hover:bg-[#465697]/50 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 md:hidden mt-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs bg-[#465697] text-white rounded-lg flex-shrink-0"
            >
              <FiExternalLink className="text-sm" aria-hidden="true" />
              Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs border border-[#465697] text-[#465697] rounded-lg flex-shrink-0"
            >
              <FiGithub className="text-sm" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  codeLink: PropTypes.string
};

ProjectCard.defaultProps = {
  demoLink: null,
  codeLink: null
};

export default ProjectCard;
