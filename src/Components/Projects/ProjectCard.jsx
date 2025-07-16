import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import PropTypes from 'prop-types';

// Updated animation variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    scale: 0.95,
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
    y: -10,
    boxShadow: "0 25px 50px rgba(56, 189, 248, 0.2)",
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 15,
      duration: 0.3 
    }
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
    backgroundColor: "#0ea5e9",
    color: "#ffffff",
    transition: { duration: 0.2 }
  }
};

const buttonVariants = {
  hover: {
    y: -4,
    backgroundColor: "#0891b2",
    boxShadow: "0 6px 15px rgba(8, 145, 178, 0.3)",
    transition: { type: "spring", stiffness: 400, damping: 15 }
  },
  tap: { scale: 0.95 }
};

const ProjectCard = memo(({ title, description, tags, image, demoLink, codeLink }) => {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x225?text=Project+Image";
    e.target.className = "w-full h-full object-contain bg-slate-800 p-4";
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.3 }}
      className="group relative bg-slate-800/50 rounded-2xl overflow-hidden flex flex-col h-full border border-slate-700 hover:border-teal-400/30 transition-all duration-300"
    >
      {/* Glowing Background Effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-slate-900"
        >
          <img
            loading="lazy"
            width={400}
            height={225}
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300"
            onError={handleImageError}
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <motion.h3
            className="text-xl font-bold text-white mb-3"
            whileHover={{ color: '#7dd3fc' }}
            transition={{ duration: 0.25 }}
          >
            <a
              href={demoLink || codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 inline-block relative pb-1"
            >
              {title}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </a>
          </motion.h3>
          <motion.p
            className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3"
            whileHover={{ color: '#e2e8f0' }}
            transition={{ duration: 0.25 }}
          >
            {description}
          </motion.p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-slate-700 text-teal-300 text-xs rounded-full cursor-default"
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
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-500 text-white rounded-lg text-sm font-medium w-full shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FiExternalLink className="text-md" aria-hidden="true" />
              Live Demo
            </motion.a>
          )}
          {codeLink && (
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title}`}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 text-sm font-medium w-full shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FiGithub className="text-md" aria-hidden="true" />
              Source Code
            </motion.a>
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