import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import PropTypes from 'prop-types';

// Animation variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    scale: 0.95,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 25px 50px rgba(70, 86, 151, 0.4)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "backOut" }
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(70, 86, 151, 0.7)",
    color: "#ffffff",
    transition: { duration: 0.25 }
  }
};

const buttonVariants = {
  hover: {
    y: -4,
    backgroundColor: "#2c3e8f",
    boxShadow: "0 6px 15px rgba(70, 86, 151, 0.6)",
    transition: { type: "spring", stiffness: 400, damping: 15 }
  },
  tap: { scale: 0.95 }
};

const ProjectCard = memo(({ title, description, tags, image, demoLink, codeLink }) => {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x225?text=Project+Image";
    e.target.className = "w-full h-full object-contain bg-gray-800 p-4";
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.3 }}
      className="group relative bg-gradient-to-br from-[#0F172A] to-[#0a0f1d] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col h-full border border-[#1e293b] hover:border-[#465697]/60 transition-all duration-300"
    >
      {/* Glowing Background Effect */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#465697]/40 via-teal-500/40 to-[#465697]/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card Header Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#465697] via-teal-500 to-[#465697]" />

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden flex-shrink-0 rounded-t-xl">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-[#0a0f1d]"
        >
          <img
            loading="lazy"
            width={400}
            height={225}
            src={image}
            alt={title}
            className="w-full h-full object-contain md:object-cover transition-all duration-300"
            onError={handleImageError}
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>
      
      {/* Content Section */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <motion.h3
            className="text-xl font-extrabold text-white mb-3 tracking-wide"
            whileHover={{ color: '#93c5fd' }}
            transition={{ duration: 0.25 }}
          >
            <a
              href={demoLink || codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#465697] inline-block relative pb-1"
            >
              {title}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#93c5fd]"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </a>
          </motion.h3>
          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 line-clamp-4"
            whileHover={{ color: '#e2e8f0' }}
            transition={{ duration: 0.25 }}
          >
            {description}
          </motion.p>
          <div className="flex flex-wrap gap-3 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-4 py-1.5 text-xs md:text-sm bg-[#1e293b] text-[#93c5fd] rounded-full cursor-default font-semibold"
                variants={tagVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.07 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Buttons at the bottom */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#465697] text-white rounded-lg text-base font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FiExternalLink className="text-xl" aria-hidden="true" />
              Live Demo
            </motion.a>
          )}
          {codeLink && (
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/30 text-base font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FiGithub className="text-xl" aria-hidden="true" />
              Source Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Subtle Hover Glow Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#465697]/20 via-teal-500/20 to-[#465697]/20 rounded-xl blur-2xl" />
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
